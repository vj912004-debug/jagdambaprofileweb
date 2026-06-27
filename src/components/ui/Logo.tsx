export function Logo({
  size = "md",
  variant = "dark",
}: {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
}) {
  const sizes = {
    sm: { hex: "h-9 w-9 text-sm", title: "text-sm", tag: "text-[10px]" },
    md: { hex: "h-11 w-11 text-base", title: "text-base sm:text-lg", tag: "text-xs" },
    lg: { hex: "h-14 w-14 text-lg", title: "text-xl sm:text-2xl", tag: "text-sm" },
  };
  const s = sizes[size];
  const titleColor = variant === "light" ? "text-white" : "text-navy";

  return (
    <div className="flex items-center gap-3">
      <div
        className={`${s.hex} flex items-center justify-center bg-navy font-black text-white clip-hex`}
      >
        <span className="text-orange">S</span>J
      </div>
      <div>
        <p className={`${s.title} font-extrabold leading-tight tracking-wide ${titleColor}`}>
          SHREE JAGDAMBA
        </p>
        <p className={`${s.title} font-extrabold leading-tight tracking-wide ${titleColor}`}>
          STEEL PROFILE
        </p>
        <p className={`${s.tag} font-semibold tracking-[0.2em] text-orange`}>
          STRENGTH. QUALITY. TRUST.
        </p>
      </div>
    </div>
  );
}
