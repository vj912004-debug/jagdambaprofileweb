"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "@/lib/images";

const HERO_FRAMES = [
  { src: IMAGES.heroPoster, alt: "Fiber laser cutting steel with sparks" },
  { src: IMAGES.laserCutting, alt: "Precision laser cutting operation" },
  { src: IMAGES.stockYard, alt: "Steel stock yard at Jagdamba facility" },
] as const;

export function CinematicHeroBackground({
  visible,
}: {
  visible: boolean;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % HERO_FRAMES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={HERO_FRAMES[index].src}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={HERO_FRAMES[index].src}
            alt={HERO_FRAMES[index].alt}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-linear-to-br from-navy/70 via-navy/40 to-navy/80" />
    </div>
  );
}
