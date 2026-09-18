/**
 * Per-capability "Our Services" blocks.
 * Mirrors the reference capability-page IA (service heading + description +
 * bullet list, 3 blocks per capability) written as ORIGINAL copy.
 */
export type CapService = { title: string; desc: string; bullets: string[] };

export const CAPABILITY_SERVICES: Record<string, CapService[]> = {
  gaming: [
    {
      title: "Game Development & Design",
      desc: "Full-cycle game development with cross-platform builds, immersive AR/VR modes and AI-driven gameplay — from concept and art to launch and live ops.",
      bullets: [
        "Cross-platform development for PC, console and mobile",
        "Immersive AR/VR game modes and levels",
        "AI-enhanced NPCs and dynamic difficulty systems",
      ],
    },
    {
      title: "Monetization & Engagement",
      desc: "Revenue systems that respect players: rewarded ads, loyalty loops and digital collectibles tuned with live analytics.",
      bullets: [
        "In-game advertising and microtransaction design",
        "Reward systems and player loyalty programs",
        "Digital collectibles and seasonal event passes",
      ],
    },
    {
      title: "Esports & Community Solutions",
      desc: "Tournament infrastructure and fan experiences that turn players into communities and communities into audiences.",
      bullets: [
        "Tournament platforms with brackets and live streaming",
        "Virtual fan-engagement experiences and watch parties",
        "Custom hubs for esports teams and creators",
      ],
    },
  ],
  metaverse: [
    {
      title: "Venue Design & Development",
      desc: "Custom browser-based 3D venues — expos, campuses and showrooms — with avatars, spatial voice and branded environments.",
      bullets: [
        "Custom 3D venue design and world-building",
        "Avatar systems with expressive customization",
        "Spatial audio zones for stages and networking",
      ],
    },
    {
      title: "Events & Engagement",
      desc: "Program formats that keep virtual audiences active: agendas, booths, gamified quests and live hosting tooling.",
      bullets: [
        "Multi-track agendas with live stage tooling",
        "Exhibitor booths with 1:1 meeting flows",
        "Gamified quests, leaderboards and rewards",
      ],
    },
    {
      title: "Platform & Analytics",
      desc: "Ticketing, CRM and analytics plumbing plus no-code updates so venues stay alive between events.",
      bullets: [
        "Ticketing, registration and CRM integrations",
        "Attendance, booth and pipeline analytics",
        "No-code scene and content updates",
      ],
    },
  ],
  "augmented-reality-ar": [
    {
      title: "AR App Development",
      desc: "Native and web AR builds for phones, tablets and glasses — from markerless tracking to geospatial anchors.",
      bullets: [
        "Native iOS (ARKit) and Android (ARCore) applications",
        "Zero-install WebAR campaigns and product views",
        "Smart-glasses builds for field and retail",
      ],
    },
    {
      title: "Enterprise AR",
      desc: "Shopfloor-grade AR: guided maintenance, remote expertise and audit trails that survive plants and low bandwidth.",
      bullets: [
        "CAD-anchored maintenance guidance",
        "Remote expert assistance with annotation",
        "Guided inspections with photo evidence",
      ],
    },
    {
      title: "Consumer AR",
      desc: "Try-on, filters and retail theater that convert browsers into buyers.",
      bullets: [
        "Virtual try-on for fashion, eyewear and beauty",
        "In-room product preview for home and furniture",
        "Social filters and launch campaigns",
      ],
    },
  ],
  "virtual-reality-vr": [
    {
      title: "VR Simulator Development",
      desc: "Training simulators with realistic physics, randomized scenarios and failure injection — mapped to competencies.",
      bullets: [
        "Scenario authoring with branching outcomes",
        "Realistic equipment and environment physics",
        "Failure injection and assessment rubrics",
      ],
    },
    {
      title: "Multi-User & Instructor Tools",
      desc: "Shared sessions with roles, voice and instructor oversight plus debrief-grade replay.",
      bullets: [
        "Multi-learner roles with spatial voice",
        "Instructor console with session control",
        "After-action review with timeline replay",
      ],
    },
    {
      title: "Deployment & Analytics",
      desc: "Fleet rollout, MDM, offline builds and xAPI analytics that prove skill transfer.",
      bullets: [
        "Headset fleet setup with MDM and hygiene kits",
        "Offline-first builds for remote sites",
        "xAPI dashboards synced to your LMS",
      ],
    },
  ],
  "artificial-intelligence": [
    {
      title: "GenAI Assistants",
      desc: "Grounded copilots and voice bots over your documents and systems — with evals and guardrails from day one.",
      bullets: [
        "RAG copilots with cited answers",
        "Voice-enabled field and support bots",
        "Red-teaming, guardrails and monitoring",
      ],
    },
    {
      title: "Vision Intelligence",
      desc: "Camera-based QA, OCR and pose estimation deployed at the edge with human-in-the-loop review.",
      bullets: [
        "Defect-detection models for production lines",
        "Document OCR and form understanding",
        "Pose and activity recognition for safety",
      ],
    },
    {
      title: "Predictive Analytics",
      desc: "Forecasting and optimization surfaced where decisions happen — including inside digital twins.",
      bullets: [
        "Downtime and demand forecasting",
        "Process-parameter optimization",
        "MLOps with drift monitoring and retraining",
      ],
    },
  ],
};
