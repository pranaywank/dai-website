import {
  Bot,
  Box,
  Gamepad2,
  Glasses,
  Orbit,
  Plane,
  Car,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Server,
  Factory,
  Fuel,
  Zap,
  Store,
  Radio,
  ScanEye,
  Cuboid,
  Video,
  Syringe,
  BookOpenCheck,
  Headset,
  type LucideIcon,
} from "lucide-react";
import { XR_IMAGES as X } from "@/lib/images";

export type NavChild = { label: string; href: string; desc?: string };
export type NavGroup = { label: string; href?: string; children: NavChild[] };

export const serviceGroups: NavGroup[] = [
  {
    label: "Digital Product Engineering",
    children: [
      { label: "Metahuman Development", href: "/services/metahuman-development", desc: "Lifelike conversational avatars" },
      { label: "Unity Development", href: "/services/unity-development", desc: "Real-time 3D & mobile AR/VR apps" },
      { label: "Unreal Development", href: "/services/unreal-development", desc: "Photoreal UE5 XR experiences" },
      { label: "NVIDIA Omniverse Development", href: "/services/nvidia-omniverse-development", desc: "OpenUSD pipelines & twins" },
    ],
  },
  {
    label: "Technology Solutions",
    children: [
      { label: "Digital Twin", href: "/technology-solutions/digital-twin", desc: "Live 3D replica of assets" },
      { label: "360 Virtual Tours", href: "/technology-solutions/immersive-360-virtual-tours", desc: "Immersive site walkthroughs" },
      { label: "Defect Identification", href: "/technology-solutions/ai-powered-defect-identification", desc: "Vision-based QA" },
      { label: "Remote AR Assistance", href: "/technology-solutions/remote-ar-assistance", desc: "Expert help anywhere" },
      { label: "3D Product Experiences", href: "/technology-solutions/3d-product-experiences", desc: "Configurators & showrooms" },
      { label: "Interactive Technical Manuals", href: "/technology-solutions/interactive-technical-manuals", desc: "Step-by-step XR SOPs" },
      { label: "Injection Simulators", href: "/technology-solutions/injection-simulators", desc: "Medical VR training" },
    ],
  },
  {
    label: "Consulting & Products",
    children: [
      { label: "XR Centre of Excellence", href: "/xr-centre-of-excellence-xr-coe", desc: "Labs, curriculum & governance" },
      { label: "Pankh UAV Simulator", href: "/pankh-uav-simulator", desc: "Drone pilot VR training" },
      { label: "GIS Platform", href: "/geographic-information-system-gis", desc: "Spatial intelligence" },
      { label: "Digital Product Engineering", href: "/digital-product-engineering", desc: "Concept to market" },
    ],
  },
];

export type UseCase = { title: string; desc: string };
export type Faq = { q: string; a: string };

export type ContentPage = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  overview: string[];
  icon?: LucideIcon;
  image: string;
  imageAlt: string;
  keywords: string[];
  bullets: string[];
  useCases: UseCase[];
  faqs: Faq[];
  stats?: { value: string; label: string }[];
};

/* ------------------------------- SERVICES ------------------------------- */

export const services: ContentPage[] = [
  {
    slug: "metahuman-development",
    title: "Metahuman Development",
    tagline: "Lifelike digital humans for XR training, support & engagement",
    description:
      "Our XR studio designs, rigs and deploys real-time digital humans — photorealistic MetaHumans and stylized avatars — with lip-sync, emotion and LLM-driven dialogue for VR training, AR kiosks and virtual showrooms.",
    overview: [
      "Digital Agents builds conversational MetaHumans that live inside VR simulators, AR field apps and web-based 3D showrooms. Each avatar is art-directed, performance-captured and connected to your knowledge base so it answers like your best trainer, every time.",
      "Typical XR deployments include virtual patients for medical VR training, safety instructors for oil & gas VR drills, multilingual receptionists for retail AR kiosks, and product specialists for automotive 3D showrooms.",
    ],
    icon: Bot,
    image: X.portrait,
    imageAlt: "Photorealistic MetaHuman avatar developed for XR training",
    keywords: ["metahuman development", "digital human development", "conversational avatars", "VR training avatars", "MetaHuman creator studio"],
    bullets: ["Character design, MetaHuman rigging & grooming", "Motion-capture & facial animation pipelines", "LLM dialogue with knowledge grounding & guardrails", "Voice cloning, lip-sync & 20+ languages", "Unreal, Unity & WebXR deployment"],
    useCases: [
      { title: "VR Patients & Trainees", desc: "Virtual patients and co-workers that react, speak and get assessed inside VR medical and soft-skills training." },
      { title: "AR Kiosk Assistants", desc: "Multilingual receptionists for plants, hospitals and retail that guide visitors hands-free." },
      { title: "Virtual Instructors", desc: "Safety and SOP instructors for oil & gas and manufacturing VR drills with consistent delivery." },
      { title: "3D Showroom Hosts", desc: "Product specialists that demo features inside automotive and e-commerce 3D experiences." },
    ],
    faqs: [
      { q: "How long does a MetaHuman MVP take?", a: "A single production-ready avatar with dialogue typically ships in 4–6 weeks, including capture, rigging and knowledge grounding." },
      { q: "Can avatars run on headsets and kiosks?", a: "Yes — we optimize for Quest and kiosk GPUs, with pixel-streamed high-fidelity versions for hero use-cases." },
      { q: "Do you support our languages?", a: "Voice and dialogue ship in 20+ languages with terminology tuned to your SOPs and product catalog." },
    ],
    stats: [{ value: "60fps", label: "Real-time on-device" }, { value: "20+", label: "Languages" }, { value: "4–6wk", label: "Avatar MVP" }],
  },
  {
    slug: "unity-development",
    title: "Unity Development",
    tagline: "Cross-platform Unity development for mobile AR, VR & 3D",
    description:
      "Unity AR VR development for mobile, WebGL and headsets. Our Unity developers build VR training simulators, AR field apps, gamified learning and 3D product visualizers with clean architecture and backend integration.",
    overview: [
      "As a Unity-focused XR studio, we ship one codebase to iOS, Android, WebGL, Meta Quest, HTC Vive and Apple Vision Pro. URP/HDRP visual polish, multiplayer, cloud saves and LMS/CRM/ERP integrations come standard.",
      "Clients use our Unity builds for VR safety training in oil & gas, AR maintenance guidance in manufacturing, 3D product configurators in automotive and game-based sales training in FMCG.",
    ],
    icon: Box,
    image: X.retroGame,
    imageAlt: "Unity real-time 3D application running on desktop and headset",
    keywords: ["unity development", "unity developers", "AR VR app development", "VR training development", "mobile AR app development"],
    bullets: ["Mobile AR, WebGL & headset builds from one codebase", "URP/HDRP lighting, shaders & optimization", "Multiplayer (Netcode/Photon) & cloud saves", "LMS/xAPI, CRM & ERP integrations", "Device testing lab: Quest, Vive, Vision Pro"],
    useCases: [
      { title: "VR Safety Simulators", desc: "Hazard drills for oil & gas, power and manufacturing with scoring and debrief." },
      { title: "AR Field Guidance", desc: "Step-by-step AR work instructions anchored to real equipment." },
      { title: "3D Configurators", desc: "Real-time product customization for automotive, retail and e-commerce." },
      { title: "Gamified Learning", desc: "Game-based sales and compliance training with leaderboards and rewards." },
    ],
    faqs: [
      { q: "Which devices do you support?", a: "iOS/Android, WebGL browsers, Meta Quest, HTC Vive, Apple Vision Pro and AR glasses via native or WebAR builds." },
      { q: "Can Unity apps work offline?", a: "Yes — offline-first builds with on-device content and sync when connectivity returns, built for plants and remote sites." },
      { q: "Do you integrate with our LMS?", a: "Yes — xAPI/SCORM reporting into your LMS with per-learner scoring from VR and mobile sessions." },
    ],
    stats: [{ value: "50+", label: "Unity apps shipped" }, { value: "6", label: "Headset platforms" }, { value: "99%", label: "Crash-free sessions" }],
  },
  {
    slug: "unreal-development",
    title: "Unreal Development",
    tagline: "Cinematic UE5 worlds, XR simulators & digital twins",
    description:
      "Unreal Engine 5 development for photorealistic VR simulators, defence visualization and industrial digital twins — Nanite geometry, Lumen lighting and Pixel Streaming to any browser.",
    overview: [
      "Our Unreal developers craft cinematic UE5 environments for VR training where realism matters: refineries, substations, cockpits and tactical terrain. Pixel Streaming puts that fidelity in a browser link with no install.",
      "Defence teams use our UE5 builds for tactical visualization (VisTaS-style), UAV and weapons simulators; energy and manufacturing teams use them for digital-twin operations rooms.",
    ],
    icon: Orbit,
    image: X.neonGame,
    imageAlt: "Photorealistic Unreal Engine 5 XR simulator environment",
    keywords: ["unreal engine development", "UE5 developers", "VR simulator development", "pixel streaming", "defence simulation"],
    bullets: ["UE5 worlds: Nanite, Lumen, PCG & Niagara FX", "Blueprints + C++ gameplay and systems", "Pixel Streaming to browser (no install)", "Digital-twin data bindings (IoT/SCADA)", "Haptics, motion platforms & multi-display"],
    useCases: [
      { title: "Tactical Visualization", desc: "VisTaS-style terrain, scenario authoring and after-action review for defence." },
      { title: "UAV & Weapons Trainers", desc: "Stick-time simulators with realistic ballistics, weather and failure modes." },
      { title: "Plant Twins", desc: "Operations-room twins of lines, substations and refineries with live telemetry." },
      { title: "Immersive Showrooms", desc: "Cinematic product reveals and venue walkthroughs streamed to the web." },
    ],
    faqs: [
      { q: "UE5 or Unity — which should we pick?", a: "Pick UE5 when photorealism and complex simulation matter; Unity when you need broad mobile/headset reach. We build both and will recommend honestly." },
      { q: "Can UE5 run on Quest?", a: "Yes with optimization, but heavy scenes are best pixel-streamed to Quest or browser from a GPU server." },
      { q: "Do you support classified environments?", a: "Yes — offline, on-prem and air-gapped delivery with hardened builds for defence and energy." },
    ],
    stats: [{ value: "UE5", label: "Nanite + Lumen" }, { value: "4K", label: "Stream-ready" }, { value: "30+", label: "Sim modules" }],
  },
  {
    slug: "nvidia-omniverse-development",
    title: "NVIDIA Omniverse Development",
    tagline: "OpenUSD pipelines for industrial digital twins & robotics",
    description:
      "NVIDIA Omniverse development services: OpenUSD connectors that unify CAD, IoT and simulation into one live digital twin with RTX rendering, multi-user review and Isaac Sim robotics testing.",
    overview: [
      "We implement Omniverse-based USD pipelines for factories, energy and automotive: CAD/BIM ingestion, live IoT bindings, physically-accurate RTX review and synthetic-data generation for vision models.",
      "Robotics teams use our Isaac Sim setups to test and validate automation virtually before touching the floor — cutting commissioning risk and downtime.",
    ],
    icon: Cuboid,
    image: X.robotHand,
    imageAlt: "NVIDIA Omniverse OpenUSD digital twin with robotic arm",
    keywords: ["nvidia omniverse development", "openusd pipeline", "industrial digital twin", "isaac sim", "RTX rendering"],
    bullets: ["OpenUSD connectors & asset pipelines", "RTX path-traced review & multi-user sessions", "Isaac Sim robotics simulation & validation", "IoT/historian telemetry bindings", "Synthetic data for vision-model training"],
    useCases: [
      { title: "Factory Twins", desc: "Line-level twins with live OEE, alerts and what-if simulation." },
      { title: "Design Review", desc: "Multi-site RTX review of plants, products and layouts in one scene." },
      { title: "Robotics Validation", desc: "Isaac Sim testing of pick, navigation and safety before deployment." },
      { title: "Synthetic Data", desc: "Rendered defect and pose datasets to train QA vision models." },
    ],
    faqs: [
      { q: "What inputs do you need?", a: "CAD/BIM exports plus historian/SCADA access. We handle USD conversion, cleanup and pipeline automation." },
      { q: "On-prem or cloud?", a: "Both — Omniverse Enterprise on your cloud or on-prem GPU workstations, including air-gapped options." },
      { q: "How does this relate to our Unity/Unreal apps?", a: "Omniverse becomes the USD source of truth; we stream or export optimized assets into your headset and web apps." },
    ],
    stats: [{ value: "USD", label: "Open standard core" }, { value: "RTX", label: "Physically accurate" }, { value: "Live", label: "IoT-synced" }],
  },
];

/* ----------------------------- CAPABILITIES ----------------------------- */

export const capabilities: ContentPage[] = [
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    tagline: "Production GenAI, vision AI & predictive analytics for XR",
    description:
      "AI development services for XR and enterprise: RAG copilots, voice bots, document intelligence, computer-vision defect detection and forecasting — deployed with evals, guardrails and MLOps.",
    overview: [
      "Our AI team pairs with the XR studio so intelligence lands where work happens: copilots inside VR debriefs, voice bots on AR glasses, vision QA on the line and forecasting in the twin.",
      "Every model ships with evaluation harnesses, human-in-the-loop review and monitoring — built for regulated manufacturing, energy and healthcare environments.",
    ],
    icon: Bot,
    image: X.aiGradient,
    imageAlt: "Artificial intelligence models powering XR analytics",
    keywords: ["AI development services", "GenAI copilots", "computer vision QA", "RAG chatbot development", "predictive maintenance AI"],
    bullets: ["RAG copilots & voice bots (LLM + your docs)", "Defect detection, OCR & pose estimation", "Demand forecasting & process optimization", "Evals, red-teaming, guardrails & MLOps", "Edge deployment (Jetson, mobile, on-prem)"],
    useCases: [
      { title: "VR Debrief Copilots", desc: "Auto-scored sessions with AI coaching notes pushed to the LMS." },
      { title: "Vision QA", desc: "Camera-based defect detection for steel, auto and FMCG lines." },
      { title: "Voice Field Bots", desc: "Hands-free Q&A for technicians wearing AR glasses." },
      { title: "Ops Forecasting", desc: "Downtime and demand prediction surfaced inside the twin." },
    ],
    faqs: [
      { q: "Do you train custom models?", a: "Yes — fine-tuned language models and custom vision models on your data, plus hosted-model options where they fit better." },
      { q: "How do you handle data privacy?", a: "VPC/on-prem deployment, PII redaction and audit logs; HIPAA- and SOC2-aware delivery patterns." },
      { q: "Can AI run on the edge?", a: "Yes — quantized vision and speech models on Jetson, mobile and headset-adjacent devices." },
    ],
    stats: [{ value: "92%", label: "Avg. deflection in pilots" }, { value: "-40%", label: "Ops cost in rollouts" }, { value: "HITL", label: "Review built-in" }],
  },
  {
    slug: "augmented-reality-ar",
    title: "Augmented Reality (AR)",
    tagline: "AR development for maintenance, assist & retail",
    description:
      "Augmented reality development company building markerless AR maintenance guides, remote expert assistance, virtual try-on and WebAR campaigns for phones, tablets and smart glasses.",
    overview: [
      "Our AR developers overlay CAD-anchored instructions, live IoT data and expert annotations directly on your equipment — cutting first-time-fix times across manufacturing, energy, telecom and field services.",
      "Retail and e-commerce teams use our AR try-on and 3D preview to lift conversion; marketing teams use WebAR for zero-install launches.",
    ],
    icon: ScanEye,
    image: X.arLab,
    imageAlt: "Technician using augmented reality guidance on equipment",
    keywords: ["augmented reality development", "AR app development", "remote AR assistance", "WebAR development", "AR maintenance"],
    bullets: ["Native iOS (ARKit) & Android (ARCore) apps", "WebAR zero-install experiences", "Remote expert calls with AR annotation", "CAD anchoring, SLAM & object tracking", "Smart-glasses builds (Quest, Vision Pro, RealWear-style)"],
    useCases: [
      { title: "AR Maintenance", desc: "Torque specs, step checks and sign-off overlaid on the asset." },
      { title: "Remote Assist", desc: "See-what-I-see calls with snapshots and audit trails." },
      { title: "AR Try-On", desc: "Virtual try-on and in-room preview for retail and e-commerce." },
      { title: "Field Audits", desc: "Guided inspections with photo evidence and auto-reports." },
    ],
    faqs: [
      { q: "Native app or WebAR?", a: "WebAR for reach (no install), native for precision tracking and offline plants. Many clients ship both." },
      { q: "Does AR work offline?", a: "Yes — on-device tracking and cached models for basements, plants and remote sites." },
      { q: "Can AR show live sensor data?", a: "Yes — we bind IoT/SCADA tags to AR overlays with thresholds and alerts." },
    ],
    stats: [{ value: "3x", label: "Faster first-time fix" }, { value: "-45%", label: "Downtime in pilots" }, { value: "Zero", label: "Install with WebAR" }],
  },
  {
    slug: "virtual-reality-vr",
    title: "Virtual Reality (VR)",
    tagline: "VR development for training simulators that transfer",
    description:
      "Virtual reality development company for VR training simulators across manufacturing, oil & gas, defence, healthcare and education — multi-user scenarios with scoring, analytics and LMS reporting.",
    overview: [
      "We build VR simulators people remember: hazard drills, procedure trainers, equipment ops and soft-skills scenarios on Quest, Vive and Vision Pro — each mapped to competencies and assessed automatically.",
      "Programs include instructor consoles, multi-user roles, failure injection and xAPI analytics so L&D can prove skill transfer, not just completions.",
    ],
    icon: Glasses,
    image: X.vrHero,
    imageAlt: "Trainee wearing VR headset in industrial simulator",
    keywords: ["virtual reality development", "VR training simulator", "VR safety training", "Quest enterprise apps", "corporate VR training"],
    bullets: ["Quest, Vive & Vision Pro builds", "Multi-user roles & instructor console", "Scoring rubrics & xAPI/LMS analytics", "Failure injection & randomized scenarios", "Haptics, motion rigs & MDM fleet setup"],
    useCases: [
      { title: "Safety Drills", desc: "Fire, H2S, lockout-tagout and evacuation rehearsal without stopping the plant." },
      { title: "Equipment Ops", desc: "Crane, forklift, UAV and rig operations with realistic physics." },
      { title: "Medical Procedures", desc: "Injection, triage and protocol trainers with competency scoring." },
      { title: "Onboarding", desc: "Site familiarization and culture training at scale." },
    ],
    faqs: [
      { q: "How many headsets do we need?", a: "Pilots start with 2–5 shared devices on a rotation schedule; we plan fleet, hygiene and MDM for scale." },
      { q: "How do you prove ROI?", a: "Baseline vs VR cohorts on time-to-competency, error rates and incident reduction, reported via xAPI dashboards." },
      { q: "Can VR run at our remote sites?", a: "Yes — offline builds with local analytics sync, plus rugged cases and spare-device planning." },
    ],
    stats: [{ value: "+75%", label: "Retention vs classroom" }, { value: "-60%", label: "Training time" }, { value: "xAPI", label: "Skill analytics" }],
  },
  {
    slug: "gaming",
    title: "Gaming",
    tagline: "Serious games & gamified XR people actually play",
    description:
      "Game development studio for serious games: game-based sales training, brand games, truck-racing promos and simulator gamification — real game design with Unity and Unreal, not slideware.",
    overview: [
      "Our game designers and Unity/Unreal engineers build mobile-first games with progression, rewards and analytics — used by beverage, automotive and FMCG brands for training and demand generation.",
      "Every game ships with a CMS for questions/content, leaderboards, anti-cheat basics and campaign analytics.",
    ],
    icon: Gamepad2,
    image: X.controller,
    imageAlt: "Game controller representing serious games built in Unity and Unreal",
    keywords: ["game development", "serious games", "gamified training", "Unity game developers", "brand games"],
    bullets: ["Unity/Unreal mobile & web games", "Progression, leagues & rewards", "Content CMS & localization", "Brand, QR & retail integrations", "Campaign analytics & attribution"],
    useCases: [
      { title: "Sales Training Games", desc: "Product, objection-handling and pitch practice with scoring." },
      { title: "Brand Promo Games", desc: "Racing, arcade and UGC games for launches and retail footfall." },
      { title: "Simulator Gamification", desc: "Missions, ghosts and medals inside VR equipment trainers." },
      { title: "Compliance Quests", desc: "Mandatory training people finish early — voluntarily." },
    ],
    faqs: [
      { q: "Mobile, web or both?", a: "Mobile-first with a WebGL fallback for kiosks and low-friction campaigns." },
      { q: "Can we update content ourselves?", a: "Yes — a no-code CMS for questions, levels and rewards with instant publishing." },
      { q: "How do you measure success?", a: "Completion, replay, knowledge-lift and sales-activity deltas per cohort." },
    ],
    stats: [{ value: "2x", label: "Engagement uplift" }, { value: "50k+", label: "Learners reached" }, { value: "4.8★", label: "Avg. rating" }],
  },
  {
    slug: "metaverse",
    title: "Metaverse",
    tagline: "Browser metaverse venues for events, onboarding & retail",
    description:
      "Metaverse development for browser-based virtual venues: expos, onboarding campuses, showrooms and hybrid events with avatars, spatial voice, booths and CRM analytics — no headset required.",
    overview: [
      "Our metaverse platform work focuses on access: venues that open in a link, run on office laptops and still feel spatial — stages, booths, networking lounges and 3D product zones.",
      "Event, education and retail clients use persistent venues for expos, admissions, onboarding and always-on showrooms with measurable pipeline.",
    ],
    icon: Orbit,
    image: X.metaverse,
    imageAlt: "Avatar exploring a browser-based metaverse venue",
    keywords: ["metaverse development", "virtual event platform", "virtual showroom", "metaverse for onboarding", "WebXR venues"],
    bullets: ["Web-based venues (no install)", "Stages, booths & networking lounges", "Avatars, spatial audio & chat", "Ticketing, CRM & analytics hooks", "No-code scene updates"],
    useCases: [
      { title: "Virtual Expos", desc: "Multi-day expos with booths, agendas and 1:1 meetings." },
      { title: "Onboarding Campuses", desc: "New-hire orientation that scales across cities." },
      { title: "3D Showrooms", desc: "Always-on product zones linked to your catalog." },
      { title: "Hybrid Events", desc: "Physical + virtual audiences in one program." },
    ],
    faqs: [
      { q: "Do attendees need headsets?", a: "No — browsers first, with optional VR access for immersive zones." },
      { q: "How many concurrent users?", a: "Venues shard to 10k+ concurrent with instanced networking lounges." },
      { q: "Can we reuse the venue?", a: "Yes — persistent venues with seasonal reskins and per-event analytics." },
    ],
    stats: [{ value: "10k+", label: "Concurrent capacity" }, { value: "No-install", label: "Browser access" }, { value: "3D", label: "Custom venues" }],
  },
];

/* ------------------------------ INDUSTRIES ------------------------------ */

export const industries: ContentPage[] = [
  {
    slug: "aerospace-defense",
    title: "Aerospace & Defense",
    tagline: "Mission-grade XR: tactical sims, UAV trainers & depot AR",
    description:
      "XR for aerospace & defence: VisTaS-style tactical visualization, UAV and weapons VR simulators, depot maintenance AR andilsens classroom twins — security-first, offline-ready delivery.",
    overview: [
      "Defence teams use our VR simulators for tactical rehearsal, UAV pilot stick-time and weapons drills with realistic ballistics, weather and failure injection — plus after-action review that instructors trust.",
      "MRO depots use AR work cards and twin dashboards to cut turnaround time, with air-gapped deployment and hardened builds for classified environments.",
    ],
    icon: Plane,
    image: X.rocket,
    imageAlt: "Aerospace launch representing defence XR simulation programs",
    keywords: ["defence simulation", "tactical simulator", "UAV simulator", "military VR training", "MRO AR"],
    bullets: ["Tactical sims with scenario authoring & AAR", "UAV, IGLA & weapons VR trainers", "Depot maintenance AR work cards", "Offline, on-prem & air-gapped delivery", "STIG-aware hardened builds"],
    useCases: [
      { title: "Tactical Rehearsal", desc: "Terrain-linked mission rehearsal with multi-crew roles." },
      { title: "UAV Stick-Time", desc: "Flight modes, payloads and emergency handling in VR." },
      { title: "Depot AR", desc: "Torque, sequence and sign-off overlaid on the airframe." },
      { title: "Classroom Twins", desc: "Systems trainers for avionics and engines." },
    ],
    faqs: [
      { q: "Can you deliver air-gapped?", a: "Yes — offline installers, on-prem license servers and no-cloud-telemetry builds." },
      { q: "Do you handle classified content?", a: "We work within your facility and handling procedures; teams are briefed for sensitive programs." },
      { q: "Which headsets are approved?", a: "We target your approved device list (Quest/Vive/Vision Pro typically) with fallback desktop modes." },
    ],
    stats: [{ value: "Offline", label: "Air-gapped ready" }, { value: "AAR", label: "After-action review" }, { value: "Multi-crew", label: "Roles & comms" }],
  },
  {
    slug: "automotive",
    title: "Automotive",
    tagline: "XR showrooms, AR demos & plant twins for auto",
    description:
      "XR for automotive: AR feature demonstrations, 3D vehicle configurators, virtual showrooms, plant digital twins and dealer-technician VR training from one XR studio.",
    overview: [
      "OEMs and dealers use our AR apps to demo ADAS and EV features on the lot, our 3D configurators to lift quotes online, and our plant twins to rehearse line changes before shutdowns.",
      "Aftersales teams train technicians in VR on new platforms — diagnostics, HV safety and service procedures — with per-tech scoring.",
    ],
    icon: Car,
    image: X.car,
    imageAlt: "Car in XR showroom with augmented reality feature overlays",
    keywords: ["automotive AR", "car configurator 3D", "virtual showroom", "dealer VR training", "digital twin manufacturing"],
    bullets: ["AR feature demos (ADAS, EV, infotainment)", "Web 3D configurators with CPQ hooks", "Virtual showrooms & launch events", "Plant & line digital twins", "Technician VR training & assessment"],
    useCases: [
      { title: "Lot AR Demos", desc: "Point a tablet to demo sensors, range and charging live." },
      { title: "Online Configurator", desc: "Spin, spec and price with AR driveway preview." },
      { title: "Line Twins", desc: "Rehearse changeovers and ergonomics virtually." },
      { title: "Tech Training", desc: "HV safety and diagnostics practice without tying up bays." },
    ],
    faqs: [
      { q: "Does the configurator connect to our CPQ?", a: "Yes — spec, pricing and lead handoff integrate with your CPQ/CRM." },
      { q: "Can AR run in low-connectivity dealerships?", a: "Yes — cached models and offline-first builds." },
      { q: "Do you support 2-wheeler and CV too?", a: "Yes — programs span 2W, PV, CV and EV platforms." },
    ],
    stats: [{ value: "360°", label: "Product visualization" }, { value: "+22%", label: "Quote-rate lift" }, { value: "EV-ready", label: "HV safety modules" }],
  },
  {
    slug: "e-commerce",
    title: "E-Commerce",
    tagline: "AR try-on, 3D PDPs & AI search that convert",
    description:
      "XR for e-commerce: virtual try-on, AR in-room preview, 3D product detail pages and AI recommendations that raise conversion and cut returns.",
    overview: [
      "D2C and marketplace sellers embed our WebAR try-on and 3D viewers directly in PDPs — shoppers spin, customize and place products in their room before buying.",
      "AI search and recommendation layers personalize discovery while 3D assets get reused across ads, social and virtual stores.",
    ],
    icon: ShoppingBag,
    image: X.checkout,
    imageAlt: "Online checkout with 3D and AR product preview for e-commerce",
    keywords: ["AR try-on", "3D product viewer", "virtual try-on development", "AR e-commerce", "3D configurator"],
    bullets: ["Virtual try-on (face, wrist, feet, furniture)", "WebAR in-room preview on PDPs", "3D configurators with variant logic", "AI search & recommendations", "Multilingual, multi-currency storefronts"],
    useCases: [
      { title: "Fashion Try-On", desc: "Size-accurate preview that cuts fit returns." },
      { title: "Furniture AR", desc: "True-scale placement with finish swapping." },
      { title: "Beauty Shades", desc: "Real-time shade matching on-device." },
      { title: "D2C 3D PDPs", desc: "Spin/zoom viewers that lift add-to-cart." },
    ],
    faqs: [
      { q: "Which platforms do you integrate with?", a: "Shopify, Magento, headless (Next.js) and custom stacks via embeds and APIs." },
      { q: "How are 3D models made?", a: "Photogrammetry, CAD conversion or modeled-from-scratch with PBR materials and LODs." },
      { q: "Does AR work on all phones?", a: "WebAR covers modern iOS/Android browsers; native SDKs extend tracking quality." },
    ],
    stats: [{ value: "+18%", label: "Conversion lift" }, { value: "-25%", label: "Returns in pilots" }, { value: "WebAR", label: "No app needed" }],
  },
  {
    slug: "education",
    title: "Education",
    tagline: "XR labs & 3D simulation learning for universities",
    description:
      "XR for education: virtual fab-labs, 3D simulation lessons, no-code lesson builders and metaverse campuses for universities and edtech — with LMS/LTI integration.",
    overview: [
      "Our flagship education work includes vFabLab-style virtual laboratories for nano-fabrication training — seven-year university partnerships that let students practice safely before touching real equipment.",
      "Faculty author 3D simulation lessons without code; cohorts join from browsers or headsets with progress synced to the LMS.",
    ],
    icon: GraduationCap,
    image: X.classroom,
    imageAlt: "Students learning with XR and 3D simulation in classroom",
    keywords: ["VR education", "virtual lab", "vFabLab", "simulation based learning", "edtech XR"],
    bullets: ["Virtual labs (nano-fab, physics, chemistry)", "No-code 3D lesson authoring", "Browser + headset access", "LMS/LTI grade & progress sync", "Multi-campus metaverse venues"],
    useCases: [
      { title: "Nano-Fab Labs", desc: "Cleanroom procedure practice with scoring." },
      { title: "3D Sim Lessons", desc: "Concept-first simulations for STEM." },
      { title: "Skill Assessments", desc: "Competency-mapped practicals in VR." },
      { title: "Virtual Campus", desc: "Admissions, orientation and expos online." },
    ],
    faqs: [
      { q: "Does it work on student laptops?", a: "Yes — browser-first with optional headset labs for immersion weeks." },
      { q: "Can faculty create content?", a: "Yes — no-code builders with templates, versioning and peer review." },
      { q: "How is grading handled?", a: "xAPI/LTI sync of attempts, scores and time-on-task into your LMS." },
    ],
    stats: [{ value: "7yrs", label: "University partnerships" }, { value: "Browser", label: "First access" }, { value: "LTI", label: "Grade sync" }],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    tagline: "Medical VR simulators, care twins & AI dashboards",
    description:
      "XR for healthcare: injection and procedure VR simulators, patient-flow digital twins, AR-guided tasks and AI operations dashboards — HIPAA-aware delivery for hospitals and medtech.",
    overview: [
      "Nursing and pharma programs use our haptic injection trainers and protocol sims for competency-based learning with debrief — reducing reliance on scarce lab time.",
      "Hospital operations teams use care-flow twins and AI dashboards for bed, staff and equipment decisions.",
    ],
    icon: HeartPulse,
    image: X.doctor,
    imageAlt: "Clinician using tablet with XR medical training platform",
    keywords: ["medical VR training", "healthcare simulation", "injection simulator", "clinical VR", "hospital digital twin"],
    bullets: ["Injection & procedure VR trainers", "Haptic feedback & anatomy variants", "Competency scoring & debrief", "Care-flow twins & capacity sims", "HIPAA-aware data handling"],
    useCases: [
      { title: "Injection Training", desc: "IM/IV/subcut practice with angle-depth scoring." },
      { title: "Triage Drills", desc: "Mass-casualty prioritization under time pressure." },
      { title: "Equipment Onboarding", desc: "Device operation practice before ward use." },
      { title: "Ops Twins", desc: "Bed and staffing what-if simulation." },
    ],
    faqs: [
      { q: "Is patient data safe?", a: "Yes — de-identified training data, VPC/on-prem options and audit logging." },
      { q: "Do you map to curricula?", a: "Yes — competency maps for nursing, pharma and CME programs." },
      { q: "Haptics included?", a: "Optional haptic gloves/devices for needle-feel and palpation cues." },
    ],
    stats: [{ value: "Sim-first", label: "Competency model" }, { value: "Debrief", label: "Auto-generated" }, { value: "OSCE", label: "Aligned rubrics" }],
  },
  {
    slug: "it-industry",
    title: "IT / TES",
    tagline: "CMS platforms, portals & GenAI enablement for IT",
    description:
      "Digital engineering for IT services and enterprises: AEM/hybrid CMS implementations, design systems, cloud portals and GenAI enablement layered with XR demos.",
    overview: [
      "Our digital product engineering team modernizes web estates — multi-brand, multi-locale, multilingual CMS platforms with Core Web Vitals discipline.",
      "For IT services firms we also build XR demo kits and twin showcases that help pre-sales teams sell immersive work credibly.",
    ],
    icon: Server,
    image: X.servers,
    imageAlt: "Data center servers behind cloud and XR platform engineering",
    keywords: ["AEM development", "hybrid CMS", "design systems", "portal development", "GenAI enablement"],
    bullets: ["AEM & hybrid CMS architecture", "Multi-brand/locale/lingual setups", "Design systems & Core Web Vitals", "Cloud, DevOps & observability", "GenAI copilots & XR demo kits"],
    useCases: [
      { title: "CMS Modernization", desc: "Migrate and unify fragmented estates." },
      { title: "Partner Portals", desc: "Gated content, deal-reg and analytics." },
      { title: "GenAI Enablement", desc: "Grounded assistants over your docs." },
      { title: "XR Demo Kits", desc: "Portable twin/VR demos for pre-sales." },
    ],
    faqs: [
      { q: "AEM or headless?", a: "We implement both — AEM for authoring scale, headless/Next.js for experience speed — often hybrid." },
      { q: "Can you take over our estate?", a: "Yes — audit, stabilize, then modernize incrementally without big-bang rewrites." },
      { q: "Do you do managed support?", a: "Yes — SLAs for platform, content ops and XR demo upkeep." },
    ],
    stats: [{ value: "AEM", label: "Certified patterns" }, { value: "90+", label: "Lighthouse targets" }, { value: "24/7", label: "Support SLAs" }],
  },
  {
    slug: "manufacturing-industry",
    title: "Manufacturing",
    tagline: "Plant twins, vision QA & connected-worker XR",
    description:
      "XR for manufacturing: line and asset digital twins, AI vision defect identification, connected-worker AR apps and VR safety training — proven downtime and quality gains.",
    overview: [
      "Plants use our 3D twins for live OEE visibility, our vision models for in-line defect detection, and our AR apps to guide operators through changeovers with sign-off.",
      "VR safety and equipment modules onboard contract workers faster while xAPI dashboards prove competency to auditors.",
    ],
    icon: Factory,
    image: X.factory,
    imageAlt: "Manufacturing plant floor targeted for XR twin and AR worker apps",
    keywords: ["manufacturing XR", "digital twin manufacturing", "vision inspection", "connected worker", "predictive maintenance"],
    bullets: ["Line & asset twins with OEE bindings", "Vision defect detection at the edge", "AR work instructions & audits", "VR safety & equipment training", "Predictive maintenance analytics"],
    useCases: [
      { title: "Quality Gates", desc: "Camera QA with human-in-the-loop review." },
      { title: "Changeovers", desc: "AR-guided setups with first-pass checks." },
      { title: "Safety Onboarding", desc: "Contractor VR induction in 30 minutes." },
      { title: "Maintenance Twins", desc: "Failure replay and spare planning." },
    ],
    faqs: [
      { q: "Which historians/PLCs do you connect?", a: "OPC-UA, MQTT and historian REST APIs; edge gateways where networks are segmented." },
      { q: "Can vision run on our line PCs?", a: "Yes — quantized models on IPCs, Jetson or existing cameras-plus-server setups." },
      { q: "How do you handle dusty networks?", a: "Offline-first AR/VR with local sync and rugged device profiles." },
    ],
    stats: [{ value: "-32%", label: "Unplanned downtime" }, { value: "99%+", label: "Vision precision" }, { value: "OEE", label: "Live in twin" }],
  },
  {
    slug: "oil-and-gas",
    title: "Oil & Gas",
    tagline: "XR safety training & asset twins for hazardous sites",
    description:
      "XR for oil & gas: VR safety drills (H2S, fire, LOTO), remote asset digital twins, XR permit-to-work rehearsal and real-time monitoring for refineries, rigs and terminals.",
    overview: [
      "Refinery and rig crews rehearse high-risk procedures in VR — breathing apparatus, mustering, isolation and emergency response — without stopping operations or exposing anyone.",
      "Asset twins bind SCADA/historian tags to 3D models of trains, columns and rotating equipment, while remote AR assistance brings experts to the field in seconds.",
    ],
    icon: Fuel,
    image: X.refinery,
    imageAlt: "Oil and gas refinery at night using XR training and digital twin",
    keywords: ["oil and gas VR training", "H2S training simulator", "refinery digital twin", "permit to work VR", "remote AR oil gas"],
    bullets: ["H2S, fire & LOTO VR drills", "Permit-to-work rehearsal modules", "Asset twins with SCADA bindings", "Remote AR expert assistance", "Rugged, low-bandwidth, offline-ready"],
    useCases: [
      { title: "Emergency Drills", desc: "Muster, BA and rescue rehearsal per scenario." },
      { title: "Permit Rehearsal", desc: "Isolation walkthroughs before live permits." },
      { title: "Asset Monitoring", desc: "Live 3D view of critical equipment health." },
      { title: "Expert-on-Call", desc: "AR-guided fixes with audit snapshots." },
    ],
    faqs: [
      { q: "Is VR training accepted by HSE?", a: "Programs map to your HSE matrices with assessed competencies and records for audits." },
      { q: "Can this run offshore?", a: "Yes — offline builds, local device management and satellite-friendly sync." },
      { q: "Do twins need new sensors?", a: "No — we start from existing SCADA/historian tags and add sensing only where gaps block value." },
    ],
    stats: [{ value: "Zero", label: "Exposure in drills" }, { value: "Live", label: "SCADA-bound twins" }, { value: "-40%", label: "Expert travel" }],
  },
  {
    slug: "power-and-energy",
    title: "Power & Energy",
    tagline: "Grid twins, field AR & cooling optimization",
    description:
      "XR for power & energy: substation and cooling-plant digital twins, field-technician AR guides, outage simulators and predictive maintenance for utilities and industrials.",
    overview: [
      "Utilities twin substations, cooling systems and grids for live asset health, switching rehearsal and outage response — with field AR guiding technicians step-by-step.",
      "Sustainability teams track efficiency scenarios in the twin before capex, while training teams certify switching competence in VR.",
    ],
    icon: Zap,
    image: X.wind,
    imageAlt: "Wind turbines representing power and energy XR asset twins",
    keywords: ["utility digital twin", "substation training VR", "field AR utilities", "cooling optimization", "outage simulator"],
    bullets: ["Substation & grid twins", "Switching-procedure VR trainers", "Field AR with live readings", "Cooling & efficiency optimization", "Outage response simulation"],
    useCases: [
      { title: "Switching Practice", desc: "Certify operators on virtual switchgear." },
      { title: "Field AR", desc: "Guided inspections with thermal overlays." },
      { title: "Cooling Twins", desc: "What-if scenarios for EE and reliability." },
      { title: "Storm Response", desc: "Crew coordination drills for outages." },
    ],
    faqs: [
      { q: "Can twins ingest our historians?", a: "Yes — PI/AVEVA-style historians via OPC-UA/MQTT/REST with tag mapping." },
      { q: "Is switching training certified?", a: "Scored against your SOPs with assessor review and records." },
      { q: "Do you cover renewables?", a: "Yes — wind, solar and hybrid plants plus substations and cooling." },
    ],
    stats: [{ value: "24/7", label: "Asset visibility" }, { value: "SOP", label: "Mapped training" }, { value: "kWh", label: "Efficiency scenarios" }],
  },
  {
    slug: "retail",
    title: "Retail & FMCG",
    tagline: "Frontline mobile learning & immersive brand XR",
    description:
      "XR for retail & FMCG: 24x7 mobile learning for frontline teams, game-based sales training, virtual merchandising and AR brand experiences that move cases.",
    overview: [
      "FMCG leaders run 24x7 mobile learning for merchandisers and promoters — micro-modules, game-based assessments and launch playbooks that reach every beat.",
      "Brand teams add AR displays, virtual planograms and metaverse launches to convert footfall and e-commerce traffic alike.",
    ],
    icon: Store,
    image: X.store,
    imageAlt: "Retail store using AR merchandising and mobile XR training",
    keywords: ["retail training app", "FMCG sales training", "mobile learning", "AR retail", "visual merchandising 3D"],
    bullets: ["24x7 mobile learning platform", "Game-based sales assessments", "Launch playbooks & planograms", "AR displays & in-store gamification", "Beat-level analytics dashboards"],
    useCases: [
      { title: "Promoter Onboarding", desc: "Day-one readiness across regions." },
      { title: "Launch Playbooks", desc: "Perfect-store execution per SKU." },
      { title: "Sales Games", desc: "Range-selling and objection practice." },
      { title: "AR Promotions", desc: "Scan-to-win and try experiences." },
    ],
    faqs: [
      { q: "Does it work on low-end phones?", a: "Yes — lightweight builds with offline packs for field devices." },
      { q: "Can we manage content regionally?", a: "Yes — role-based CMS with language and beat-level targeting." },
      { q: "How is field performance tracked?", a: "Completion, quiz-lift, visit compliance and sales correlation." },
    ],
    stats: [{ value: "24x7", label: "Frontline access" }, { value: "2x", label: "Knowledge retention" }, { value: "Beat", label: "Level analytics" }],
  },
  {
    slug: "telecom",
    title: "Telecom",
    tagline: "Network twins, AI collections & field-tech AR",
    description:
      "XR and AI for telecom: network-planning twins, AI-driven collections, field-technician AR and retail-kiosk experiences that cut opex and lift NPS.",
    overview: [
      "Telcos twin cell sites and fiber routes for planning and outage rehearsal, guide field techs with AR fiber-splicing and tower procedures, and deploy AI collectors that recover revenue politely.",
      "Retail teams use kiosk-based AR plan explorers and 3D device showcases.",
    ],
    icon: Radio,
    image: X.cyber,
    imageAlt: "Telecom network operations supported by XR twins and AI",
    keywords: ["telecom digital twin", "fiber AR", "AI collections telecom", "field technician AR", "network planning 3D"],
    bullets: ["Site & fiber-route twins", "Field-tech AR procedures", "AI voice/text collections", "Outage & rollout simulation", "Retail AR plan explorers"],
    useCases: [
      { title: "Site Twins", desc: "Plan capacity and rehearse cutovers." },
      { title: "Fiber AR", desc: "Splice, test and certify in the field." },
      { title: "Smart Collections", desc: "Empathetic AI recovery journeys." },
      { title: "Retail Kiosks", desc: "Plan and device exploration in 3D." },
    ],
    faqs: [
      { q: "Does this integrate with our BSS/OSS?", a: "Yes — APIs into inventory, ticketing and billing with event-driven sync." },
      { q: "Can AI collectors stay compliant?", a: "Yes — DND-aware journeys, consent logging and human escalation." },
      { q: "Do field apps work offline?", a: "Yes — cached routes, procedures and evidence capture." },
    ],
    stats: [{ value: "+18%", label: "Collections uplift" }, { value: "AR", label: "First-time-fix gains" }, { value: "NPS", label: "Retail experience lift" }],
  },
];

/* --------------------------- TECH SOLUTIONS --------------------------- */

export const techSolutions: ContentPage[] = [
  {
    slug: "digital-twin",
    title: "Digital Twin",
    tagline: "Live 3D twins of plants, assets & campuses",
    description:
      "Digital twin development: live 3D replicas of factories, refineries, substations and campuses bound to IoT/SCADA — with alerts, replay and what-if simulation.",
    overview: [
      "We ingest CAD/BIM, bind historian and IoT tags, and deliver operations-room twins with role-based views for production, maintenance and HSE.",
      "Teams replay incidents, rehearse changes and forecast failures — then push the same 3D into AR/VR field apps.",
    ],
    icon: Cuboid,
    image: X.solTwin,
    imageAlt: "Digital twin solution for live industrial asset monitoring",
    keywords: ["digital twin development", "industrial digital twin", "plant twin", "IoT 3D visualization", "predictive maintenance twin"],
    bullets: ["CAD/BIM ingestion & optimization", "IoT/historian/SCADA bindings", "Alerts, thresholds & replay", "What-if & failure simulation", "AR/VR field extensions"],
    useCases: [
      { title: "OEE Command View", desc: "Live line health for supervisors." },
      { title: "Maintenance Replay", desc: "Reconstruct failures for RCA." },
      { title: "Energy Scenarios", desc: "Model efficiency before capex." },
      { title: "Campus Twins", desc: "Safety, space and visitor planning." },
    ],
    faqs: [
      { q: "What data do you need to start?", a: "Layouts/CAD plus tag lists from historians or SCADA. A pilot twin can start from P&IDs and photos." },
      { q: "How live is 'live'?", a: "Second-level telemetry for critical tags, minute-level for the rest — tuned to your network." },
      { q: "Can operators use it daily?", a: "Yes — role-based views, shift handover notes and mobile access are standard." },
    ],
    stats: [{ value: "Live", label: "Telemetry sync" }, { value: "Replay", label: "Incident RCA" }, { value: "3D", label: "One source of truth" }],
  },
  {
    slug: "immersive-360-virtual-tours",
    title: "Immersive 360 Virtual Tours",
    tagline: "Walk any plant, campus or property from a link",
    description:
      "360 virtual tour development with hotspots, documents, guided paths and measurement — for plants, campuses, dealerships and real estate. No install, embeddable anywhere.",
    overview: [
      "We capture in 8K 360, stitch and publish tours with hotspot docs, videos, quizzes and guided narrations — used for inductions, audits, admissions and sales.",
      "Tours embed in your site, LMS and proposals with visit analytics.",
    ],
    icon: Video,
    image: X.interior,
    imageAlt: "360 virtual tour of an industrial and commercial interior space",
    keywords: ["360 virtual tour", "virtual site visit", "plant walkthrough 360", "campus virtual tour", "360 photography services"],
    bullets: ["8K 360 capture & stitching", "Hotspots: docs, video, quizzes", "Guided paths & narration", "Measurement & floor-plan links", "Embed + visit analytics"],
    useCases: [
      { title: "Plant Induction", desc: "Pre-visit orientation that shortens gate time." },
      { title: "Remote Audits", desc: "Evidence-linked walkthroughs for auditors." },
      { title: "Admissions", desc: "Campus tours that lift applications." },
      { title: "Property Sales", desc: "Always-open showings with agent handoff." },
    ],
    faqs: [
      { q: "Do you do the capture?", a: "Yes — our crew captures on-site, or we direct your facilities team remotely." },
      { q: "Can tours work offline?", a: "Yes — packaged offline tours for expos and low-connectivity sites." },
      { q: "How are tours updated?", a: "Reshoot deltas or hotspot edits via CMS without rebuilding." },
    ],
    stats: [{ value: "8K", label: "Capture quality" }, { value: "Web", label: "Zero install" }, { value: "Embed", label: "Anywhere" }],
  },
  {
    slug: "ai-powered-defect-identification",
    title: "AI-Powered Defect Identification",
    tagline: "Vision QA that catches what eyes miss",
    description:
      "Computer-vision defect identification for steel, automotive and FMCG lines: dataset design, edge deployment, human-in-the-loop review and MES integration.",
    overview: [
      "We design the dataset with your quality team, train and validate models, and deploy at the edge with operator review stations — so false positives never stop the line alone.",
      "Programs include drift monitoring, retraining loops and traceability into your MES/QMS.",
    ],
    icon: ScanEye,
    image: X.circuit,
    imageAlt: "Circuit-level computer vision inspecting defects in XR quality workflow",
    keywords: ["defect detection AI", "visual inspection", "computer vision manufacturing", "quality 4.0", "surface defect detection"],
    bullets: ["Dataset strategy & labeling ops", "Custom vision models + evals", "Edge deployment (IPC/Jetson)", "HITL review stations", "MES/QMS traceability"],
    useCases: [
      { title: "Steel Surface QA", desc: "Slab and coil defect maps per meter." },
      { title: "Auto Component QA", desc: "Crack, burr and assembly checks." },
      { title: "FMCG Label QA", desc: "Print, seal and fill verification." },
      { title: "Weld Inspection", desc: "Bead and porosity scoring." },
    ],
    faqs: [
      { q: "What accuracy can we expect?", a: "Pilots typically target 98%+ precision at agreed recall, validated on your held-out line data." },
      { q: "How many images do you need?", a: "Programs start with a few thousand labeled images; synthetic data accelerates rare defects." },
      { q: "Does it integrate with our PLC/MES?", a: "Yes — pass/fail signals, image evidence and lot traceability." },
    ],
    stats: [{ value: "98%+", label: "Pilot precision target" }, { value: "Edge", label: " ms-level inference" }, { value: "MES", label: "Integrated" }],
  },
  {
    slug: "remote-ar-assistance",
    title: "Remote AR Assistance",
    tagline: "Experts on-site in seconds, from anywhere",
    description:
      "Remote AR assistance platform: see-what-I-see video calls with AR annotations, snapshots, session records and low-bandwidth mode for plants, rigs and field fleets.",
    overview: [
      "Technicians start a one-tap call from phone, tablet or glasses; experts annotate live on the frozen frame while both sides capture evidence.",
      "Every session is logged with snapshots and notes — building a searchable fix library that deflects future tickets.",
    ],
    icon: Headset,
    image: X.solRemote,
    imageAlt: "Remote AR assistance session with expert annotations",
    keywords: ["remote visual assistance", "AR remote support", "field service AR", "expert on demand", "visual support software"],
    bullets: ["One-tap calls (no app for guests)", "AR freeze-frame annotation", "Snapshots & session records", "Low-bandwidth & offline capture", "Ticketing/FSMS integrations"],
    useCases: [
      { title: "Breakdown Triage", desc: "Stabilize first, dispatch once." },
      { title: "Commissioning", desc: "Vendor experts without flights." },
      { title: "Warranty Claims", desc: "Evidence-rich approvals." },
      { title: "Contractor Supervision", desc: "Verify critical steps live." },
    ],
    faqs: [
      { q: "Do guests need accounts?", a: "No — SMS/WhatsApp link join for customers and contractors." },
      { q: "Does it work on 3G?", a: "Yes — adaptive bitrate plus photo-fallback annotation." },
      { q: "Where is video stored?", a: "Your region (or on-prem) with retention policies you control." },
    ],
    stats: [{ value: "-40%", label: "Expert travel" }, { value: "1-tap", label: "Guest join" }, { value: "Logged", label: "Every session" }],
  },
  {
    slug: "3d-product-experiences",
    title: "3D Product Experiences",
    tagline: "Spin, configure and preview in AR before buying",
    description:
      "3D product experience development: WebGL configurators, AR previews and virtual showrooms for automotive, manufacturing and retail that shorten sales cycles.",
    overview: [
      "We convert CAD or photos into lightweight PBR 3D, then ship configurators with variant logic, pricing hooks and AR placement.",
      "Compressors, vehicles, furniture and devices all sell better when buyers can explore every option themselves.",
    ],
    icon: Box,
    image: X.product3d,
    imageAlt: "3D product configurator showing equipment options in XR",
    keywords: ["3D configurator", "product configurator development", "AR product preview", "3D showroom", "CPQ 3D"],
    bullets: ["CAD-to-web 3D pipelines", "Variant, BOM & pricing logic", "AR placement & try-on", "CPQ/CRM lead handoff", "PDP & showroom embeds"],
    useCases: [
      { title: "Industrial Configurators", desc: "Spec compressors and skids visually." },
      { title: "Vehicle Configurators", desc: "Trim, color and accessory builds." },
      { title: "Furniture & Retail", desc: "Finish and layout previews." },
      { title: "Dealer Enablement", desc: "Tablet selling with AR." },
    ],
    faqs: [
      { q: "What 3D inputs work?", a: "STEP/IGES, SolidWorks, photos or nothing — we model from drawings when needed." },
      { q: "How fast do pages load?", a: "LOD streaming and Draco compression target sub-3s interactive on 4G." },
      { q: "Can sales use it offline?", a: "Yes — packaged tablet builds for.events and remote pitches." },
    ],
    stats: [{ value: "+22%", label: "Quote-rate lift" }, { value: "<3s", label: "Interactive load" }, { value: "AR", label: "Placement built-in" }],
  },
  {
    slug: "interactive-technical-manuals",
    title: "Interactive Technical Manuals",
    tagline: "SOPs technicians actually follow, in 3D",
    description:
      "Interactive 3D technical manual development: step-by-step XR SOPs with checks, torque specs, sign-off and version control — paperless shopfloors and flightlines.",
    overview: [
      "We convert PDFs and tribal knowledge into guided 3D procedures with parts highlighting, warnings, measurements and photo evidence at each step.",
      "Supervisors track completion and deviations per asset, tech and shift.",
    ],
    icon: BookOpenCheck,
    image: X.solManuals,
    imageAlt: "Interactive 3D technical manual guiding a maintenance procedure",
    keywords: ["interactive manuals", "digital work instructions", "IETM development", "SOP digitization", "paperless shopfloor"],
    bullets: ["3D step flows with checks", "Torque/spec callouts & warnings", "Photo evidence & e-sign", "Offline mode & kiosk builds", "Versioning & change audit"],
    useCases: [
      { title: "Assembly SOPs", desc: "Sequence-proof builds with sign-off." },
      { title: "Maintenance Cards", desc: "Depot and line procedures in 3D." },
      { title: "Calibration Guides", desc: "Instrumented steps with tolerances." },
      { title: "Audit Packs", desc: "One-click evidence exports." },
    ],
    faqs: [
      { q: "Can we author updates?", a: "Yes — structured authoring with engineering approval workflows." },
      { q: "Do manuals work offline?", a: "Yes — full offline packs per asset with delta sync." },
      { q: "PDF fallback?", a: "Auto-generated PDFs per revision for records." },
    ],
    stats: [{ value: "Paperless", label: "Execution" }, { value: "Step", label: "Level sign-off" }, { value: "Audit", label: "Ready exports" }],
  },
  {
    slug: "injection-simulators",
    title: "Injection Simulators",
    tagline: "Competency-based injection practice in VR",
    description:
      "Injection simulator development for nursing and pharma: haptic VR trainers for IM/IV/subcutaneous technique with anatomy variants, scoring and curriculum mapping.",
    overview: [
      "Learners practice site selection, angle, depth and aspiration on varied anatomies with realistic tissue response — scored against OSCE-style rubrics.",
      "Programs include instructor debrief views, cohort analytics and curriculum alignment for nursing colleges and pharma L&D.",
    ],
    icon: Syringe,
    image: X.solInjection,
    imageAlt: "VR injection simulator for medical training",
    keywords: ["injection simulator", "VR nursing training", "pharma training VR", "clinical skills simulator", "IM IV training"],
    bullets: ["IM/IV/subcut technique modules", "Anatomy & BMI variants", "Haptic tissue response (optional)", "OSCE-mapped scoring & debrief", "Cohort analytics & curriculum maps"],
    useCases: [
      { title: "Nursing Colleges", desc: "Pre-clinical competency at scale." },
      { title: "Pharma Field Teams", desc: "Device and administration training." },
      { title: "Vaccination Drives", desc: "Rapid workforce certification." },
      { title: "Refresher Labs", desc: "Annual re-certification in VR." },
    ],
    faqs: [
      { q: "Which techniques are covered?", a: "IM, IV, subcutaneous and intradermal with site-specific modules." },
      { q: "Is haptics required?", a: "No — controller-based scoring works; haptics add realism where budgets allow." },
      { q: "Can we map to our syllabus?", a: "Yes — module-to-outcome mapping with assessor moderation." },
    ],
    stats: [{ value: "OSCE", label: "Mapped rubrics" }, { value: "Multi", label: "Anatomy variants" }, { value: "Cohort", label: "Analytics" }],
  },
];

export type CaseStudy = { slug: string; title: string; industry: string; tags: string[]; desc: string };

export const caseStudies: CaseStudy[] = [
  { slug: "24x7-mobile-learning-tool-for-future-workforce-of-global-fmcg-leader", title: "24x7 Mobile Learning Tool for Future Workforce of Global FMCG Leader", industry: "Retail & FMCG", tags: ["Mobile"], desc: "Always-on mobile learning for frontline teams — micro-modules and assessments that build skills continuously across regions." },
  { slug: "ai-driven-payment-collection-system-for-leading-telecommunications-provider", title: "AI-Driven Payment Collection System for Leading Telecommunications Provider", industry: "Telecom", tags: ["Gen AI"], desc: "AI-driven collection journeys that recover revenue efficiently while improving customer experience and satisfaction." },
  { slug: "ai-enabled-dashboard-for-leading-healthcare-company-in-dubai", title: "AI-Enabled Dashboard for Leading Healthcare Company in Dubai", industry: "Healthcare", tags: ["Data and AI"], desc: "An AI-enabled operations dashboard turning clinical and operational data into decisions that improve care and performance." },
  { slug: "ar-platform-for-feature-demonstration-of-automotive-company", title: "AR Platform for Feature Demonstration of Automotive Company", industry: "Automotive", tags: ["AR", "VR"], desc: "An AR demonstration platform that showcases vehicle features immersively to prospective buyers on site and online." },
  { slug: "computer-vision-based-defect-identification-for-one-of-the-leading-steel-manufacturer", title: "Computer Vision-Based Defect Identification for Leading Steel Manufacturer", industry: "Manufacturing", tags: ["Computer Vision and AI"], desc: "Real-time vision QA on the line — catching surface defects automatically and raising overall equipment effectiveness." },
  { slug: "connected-digital-experience-platform-for-automotive-manufacturer", title: "Connected Digital Experience Platform for Automotive Manufacturer", industry: "Automotive", tags: ["VR"], desc: "A connected platform unifying online and offline touchpoints into one seamless automotive customer journey." },
  { slug: "design-and-development-of-digital-healthcare-platform-for-public-healthcare-company", title: "Digital Healthcare Platform for Public Healthcare Company", industry: "Healthcare", tags: ["Digital"], desc: "A comprehensive digital platform improving patient engagement, service access and health outcomes at population scale." },
  { slug: "development-of-b2c-health-fitness-app-for-health-and-fitness-company", title: "B2C Health & Fitness App for Health and Fitness Company", industry: "Healthcare", tags: ["Mobile"], desc: "A feature-rich consumer wellness app with personalized fitness journeys and engagement mechanics." },
  { slug: "development-of-cms-based-digital-ecosystem-for-the-leading-finance-company", title: "CMS-Based Digital Ecosystem for Leading Finance Company", industry: "Banking", tags: ["AEM"], desc: "A robust CMS ecosystem streamlining content operations, engagement and service delivery for a finance leader." },
  { slug: "development-of-no-code-saas-platform-for-event-management-company", title: "No-Code SaaS Platform for Event Management Company", industry: "Events", tags: ["Metaverse"], desc: "A no-code event platform letting organizers build, manage and measure virtual experiences without developers." },
  { slug: "development-of-no-code-saas-solution-for-hybrid-events-for-an-event-management-company", title: "No-Code SaaS Solution for Hybrid Events", industry: "Events", tags: ["Metaverse"], desc: "Hybrid event delivery uniting in-person and virtual audiences in one immersive program." },
  { slug: "development-of-vr-laboratory-virtual-fablab-for-an-academic-institute-in-saudi-arabia", title: "VR Laboratory (Virtual FabLab) for Academic Institute in Saudi Arabia", industry: "Education", tags: ["VR"], desc: "A cutting-edge VR laboratory enabling hands-on nano-fabrication learning and experimentation in a virtual cleanroom." },
  { slug: "diy-and-commerce-enabled-websites-with-multi-lingual-capabilities-for-indias-premier-immigration-firm", title: "DIY & Commerce Websites with Multi-Lingual Capabilities for Immigration Firm", industry: "Immigration and Career Services", tags: ["Digital"], desc: "DIY service flows plus commerce, multilingual by design, converting a diverse global audience." },
  { slug: "driving-engagement-and-sales-with-a-custom-built-truck-racing-game", title: "Custom-Built Truck Racing Game for Engagement & Sales", industry: "Manufacturing", tags: ["Unity 3D"], desc: "A custom racing game that entertains retail audiences while driving product engagement and qualified leads." },
  { slug: "driving-operational-efficiency-modernizing-a-global-hvac-leaders-mobile-platform-for-enhanced-sales-and-audit-capabilities", title: "Modernizing a Global HVAC Leader's Mobile Platform", industry: "Manufacturing", tags: ["Mobile"], desc: "A modernized field platform giving sales teams speed and auditors evidence — lifting operational excellence." },
  { slug: "end-to-end-cms-implementation-aem-for-leading-2-wheeler-company", title: "End-to-End CMS (AEM) Implementation for Leading 2-Wheeler Company", industry: "Automotive", tags: ["AEM"], desc: "A unified omnichannel CMS powering global customer and dealer engagement for a 2-wheeler leader." },
  { slug: "enhancing-customer-journeys-through-a-hybrid-cms-platform-for-an-insurance-company", title: "Hybrid CMS Platform for Insurance Customer Journeys", industry: "Insurance", tags: ["Digital"], desc: "A hybrid CMS orchestrating end-to-end insurance journeys across every channel and touchpoint." },
  { slug: "game-based-sales-training-for-leading-beverage-company", title: "Game-Based Sales Training for Leading Beverage Company", industry: "Beverage", tags: ["3D"], desc: "Game-based sales training that improves learning outcomes and engagement across beverage sales teams." },
  { slug: "immersive-product-experiences-for-a-compressor-manufacturing-company", title: "Immersive Product Experiences for Compressor Manufacturer", industry: "Manufacturing", tags: ["Unity 3D"], desc: "Immersive 3D product stories that demonstrate compressor capabilities more effectively than brochures ever could." },
  { slug: "migration-and-modernization-of-website-and-mobile-app-for-uae-based-real-estate-company", title: "Website & Mobile App Modernization for UAE Real Estate Company", industry: "Real Estate", tags: ["Mobile"], desc: "A migrated, modernized web and mobile estate delivering advanced search, listings and customer experience." },
  { slug: "modernization-of-digital-platform-for-shipping-company", title: "Digital Platform Modernization for Shipping Company", industry: "Maritime", tags: ["Digital"], desc: "A transformed logistics platform improving efficiency, visibility and experience across global operations." },
  { slug: "modernization-of-e-commerce-platform-and-development-of-mobile-app-for-a-leading-educational-materials-provider", title: "E-Commerce Platform & Mobile App for Educational Materials Provider", industry: "E-commerce", tags: ["Mobile"], desc: "A revamped commerce platform plus mobile app improving accessibility and growth in educational retail." },
  { slug: "multi-brand-multi-local-multi-lingual-digital-platform-for-higher-education-institute-in-india", title: "Multi-Brand, Multi-Local, Multi-Lingual Platform for Higher Education Institute", industry: "Education", tags: ["AEM"], desc: "One unified platform serving multiple brands, locales and languages to extend an institute's global reach." },
  { slug: "no-code-saas-platform-for-creating-3d-simulation-based-learning-experiences-for-edtech-company", title: "No-Code SaaS for 3D Simulation-Based Learning (EdTech)", industry: "Education", tags: ["3D"], desc: "A no-code authoring platform letting educators create interactive 3D simulation lessons without developers." },
  { slug: "optimizing-the-hybrid-cms-platform-for-all-customer-journeys-and-touchpoints-for-an-insurance-company", title: "Optimizing Hybrid CMS for Insurance Journeys & Touchpoints", industry: "Insurance", tags: ["Digital"], desc: "Optimization across every journey and touchpoint for seamless, personalized insurance interactions." },
  { slug: "remote-asset-performance-optimization-using-3d-digital-twin-technology", title: "Remote Asset Optimization Using 3D Digital Twin Technology", industry: "Manufacturing", tags: ["Digital Twin"], desc: "A 3D twin for remote asset monitoring — proactive decisions and efficiency gains without site visits." },
  { slug: "revolutionizing-virtual-events-with-a-no-code-metaverse-platform", title: "No-Code Metaverse Platform for Virtual Events", industry: "Events", tags: ["Metaverse"], desc: "Immersive virtual events with interactive venues that elevate engagement and collaboration." },
  { slug: "visualization-immersive-simulation-of-tactical-scenarios-vistas", title: "Visualization & Immersive Simulation of Tactical Scenarios (VisTaS)", industry: "Defence", tags: ["VR", "AI"], desc: "An advanced visualization and simulation platform for tactical scenarios — sharper situational training and decisions." },
  { slug: "vr-based-digital-twin-platform-for-training-for-a-global-sustainable-development-agency", title: "VR-Based Digital Twin Platform for Training (Sustainable Development)", industry: "Manufacturing", tags: ["VR", "AI"], desc: "A VR twin platform delivering advanced, repeatable training programs for field and plant teams." },
];

export const caseStudySlugs = caseStudies.map((c) => c.slug);

export const blogPosts = [
  { slug: "understanding-cms-architecture", title: "Understanding CMS Architecture", excerpt: "Headless vs hybrid vs traditional — how to choose for scale.", date: "2025-11-02" },
  { slug: "top-5-cms-for-small-businesses", title: "Top 5 CMS for Small Businesses", excerpt: "What to pick when you need speed without lock-in.", date: "2025-10-14" },
  { slug: "the-future-of-cms-technology", title: "The Future of CMS Technology", excerpt: "AI authoring, visual building and edge delivery.", date: "2025-09-28" },
  { slug: "optimizing-your-cms-for-seo", title: "Optimizing Your CMS for SEO", excerpt: "Core Web Vitals, schema and rendering checklist.", date: "2025-09-10" },
  { slug: "content-strategy-for-your-cms", title: "Content Strategy for Your CMS", excerpt: "Models, governance and localization that scale.", date: "2025-08-22" },
];

export const allStaticRoutes = [
  "/about-us",
  "/contact-us",
  "/case-studies",
  "/blogs",
  "/terms-of-use",
  "/privacy-policy",
  "/pankh-uav-simulator",
  "/xr-centre-of-excellence-xr-coe",
  "/geographic-information-system-gis",
  "/digital-product-engineering",
];
