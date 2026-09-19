import Link from "next/link";
import { Mail, Phone, MapPin, Globe, AtSign, MessageCircle, Share2, Rss } from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import { Logo } from "@/components/layout/Logo";

const footerLinks = [
  {
    title: "XR Services",
    links: [
      { label: "Metahuman Development", href: "/services/metahuman-development" },
      { label: "Unity Development", href: "/services/unity-development" },
      { label: "Unreal Development", href: "/services/unreal-development" },
      { label: "Omniverse Development", href: "/services/nvidia-omniverse-development" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Digital Twin", href: "/technology-solutions/digital-twin" },
      { label: "360 Virtual Tours", href: "/technology-solutions/immersive-360-virtual-tours" },
      { label: "Remote AR Assistance", href: "/technology-solutions/remote-ar-assistance" },
      { label: "XR Centre of Excellence", href: "/xr-centre-of-excellence-xr-coe", pulse: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
];

const contactInfo = [
  { icon: Mail, text: "sales@digitalagents.in", href: "mailto:sales@digitalagents.in" },
  { icon: Phone, text: "+91-9560965977", href: "tel:+919560965977" },
  { icon: MapPin, text: "New Delhi • Gurugram, India" },
];

const socialLinks = [
  { Icon: Globe, label: "Website", href: "/" },
  { Icon: AtSign, label: "Email", href: "/contact-us" },
  { Icon: MessageCircle, label: "Chat", href: "/contact-us" },
  { Icon: Share2, label: "Share", href: "/blogs" },
  { Icon: Rss, label: "Blog", href: "/blogs" },
];

export function Footer() {
  return (
    <footer className="bg-[#1F2A2E] relative overflow-hidden text-gray-400">
      <div className="wrap pt-14 z-40 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 pb-12">
            {/* Brand section */}
            <div className="flex flex-col space-y-4 lg:col-span-1">
              <Logo dark />
              <p className="text-[10px] uppercase tracking-[0.24em] text-gray-500 font-bold">XR Studio</p>
              <p className="text-sm leading-relaxed">
                XR studio building AR, VR & MR training simulators, digital twins and 3D product experiences.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-[#a13ddf] to-[#2BB2FC] text-white pl-5 pr-1.5 py-1.5 text-sm font-bold hover:brightness-110"
              >
                Start a project
                <span className="w-9 h-9 rounded-full bg-white text-[#1F2A2E] grid place-items-center text-lg leading-none">→</span>
              </Link>
            </div>

            {/* Footer link sections */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white text-lg font-semibold mb-6">{section.title}</h4>
                <ul className="space-y-3 text-[15px]">
                  {section.links.map((link) => (
                    <li key={link.label} className="relative w-fit">
                      <Link href={link.href} className="hover:text-[#2BB2FC] transition-colors">
                        {link.label}
                      </Link>
                      {"pulse" in link && link.pulse && (
                        <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#2BB2FC] animate-pulse"></span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact section */}
            <div>
              <h4 className="text-white text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-[15px]">
                {contactInfo.map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <item.icon size={18} className="text-[#2BB2FC] shrink-0" />
                    {item.href ? (
                      <Link href={item.href} className="hover:text-[#2BB2FC] transition-colors">
                        {item.text}
                      </Link>
                    ) : (
                      <span className="hover:text-[#2BB2FC] transition-colors">{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-t border-gray-700/60 mt-8" />
        </div>

        {/* Giant outline text — full bleed, cropped at the base */}
        <div className="h-[11rem] sm:h-[16rem] md:h-[22rem] overflow-hidden -mb-4 md:-mb-8" aria-hidden>
          <TextHoverEffect text="XR STUDIO" />
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-700/60 relative z-10 bg-[#1F2A2E]">
          <div className="wrap py-6 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-gray-400">
              {socialLinks.map(({ Icon, label, href }) => (
                <Link key={label} href={href} aria-label={label} className="hover:text-[#2BB2FC] transition-colors">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Digital Agents Interactive. All rights reserved. <span className="text-gray-600">AR • VR • MR • Digital Twin</span>
            </p>
          </div>
        </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
