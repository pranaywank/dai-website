/**
 * Per-solution content mirroring the services-page IA:
 * value cards ("Why it matters") + expertise list.
 * All ORIGINAL copy.
 */
export type Item = { title: string; desc: string };

export const TECH_EYEBROW: Record<string, string> = {
  "digital-twin": "LIVE 3D OPERATIONS",
  "immersive-360-virtual-tours": "IMMERSIVE SITE ACCESS",
  "ai-powered-defect-identification": "VISION QUALITY AI",
  "remote-ar-assistance": "FIELD EXPERTISE ON CALL",
  "3d-product-experiences": "SELL IN 3D & AR",
  "interactive-technical-manuals": "PAPERLESS SOPs",
  "injection-simulators": "CLINICAL SKILLS VR",
};

export const TECH_VALUE: Record<string, Item[]> = {
  "digital-twin": [
    { title: "Live Visibility", desc: "Every critical asset's state in one 3D operations view." },
    { title: "Predictive Foresight", desc: "Failure and bottleneck forecasts before they cost shifts." },
    { title: "Remote Operations", desc: "Diagnose and decide without flying experts to site." },
    { title: "Incident Replay", desc: "Reconstruct what happened for faster, factual RCA." },
    { title: "Energy Scenarios", desc: "Model efficiency moves before committing capex." },
    { title: "One Source of Truth", desc: "Design, operations and maintenance aligned on one model." },
  ],
  "immersive-360-virtual-tours": [
    { title: "Always-Open Access", desc: "Sites visitable 24x7 from any browser, anywhere." },
    { title: "Faster Inductions", desc: "Pre-visit orientation that shortens gate and onboarding time." },
    { title: "Remote Audits", desc: "Evidence-linked walkthroughs auditors can verify remotely." },
    { title: "Sales Without Visits", desc: "Showcase properties and plants to global buyers." },
    { title: "Training Context", desc: "Familiarize crews with layouts before boots hit ground." },
    { title: "Embed Anywhere", desc: "LMS, proposals and websites with visit analytics." },
  ],
  "ai-powered-defect-identification": [
    { title: "Catch Every Defect", desc: "Tireless camera inspection at line speed." },
    { title: "Cut Rework", desc: "Find faults early when fixes are cheapest." },
    { title: "Trace Every Unit", desc: "Image evidence linked to lots in your MES." },
    { title: "Scale Without Headcount", desc: "Add lines without adding inspection shifts." },
    { title: "Night-Shift QA", desc: "Consistent quality around the clock." },
    { title: "Data-Driven Quality", desc: "Defect trends that feed process improvement." },
  ],
  "remote-ar-assistance": [
    { title: "Instant Expertise", desc: "Specialists on-site in seconds via live video." },
    { title: "Less Travel", desc: "Resolve remotely what used to need flights." },
    { title: "Faster Fixes", desc: "AR annotations guide hands to the right action." },
    { title: "Audit Evidence", desc: "Snapshots and records from every session." },
    { title: "Upskill Locals", desc: "Every call becomes searchable team knowledge." },
    { title: "Vendor Support", desc: "OEM experts without dispatch delays." },
  ],
  "3d-product-experiences": [
    { title: "Self-Serve Selling", desc: "Buyers explore every option themselves, day or night." },
    { title: "Fewer Returns", desc: "Accurate expectations set in 3D and AR." },
    { title: "Shorter Cycles", desc: "Configured quotes in minutes, not meetings." },
    { title: "Global Reach", desc: "Demo anywhere without shipping hardware." },
    { title: "Dealer Enablement", desc: "Tablet selling with guided stories." },
    { title: "Reusable Assets", desc: "One 3D pipeline feeds web, ads and events." },
  ],
  "interactive-technical-manuals": [
    { title: "Zero Paper", desc: "Procedures live where work happens — on device." },
    { title: "Fewer Errors", desc: "Sequence-proof steps with checks and warnings." },
    { title: "Faster Onboarding", desc: "New techs productive in days with guided flows." },
    { title: "Audit Proof", desc: "Sign-offs and evidence captured per step." },
    { title: "Version Control", desc: "Engineering changes reach the floor instantly." },
    { title: "Offline Ready", desc: "Full packs for basements and remote sites." },
  ],
  "injection-simulators": [
    { title: "Safe Repetition", desc: "Unlimited practice with zero patient risk." },
    { title: "Standard Assessment", desc: "Every learner scored against the same rubric." },
    { title: "No Lab Bottleneck", desc: "Cohorts train in parallel, on schedule." },
    { title: "Curriculum Fit", desc: "Mapped to nursing and pharma outcomes." },
    { title: "Remote Cohorts", desc: "Satellite campuses train identically." },
    { title: "Refresh Anytime", desc: "Re-certification without pulling staff off wards." },
  ],
};

export const TECH_EXPERTISE: Record<string, Item[]> = {
  "digital-twin": [
    { title: "CAD/BIM Ingestion", desc: "Conversion, cleanup and optimization pipelines." },
    { title: "IoT & Historian Bindings", desc: "Live tags via OPC-UA, MQTT and REST." },
    { title: "Alerting & Replay", desc: "Thresholds, escalation and incident timelines." },
    { title: "What-If Simulation", desc: "Scenario modeling for ops and energy teams." },
    { title: "AR/VR Extensions", desc: "The same twin in field apps and headsets." },
    { title: "Platform Operations", desc: "Access control, uptime and update runbooks." },
  ],
  "immersive-360-virtual-tours": [
    { title: "8K Capture", desc: "On-site shooting directed for your story." },
    { title: "Hotspot Authoring", desc: "Docs, videos and quizzes pinned in space." },
    { title: "Guided Paths", desc: "Narrated routes for induction and sales." },
    { title: "Measurement & Plans", desc: "Floor-plan links and in-tour measuring." },
    { title: "LMS & Web Embeds", desc: "SCORM-friendly packaging and analytics." },
    { title: "Update Service", desc: "Delta reshoots and CMS hotspot edits." },
  ],
  "ai-powered-defect-identification": [
    { title: "Dataset Programs", desc: "Capture strategy, labeling ops and synthetic data." },
    { title: "Model Training", desc: "Validated models tuned to your defect taxonomy." },
    { title: "Edge Deployment", desc: "Millisecond inference on IPCs and Jetson." },
    { title: "Review Stations", desc: "Operator confirmation loops that build trust." },
    { title: "MES Integration", desc: "Pass/fail signals with lot traceability." },
    { title: "Drift Monitoring", desc: "Retraining loops as products change." },
  ],
  "remote-ar-assistance": [
    { title: "One-Tap Calling", desc: "Guest join via link — no accounts, no installs." },
    { title: "AR Annotation", desc: "Freeze-frame drawing both sides see." },
    { title: "Session Records", desc: "Snapshots, notes and searchable history." },
    { title: "Low-Bandwidth Mode", desc: "Photo-fallback flows for weak networks." },
    { title: "Ticketing Integrations", desc: "FSMS and helpdesk bindings." },
    { title: "Fix Library", desc: "Resolved sessions become deflecting knowledge." },
  ],
  "3d-product-experiences": [
    { title: "CAD-to-Web Pipelines", desc: "STEP/IGES conversion with PBR materials." },
    { title: "Variant Logic", desc: "Options, BOM rules and pricing hooks." },
    { title: "AR Placement", desc: "True-scale preview on device." },
    { title: "CPQ Handoff", desc: "Configured quotes into your pipeline." },
    { title: "PDP & Showroom Embeds", desc: "Fast-loading viewers anywhere." },
    { title: "Engagement Analytics", desc: "Option-level interaction reporting." },
  ],
  "interactive-technical-manuals": [
    { title: "3D Authoring", desc: "Step flows built from CAD and tribal knowledge." },
    { title: "Checklist Logic", desc: "Gates, tolerances and sign-off rules." },
    { title: "Evidence Capture", desc: "Photos and readings per step." },
    { title: "Approval Workflows", desc: "Engineering review before publishing." },
    { title: "Kiosk & Offline Builds", desc: "Floor-ready packaged delivery." },
    { title: "Records Export", desc: "PDF and audit-pack generation." },
  ],
  "injection-simulators": [
    { title: "Technique Modules", desc: "IM, IV, subcutaneous and intradermal flows." },
    { title: "Anatomy Variants", desc: "Age, BMI and site variations." },
    { title: "Haptic Options", desc: "Tissue-feel devices where budgets allow." },
    { title: "OSCE Rubrics", desc: "Assessor-moderated scoring." },
    { title: "Debrief Tools", desc: "Replay with error flagging." },
    { title: "Cohort Analytics", desc: "Progress dashboards for faculty." },
  ],
};
