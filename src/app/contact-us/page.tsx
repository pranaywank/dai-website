import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/content/PageTemplate";
import { ContactForm } from "@/components/content/ContactForm";

export const metadata: Metadata = {
  title: "Contact Digital Agents — XR Studio | Sales & General Enquiry",
  description: "Contact Digital Agents Interactive for XR, AI, simulator and digital twin projects. Sales: sales@digitalagents.in, General: hi@digitalagents.in, +91-9560965977. New Delhi & Gurugram.",
  keywords: ["contact XR studio", "VR development quote", "digitalagents contact"],
};

const CARDS: { Icon: typeof Mail; title: string; rows: { label: string; value: string; href?: string }[]; foot?: string }[] = [
  {
    Icon: Mail,
    title: "Email Us",
    rows: [
      { label: "Sales Enquiry", value: "sales@digitalagents.in", href: "mailto:sales@digitalagents.in" },
      { label: "General Enquiry", value: "hi@digitalagents.in", href: "mailto:hi@digitalagents.in" },
    ],
  },
  {
    Icon: Phone,
    title: "Call Us",
    rows: [{ label: "Mon–Fri, 9am–7pm IST", value: "+91-9560965977", href: "tel:+919560965977" }],
    foot: "We're here to discuss your requirements and answer any questions.",
  },
  {
    Icon: MapPin,
    title: "Office Locations",
    rows: [
      { label: "Registered Address", value: "H-4/8 Ground Floor, Malviya Nagar, New Delhi – 110017" },
      { label: "Development Centre", value: "A1-258, 4th Floor, Sushant Lok 2, Sector 55, Gurugram 122003" },
    ],
  },
];

const STEPS = [
  { n: "01", t: "You write", d: "Share your goal, site and timeline in the form — two minutes." },
  { n: "02", t: "We scope", d: "A consultant replies within one business day with questions and a pilot outline." },
  { n: "03", t: "You pilot", d: "Fixed-scope MVP on your devices, measured against agreed KPIs." },
];

export default function Page() {
  return (
    <main className="bg-white">
      <PageHero
        eyebrow="Contact"
        title="Connect with us"
        tagline="Talk to the XR studio about your pilot"
        description="Our team is here to assist with any enquiry — reach us by email, phone, or visit one of our offices."
      />

      {/* info cards */}
      <section className="py-14 bg-white">
        <div className="wrap grid md:grid-cols-3 gap-5 items-stretch">
          {CARDS.map((c, i) => (
            <div key={c.title} className={`rounded-[28px] p-8 flex flex-col ${i === 1 ? "bg-[#1F2A2E] text-white" : "bg-[#F4F8FA] border border-[#1F2A2E]/10"}`}>
              <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center"><c.Icon className="h-5 w-5" /></span>
              <h2 className="mt-5 text-2xl font-extrabold">{c.title}</h2>
              <div className="mt-4 space-y-4">
                {c.rows.map((r) => (
                  <div key={r.label}>
                    <p className={`text-xs font-extrabold uppercase tracking-[0.16em] ${i === 1 ? "text-white/50" : "text-[#626a6d]"}`}>{r.label}</p>
                    {r.href ? (
                      <Link href={r.href} className="mt-1 block font-extrabold text-lg hover:underline break-all">{r.value}</Link>
                    ) : (
                      <p className="mt-1 font-bold leading-relaxed">{r.value}</p>
                    )}
                  </div>
                ))}
              </div>
              {c.foot && <p className="mt-4 text-sm text-white/60">{c.foot}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* form + steps */}
      <section className="pb-14 md:pb-20 bg-white">
        <div className="wrap grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">What happens next?</h2>
            <div className="mt-6 space-y-0">
              {STEPS.map((s, i) => (
                <div key={s.n} className="relative flex gap-4 pb-6 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center text-sm font-extrabold shrink-0">{s.n}</span>
                    {i < STEPS.length - 1 && <span className="w-px flex-1 bg-[#1F2A2E]/10 mt-1" />}
                  </div>
                  <div>
                    <p className="font-extrabold text-lg">{s.t}</p>
                    <p className="mt-1 text-[#626a6d]">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[20px] border border-[#1F2A2E]/10 bg-[#F4F8FA] p-6">
              <p className="font-extrabold">Prefer email?</p>
              <p className="mt-1 text-[#626a6d]">Sales: <Link href="mailto:sales@digitalagents.in" className="font-bold text-[#1F2A2E] underline">sales@digitalagents.in</Link> · General: <Link href="mailto:hi@digitalagents.in" className="font-bold text-[#1F2A2E] underline">hi@digitalagents.in</Link></p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* CTA */}
      <section className="pb-14 md:pb-20 px-4 md:px-6 bg-white">
        <div className="wrap rounded-[24px] bg-[#1F2A2E] p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6 justify-between overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#a13ddf]/25 to-[#2BB2FC]/20" />
          <div className="relative">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">Empowering Enterprises to Scale & Succeed</h2>
            <p className="mt-2 text-white/70">Unlock growth with XR solutions tailored for your business.</p>
          </div>
          <Link href="/case-studies" className="relative inline-flex items-center gap-3 rounded-full bg-white text-[#1F2A2E] pl-7 pr-2 py-2 text-[15px] font-bold min-h-[64px] shrink-0 hover:brightness-95">See our work<span className="w-[52px] h-[52px] rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white grid place-items-center"><ArrowUpRight className="h-5 w-5" /></span></Link>
        </div>
      </section>
    </main>
  );
}
