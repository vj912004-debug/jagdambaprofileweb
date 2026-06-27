import { spawnSync } from "node:child_process";
import { existsSync, unlinkSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const videosDir = path.join(root, "public", "videos");
const ffmpeg = ffmpegInstaller.path;
const output = path.join(videosDir, "hero-ai-steel.mp4");
const segmentDuration = 6;
const fps = 30;
const frames = ["frame-1.png", "frame-2.png", "frame-3.png"].map((name) =>
  path.join(videosDir, name),
);

for (const frame of frames) {
  if (!existsSync(frame)) {
    console.error(`Missing frame: ${frame}`);
    process.exit(1);
  }
}

if (existsSync(output)) unlinkSync(output);

const zoomFrames = segmentDuration * fps;
const fade = 0.6;

const segment = (index) =>
  `[${index}:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,zoompan=z='min(zoom+0.0008,1.1)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=${zoomFrames}:s=1920x1080:fps=${fps},fade=t=in:st=0:d=${fade},fade=t=out:st=${segmentDuration - fade}:d=${fade}[v${index}]`;

const filter = [
  segment(0),
  segment(1),
  segment(2),
  "[v0][v1][v2]concat=n=3:v=1:a=0,format=yuv420p[vout]",
].join(";");

const args = [
  "-y",
  ...frames.flatMap((frame) => [
    "-loop",
    "1",
    "-framerate",
    String(fps),
    "-t",
    String(segmentDuration),
    "-i",
    frame,
  ]),
  "-filter_complex",
  filter,
  "-map",
  "[vout]",
  "-c:v",
  "libx264",
  "-pix_fmt",
  "yuv420p",
  "-movflags",
  "+faststart",
  "-t",
  String(segmentDuration * frames.length),
  output,
];

console.log("Generating AI hero video...");
const result = spawnSync(ffmpeg, args, { stdio: "inherit" });

if (result.status !== 0) {
  console.error("ffmpeg failed");
  process.exit(result.status ?? 1);
}

console.log(`Created ${output}`);
