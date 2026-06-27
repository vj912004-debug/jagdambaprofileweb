"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SteelCuttingScene } from "@/components/animations/SteelCuttingScene";
import { infrastructureStats } from "@/lib/data";
import { sectionClass } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const highlights = [
  "92,000 sq. ft. facility with spacious open stock yard",
  "26,000 sq. ft. covered shed for protected plate storage",
  "Heavy-duty gantry cranes for safe plate handling",
  "Integrated CNC & laser cutting bays on-site",
  "Clean, organized yard built for precision and dispatch",
];

const gallery = [
  { src: IMAGES.stockYard, label: "Well Maintained Stock Yard" },
  { src: IMAGES.factoryInterior, label: "Advanced Machinery & Technology" },
  { src: IMAGES.laserCutting, label: "Precise Cutting Operations" },
  { src: IMAGES.overheadCrane, label: "Safe, Clean & Efficient Work Environment" },
];

export function Infrastructure({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section className={sectionClass(hideHeading, "bg-slate-50")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={IMAGES.stockYard}
                alt="Factory infrastructure"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

          <div>
            {!hideHeading && (
              <SectionHeading
                dark="OUR"
                accent="INFRASTRUCTURE"
                subtitle="State-of-the-art infrastructure spread across a vast area with modern machinery, advanced technology, and well-organized operations."
              />
            )}

            <FadeIn delay={0.1}>
              <div
                className={`space-y-4 text-slate-600 leading-relaxed ${!hideHeading ? "mt-8" : ""}`}
              >
                <p>
                  Spread across 92,000 sq. ft. in Vadodara, our facility combines
                  a well-maintained stock yard, covered storage, and advanced
                  processing bays — all designed for efficient plate handling and
                  timely dispatch.
                </p>
                <p>
                  From heavy plate stacking to precision laser and CNC cutting, every
                  area is equipped for safety, accuracy, and high-volume operations.
                  Our infrastructure supports 2000–3000 tons of ready stock with
                  organized workflows from receipt to dispatch.
                </p>
              </div>

              <ul className="mt-6 space-y-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm font-semibold text-slate-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>

        <StaggerContainer className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {infrastructureStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="rounded-2xl bg-navy p-6 text-center text-white shadow-lg">
                <p className="text-2xl font-black text-orange sm:text-3xl">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  {stat.unit}
                </p>
                <p className="mt-2 text-sm font-bold">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item) => (
            <StaggerItem key={item.label}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group overflow-hidden rounded-xl shadow-md"
              >
                <div className="relative aspect-4/3">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="bg-navy px-4 py-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-white">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-12">
          <SteelCuttingScene compact className="max-h-56" />
        </FadeIn>
      </div>
    </section>
  );
}
