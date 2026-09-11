import type { Metadata } from "next";
import ServicePageHero from "@/components/shared/ServicePageHero";
import CtaSection from "@/components/home/CtaSection";
import ProjectsSection from "@/components/home/ResultsCarousel";

export const metadata: Metadata = {
  title: "SEO Agency Birmingham - Republic Marketing",
  description: "Birmingham's leading SEO agency. We grow your organic traffic and rankings through proven, white-hat SEO strategies. Get a free SEO audit today.",
};

const features = [
  { title: "Technical SEO", desc: "Audit and fix the technical foundations of your website to ensure search engines can properly crawl and index your content." },
  { title: "Keyword Research", desc: "Identify the exact search terms your target customers use and build your content strategy around them." },
  { title: "Content Strategy", desc: "Create authoritative, engaging content that ranks and converts. Our writers understand both SEO and your audience." },
  { title: "Link Building", desc: "Build your domain authority with high-quality backlinks from relevant, authoritative websites in your industry." },
  { title: "Local SEO", desc: "Dominate local search results and Google Maps listings to drive foot traffic and local enquiries." },
  { title: "SEO Reporting", desc: "Monthly reports that clearly show your rankings, traffic growth, and the revenue impact of our work." },
];

export default function SEOPage() {
  return (
    <>
      <ServicePageHero
        badge="SEO Agency"
        title="SEO That Turns Organic Traffic Into <em class='italic font-light'>Revenue</em>"
        subtitle="We take a data-driven approach to SEO that goes beyond rankings. Our strategies are designed to attract the right visitors who convert into paying customers."
        stats={[
          { value: "400%", label: "Traffic Increase" },
          { value: "3x", label: "Lead Generation" },
          { value: "Top 3", label: "Rankings Achieved" },
        ]}
        image="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/08/Rectangle-41964-3.avif"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our SEO Services</h2>
            <p className="text-[#6F6F6F] text-lg max-w-2xl mx-auto">
              A comprehensive SEO service that covers every aspect of your organic search performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-[#f8f8f7] rounded-3xl p-8 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-[#016DFF]/10 rounded-xl flex items-center justify-center mb-5">
                  <span className="text-[#016DFF] font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-bold text-xl mb-3">{f.title}</h3>
                <p className="text-[#6F6F6F] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsSection />
      <CtaSection />
    </>
  );
}
