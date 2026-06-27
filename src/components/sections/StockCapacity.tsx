"use client";

import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { stockSpecs } from "@/lib/data";
import { sectionClass } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const gallery = [
  { src: IMAGES.steelInventory, label: "Large Inventory – Ready to Dispatch" },
  { src: IMAGES.heavyPlates, label: "Wide Range of Grades & Thickness" },
  { src: IMAGES.heavyPlates, label: "Heavy Plate Stock" },
  { src: IMAGES.steelInventory, label: "Ready Stock – All Grades" },
];

const benefits = [
  "Wide Range of Grades",
  "Premium Quality",
  "Large Stock",
  "Timely Delivery",
  "Customer Focused",
];

export function StockCapacity({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section className={sectionClass(hideHeading, "bg-navy text-white")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeading && (
          <SectionHeading
            dark="STOCK CAPACITY"
            accent="& READY STOCK"
            subtitle="High-quality steel inventory maintained for immediate dispatch — 2000–3000 tons ready stock across multiple grades."
            align="center"
            variant="light"
          />
        )}

        {hideHeading && (
          <FadeIn>
            <p className="mx-auto max-w-3xl text-center text-slate-300 leading-relaxed">
              We maintain 2000–3000 tons of ready stock across MS and SS grades,
              thicknesses, and sizes — organized for quick identification, quality
              checks, and immediate dispatch to customers nationwide.
            </p>
          </FadeIn>
        )}

        <div className={`grid gap-12 lg:grid-cols-2 ${hideHeading ? "mt-10" : "mt-12"}`}>
          <StaggerContainer className="space-y-3">
            <div className="mb-6 rounded-xl bg-orange px-5 py-3">
              <p className="text-sm font-black uppercase tracking-wider">
                Our Stock Capacity
              </p>
            </div>
            {stockSpecs.map((spec) => (
              <StaggerItem key={spec.label}>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10">
                  <span className="text-sm font-semibold text-slate-300">
                    {spec.label}
                  </span>
                  <span className="font-black text-orange">
                    {spec.value}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="grid grid-cols-2 gap-4">
            {gallery.map((item) => (
              <StaggerItem key={item.label}>
                <div className="group overflow-hidden rounded-xl">
                  <div className="relative aspect-square">
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="bg-black/60 px-3 py-2">
                    <p className="text-[10px] font-bold uppercase leading-tight sm:text-xs">
                      {item.label}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <FadeIn className="mt-12">
          <div className="flex flex-wrap justify-center gap-6">
            {benefits.map((b) => (
              <div
                key={b}
                className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold"
              >
                <span className="text-orange">●</span>
                {b}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg font-bold">
            READY STOCK.{" "}
            <span className="text-orange">RIGHT QUALITY.</span> ON TIME
            EVERY TIME.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
