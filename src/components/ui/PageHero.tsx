import { SectionHeading } from "./SectionHeading";

export function PageHero({
  dark,
  accent,
  subtitle,
}: {
  dark: string;
  accent: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-navy pt-28 pb-10 sm:pt-32 sm:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark={dark}
          accent={accent}
          subtitle={subtitle}
          variant="light"
        />
      </div>
    </div>
  );
}
