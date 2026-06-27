"use client";

import { motion } from "framer-motion";
import {
  FileText,
  PenTool,
  LayoutGrid,
  Cpu,
  Scissors,
  Search,
  Truck,
} from "lucide-react";

const steps = [
  { icon: FileText, label: "Drawing" },
  { icon: PenTool, label: "Development" },
  { icon: LayoutGrid, label: "Nesting" },
  { icon: Cpu, label: "Programming" },
  { icon: Scissors, label: "Cutting" },
  { icon: Search, label: "Inspection" },
  { icon: Truck, label: "Dispatch" },
];

export function ProcessFlow({ className }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-slate-50 p-6 ${className ?? ""}`}>
      <p className="mb-6 text-center text-sm font-black uppercase tracking-wider text-navy">
        Drawing to Dispatch — Complete Process
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-0">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-4 shadow-sm sm:px-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-orange">
                <step.icon className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-bold uppercase text-slate-600">
                {step.label}
              </span>
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.05 }}
                className="hidden h-0.5 w-6 origin-left bg-orange sm:block sm:w-8"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
