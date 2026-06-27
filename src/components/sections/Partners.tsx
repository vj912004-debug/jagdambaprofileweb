"use client";

import Image from "next/image";
import { Shield, Truck, Handshake, Boxes } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partners } from "@/lib/data";

const features = [
  { icon: Shield, text: "AUTHENTIC SOURCING" },
  { icon: Boxes, text: "PREMIUM QUALITY" },
  { icon: Boxes, text: "LARGE STOCK AVAILABILITY" },
  { icon: Truck, text: "TIMELY DELIVERY" },
  { icon: Handshake, text: "LONG TERM PARTNERSHIP" },
];

export function Partners() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark="MATERIAL"
          accent="SOURCING NETWORK"
          subtitle="We partner with leading manufacturers globally to ensure quality, availability, and consistent performance."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {partners.map((partner) => (
              <StaggerItem key={partner.name}>
                <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-orange/40 hover:shadow-lg">
                  <div className="relative h-24 bg-slate-100">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover opacity-80"
                      sizes="33vw"
                    />
                  </div>
                  <div className="bg-navy px-5 py-4">
                    <h3 className="font-black text-white">{partner.name}</h3>
                    <p className="mt-1 text-sm text-slate-300">{partner.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn>
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h3 className="font-black text-navy">
                OUR TRUSTED PARTNERS
              </h3>
              <ul className="mt-6 space-y-4">
                {features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange text-white">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-bold text-slate-700">
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-12 rounded-2xl bg-orange p-8 text-white">
          <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:text-left">
            <Shield className="h-12 w-12 shrink-0" />
            <div>
              <p className="text-xl font-black">
                STRONG SOURCING. SUPERIOR MATERIAL. TRUSTED PERFORMANCE.
              </p>
              <p className="mt-2 text-sm text-white/90">
                We partner with leading manufacturers globally to provide you the
                best in quality steel plates.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
