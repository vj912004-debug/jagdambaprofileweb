"use client";

import Image from "next/image";
import { MapPin, Truck, Clock, Package, FileCheck, Home } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { logisticsFeatures, statesServed } from "@/lib/data";
import { IMAGES } from "@/lib/images";

const icons = [Truck, Package, Clock, Package, FileCheck, Home];

export function PanIndia() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark="PAN INDIA PRESENCE"
          accent="& CUSTOMER NETWORK"
          subtitle="From Gujarat to every corner of India — delivering quality steel solutions with a strong logistics network."
          align="center"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={IMAGES.panIndiaLogistics}
                alt="Pan India delivery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="mt-6 text-center text-lg font-bold text-navy">
              WE SUPPLY ACROSS INDIA –{" "}
              <span className="text-orange">
                WHEREVER YOU ARE, WE DELIVER.
              </span>
            </p>
          </FadeIn>

          <div>
            <StaggerContainer className="grid gap-3 sm:grid-cols-2">
              {logisticsFeatures.map((feature, i) => {
                const Icon = icons[i] ?? Truck;
                return (
                  <StaggerItem key={feature}>
                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-orange">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-bold text-slate-700">
                        {feature}
                      </span>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            <FadeIn className="mt-8">
              <h3 className="flex items-center gap-2 font-black text-navy">
                <MapPin className="h-5 w-5 text-orange" />
                States We Serve
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {statesServed.map((state) => (
                  <span
                    key={state}
                    className="rounded-full border border-orange/30 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn className="mt-12 text-center">
          <p className="text-xl font-black text-orange sm:text-2xl md:text-3xl">
            FROM GUJARAT TO EVERY CORNER OF INDIA
          </p>
          <p className="mt-2 text-base font-bold text-navy sm:text-lg">
            DELIVERING QUALITY STEEL SOLUTIONS
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
