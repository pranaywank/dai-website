/**
 * Local image registry — everything served from `public/assets/`.
 * Add future images under `public/assets/<Area>/...` and reference them here.
 * NOTE: `public/assets/Team/Pranay Wankhede.HEIC` is intentionally unused —
 * browsers cannot render HEIC. Convert it to JPG/PNG to enable.
 */
const a = (p: string) => encodeURI(`/assets/${p}`);

export const XR_IMAGES = {
  vrHero: a("Capabilities/Gaming/man-wearing-vr-glasses-gaming.jpg"),
  vrMan: a("Hero/person-using-ar-technology-perform-their-occupation.jpg"),
  headset: a("Capabilities/AR/woman-with-vr-glasses-futuristic-city.jpg"),
  arLab: a("Hero/person-using-ar-technology-perform-their-occupationfgh.jpg"),
  metaverse: a("Capabilities/Metaverse/person-using-ar-technology-their-daily-occupation.jpg"),
  industrial: a("Industries/Manufacturing/pexels-photo-1108101.jpeg"),
  engineerTwin: a("Industries/Manufacturing/person-using-ar-technology-their-daily-occupation.jpg"),
  engineerTablet: a("Industries/Automobile/Automotive-Engineer-Use-Virtual-Reality-Headset_Edited-1024x576.jpg"),
  engineerSite: a("Industries/Manufacturing/6275829f6db3e00a7a26c1f2_AdobeStock_305628750.jpg"),
  training: a("Capabilities/Gaming/side-view-soldier-fighting-war.jpg"),
  rocket: a("Industries/Aerospace and Defense/1.jpeg"),
  car: a("Industries/Automobile/AR_Car.webp"),
  checkout: a("Industries/Ecommerce/1.jpg"),
  classroom: a("Industries/Education/2.jpg"),
  doctor: a("Industries/Healthcare/3.jpg"),
  doctorCare: a("Industries/Healthcare/5.jpg"),
  servers: a("Industries/IT/1.jpg"),
  cyber: a("Industries/Telecom/1.jpg"),
  factory: a("Industries/Manufacturing/pexels-photo-2760241.webp"),
  refinery: a("Industries/Oil & Gas/1.jpg"),
  wind: a("Industries/Power and Energy/1.jpg"),
  store: a("Industries/Retail/ar-retail2-1024x620.jpg"),
  portrait: a("Capabilities/AI/face-recognition-personal-identification-collage.jpg"),
  retroGame: a("Capabilities/Gaming/motorsport-showdown-with-racing-cars.jpg"),
  neonGame: a("Hero/cyberpunk-illustration-with-neon-colors-futuristic-technology.jpg"),
  robotHand: a("Hero/regular-human-job-performed-by-anthropomorphic-futuristic-robot.jpg"),
  aiGradient: a("Capabilities/AI/girl-coding-interactive-screen.jpg"),
  controller: a("Capabilities/Gaming/black-teen-smiling-girl-headset-playing-video-games-video-game-club-with-blue-red-illumination-keyboard-with-illumination.jpg"),
  circuit: a("Solutions/Defect Identification.png"),
  product3d: a("Solutions/3D Product Experiences.png"),
  interior: a("Solutions/Immersive 360 Tours.png"),
  solTwin: a("Solutions/Digital Twin.png"),
  solRemote: a("Solutions/AR Remote Assistance.png"),
  solManuals: a("Solutions/Interactive Training Manuals.png"),
  solInjection: a("Solutions/Injection Simulator.png"),
  heroLogistics: a("Hero/logistics-means-transport-together-with-technological-futuristic-holograms_23-2151662938.jpg"),
  heroFreepik: a("Hero/freepik_edit_A-Hispanic-male-using-software-on-a-computer-at-ni.jpeg"),
};

export const HERO_SLIDES = [XR_IMAGES.heroLogistics, XR_IMAGES.vrMan, XR_IMAGES.neonGame];

/** Per-capability galleries (4 local photos each). */
export const CAP_GALLERIES: Record<string, string[]> = {
  gaming: [
    a("Capabilities/Gaming/man-wearing-vr-glasses-gaming.jpg"),
    a("Capabilities/Gaming/motorsport-showdown-with-racing-cars.jpg"),
    a("Capabilities/Gaming/side-view-soldier-fighting-war.jpg"),
    a("Capabilities/Gaming/black-teen-smiling-girl-headset-playing-video-games-video-game-club-with-blue-red-illumination-keyboard-with-illumination.jpg"),
  ],
  metaverse: [
    a("Capabilities/Metaverse/person-using-ar-technology-their-daily-occupation.jpg"),
    a("Hero/cyberpunk-illustration-with-neon-colors-futuristic-technology.jpg"),
    a("Capabilities/VR/person-using-ar-technology-their-daily-occupation.jpg"),
    a("Hero/logistics-means-transport-together-with-technological-futuristic-holograms_23-2151662938.jpg"),
  ],
  "augmented-reality-ar": [
    a("Capabilities/AR/woman-with-vr-glasses-futuristic-city.jpg"),
    a("Capabilities/AR/chef-using-ar-technology-his-profession.jpg"),
    a("Capabilities/AR/uniboa-NrMGL5MR8uk-unsplash.jpg"),
    a("Capabilities/AR/1000_F_305628436_SvFozOJxysHN5b1derDuMeuIV0VR5RiO.jpg"),
  ],
  "virtual-reality-vr": [
    a("Capabilities/VR/kids-with-vr-glasses-abstract-futuristic-school-classroom.jpg"),
    a("Capabilities/VR/young-man-woman-vr-glasses-doing-experiments-robotics-laboratory-robot-tools_1268-23326.jpg"),
    a("Capabilities/VR/person-using-ar-technology-their-daily-occupation.jpg"),
    a("Capabilities/VR/family-home.jpg"),
  ],
  "artificial-intelligence": [
    a("Capabilities/AI/girl-coding-interactive-screen.jpg"),
    a("Capabilities/AI/face-recognition-personal-identification-collage.jpg"),
    a("Capabilities/AI/robot-working-as-teacher-instead-humans.jpg"),
    a("Capabilities/AI/representation-user-experience-interface-design-1.jpg"),
  ],
};

/** XR Consulting gallery (XR CoE page). */
export const XR_COE_GALLERY = [
  a("XR Consulting/1.1.jpg"),
  a("XR Consulting/1.2.jpg"),
  a("XR Consulting/1.3.webp"),
  a("XR Consulting/1.4.webp"),
  a("XR Consulting/2.jpg"),
  a("XR Consulting/3.jpg"),
];

/** Deterministic local photo per case-study slug. */
const CASE_POOL = [
  XR_IMAGES.neonGame,
  XR_IMAGES.vrHero,
  XR_IMAGES.headset,
  XR_IMAGES.engineerTwin,
  XR_IMAGES.training,
  XR_IMAGES.factory,
  XR_IMAGES.metaverse,
  XR_IMAGES.heroLogistics,
];

export function csImage(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return CASE_POOL[h % CASE_POOL.length];
}
