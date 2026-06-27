"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BRAND, sectionClass } from "@/lib/constants";
import { contacts, certifications, strengths } from "@/lib/data";
import { IMAGES } from "@/lib/images";

export function Contact({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section className={sectionClass(hideHeading, "bg-white")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!hideHeading && (
          <SectionHeading
            dark="GET IN"
            accent="TOUCH"
            subtitle="We value your trust and look forward to serving you with the best quality, on-time delivery, and long-term partnership."
            align="center"
          />
        )}

        {hideHeading && (
          <FadeIn>
            <p className="mx-auto max-w-3xl text-center text-slate-600 leading-relaxed">
              Reach out for quotations, stock enquiries, or project support. Our
              team is ready to assist with plate sourcing, cutting requirements,
              and pan-India delivery from our Vadodara facility.
            </p>
          </FadeIn>
        )}

        <div className={`grid gap-12 lg:grid-cols-2 ${hideHeading ? "mt-10" : "mt-12"}`}>
          <FadeIn>
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={IMAGES.contactFacility}
                alt="Shree Jagdamba Steel Profile"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-end bg-linear-to-t from-navy/90 to-transparent p-4 sm:p-8">
                <div>
                  <p className="text-2xl font-black text-orange italic sm:text-3xl">
                    Thank You!
                  </p>
                  <p className="mt-2 text-white">
                    For your continuous support & trust
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {contacts.map((c) => (
                <a
                  key={c.role}
                  href={`tel:${c.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:border-orange/40 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-orange">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-navy">{c.role}</p>
                    <p className="text-sm text-slate-600">{c.phone}</p>
                  </div>
                </a>
              ))}

              <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-orange">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-navy">Email</p>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="text-sm text-orange hover:underline"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-orange">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-navy">Address</p>
                  <p className="text-sm text-slate-600">{BRAND.address}</p>
                  <p className="mt-1 text-xs text-slate-400">
                    GSTIN: {BRAND.gstin}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <div className="rounded-2xl bg-navy p-6 text-white lg:p-8">
                <h3 className="text-lg font-black text-orange">
                  OUR STRENGTH
                </h3>
                <StaggerContainer className="mt-6 space-y-3">
                  {strengths.map((s) => (
                    <StaggerItem key={s}>
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-orange" />
                        {s}
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>

            <FadeIn className="mt-6">
              <h3 className="mb-4 font-black text-navy">
                Certifications & Registrations
              </h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-700"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn className="mt-8 rounded-2xl bg-orange p-6 text-white">
              <p className="font-black leading-relaxed">{BRAND.processLine}</p>
              <p className="mt-4 text-sm text-white/90">
                YOUR STEEL PARTNER FOR STOCK • DRAWING • NESTING • CUTTING •
                INSPECTION • DISPATCH
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
