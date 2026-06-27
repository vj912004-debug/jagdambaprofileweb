import { IMAGES } from "./images";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/services", label: "Services" },
  { href: "/stock", label: "Stock" },
  { href: "/machinery", label: "Machinery" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export const heroStats = [
  { prefix: "₹", value: "90+", label: "Crore Business Strength", suffix: "" },
  { prefix: "", value: "2000-3000", label: "Ready Stock (Tons)", suffix: "" },
  { prefix: "", value: "24+", label: "Years Experience", suffix: "" },
  { prefix: "", value: "800+", label: "Customers Nationwide", suffix: "" },
];

export const aboutFeatures = [
  { icon: "area", text: "92,000 Sq. Ft. Total Area" },
  { icon: "shed", text: "26,000 Sq. Ft. Covered Shed" },
  { icon: "yard", text: "Spacious Plate Stock Yard" },
  { icon: "crane", text: "Heavy Duty Handling Equipment" },
  { icon: "quality", text: "High Quality Products" },
  { icon: "tech", text: "Advanced Technology" },
  { icon: "team", text: "Skilled & Experienced Team" },
  { icon: "satisfaction", text: "Customer Satisfaction" },
  { icon: "ethics", text: "Ethical Business Practices" },
  { icon: "delivery", text: "Timely Delivery" },
  { icon: "pricing", text: "Competitive Pricing" },
  { icon: "relationship", text: "Long Term Relationship" },
];

export const infrastructureStats = [
  { label: "Total Area", value: "92,000", unit: "Sq. Ft." },
  { label: "Covered Shed", value: "26,000", unit: "Sq. Ft." },
  { label: "Open Stock Yard", value: "65,000", unit: "Sq. Ft." },
  { label: "Stock Capacity", value: "2000-3000", unit: "Tons" },
];

export const services = [
  {
    title: "Fiber Laser Cutting",
    detail: "Up to 3000mm × 12000mm",
    points: [
      "12 kW high-performance machine",
      "Up to 35 mm thickness",
      "High precision & clean cuts",
    ],
    image: IMAGES.laserCutting,
  },
  {
    title: "CNC Profile Cutting",
    detail: "Accurate & Precise",
    points: [
      "8 machines — 8 mm to 350 mm",
      "Bed size 3000 × 12000 mm",
      "Complex profiles & heavy plates",
    ],
    image: IMAGES.cncCutting,
  },
  {
    title: "CNC Drilling",
    detail: "Multi-spindle precision",
    points: [
      "Bed size 2500 × 6000 mm",
      "Up to 60 mm hole diameter",
      "Accurate positioning",
    ],
    image: IMAGES.cncDrilling,
  },
  {
    title: "Plate Nesting & Profile Development",
    detail: "Optimized layouts",
    points: [
      "Advanced nesting software",
      "Minimum material wastage",
      "PDF to DWG conversion",
    ],
    image: IMAGES.industries.hydro,
  },
  {
    title: "Heavy Plate Processing",
    detail: "End-to-end processing",
    points: [
      "Beveling & chamfering",
      "Surface preparation",
      "Custom specifications",
    ],
    image: IMAGES.heavyPlates,
  },
  {
    title: "Steel Trading",
    detail: "All grades — ready stock",
    points: [
      "Wide range of grades",
      "2000–3000 ton inventory",
      "Timely pan-India delivery",
    ],
    image: IMAGES.steelInventory,
  },
];

export const stockSpecs = [
  { label: "Total Stock Capacity", value: "2000 – 3000 TONS" },
  { label: "Thickness Range", value: "1 mm to 300 mm" },
  { label: "Width Range", value: "Up to 3000 mm" },
  { label: "Length Range", value: "Up to 12000 mm" },
  { label: "Factory Area", value: "92,000 Sq. Ft." },
  { label: "Covered Shed Area", value: "26,000 Sq. Ft." },
];

export const materialGrades = [
  {
    grade: "IS 2062 E250 / E350BR",
    standard: "IS 2062",
    type: "HR Plate",
    thickness: "3 - 300",
    width: "2500",
  },
  {
    grade: "S355J2+N",
    standard: "EN 10025",
    type: "HR Plate",
    thickness: "3 - 300",
    width: "2500",
  },
  {
    grade: "SA 516 Gr 60 / 70",
    standard: "ASTM A516",
    type: "Pressure Vessel Plate",
    thickness: "6 - 200",
    width: "2500",
  },
  {
    grade: "HARDOX 400 / 450 / 500",
    standard: "SSAB",
    type: "Wear Resistant Plate",
    thickness: "3 - 100",
    width: "2500",
  },
  {
    grade: "NM 400 / 450 / 500",
    standard: "Various",
    type: "Wear Resistant Plate",
    thickness: "3 - 100",
    width: "2500",
  },
  {
    grade: "SS 304 / 316 / 316L",
    standard: "ASTM A240",
    type: "Stainless Steel Plate",
    thickness: "1 - 50",
    width: "2500",
  },
  {
    grade: "SA 537 Class 1 / 2",
    standard: "ASTM A537",
    type: "Pressure Vessel Plate",
    thickness: "6 - 150",
    width: "2500",
  },
  {
    grade: "C45 / EN8 / EN19",
    standard: "Various",
    type: "Alloy Steel Plate",
    thickness: "6 - 200",
    width: "2500",
  },
];

export const machinery = [
  {
    name: "CNC Profile Cutting Machines",
    specs: ["Bed: 3000 × 12000 mm", "Capacity: 8–350 mm"],
    qty: "8 NOS",
    image: IMAGES.cncCutting,
  },
  {
    name: "Fiber Laser Cutting Machine",
    specs: ["Bed: 3000 × 12000 mm", "Up to 35 mm — 12 kW"],
    qty: "1 NO",
    image: IMAGES.laserCutting,
  },
  {
    name: "CNC Drilling Machine",
    specs: ["Bed: 2500 × 6000 mm", "Up to 60 mm diameter"],
    qty: "1 NO",
    image: IMAGES.cncDrilling,
  },
  {
    name: "Pug Cutting Machines",
    specs: ["Heavy plate cutting"],
    qty: "10 NOS",
    image: IMAGES.cncCutting,
  },
  {
    name: "Overhead Cranes",
    specs: ["20 Ton capacity each"],
    qty: "5 NOS",
    image: IMAGES.overheadCrane,
  },
  {
    name: "Lifting Magnets",
    specs: ["5 Ton capacity each"],
    qty: "5 NOS",
    image: IMAGES.overheadCrane,
  },
  {
    name: "Manual Profile Cutting Machines",
    specs: ["Precision manual cutting"],
    qty: "6 NOS",
    image: IMAGES.cncCutting,
  },
];

export const partners = [
  { name: "AM/NS India", desc: "High quality steel with consistent performance", image: IMAGES.partners.amnsIndia },
  { name: "JSW Steel", desc: "Premium grade structural steel", image: IMAGES.partners.jswSteel },
  { name: "Jindal Steel & Power", desc: "Wide range of plate grades", image: IMAGES.partners.jindalSteel },
  { name: "Tata Steel", desc: "Trusted national steel partner", image: IMAGES.partners.tataSteel },
  { name: "SAIL", desc: "Government-backed quality assurance", image: IMAGES.partners.sail },
  { name: "POSCO", desc: "International quality standards", image: IMAGES.partners.posco },
  { name: "China Imports", desc: "Specialized grade availability", image: IMAGES.partners.chinaImports },
];

export const industries = [
  { name: "Heavy Engineering", desc: "Machinery, Equipment & Components", image: IMAGES.industries.engineering },
  { name: "Fabrication", desc: "Structural Fabrication & Components", image: IMAGES.industries.fabrication },
  { name: "Pressure Vessel", desc: "Boilers, Heat Exchangers & Vessels", image: IMAGES.industries.pressureVessel },
  { name: "Mining", desc: "Mining Equipment & Parts", image: IMAGES.industries.mining },
  { name: "Oil & Gas", desc: "Onshore & Offshore Applications", image: IMAGES.industries.oilGas },
  { name: "Infrastructure", desc: "Bridges, Buildings & Structures", image: IMAGES.industries.infrastructure },
  { name: "Hydro Projects", desc: "Turbines, Gates & Components", image: IMAGES.industries.hydro },
  { name: "OEM Manufacturing", desc: "Original Equipment Manufacturers", image: IMAGES.industries.oem },
  { name: "Railway & Defense", desc: "Railway Components & Defense Equipment", image: IMAGES.industries.railway },
];

export const whyChooseUs = [
  "Wide Range of Grades & Thickness",
  "Consistent Quality Assurance",
  "Timely Delivery Across India",
  "Custom Profile Cutting",
  "Large Stock Availability",
  "Dedicated Technical Support",
  "Competitive Pricing",
  "Trusted by Leading Industries",
];

export const logisticsFeatures = [
  "Pan India Delivery",
  "Safe & Secure Logistics",
  "On-Time Delivery",
  "Well Packed & Loaded",
  "All Documents Provided",
  "Doorstep Delivery",
];

export const statesServed = [
  "Gujarat", "Maharashtra", "Rajasthan", "Madhya Pradesh",
  "Punjab", "Haryana", "Uttar Pradesh", "West Bengal",
  "Odisha", "Karnataka", "Tamil Nadu", "Andhra Pradesh",
  "Telangana", "Chhattisgarh", "Bihar", "Jharkhand",
];

export const certifications = [
  "ISO 9001:2015 Certified",
  "MSME Registered",
  "GST Registered",
  "LEI Registered",
  "Make in India Supporter",
  "Quality Assured",
];

export const contacts = [
  { role: "Mukesh Patel (Owner)", phone: "+91 98250 42121" },
  { role: "Dilip Patel", phone: "+91 98250 42122" },
  { role: "Office", phone: "+91 265 264 4212" },
];

export const strengths = [
  "2000 – 3000 Ton Ready Stock",
  "12 kW Fiber Laser Cutting",
  "8 CNC Profile Cutting Machines",
  "1 mm to 300 mm Thickness Range",
  "ISO 9001:2015 Certified",
  "Pan India Delivery Network",
  "In-house Design & Nesting Team",
  "Quality Inspection & Testing",
  "Own Transport Facility",
  "24+ Years Industry Experience",
  "90+ Crore Annual Business",
];
