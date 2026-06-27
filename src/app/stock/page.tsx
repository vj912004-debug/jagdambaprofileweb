import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { StockCapacity } from "@/components/sections/StockCapacity";
import { MaterialGrades } from "@/components/sections/MaterialGrades";

export const metadata: Metadata = {
  title: "Stock & Material Grades | Shree Jagdamba Steel Profile",
  description:
    "2000–3000 ton ready stock of MS and SS plates across multiple grades — immediate dispatch from Vadodara.",
};

export default function StockPage() {
  return (
    <main>
      <PageHero
        dark="STOCK"
        accent="& GRADES"
        subtitle="High-quality steel inventory maintained for immediate dispatch across multiple grades and thicknesses."
      />
      <StockCapacity hideHeading />
      <MaterialGrades />
    </main>
  );
}
