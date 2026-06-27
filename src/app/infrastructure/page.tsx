import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Infrastructure } from "@/components/sections/Infrastructure";

export const metadata: Metadata = {
  title: "Infrastructure | Shree Jagdamba Steel Profile",
  description:
    "Explore our 92,000 sq. ft. steel facility in Vadodara with advanced machinery, stock yard, and organized operations.",
};

export default function InfrastructurePage() {
  return (
    <main>
      <PageHero
        dark="OUR"
        accent="INFRASTRUCTURE"
        subtitle="State-of-the-art facility with modern machinery, advanced technology, and well-organized steel operations."
      />
      <Infrastructure hideHeading />
    </main>
  );
}
