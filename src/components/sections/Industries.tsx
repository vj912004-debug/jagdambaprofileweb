"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries, whyChooseUs } from "@/lib/data";
import { sectionClass } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export function Industries({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section className={sectionClass(hideHeading, "bg-white")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            {!hideHeading && (
              <SectionHeading
                dark="INDUSTRIES"
                accent="WE SERVE"
                subtitle="Our high-quality steel plates and processing services are trusted by a wide range of industries across India."
              />
            )}

            {hideHeading && (
              <FadeIn delay={0.05}>
                <p className="text-slate-600 leading-relaxed">
                  From heavy engineering and fabrication to oil &amp; gas, mining,
                  and infrastructure — we supply precision-cut steel plates and
                  processing services tailored to each sector&apos;s requirements.
                </p>
              </FadeIn>
            )}

            <FadeIn delay={0.1}>
              <div
                className={`relative aspect-video overflow-hidden rounded-2xl shadow-xl ${hideHeading ? "mt-6" : "mt-8"}`}
              >
                <Image
                  src={IMAGES.industries.engineering}
                  alt="Industries we serve"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {industries.map((industry) => (
              <StaggerItem key={industry.name}>
                <div className="group overflow-hidden rounded-xl border border-slate-100 shadow-sm transition hover:shadow-lg">
                  <div className="relative h-28">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="25vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy/80 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <h3 className="font-black text-white">{industry.name}</h3>
                      <p className="text-xs text-slate-300">{industry.desc}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <FadeIn className="mt-16 rounded-2xl bg-navy p-8 lg:p-10">
          <h3 className="text-xl font-black text-orange">
            Why Industries Choose Us?
          </h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-semibold text-white"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-orange" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-2xl font-black text-white">
            STRONGER INDUSTRIES.{" "}
            <span className="text-orange">STRONGER INDIA.</span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
