/**
 * Per-industry "Solutions We Provide" blocks.
 * Mirrors the reference industry-page IA (solution heading + description +
 * bullet list, 4 blocks per industry) written as ORIGINAL copy — same topics,
 * our own words. Images swap via public/images/ (see README).
 */
export type SolutionBlock = { title: string; desc: string; bullets: string[] };

export const INDUSTRY_SOLUTIONS: Record<string, SolutionBlock[]> = {
  "aerospace-defense": [
    {
      title: "Training and Simulation",
      desc: "Immersive VR training for pilots, crew and ground personnel — realistic rehearsal of flight, maintenance and tactical tasks in a risk-free, controlled environment.",
      bullets: [
        "Flight simulators for pilot training and emergency-response rehearsal",
        "VR/AR maintenance training for complex airframe and engine systems",
        "Tactical VR scenarios for mission readiness and crew coordination",
        "UAV pilot trainers with flight modes, payloads and failure injection",
        "Emergency-response simulations for rescue, fire and ground operations",
      ],
    },
    {
      title: "Maintenance and Field Support",
      desc: "AI-driven predictive maintenance plus AR-guided repairs keep fleets mission-ready while cutting downtime and extending asset life.",
      bullets: [
        "Predictive maintenance models analyzing performance data to prevent failures",
        "AR-enabled field support with hands-free, real-time expert guidance",
        "Fleet digital twins for live health monitoring of aircraft and vehicles",
        "Smart-glasses repair guidance for fast, accurate depot fixes",
        "Remote AR/VR assistance for ground crew, even in remote locations",
      ],
    },
    {
      title: "Asset Management & Optimization",
      desc: "Track every asset from manufacturing to decommissioning with twin-backed analytics that maximize availability and control lifecycle cost.",
      bullets: [
        "Lifecycle management from induction to decommissioning",
        "Real-time health monitoring twins for aircraft and ground systems",
        "Fuel and energy consumption analysis for cost and emissions reduction",
        "Smart monitoring of equipment health and environmental conditions",
        "AI performance analytics that extend asset life and readiness",
      ],
    },
    {
      title: "Mission Planning and Control",
      desc: "Simulation-backed planning, metaverse command environments and 3D terrain modeling for precise, confident mission execution.",
      bullets: [
        "Scenario generation and strategy optimization for mission planning",
        "Metaverse command centers for distributed tactical coordination",
        "Remote collaboration tools for high-stakes strategic decisions",
        "3D terrain modeling to rehearse operations on real-world landscapes",
      ],
    },
  ],
  "manufacturing-industry": [
    {
      title: "Training and Simulation",
      desc: "VR equipment and safety training that onboards operators and contractors without stopping the line.",
      bullets: [
        "Equipment-operation simulators with realistic machine physics",
        "Lockout-tagout, fire and evacuation VR drills",
        "Contractor induction modules completable in under an hour",
        "Multi-user scenarios with instructor console and scoring",
      ],
    },
    {
      title: "Quality & Predictive Maintenance",
      desc: "Vision AI and twin analytics catch defects and failures before they cost shifts.",
      bullets: [
        "In-line computer-vision defect detection with human-in-the-loop review",
        "Asset twins with live OEE, vibration and thermal bindings",
        "Failure forecasting from historian and IoT data",
        "RCA replay of incidents inside the 3D twin",
      ],
    },
    {
      title: "Connected Worker",
      desc: "AR guidance and remote expertise on the shopfloor, from changeovers to audits.",
      bullets: [
        "Step-by-step AR work instructions anchored to machines",
        "Remote expert calls with AR annotation and evidence capture",
        "Digital checklists with photo proof and e-sign",
        "Offline-first builds for basements and remote plants",
      ],
    },
    {
      title: "Plant Optimization",
      desc: "Model layouts, energy and schedules virtually before committing capex or downtime.",
      bullets: [
        "Line-layout and ergonomics simulation",
        "Energy-consumption what-if analysis",
        "Changeover rehearsal to protect OEE",
        "Shift-handover and KPI command views",
      ],
    },
  ],
  automotive: [
    {
      title: "Product Design & Visualization",
      desc: "Immersive design review and customer-facing visualization across the vehicle lifecycle.",
      bullets: [
        "VR design clinics for proportions, ergonomics and HMI review",
        "AR feature demonstrations for ADAS, EV and infotainment",
        "Real-time 3D configurators with trim, color and accessory logic",
        "Photoreal UE5 renders and launch films",
      ],
    },
    {
      title: "Virtual Showrooms & Retail",
      desc: "Sell everywhere with metaverse showrooms, lot AR and online 3D that lift quotes.",
      bullets: [
        "Always-on 3D showrooms linked to inventory and CRM",
        "AR driveway preview from the online configurator",
        "Dealership tablet selling with guided feature stories",
        "Hybrid launch events for physical + virtual audiences",
      ],
    },
    {
      title: "Manufacturing Twins",
      desc: "Rehearse line changes, logistics and ergonomics before shutdowns.",
      bullets: [
        "Assembly-line twins with live station status",
        "Changeover and model-mix simulation",
        "Logistics and AGV route rehearsal",
        "Ergonomics assessment in VR",
      ],
    },
    {
      title: "Technician & Sales Training",
      desc: "Certify aftersales teams on new platforms faster, including HV safety.",
      bullets: [
        "VR diagnostics and repair procedures per platform",
        "High-voltage safety certification modules",
        "Sales enablement with objection-handling scenarios",
        "Per-technician scoring synced to your LMS",
      ],
    },
  ],
  retail: [
    {
      title: "Frontline Training",
      desc: "24x7 mobile learning that makes every promoter, merchandiser and associate launch-ready.",
      bullets: [
        "Micro-learning modules for product, pitch and process",
        "Game-based assessments with leaderboards and rewards",
        "Launch playbooks pushed per SKU and region",
        "Beat-level completion and quiz-lift analytics",
      ],
    },
    {
      title: "Immersive Customer Experience",
      desc: "AR try-on, virtual merchandising and in-store gamification that convert footfall.",
      bullets: [
        "Virtual try-on and in-room AR preview",
        "3D planograms and perfect-store visualization",
        "Scan-to-win and loyalty game mechanics",
        "Metaverse brand stores linked to commerce",
      ],
    },
    {
      title: "Store Operations",
      desc: "Digitize audits, tasks and compliance across hundreds of outlets.",
      bullets: [
        "Photo-verified visit and execution tracking",
        "Planogram-compliance scoring from shelf images",
        "Task management with escalation workflows",
        "Offline-first apps for low-connectivity outlets",
      ],
    },
    {
      title: "Brand Campaigns",
      desc: "Zero-install WebAR and game campaigns for launches and festivals.",
      bullets: [
        "WebAR filters, games and product reveals",
        "QR-to-experience packaging integrations",
        "UGC contests with moderation pipelines",
        "Campaign attribution dashboards",
      ],
    },
  ],
  "oil-and-gas": [
    {
      title: "Safety Training & Simulation",
      desc: "High-risk procedure rehearsal — H2S, fire, LOTO, mustering — with zero exposure and full assessment.",
      bullets: [
        "H2S, fire and rescue VR drills per asset type",
        "Lockout-tagout and isolation walkthroughs",
        "Muster and evacuation rehearsal with timing scores",
        "Permit-to-work practice before live permits",
      ],
    },
    {
      title: "Asset Performance & Twins",
      desc: "Live 3D view of trains, columns and rotating equipment bound to SCADA and historians.",
      bullets: [
        "Refinery and terminal twins with live tag bindings",
        "Corrosion and vibration trend monitoring",
        "Predictive maintenance prioritization",
        "Incident replay for root-cause analysis",
      ],
    },
    {
      title: "Remote Operations Support",
      desc: "Bring specialists to rigs and remote plants in seconds, on any bandwidth.",
      bullets: [
        "One-tap AR expert calls with annotation",
        "Low-bandwidth and offline evidence capture",
        "Drone-survey + twin visual comparison",
        "Session records for audit and learning libraries",
      ],
    },
    {
      title: "Workforce Competency",
      desc: "Multilingual, role-based certification for large contractor workforces.",
      bullets: [
        "Contractor VR induction mapped to HSE matrices",
        "Role-based procedure assessments with sign-off",
        "Multilingual delivery with terminology control",
        "Cohort analytics for training managers",
      ],
    },
  ],
  "power-and-energy": [
    {
      title: "Asset Twins & Monitoring",
      desc: "Substation, grid and cooling-plant twins with live health, alerts and replay.",
      bullets: [
        "Substation twins with switching-state visualization",
        "Cooling-system twins for EE and reliability scenarios",
        "Threshold alerts with escalation workflows",
        "Fleet-level benchmarking dashboards",
      ],
    },
    {
      title: "Field Workforce Enablement",
      desc: "AR guides and VR trainers that certify switching competence and speed up inspections.",
      bullets: [
        "Step-by-step AR inspection guides with live readings",
        "Switching-procedure VR trainers with SOP scoring",
        "Thermal-overlay defect spotting",
        "Offline packs for remote substations",
      ],
    },
    {
      title: "Efficiency & Sustainability",
      desc: "Model savings before capex with twin-backed energy scenarios and reporting.",
      bullets: [
        "What-if modeling for retrofits and controls tuning",
        "Loss analysis across feeders and plants",
        "Emissions and sustainability reporting views",
        "Peak-demand rehearsal scenarios",
      ],
    },
    {
      title: "Outage & Emergency Response",
      desc: "Rehearse storm and fault response so restoration is choreographed, not chaotic.",
      bullets: [
        "Crew-coordination drills in shared virtual scenes",
        "Restoration prioritization simulations",
        "Public-communication templates linked to scenarios",
        "After-action review with timeline replay",
      ],
    },
  ],
  telecom: [
    {
      title: "Network Planning & Twins",
      desc: "Site, fiber-route and capacity twins for planning cutovers and rollouts with confidence.",
      bullets: [
        "Cell-site twins with equipment and alarm overlays",
        "Fiber-route 3D planning with splice-point detail",
        "Cutover rehearsal with rollback checkpoints",
        "Capacity and coverage scenario modeling",
      ],
    },
    {
      title: "Field Operations",
      desc: "AR-guided splicing, installation and audits that raise first-time-fix rates.",
      bullets: [
        "Fiber-splicing AR procedures with test thresholds",
        "Tower-climb safety and inspection checklists",
        "Photo-evidence audits with auto-reports",
        "Offline route packs for field teams",
      ],
    },
    {
      title: "Customer Experience",
      desc: "Retail and self-serve journeys that explain plans and devices in 3D.",
      bullets: [
        "AR plan explorers for retail kiosks",
        "3D device showcases with feature stories",
        "Onboarding journeys with progress tracking",
        "NPS-linked experience analytics",
      ],
    },
    {
      title: "Revenue & Collections",
      desc: "Empathetic AI journeys that recover revenue while protecting the relationship.",
      bullets: [
        "DND-aware voice and text collection flows",
        "Churn-risk prediction with save offers",
        "Upsell copilots for agents and kiosks",
        "Consent logging and human escalation",
      ],
    },
  ],
  healthcare: [
    {
      title: "Clinical Training & Simulation",
      desc: "Competency-based VR practice for injections, triage and protocols — scored, debriefed, curriculum-mapped.",
      bullets: [
        "Injection trainers (IM/IV/subcut) with angle-depth scoring",
        "Triage and mass-casualty prioritization drills",
        "Device-operation practice before ward use",
        "OSCE-aligned rubrics with assessor moderation",
      ],
    },
    {
      title: "Patient Experience",
      desc: "AR education, rehab motivation and stress-free navigation for patients and families.",
      bullets: [
        "Procedure-explainer AR for consent and prep",
        "Gamified physiotherapy with progress tracking",
        "Wayfinding for large hospital campuses",
        "Multilingual content with accessibility options",
      ],
    },
    {
      title: "Hospital Operations",
      desc: "Care-flow twins and AI dashboards for beds, staffing and equipment decisions.",
      bullets: [
        "Bed and patient-flow simulation",
        "Staffing what-if planning per shift",
        "Equipment-utilization tracking",
        "Discharge-bottleneck analysis",
      ],
    },
    {
      title: "AI Clinical Support",
      desc: "Documentation copilots and decision support that give clinicians time back.",
      bullets: [
        "Ambient documentation assistants",
        "Triage-support scoring with guardrails",
        "Discharge-summary generation with review",
        "HIPAA-aware deployment patterns",
      ],
    },
  ],
  education: [
    {
      title: "Virtual Laboratories",
      desc: "vFabLab-style labs where students practice safely before touching real equipment.",
      bullets: [
        "Nano-fabrication procedure trainers with scoring",
        "Physics and chemistry experiment simulations",
        "Cleanroom protocol and safety modules",
        "Instructor debrief views with attempt replay",
      ],
    },
    {
      title: "3D Simulation Lessons",
      desc: "Concept-first STEM lessons authored without code and delivered on any device.",
      bullets: [
        "No-code lesson builder with templates",
        "Browser-first delivery, headsets for lab weeks",
        "Embedded quizzes with xAPI grade sync",
        "Versioned content library with peer review",
      ],
    },
    {
      title: "Campus & Admissions",
      desc: "Virtual tours and metaverse open days that lift applications and orientation completion.",
      bullets: [
        "360 campus tours with program hotspots",
        "Metaverse open-day venues with live sessions",
        "Applicant onboarding journeys",
        "Parent and counselor preview modes",
      ],
    },
    {
      title: "Faculty Enablement",
      desc: "Training, templates and analytics so faculty own the XR curriculum.",
      bullets: [
        "Authoring workshops and certification",
        "Starter template packs per department",
        "Learning-outcome mapping guides",
        "Cohort analytics for course leads",
      ],
    },
  ],
  "it-industry": [
    {
      title: "Digital Platforms",
      desc: "Modern CMS estates, portals and design systems with Core Web Vitals discipline.",
      bullets: [
        "AEM and hybrid CMS architecture and migration",
        "Multi-brand, locale and language governance",
        "Partner and customer portal development",
        "Design systems with accessibility baked in",
      ],
    },
    {
      title: "GenAI Enablement",
      desc: "Grounded assistants over your documents, tickets and knowledge bases.",
      bullets: [
        "RAG copilots with evals and guardrails",
        "Support-deflection bots with escalation",
        "Document intelligence and summarization",
        "Usage analytics and feedback loops",
      ],
    },
    {
      title: "XR Demo Kits",
      desc: "Portable twin and VR showcases that help pre-sales sell immersive work.",
      bullets: [
        "Offline-capable demo builds for laptops and Quest",
        "Vertical-specific demo storylines",
        "ROI calculators embedded in demos",
        "Sales-team enablement training",
      ],
    },
    {
      title: "Cloud & Quality Engineering",
      desc: "DevOps, observability and performance engineering behind every release.",
      bullets: [
        "CI/CD with preview environments",
        "Core Web Vitals optimization programs",
        "Uptime, error-budget and alerting setups",
        "Security review and hardening checklists",
      ],
    },
  ],
  "e-commerce": [
    {
      title: "3D & AR Commerce",
      desc: "Try-on, in-room preview and configurators embedded in PDPs that convert.",
      bullets: [
        "Virtual try-on for fashion, eyewear and beauty",
        "True-scale AR placement for furniture and decor",
        "Variant-aware 3D configurators",
        "Lifestyle-scene renders from the same assets",
      ],
    },
    {
      title: "Storefront Engineering",
      desc: "Fast, headless storefronts with PDP-level 3D performance budgets.",
      bullets: [
        "Headless builds on Shopify, Magento or custom stacks",
        "Sub-3s interactive 3D on 4G",
        "Multilingual and multi-currency setups",
        "A/B testing for 3D vs flat PDPs",
      ],
    },
    {
      title: "AI Merchandising",
      desc: "Search, recommendations and pricing that learn from 3D engagement.",
      bullets: [
        "Visual and semantic product search",
        "Recommendation shelves tuned to margin goals",
        "Dynamic assortment insights from try-on data",
        "Review summarization for shoppers",
      ],
    },
    {
      title: "Virtual Stores",
      desc: "Metaverse shops and live-shopping events for drops and festivals.",
      bullets: [
        "Persistent 3D stores linked to catalog and checkout",
        "Live-shopping shows with host tooling",
        "Gamified drops with queue management",
        "Event analytics tied to revenue",
      ],
    },
  ],
};

export const INDUSTRY_WHY_US = [
  { title: "Industry-Specific Expertise", desc: "Teams that speak your SOPs, HSE matrices and compliance needs — not generic 3D vendors." },
  { title: "Industry Leadership", desc: "Programs running across defence, energy, manufacturing and education with measurable outcomes." },
  { title: "Custom Solutions", desc: "Every scenario modeled on your assets, procedures and scoring rubrics." },
  { title: "Advanced Technology", desc: "Unity, Unreal, Omniverse, vision AI and GenAI under one roof." },
  { title: "Accelerated Growth", desc: "MVP-in-weeks pilots with templated paths to multi-site scale." },
];
