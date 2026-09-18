import {
  Hero,
  StatsFacts,
  FeaturedProjects,
  ServicesDark,
  WhyUs,
  Testimonials,
  IndustriesXR,
  Faq,
  News,
  ContactCTA,
} from "@/components/home/sections";

export default function Home() {
  return (
    <main className="bg-white text-[#1F2A2E]">
      <Hero />
      <StatsFacts />
      <FeaturedProjects />
      <ServicesDark />
      <WhyUs />
      <Testimonials />
      <IndustriesXR />
      <Faq />
      <News />
      <ContactCTA />
    </main>
  );
}
