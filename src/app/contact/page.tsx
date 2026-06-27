import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact Us | Shree Jagdamba Steel Profile",
  description:
    "Contact Shree Jagdamba Steel Profile in Vadodara for steel plate quotes, laser cutting, and pan-India delivery.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        dark="GET IN"
        accent="TOUCH"
        subtitle="Reach out for quotes, stock availability, or to visit our facility in Vadodara, Gujarat."
      />
      <Contact hideHeading />
    </main>
  );
}
