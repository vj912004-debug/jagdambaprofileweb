"use client";

import Link from "next/link";
import { ArrowRight, Building2, Cog, Factory, Layers, Package, Phone, Wrench } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  {
    href: "/about",
    icon: Building2,
    title: "About Us",
    desc: "Company overview, values & process flow",
  },
  {
    href: "/infrastructure",
    icon: Factory,
    title: "Infrastructure",
    desc: "92,000 sq. ft. facility & stock yard",
  },
  {
    href: "/services",
    icon: Wrench,
    title: "Services",
    desc: "Laser cutting, CNC profile & more",
  },
  {
    href: "/stock",
    icon: Package,
    title: "Stock & Grades",
    desc: "2000–3000 ton ready stock capacity",
  },
  {
    href: "/machinery",
    icon: Cog,
    title: "Machinery",
    desc: "12 kW fiber laser & CNC equipment",
  },
  {
    href: "/industries",
    icon: Layers,
    title: "Industries",
    desc: "Sectors we serve across India",
  },
  {
    href: "/contact",
    icon: Phone,
    title: "Contact",
    desc: "Get a quote or visit our facility",
  },
];

export function HomeHighlights() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark="EXPLORE"
          accent="OUR CAPABILITIES"
          subtitle="Browse dedicated pages for each area of our steel plate stocking, processing, and delivery services."
          align="center"
        />

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {highlights.map((item) => (
            <StaggerItem key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-orange/40 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-black text-navy">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{item.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-orange">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
