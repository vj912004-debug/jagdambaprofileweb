"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";
import { sectionClass } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export function Services({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section className={sectionClass(hideHeading, "bg-white")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            {!hideHeading && (
              <SectionHeading
                dark="OUR CORE"
                accent="SERVICES"
                subtitle="High-precision cutting and processing services — from fiber laser to heavy plate processing under one roof."
              />
            )}

            {hideHeading && (
              <FadeIn delay={0.05}>
                <p className="text-slate-600 leading-relaxed">
                  From fiber laser and CNC profile cutting to plate nesting,
                  beveling, and dispatch — we deliver end-to-end steel processing
                  under one roof with consistent quality and on-time delivery.
                </p>
              </FadeIn>
            )}

            <FadeIn delay={0.1}>
              <div
                className={`relative aspect-video overflow-hidden rounded-2xl shadow-xl lg:aspect-auto lg:h-[480px] ${hideHeading ? "mt-6" : "mt-6 sm:mt-8"}`}
              >
                <Image
                  src={IMAGES.laserCutting}
                  alt="CNC profile cutting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </FadeIn>
          </div>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-orange/30 hover:shadow-lg"
                >
                  <div className="relative h-36">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy/70 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-orange">
                        {service.detail}
                      </p>
                      <h3 className="text-lg font-black text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <ul className="space-y-2 p-5">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
