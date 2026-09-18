/**
 * Per-study detail blocks mirroring the reference case-study IA:
 * Challenge → Objective → Solution → Impact.
 * All ORIGINAL placeholder copy (topics follow the study title).
 * Replace metrics/narratives with licensed project data before launch.
 */
export type StudyDetail = {
  challenge: string[];
  objective: string[];
  solution: { t: string; d: string }[];
  impact: { v: string; d: string }[];
};

const D = (challenge: string[], objective: string[], solution: { t: string; d: string }[], impact: { v: string; d: string }[]): StudyDetail => ({ challenge, objective, solution, impact });

export const CASE_DETAILS: Record<string, StudyDetail> = {
  "24x7-mobile-learning-tool-for-future-workforce-of-global-fmcg-leader": D(
    ["Onboarding couldn't start before day one, delaying productivity", "One-size classroom training failed diverse shifts and roles", "No shared space for field teams to learn from each other"],
    ["24x7 self-paced learning for new hires and veterans alike", "Gamified modules with progress tracking and rewards", "A communication hub for peer learning and support"],
    [{ t: "Pre-joining onboarding", d: "Culture, values and essentials available before the official start date." }, { t: "Gamified library", d: "Points, daily challenges and leaderboards sustain daily engagement." }, { t: "Mixed assessments", d: "Quizzes, scenarios and tasks that build lasting retention." }, { t: "Community tools", d: "In-app discussion and peer support across regions." }],
    [{ v: "+65%", d: "New-hire readiness scores" }, { v: "+75%", d: "Platform engagement" }, { v: "2x", d: "Faster time to productivity" }]
  ),
  "ai-driven-payment-collection-system-for-leading-telecommunications-provider": D(
    ["Payment delays and dunning costs kept rising", "Generic reminders damaged customer relationships", "Collectors lacked prioritization across huge portfolios"],
    ["AI journeys that collect efficiently and politely", "Reduced delays with full compliance logging", "Higher satisfaction through empathetic outreach"],
    [{ t: "Smart prioritization", d: "Risk scoring routes every account to the right journey." }, { t: "Conversational AI", d: "Voice and text flows that negotiate within policy." }, { t: "Compliance core", d: "DND-aware timing, consent logs and human escalation." }],
    [{ v: "+18%", d: "Recovery uplift" }, { v: "-30%", d: "Collection cost" }, { v: "+12pts", d: "CSAT on journeys" }]
  ),
  "ai-enabled-dashboard-for-leading-healthcare-company-in-dubai": D(
    ["Clinical and ops data lived in disconnected systems", "Leaders decided on stale weekly reports", "Patient-flow bottlenecks were invisible until crises"],
    ["One live view of care and operations", "Predictive alerts for capacity risks", "Data-driven staffing and bed decisions"],
    [{ t: "Unified data layer", d: "EHR, staffing and facility feeds harmonized nightly and live." }, { t: "Executive dashboards", d: "Role-based views from ward to board." }, { t: "Early-warning models", d: "Surge and bottleneck forecasts with explanations." }],
    [{ v: "-22%", d: "Bed-wait times" }, { v: "Live", d: "Operational visibility" }, { v: "3x", d: "Faster reporting cycles" }]
  ),
  "ar-platform-for-feature-demonstration-of-automotive-company": D(
    ["Static brochures couldn't explain ADAS and EV features", "Test drives reached too few prospects", "Dealers demoed inconsistently across outlets"],
    ["Immersive AR demos any salesperson can run", "Online + on-lot feature storytelling", "Consistent, measurable demo journeys"],
    [{ t: "AR feature overlays", d: "Sensors, range and charging visualized on the real car." }, { t: "Guided demo flows", d: "Scripted journeys with objection handling built in." }, { t: "Analytics", d: "Feature-level engagement per outlet and rep." }],
    [{ v: "+25%", d: "Demo-to-lead rate" }, { v: "100%", d: "Outlet consistency" }, { v: "-40%", d: "Demo prep time" }]
  ),
  "computer-vision-based-defect-identification-for-one-of-the-leading-steel-manufacturer": D(
    ["Manual inspection missed subtle surface defects", "Rework and claims eroded margins", "Rare defect types had almost no training data"],
    ["Real-time automated defect detection", "Human-in-the-loop review for edge cases", "Traceability from coil to customer"],
    [{ t: "Dataset program", d: "Line-side capture plus synthetic rare-defect generation." }, { t: "Edge models", d: "Millisecond inference on existing line hardware." }, { t: "Review stations", d: "Operator confirmation loop with MES traceability." }],
    [{ v: "98%+", d: "Detection precision" }, { v: "-35%", d: "Rework cost" }, { v: "Live", d: "Per-meter defect maps" }]
  ),
  "connected-digital-experience-platform-for-automotive-manufacturer": D(
    ["Online and showroom journeys were disconnected", "Leads leaked between digital and dealer systems", "Campaigns couldn't be measured end to end"],
    ["One connected journey from ad to handover", "Unified lead and attribution data", "Personalized follow-ups at every stage"],
    [{ t: "Journey orchestration", d: "Web, app, dealer and call-center events in one profile." }, { t: "3D showcases", d: "Configurators embedded at every touchpoint." }, { t: "Attribution", d: "Campaign-to-delivery reporting for marketing." }],
    [{ v: "+20%", d: "Lead conversion" }, { v: "1", d: "Unified customer view" }, { v: "-25%", d: "Lead leakage" }]
  ),
  "design-and-development-of-digital-healthcare-platform-for-public-healthcare-company": D(
    ["Citizens queued for basic services and information", "Departments ran disconnected portals", "Health programs lacked measurable outreach"],
    ["One accessible citizen health platform", "Streamlined service discovery and booking", "Program engagement with analytics"],
    [{ t: "Unified portal", d: "Services, schemes and facilities in plain language." }, { t: "Booking flows", d: "Appointments and referrals without queues." }, { t: "Outreach analytics", d: "Program uptake tracked by region." }],
    [{ v: "-40%", d: "In-person queues" }, { v: "50+", d: "Services digitized" }, { v: "2x", d: "Program enrollment" }]
  ),
  "development-of-b2c-health-fitness-app-for-health-and-fitness-company": D(
    ["Generic plans caused rapid user churn", "No personalization across goals and levels", "Coaches couldn't scale 1:1 attention"],
    ["Personalized plans that adapt weekly", "Habit loops that retain past month two", "Coach-in-the-loop at software margins"],
    [{ t: "Adaptive plans", d: "Training and nutrition tuned to progress data." }, { t: "Engagement loops", d: "Streaks, challenges and community leagues." }, { t: "Coach console", d: "Human oversight over AI-generated plans." }],
    [{ v: "+35%", d: "90-day retention" }, { v: "4.7★", d: "Store rating" }, { v: "3x", d: "Weekly actives" }]
  ),
  "development-of-cms-based-digital-ecosystem-for-the-leading-finance-company": D(
    ["Dozens of microsites with duplicated effort", "Compliance review slowed every release", "Content performance was unmeasured"],
    ["One governed CMS ecosystem", "Faster compliant publishing", "Engagement-led optimization"],
    [{ t: "Platform consolidation", d: "AEM-based multisite setup with shared components." }, { t: "Compliance workflows", d: "Legal review baked into authoring." }, { t: "Analytics loop", d: "Journey data feeding content decisions." }],
    [{ v: "-50%", d: "Publishing time" }, { v: "1", d: "Governed platform" }, { v: "+28%", d: "Engagement" }]
  ),
  "development-of-no-code-saas-platform-for-event-management-company": D(
    ["Every virtual event needed developer help", "Planning tools were scattered across sheets", "Attendee engagement data never survived the event"],
    ["No-code event building for organizers", "Unified planning-to-broadcast workflow", "Engagement analytics that persist"],
    [{ t: "Visual builder", d: "Stages, booths and agendas by drag and drop." }, { t: "Run-of-show engine", d: "Cues, speakers and recordings orchestrated live." }, { t: "Insight exports", d: "Sponsor and organizer reports per event." }],
    [{ v: "-70%", d: "Setup effort" }, { v: "10k+", d: "Attendees supported" }, { v: "2x", d: "Repeat bookings" }]
  ),
  "development-of-no-code-saas-solution-for-hybrid-events-for-an-event-management-company": D(
    ["In-person and virtual audiences got different events", "Sponsors couldn't reach both audiences", "Production complexity doubled headcount needs"],
    ["One program for both audiences", "Equal sponsor value online and onsite", "Broadcast-grade output with lean crews"],
    [{ t: "Hybrid stage kits", d: "Synchronized physical and virtual stages." }, { t: "Unified networking", d: "1:1 meetings across attendance modes." }, { t: "Sponsor analytics", d: "Combined reach and lead reporting." }],
    [{ v: "2x", d: "Total attendance" }, { v: "+40%", d: "Sponsor renewals" }, { v: "-30%", d: "Production cost" }]
  ),
  "development-of-vr-laboratory-virtual-fablab-for-an-academic-institute-in-saudi-arabia": D(
    ["Cleanroom time was scarce and expensive", "Students couldn't safely repeat procedures", "Assessment relied on observation alone"],
    ["Unlimited safe practice in VR", "Competency scoring per procedure", "Curriculum-mapped lab hours"],
    [{ t: "Virtual cleanroom", d: "Nano-fab workflows recreated step by step." }, { t: "Guided practice", d: "Hints, checkpoints and error flags." }, { t: "Auto-assessment", d: "Rubric scoring synced to the LMS." }],
    [{ v: "24x7", d: "Lab availability" }, { v: "-60%", d: "Supervised hours needed" }, { v: "+45%", d: "First-attempt pass rate" }]
  ),
  "diy-and-commerce-enabled-websites-with-multi-lingual-capabilities-for-indias-premier-immigration-firm": D(
    ["Counselor bandwidth capped conversions", "Prospects dropped off in long forms", "One language excluded global audiences"],
    ["DIY eligibility and service flows", "Commerce-enabled checkout in many languages", "Higher qualified-lead conversion"],
    [{ t: "DIY journeys", d: "Self-serve eligibility with smart branching." }, { t: "Multilingual CMS", d: "Full experience in priority languages." }, { t: "Commerce core", d: "Plans, upsells and payments online." }],
    [{ v: "+32%", d: "Qualified leads" }, { v: "5+", d: "Languages live" }, { v: "-35%", d: "Counselor load" }]
  ),
  "driving-engagement-and-sales-with-a-custom-built-truck-racing-game": D(
    ["Retail promotions blended into noise", "Product affinity stayed low among youth", "Footfall didn't convert to leads"],
    ["A branded game people choose to play", "Lead capture inside the fun", "Retail + digital amplification"],
    [{ t: "Custom racer", d: "Truck-themed arcade gameplay with brand tracks." }, { t: "Reward loop", d: "Scores unlock offers and test-drive slots." }, { t: "Retail kits", d: "Kiosk and QR deployment for outlets." }],
    [{ v: "50k+", d: "Plays in launch quarter" }, { v: "+22%", d: "Test-drive bookings" }, { v: "4.6★", d: "Player rating" }]
  ),
  "driving-operational-efficiency-modernizing-a-global-hvac-leaders-mobile-platform-for-enhanced-sales-and-audit-capabilities": D(
    ["Legacy field app crashed and drained batteries", "Sales data arrived days late", "Audits relied on paper evidence"],
    ["A fast offline-first field platform", "Same-day sales visibility", "Photo-verified audit trails"],
    [{ t: "Offline rebuild", d: "Catalog, pricing and quoting without signal." }, { t: "Audit module", d: "Checklists with photo proof and e-sign." }, { t: "Manager dashboards", d: "Territory performance in near real time." }],
    [{ v: "-60%", d: "App crashes" }, { v: "Same-day", d: "Sales visibility" }, { v: "100%", d: "Audits digitized" }]
  ),
  "end-to-end-cms-implementation-aem-for-leading-2-wheeler-company": D(
    ["Each market ran its own disconnected site", "Dealer content lagged launches by weeks", "Global campaigns couldn't be coordinated"],
    ["One omnichannel CMS worldwide", "Launch-synchronized dealer content", "Central governance with local freedom"],
    [{ t: "Multisite AEM", d: "Shared components across all markets." }, { t: "Dealer hub", d: "Localized inventory and offers automation." }, { t: "Launch playbooks", d: "Templated campaign rollouts." }],
    [{ v: "-45%", d: "Time to launch" }, { v: "12+", d: "Markets unified" }, { v: "+30%", d: "Dealer engagement" }]
  ),
  "enhancing-customer-journeys-through-a-hybrid-cms-platform-for-an-insurance-company": D(
    ["Journeys broke across web, app and agents", "Content couldn't be personalized at scale", "Campaign launches needed IT every time"],
    ["Seamless omnichannel journeys", "Segment-level personalization", "Marketer-owned publishing"],
    [{ t: "Hybrid CMS", d: "AEM + headless delivery per channel." }, { t: "Journey mapping", d: "Quote-to-claim flows instrumented end to end." }, { t: "Personalization", d: "Segment rules without redeploys." }],
    [{ v: "+27%", d: "Quote completion" }, { v: "-50%", d: "Publishing dependency" }, { v: "+19%", d: "Cross-sell uptake" }]
  ),
  "game-based-sales-training-for-leading-beverage-company": D(
    ["Product updates never reached the beat", "Classroom training didn't stick", "Top performers had no recognition loop"],
    ["Game-based learning reps enjoy", "Launch knowledge in days, not months", "Leaderboards that spotlight stars"],
    [{ t: "Sales quests", d: "Range, pitch and objection scenarios as missions." }, { t: "Launch sprints", d: "New-SKU modules shipped in 48 hours." }, { t: "League system", d: "Territory leaderboards with rewards." }],
    [{ v: "+42%", d: "Knowledge scores" }, { v: "3x", d: "Module completion" }, { v: "-70%", d: "Training cost per rep" }]
  ),
  "immersive-product-experiences-for-a-compressor-manufacturing-company": D(
    ["Complex specs were hard to explain in PDFs", "Demos required shipping heavy units", "Global prospects rarely saw the product live"],
    ["Self-serve 3D product stories", "Remote demos without freight", "Sales enablement on tablets"],
    [{ t: "3D storytelling", d: "Exploded views and operating principles in WebGL." }, { t: "AR placement", d: "True-scale units in customer plants." }, { t: "Sales app", d: "Offline tablet demos with CPQ handoff." }],
    [{ v: "+30%", d: "Demo-to-quote rate" }, { v: "-80%", d: "Demo freight cost" }, { v: "15+", d: "Markets enabled" }]
  ),
  "migration-and-modernization-of-website-and-mobile-app-for-uae-based-real-estate-company": D(
    ["Legacy stack slowed every listing update", "Search and filters frustrated buyers", "No mobile journey for on-the-go investors"],
    ["Blazing listings and search", "Investor-grade mobile experience", "CRM-connected enquiry flows"],
    [{ t: "Replatform", d: "Headless build with sub-second search." }, { t: "Mobile app", d: "Saved searches, alerts and tours." }, { t: "Lead routing", d: "Instant agent assignment and tracking." }],
    [{ v: "2x", d: "Portal speed" }, { v: "+38%", d: "Qualified enquiries" }, { v: "4.5★", d: "App rating" }]
  ),
  "modernization-of-digital-platform-for-shipping-company": D(
    ["Tracking data scattered across systems", "Customers called for basic updates", "Portals buckled during peak seasons"],
    ["Unified visibility for customers", "Self-serve documentation flows", "Peak-proof reliability"],
    [{ t: "Visibility layer", d: "Milestone tracking across carriers and ports." }, { t: "Self-serve docs", d: "Bills, invoices and customs online." }, { t: "Scale engineering", d: "Load-tested peak capacity." }],
    [{ v: "-45%", d: "Status-call volume" }, { v: "99.9%", d: "Peak uptime" }, { v: "+24%", d: "Portal adoption" }]
  ),
  "modernization-of-e-commerce-platform-and-development-of-mobile-app-for-a-leading-educational-materials-provider": D(
    ["Catalog discovery overwhelmed parents", "Checkout abandoned on mobile", "Schools lacked bulk ordering flows"],
    ["Guided discovery by grade and board", "One-thumb mobile checkout", "Institutional bulk journeys"],
    [{ t: "Guided catalog", d: "Grade/board/subject navigation with bundles." }, { t: "Mobile-first checkout", d: "UPI-ready express flows." }, { t: "School portal", d: "Bulk quotes, POs and invoicing." }],
    [{ v: "+33%", d: "Conversion" }, { v: "-28%", d: "Cart abandonment" }, { v: "200+", d: "Schools onboarded" }]
  ),
  "multi-brand-multi-local-multi-lingual-digital-platform-for-higher-education-institute-in-india": D(
    ["Each institute brand ran a silo site", "Local contexts were lost in translation", "Admissions data couldn't be compared"],
    ["One platform, many brands and languages", "Local relevance with central governance", "Comparable admissions analytics"],
    [{ t: "Multisite architecture", d: "Shared design system, per-brand theming." }, { t: "Localization engine", d: "Locale content with translation workflows." }, { t: "Admissions analytics", d: "Funnel comparison across institutes." }],
    [{ v: "8+", d: "Brands unified" }, { v: "6", d: "Languages live" }, { v: "+26%", d: "Application starts" }]
  ),
  "no-code-saas-platform-for-creating-3d-simulation-based-learning-experiences-for-edtech-company": D(
    ["Every simulation needed Unity developers", "Subject experts couldn't author content", "Iteration cycles stretched for months"],
    ["No-code 3D lesson authoring", "Expert-owned content pipelines", "Week-long iteration cycles"],
    [{ t: "Visual authoring", d: "Drag-and-drop scenes, quizzes and branching." }, { t: "Asset library", d: "Shared 3D models and templates." }, { t: "One-click publish", d: "Web + headset builds from one project." }],
    [{ v: "-80%", d: "Authoring cost" }, { v: "10x", d: "Content velocity" }, { v: "50+", d: "Lessons shipped" }]
  ),
  "optimizing-the-hybrid-cms-platform-for-all-customer-journeys-and-touchpoints-for-an-insurance-company": D(
    ["Personalization stalled at segments of one-to-many", "Page performance hurt quote starts", "Touchpoints reported in isolation"],
    ["1:1 journey continuity", "Sub-second quote experiences", "Unified journey analytics"],
    [{ t: "Identity stitching", d: "Cross-device profiles with consent." }, { t: "Edge performance", d: "Caching and payload budgets per template." }, { t: "Journey dashboards", d: "Drop-off and rescue analytics." }],
    [{ v: "+21%", d: "Journey completion" }, { v: "1.2s", d: "Median quote-page load" }, { v: "+15%", d: "Persistency" }]
  ),
  "remote-asset-performance-optimization-using-3d-digital-twin-technology": D(
    ["Experts flew to sites for routine diagnosis", "Asset health was visible only on SCADA screens", "Downtime root causes took weeks to confirm"],
    ["Remote-first asset intelligence", "3D context for every alarm", "Faster, evidence-backed decisions"],
    [{ t: "3D twin", d: "Asset models bound to live historian tags." }, { t: "Alarm context", d: "Spatial overlays showing affected systems." }, { t: "Remote review", d: "Expert sessions inside the twin." }],
    [{ v: "-50%", d: "Expert travel" }, { v: "-28%", d: "Diagnosis time" }, { v: "24x7", d: "Remote visibility" }]
  ),
  "revolutionizing-virtual-events-with-a-no-code-metaverse-platform": D(
    ["Webinar fatigue killed attendance", "Sponsors saw no measurable value", "Organizers depended on agencies for changes"],
    ["Immersive venues attendees explore", "Sponsor ROI with lead data", "Organizer-owned updates"],
    [{ t: "Immersive venues", d: "Lobbies, stages and expo halls in 3D." }, { t: "Engagement mechanics", d: "Quests, networking and live polls." }, { t: "Sponsor suites", d: "Booths with meetings and analytics." }],
    [{ v: "3x", d: "Avg. session time" }, { v: "+55%", d: "Sponsor leads" }, { v: "100+", d: "Events hosted" }]
  ),
  "visualization-immersive-simulation-of-tactical-scenarios-vistas": D(
    ["Sand tables couldn't convey modern complexity", "Live exercises were costly and rare", "Decision quality was hard to assess"],
    ["Immersive tactical rehearsal on demand", "Repeatable multi-crew scenarios", "Measurable decision performance"],
    [{ t: "Terrain engine", d: "Real-world landscapes with dynamic forces." }, { t: "Scenario authoring", d: "Branches, injects and fog-of-war controls." }, { t: "After-action review", d: "Timeline replay with decision scoring." }],
    [{ v: "10x", d: "More rehearsals per quarter" }, { v: "-70%", d: "Exercise cost" }, { v: "Multi-crew", d: "Assessed coordination" }]
  ),
  "vr-based-digital-twin-platform-for-training-for-a-global-sustainable-development-agency": D(
    ["Field sites were hard to reach for training", "Procedures varied dangerously by location", "No records proved competency"],
    ["Standardized VR twin training everywhere", "Assessed, repeatable procedures", "Auditable skill records"],
    [{ t: "Twin curriculum", d: "Site-accurate procedures in VR." }, { t: "Guided + free modes", d: "Learn, then prove it unaided." }, { t: "Records sync", d: "Scores and evidence to HQ dashboards." }],
    [{ v: "40+", d: "Sites standardized" }, { v: "-55%", d: "Trainer travel" }, { v: "100%", d: "Sessions recorded" }]
  ),
};
