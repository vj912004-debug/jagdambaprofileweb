"use client";

import { motion } from "framer-motion";

export function SteelCuttingScene({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const h = compact ? "h-48" : "h-72 sm:h-96";

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-linear-to-br from-slate-800 via-slate-900 to-navy ${h} ${className ?? ""}`}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />
      <div className="absolute bottom-[30%] left-4 right-4 h-24 rounded-sm bg-linear-to-b from-slate-500 to-slate-700 shadow-inner sm:left-8 sm:right-8" />

      <motion.div
        className="absolute bottom-[42%] h-1 w-16 rounded-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #F37021, #FFD700, #F37021, transparent)",
          boxShadow: "0 0 20px #F37021, 0 0 40px #F37021",
        }}
        animate={{ left: ["8%", "75%", "8%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute bottom-[42%] h-1 w-1 rounded-full bg-orange-400"
          animate={{
            left: ["20%", "80%", "20%"],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            y: [0, -20 - i * 8, -40 - i * 12],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeOut",
          }}
          style={{ filter: "blur(1px)" }}
        />
      ))}

      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-orange">
            Live Process
          </p>
          <p className="text-sm font-black text-white sm:text-base">
            CNC / Laser Cutting
          </p>
        </div>
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex items-center gap-1.5 rounded-full bg-red-500/20 px-3 py-1 text-[10px] font-bold text-red-400"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
          CUTTING
        </motion.div>
      </div>
    </div>
  );
}
