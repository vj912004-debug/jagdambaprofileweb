"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { machinery } from "@/lib/data";
import { sectionClass } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export function Machinery({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section className={sectionClass(hideHeading, "bg-white")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeading && (
          <SectionHeading
            dark="OUR MACHINERY"
            accent="& INFRASTRUCTURE"
            subtitle="Advanced machinery fleet for precision cutting, drilling, and heavy plate handling."
            align="center"
          />
        )}

        {hideHeading && (
          <FadeIn>
            <p className="mx-auto max-w-3xl text-center text-slate-600 leading-relaxed">
              Our Vadodara facility houses a modern fleet — 12 kW fiber laser,
              multi-axis CNC profile cutters, drilling machines, and heavy plate
              handling equipment — built for precision, speed, and consistent
              quality across every job.
            </p>
          </FadeIn>
        )}

        <div className={`grid gap-8 lg:grid-cols-2 ${hideHeading ? "mt-10" : "mt-12"}`}>
          <StaggerContainer className="space-y-4">
            {machinery.map((item) => (
              <StaggerItem key={item.name}>
                <div className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-orange/30 hover:shadow-md">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-black text-navy">
                        {item.name}
                      </h3>
                      <span className="shrink-0 rounded-lg bg-orange px-3 py-1 text-xs font-black text-white">
                        {item.qty}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1">
                      {item.specs.map((spec) => (
                        <li key={spec} className="text-sm text-slate-600">
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn>
            <div className="grid gap-4">
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={IMAGES.overheadCrane}
                  alt="Machinery gallery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-navy px-4 py-3">
                  <p className="text-xs font-bold uppercase text-white">
                    CNC Profile Cutting Machine
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-md">
                  <Image
                    src={IMAGES.laserCutting}
                    alt="Fiber laser"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-md">
                  <Image
                    src={IMAGES.cncDrilling}
                    alt="CNC drilling"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Advanced Machinery", icon: "⚙" },
            { label: "Heavy Plate Expertise", icon: "◆" },
            { label: "Precision Cutting Solutions", icon: "✓" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-xl bg-navy px-6 py-4 text-white"
            >
              <span className="text-2xl text-orange">{item.icon}</span>
              <span className="font-bold">{item.label}</span>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
