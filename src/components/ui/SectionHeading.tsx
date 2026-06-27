import { FadeIn } from "./FadeIn";

export function SectionHeading({
  dark,
  accent,
  subtitle,
  align = "left",
  variant = "dark",
}: {
  dark: string;
  accent: string;
  subtitle?: string;
  align?: "left" | "center";
  variant?: "dark" | "light";
}) {
  const darkColor = variant === "light" ? "text-white" : "text-navy";
  const subColor = variant === "light" ? "text-slate-300" : "text-slate-600";

  return (
    <FadeIn className={align === "center" ? "text-center" : ""}>
      <h2 className="text-[clamp(1.625rem,5vw,3rem)] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        <span className={darkColor}>{dark}</span>
        {accent && (
          <span className="text-orange"> {accent}</span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base sm:text-lg ${subColor} ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-orange ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </FadeIn>
  );
}
