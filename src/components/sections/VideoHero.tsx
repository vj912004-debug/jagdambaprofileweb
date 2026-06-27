"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HeroBackground } from "@/components/animations/HeroBackground";
import { heroStats } from "@/lib/data";

const HEADLINE = [
  { text: "STRENGTH.", accent: false },
  { text: "QUALITY.", accent: true },
  { text: "TRUST.", accent: false },
] as const;

export function VideoHero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.55], [1, 1.08]);
  const y = useTransform(scrollYProgress, [0, 0.55], [0, 64]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative grid h-dvh grid-rows-[1fr_auto] overflow-hidden bg-navy"
    >
      <motion.div style={{ scale, y: bgY }} className="absolute inset-0">
        <HeroBackground />
      </motion.div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 flex min-h-0 items-center px-4 pt-24 pb-6 sm:px-6 sm:pt-28 sm:pb-8 lg:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-orange backdrop-blur-sm sm:mb-4 sm:px-4 sm:text-xs sm:tracking-[0.2em]"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-2 shrink-0 rounded-full bg-orange"
              />
              <span className="truncate">Shree Jagdamba Steel Profile</span>
            </motion.div>

            <h1 className="text-[clamp(2rem,7vw,4.25rem)] font-black leading-[1.05] tracking-tight text-white">
              {HEADLINE.map((line, i) => (
                <motion.span
                  key={line.text}
                  initial={{ opacity: 0, y: 32, rotateX: -40 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.35 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`block ${line.accent ? "text-orange" : ""}`}
                  style={{ transformPerspective: 800 }}
                >
                  {line.text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:mt-6 sm:text-base md:text-lg"
            >
              MS & SS plate stocking, 12 kW fiber laser cutting, CNC profile
              cutting & pan-India delivery — precision steel from drawing to
              dispatch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/40 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
                >
                  Get a Quote
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/services"
                  className="flex w-full items-center justify-center rounded-xl border-2 border-white/30 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm hover:border-orange hover:bg-white/10 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
                >
                  Our Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <Link
          href="/about"
          className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-white/50 hover:text-white lg:block"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <ChevronDown className="h-7 w-7 sm:h-8 sm:w-8" />
          </motion.span>
        </Link>
      </motion.div>

      <div className="relative z-30 border-t border-white/15 bg-navy/95 shadow-[0_-8px_32px_rgba(0,0,0,0.35)] backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/10 sm:grid-cols-4 sm:divide-y-0">
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.08 }}
              className="px-3 py-4 text-center sm:px-4 sm:py-5"
            >
              <p className="text-lg font-black leading-tight text-orange sm:text-2xl lg:text-3xl">
                {stat.prefix}
                {stat.value}
                {stat.suffix ? (
                  <span className="ml-1 text-xs font-bold text-white sm:text-sm">
                    {stat.suffix}
                  </span>
                ) : null}
              </p>
              <p className="mt-1.5 text-xs font-bold leading-snug text-white sm:mt-2 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
