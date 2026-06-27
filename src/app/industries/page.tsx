import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Industries } from "@/components/sections/Industries";
import { Partners } from "@/components/sections/Partners";
import { PanIndia } from "@/components/sections/PanIndia";

export const metadata: Metadata = {
  title: "Industries & Partners | Shree Jagdamba Steel Profile",
  description:
    "Steel solutions for heavy engineering, fabrication, oil & gas, mining, infrastructure, and more — with pan-India delivery.",
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        dark="INDUSTRIES"
        accent="WE SERVE"
        subtitle="Trusted by diverse sectors across India with quality steel plates, sourcing network, and nationwide logistics."
      />
      <Industries hideHeading />
      <Partners />
      <PanIndia />
    </main>
  );
}
