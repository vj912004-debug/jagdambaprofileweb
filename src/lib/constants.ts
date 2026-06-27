export const BRAND = {
  name: "SHREE JAGDAMBA STEEL PROFILE",
  shortName: "Jagdamba Steel",
  tagline: "STRENGTH. QUALITY. TRUST.",
  address: "503/1A, GIDC Makarpura, Vadodara - 390010, Gujarat, India",
  email: "jagdambaprofile@gmail.com",
  gstin: "24ANPP6200L1Z0",
  servicesLine:
    "MS & SS CNC PROFILE CUTTING • LASER CUTTING • STEEL TRADING",
  processLine:
    "STOCK • DRAWING • NESTING • CUTTING • INSPECTION • DISPATCH",
};

export const COLORS = {
  orange: "#F37021",
  navy: "#0D1B2A",
  charcoal: "#1A1A1B",
};

/** Page sections below a hero — no top padding when heading is hidden */
export function sectionClass(hideHeading: boolean, bg: string) {
  return hideHeading ? `pb-14 sm:pb-18 lg:pb-24 ${bg}` : `section-padding ${bg}`;
}
