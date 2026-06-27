import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Machinery } from "@/components/sections/Machinery";

export const metadata: Metadata = {
  title: "Machinery | Shree Jagdamba Steel Profile",
  description:
    "12 kW fiber laser cutting, CNC profile cutting, drilling, and advanced steel processing machinery at our Vadodara facility.",
};

export default function MachineryPage() {
  return (
    <main>
      <PageHero
        dark="ADVANCED"
        accent="MACHINERY"
        subtitle="Precision equipment for laser cutting, CNC profiling, and heavy plate processing."
      />
      <Machinery hideHeading />
    </main>
  );
}
