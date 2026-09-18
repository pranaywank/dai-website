/**
 * Per-service content mirroring the reference services-page IA:
 * value cards ("Why X Matters"), expertise list ("Our X Expertise").
 * All ORIGINAL copy — same topics, our own words.
 */
export type ValueProp = { title: string; desc: string };
export type Expertise = { title: string; desc: string };

export const SERVICE_EYEBROW: Record<string, string> = {
  "metahuman-development": "CONVERSATIONAL AI AVATARS",
  "unity-development": "REAL-TIME 3D PLATFORM",
  "unreal-development": "CINEMATIC REAL-TIME ENGINE",
  "nvidia-omniverse-development": "OPENUSD INDUSTRIAL PLATFORM",
};

export const SERVICE_VALUE: Record<string, ValueProp[]> = {
  "metahuman-development": [
    { title: "Natural Conversations", desc: "Avatars that listen, respond and emote like your best staff member." },
    { title: "24x7 Availability", desc: "Reception, guidance and training that never take a break." },
    { title: "Multilingual Reach", desc: "Serve every visitor and trainee in 20+ languages." },
    { title: "Brand Consistency", desc: "Every answer on-message, every time, across sites." },
    { title: "Training Realism", desc: "Patients, customers and co-workers that react believably." },
    { title: "Rapid Updates", desc: "New knowledge deployed to all avatars in minutes." },
  ],
  "unity-development": [
    { title: "Interactive Training", desc: "Modules that replicate real scenarios for faster skill development." },
    { title: "Digital Twin & Monitoring", desc: "Live twins for analytics and predictive maintenance of assets." },
    { title: "Immersive Marketing", desc: "Interactive product visualization that captivates customers." },
    { title: "Cross-Platform Integration", desc: "One build across HMDs, mobile, desktop and web." },
    { title: "Cost Reduction & Innovation", desc: "Faster innovation cycles with far less physical prototyping." },
    { title: "Platform Versatility", desc: "Flexible, scalable AR/VR foundations for any enterprise need." },
  ],
  "unreal-development": [
    { title: "Cinematic Realism", desc: "Nanite + Lumen fidelity where believability drives outcomes." },
    { title: "Complex Simulation", desc: "Ballistics, weather and physics for mission-grade trainers." },
    { title: "Pixel Streaming", desc: "Photoreal UE5 in a browser link — no install, no headset required." },
    { title: "Multi-Display Operations", desc: "Video walls and ops rooms driven by live simulation." },
    { title: "Rapid Content Iteration", desc: "Scenario variants authored in days, not sprints." },
    { title: "Enterprise Hardening", desc: "Offline, on-prem delivery for regulated environments." },
  ],
  "nvidia-omniverse-development": [
    { title: "Unified Pipelines", desc: "One OpenUSD source of truth across CAD, IoT and simulation." },
    { title: "Live Collaboration", desc: "Multi-user RTX review across sites in the same scene." },
    { title: "Physical Accuracy", desc: "Path-traced rendering and true-scale simulation." },
    { title: "Robotics Validation", desc: "Isaac Sim testing before automation touches the floor." },
    { title: "Synthetic Data", desc: "Rendered datasets that train vision models faster." },
    { title: "Enterprise Scale", desc: "Cloud or on-prem Omniverse with governance built in." },
  ],
};

export const SERVICE_EXPERTISE: Record<string, Expertise[]> = {
  "metahuman-development": [
    { title: "Avatar Design & Rigging", desc: "Art direction, MetaHuman builds, grooming and wardrobe." },
    { title: "Voice & Animation", desc: "Cloning, lip-sync, motion capture and emotion systems." },
    { title: "Dialogue Engineering", desc: "Grounded LLM dialogue with guardrails and escalation." },
    { title: "Multilingual Delivery", desc: "20+ languages with terminology tuned to your domain." },
    { title: "Kiosk & XR Deployment", desc: "Optimized builds for kiosks, Quest and web streaming." },
    { title: "Analytics & Improvement", desc: "Conversation analytics driving weekly knowledge updates." },
  ],
  "unity-development": [
    { title: "Custom AR & VR Applications", desc: "End-to-end builds for learning, visualization and demos." },
    { title: "Digital Twin Creation", desc: "Data-connected replicas for monitoring and analysis." },
    { title: "Simulation & Training", desc: "Scenario-based trainers for manufacturing and defence." },
    { title: "Cross-Platform Deployment", desc: "Optimized for HMDs, mobile, desktop and web." },
    { title: "3D Visualization & Interaction", desc: "Responsive environments that communicate complex data." },
    { title: "System Integration & Support", desc: "IoT, analytics and enterprise-system bindings with SLAs." },
  ],
  "unreal-development": [
    { title: "UE5 World Building", desc: "Nanite environments, PCG landscapes and Niagara effects." },
    { title: "Simulator Systems", desc: "Vehicle, weapon and procedure logic in Blueprint + C++." },
    { title: "Pixel Streaming Ops", desc: "GPU orchestration, queuing and browser delivery." },
    { title: "Twin Data Bindings", desc: "Live telemetry mapped to materials, gauges and alerts." },
    { title: "Haptics & Motion", desc: "Motion platforms, haptics and multi-display sync." },
    { title: "Hardened Delivery", desc: "Offline installers and on-prem support for sensitive sites." },
  ],
  "nvidia-omniverse-development": [
    { title: "USD Pipeline Engineering", desc: "Connectors, converters and automated asset flows." },
    { title: "RTX Review Environments", desc: "Multi-user scenes with approval workflows." },
    { title: "Isaac Sim Robotics", desc: "Navigation, manipulation and safety validation." },
    { title: "Telemetry Integration", desc: "Historian and IoT bindings with alerting." },
    { title: "Synthetic Data Pipelines", desc: "Domain-randomized datasets for vision training." },
    { title: "Platform Operations", desc: "Deployment, access control and update runbooks." },
  ],
};

export const SERVICE_WHY = [
  { title: "Proven platform expertise", desc: "Deep benches across Unity, Unreal and Omniverse — certified patterns, not experiments." },
  { title: "Enterprise-grade delivery", desc: "Security reviews, offline builds and SLA-backed support for regulated sites." },
  { title: "Collaborative partnerships", desc: "We co-deliver with agencies and consulting firms as a white-label XR engine." },
  { title: "Scalability & performance", desc: "Every MVP architected for fleet scale: MDM, analytics and content CMS included." },
  { title: "Cross-industry portfolio", desc: "Defence, energy, manufacturing, healthcare and retail programs in production." },
];

export const SERVICE_HOW = [
  { title: "Discovery & Consultation", desc: "Goals, workflows and user-experience mapping with your stakeholders." },
  { title: "Design & Prototyping", desc: "Interactive prototypes and defined user flows validated early." },
  { title: "Development & Integration", desc: "Robust builds optimized for your hardware and infrastructure." },
  { title: "Testing & Quality Assurance", desc: "Performance, compatibility and reliability across target platforms." },
  { title: "Deployment & Support", desc: "Integration, training and long-term production support." },
];
