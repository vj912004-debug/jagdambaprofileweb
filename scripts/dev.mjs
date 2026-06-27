import { spawn, execSync } from "node:child_process";
import { readFileSync, unlinkSync, existsSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const projectDir = process.cwd();
const lockPath = join(projectDir, ".next", "dev", "lock");
const port = Number(process.env.PORT ?? 3000);

function isProcessRunning(pid) {
  try {
    if (process.platform === "win32") {
      const output = execSync(`tasklist /FI "PID eq ${pid}" /NH`, {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      });
      return output.includes(String(pid));
    }

    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function killProcess(pid) {
  try {
    if (process.platform === "win32") {
      execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" });
    } else {
      process.kill(pid, "SIGTERM");
    }
    return true;
  } catch {
    return false;
  }
}

function killPort(targetPort) {
  try {
    if (process.platform === "win32") {
      const output = execSync("netstat -ano", { encoding: "utf8" });
      const pids = new Set();

      for (const line of output.split("\n")) {
        if (!line.includes("LISTENING")) continue;
        const match = line.match(new RegExp(`:${targetPort}\\s`));
        if (!match) continue;

        const parts = line.trim().split(/\s+/);
        const pid = parts.at(-1);
        if (pid && pid !== "0") pids.add(pid);
      }

      for (const pid of pids) {
        killProcess(Number(pid));
      }
      return;
    }

    execSync(`lsof -ti:${targetPort} | xargs kill -9`, { stdio: "ignore" });
  } catch {
    // Port is free or nothing to kill.
  }
}

function cleanStaleDevServer() {
  if (existsSync(lockPath)) {
    try {
      const info = JSON.parse(readFileSync(lockPath, "utf8"));
      if (info.pid && isProcessRunning(info.pid)) {
        console.log(`Stopping existing dev server (PID ${info.pid})...`);
        killProcess(info.pid);
      }
    } catch {
      // Ignore invalid lockfile content.
    }

    try {
      unlinkSync(lockPath);
    } catch {
      // Ignore if the lockfile was already removed.
    }
  }

  killPort(port);
}

cleanStaleDevServer();

if (process.argv.includes("--stop-only")) {
  console.log("Dev server stopped.");
  process.exit(0);
}

const nextBin = require.resolve("next/dist/bin/next");
const child = spawn(
  process.execPath,
  [nextBin, "dev", ...process.argv.slice(2)],
  {
    stdio: "inherit",
    cwd: projectDir,
    env: process.env,
  }
);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
