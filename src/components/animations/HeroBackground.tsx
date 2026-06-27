"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HERO_BACKGROUND_VIDEOS, HERO_VIDEO_POSTER } from "@/lib/images";

export function HeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [sourceIndex, setSourceIndex] = useState(0);
  const [ready, setReady] = useState(false);

  const src = HERO_BACKGROUND_VIDEOS[sourceIndex];

  const handleCanPlay = useCallback(() => setReady(true), []);

  const handleError = useCallback(() => {
    setReady(false);
    setSourceIndex((current) =>
      current < HERO_BACKGROUND_VIDEOS.length - 1 ? current + 1 : current,
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-navy">
      {!ready && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_VIDEO_POSTER})` }}
          aria-hidden
        />
      )}

      <motion.div
        className="absolute inset-0"
        animate={{ scale: ready ? [1, 1.06, 1] : 1 }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <video
          ref={videoRef}
          key={src}
          src={src}
          poster={HERO_VIDEO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={handleCanPlay}
          onError={handleError}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-navy/92 via-navy/55 to-navy/30" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy via-transparent to-navy/40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(243,112,33,0.08),transparent_60%)]" />
    </div>
  );
}
