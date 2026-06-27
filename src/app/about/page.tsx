import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About Us | Shree Jagdamba Steel Profile",
  description:
    "Learn about Shree Jagdamba Steel Profile — trusted steel plate stockist and CNC cutting partner serving 800+ customers across India.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        dark="COMPANY"
        accent="OVERVIEW"
        subtitle="Trusted steel partner with decades of experience in plate stocking, processing, and pan-India delivery."
      />
      <About hideHeading />
    </main>
  );
}
