"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { materialGrades } from "@/lib/data";

export function MaterialGrades() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark="MATERIAL GRADES"
          accent="& STOCK AVAILABILITY"
          subtitle="Multiple grades and standards — ready stock availability across thickness ranges from 1 mm to 300 mm."
          align="center"
        />

        <FadeIn className="mt-10 space-y-4 md:hidden">
          {materialGrades.map((row, i) => (
            <motion.div
              key={row.grade}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="font-bold text-navy">{row.grade}</p>
                <span className="inline-flex shrink-0 items-center gap-1 text-[10px] font-bold text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  IN STOCK
                </span>
              </div>
              <dl className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-600">
                <div>
                  <dt className="font-semibold text-slate-500">Standard</dt>
                  <dd>{row.standard}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-500">Type</dt>
                  <dd>{row.type}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-500">Thickness</dt>
                  <dd>{row.thickness} mm</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-500">Max Width</dt>
                  <dd>{row.width} mm</dd>
                </div>
              </dl>
            </motion.div>
          ))}
        </FadeIn>

        <FadeIn className="mt-10 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg md:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-4 py-4 font-bold uppercase tracking-wider">
                    Material Grade
                  </th>
                  <th className="px-4 py-4 font-bold uppercase tracking-wider">
                    Standard
                  </th>
                  <th className="px-4 py-4 font-bold uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-4 py-4 font-bold uppercase tracking-wider">
                    Thickness (mm)
                  </th>
                  <th className="px-4 py-4 font-bold uppercase tracking-wider">
                    Max Width (mm)
                  </th>
                  <th className="px-4 py-4 font-bold uppercase tracking-wider">
                    Stock
                  </th>
                </tr>
              </thead>
              <tbody>
                {materialGrades.map((row, i) => (
                  <motion.tr
                    key={row.grade}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`border-b border-slate-100 transition hover:bg-orange-50/50 ${
                      i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                    }`}
                  >
                    <td className="px-4 py-3 font-semibold text-navy">
                      {row.grade}
                    </td>
                    <td className="px-4 py-3 text-slate-600">{row.standard}</td>
                    <td className="px-4 py-3 text-slate-600">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600">{row.thickness}</td>
                    <td className="px-4 py-3 text-slate-600">{row.width}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-1.5 font-bold text-emerald-600">
                        <CheckCircle2 className="h-4 w-4" />
                        READY STOCK
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        <FadeIn className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Cutting Ready Plates",
            "Custom Size Plates",
            "Project Based Supply",
            "Just In Time Delivery",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-700"
            >
              <CheckCircle2 className="h-5 w-5 text-orange" />
              {item}
            </div>
          ))}
        </FadeIn>

        <FadeIn className="mt-8 rounded-2xl bg-navy p-6 text-center sm:p-8">
          <p className="text-lg font-black text-white sm:text-xl">
            LARGE STOCK. MULTIPLE GRADES.{" "}
            <span className="text-orange">READY TO DELIVER.</span>
          </p>
          <p className="mt-2 text-2xl font-black text-orange">
            2000 – 3000 TON READY STOCK
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
