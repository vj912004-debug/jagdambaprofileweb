import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Services } from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "Services | Shree Jagdamba Steel Profile",
  description:
    "Fiber laser cutting, CNC profile cutting, plate stocking, nesting, and steel processing services from Vadodara, Gujarat.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        dark="OUR CORE"
        accent="SERVICES"
        subtitle="End-to-end steel solutions — from stock and drawing to cutting, inspection, and dispatch."
      />
      <Services hideHeading />
    </main>
  );
}
