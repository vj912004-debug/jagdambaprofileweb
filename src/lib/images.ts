/** AI-generated image assets for the site */
export const IMAGES = {
  about: "/images/about-warehouse.png",
  stockYard: "/images/stock-yard.png",
  laserCutting: "/images/laser-cutting.png",
  cncCutting: "/images/cnc-cutting.png",
  cncDrilling: "/images/cnc-drilling.png",
  factoryInterior: "/images/factory-interior.png",
  heavyPlates: "/images/heavy-plates.png",
  overheadCrane: "/images/overhead-crane.png",
  steelInventory: "/images/steel-inventory.png",
  contactFacility: "/images/contact-facility.png",
  panIndiaLogistics: "/images/pan-india-logistics.png",
  heroPoster: "/images/hero-laser-cinematic.png",
  heroNeuralForge: "/images/hero-neural-forge.png",
  heroAiForge: "/images/hero-ai-forge.png",
  heroAiStockyard: "/images/hero-ai-stockyard.png",
  industries: {
    engineering: "/images/industry-engineering.png",
    fabrication: "/images/industry-fabrication.png",
    pressureVessel: "/images/industry-pressure-vessel.png",
    mining: "/images/industry-mining.png",
    oilGas: "/images/industry-oil-gas.png",
    infrastructure: "/images/industry-infrastructure.png",
    hydro: "/images/industry-hydro.png",
    oem: "/images/industry-oem.png",
    railway: "/images/industry-railway.png",
  },
  partners: {
    amnsIndia: "/images/partner-amns-india.png",
    jswSteel: "/images/partner-jsw-steel.png",
    jindalSteel: "/images/partner-jindal-steel.png",
    tataSteel: "/images/partner-tata-steel.png",
    sail: "/images/partner-sail.png",
    posco: "/images/partner-posco.png",
    chinaImports: "/images/partner-china-imports.png",
  },
} as const;

/** Primary home hero — girl with VR headset (original background video) */
export const HERO_VIDEO = "/videos/hero-steel-cutting.mp4";

/** Tried in order if the local file is missing or fails to load */
export const HERO_BACKGROUND_VIDEOS = [
  HERO_VIDEO,
  "https://videos.pexels.com/video-files/3209829/3209829-hd_1920_1080_25fps.mp4",
  "https://assets.mixkit.co/videos/101270/101270-1080.mp4",
] as const;

export const HERO_VIDEO_POSTER = IMAGES.heroAiForge;

export const HERO_MOTION_SCENES = [
  {
    video: HERO_VIDEO,
    poster: IMAGES.heroAiForge,
    title: "Precision Laser Cutting",
    subtitle: "12 kW fiber laser · MS & SS plates",
  },
] as const;

export const HERO_AI_SCENES = [
  {
    src: IMAGES.heroAiForge,
    title: "Fiber Laser Forge",
    subtitle: "12 kW precision cutting",
  },
  {
    src: IMAGES.heroAiStockyard,
    title: "Steel Stock Powerhouse",
    subtitle: "MS & SS plates on demand",
  },
] as const;
