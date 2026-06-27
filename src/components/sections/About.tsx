"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessFlow } from "@/components/animations/ProcessFlow";
import { aboutFeatures } from "@/lib/data";
import { sectionClass } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { motion } from "framer-motion";

export function About({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section className={sectionClass(hideHeading, "bg-white")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            {!hideHeading && (
              <SectionHeading
                dark="COMPANY"
                accent="OVERVIEW"
                subtitle="Our high-quality steel plates and processing services are trusted by a wide range of industries across India."
              />
            )}

            <FadeIn delay={0.1}>
              <div
                className={`space-y-4 text-slate-600 leading-relaxed ${!hideHeading ? "mt-8" : ""}`}
              >
                <p>
                  Shree Jagdamba Steel Profile is a trusted name in MS & SS plate
                  stocking, laser cutting, and CNC profile cutting. We combine
                  large ready stock with advanced machinery to deliver precision
                  parts from drawing to dispatch.
                </p>
                <p>
                  With over 24 years of industry experience and a pan-India
                  customer network, we serve heavy engineering, fabrication,
                  pressure vessel, mining, oil & gas, and infrastructure sectors
                  with consistent quality and on-time delivery.
                </p>
                <p>
                  Our commitment to ethical business practices, competitive
                  pricing, and long-term partnerships has made us a preferred
                  steel partner for 800+ customers nationwide.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-xl"
            >
              <Image
                src={IMAGES.about}
                alt="Steel plate warehouse"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </FadeIn>
        </div>

        <StaggerContainer className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {aboutFeatures.map((feature) => (
            <StaggerItem key={feature.text}>
              <div className="group rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:border-orange/40 hover:shadow-md">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-navy text-orange">
                  <span className="text-lg font-bold">✓</span>
                </div>
                <p className="text-sm font-semibold text-slate-700 group-hover:text-navy">
                  {feature.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-12">
          <ProcessFlow />
        </FadeIn>
      </div>
    </section>
  );
}
