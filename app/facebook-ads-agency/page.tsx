import type { Metadata } from "next";
import ServicePageHero from "@/components/shared/ServicePageHero";
import CtaSection from "@/components/home/CtaSection";
import ProjectsSection from "@/components/home/ResultsCarousel";

export const metadata: Metadata = {
  title: "Paid Social Media Advertising Agency - Republic Marketing",
  description: "Expert Facebook, Instagram, TikTok and LinkedIn advertising. We create social media ad campaigns that generate demand and grow your business.",
};

const features = [
  { title: "Facebook & Instagram Ads", desc: "Reach your ideal audience with precision-targeted campaigns across Meta's family of apps." },
  { title: "TikTok Advertising", desc: "Tap into the fastest-growing social platform with creative, thumb-stopping ad content." },
  { title: "LinkedIn Ads", desc: "Reach decision-makers and B2B audiences with targeted LinkedIn advertising campaigns." },
  { title: "Pinterest Ads", desc: "Showcase your products to a highly engaged, purchase-intent audience on Pinterest." },
  { title: "Creative Strategy", desc: "Our in-house creative team produces scroll-stopping ad content designed to convert." },
  { title: "Audience Research", desc: "Deep audience analysis to find and target your ideal customer with pinpoint precision." },
];

export default function PaidSocialPage() {
  return (
    <>
      <ServicePageHero
        badge="Paid Social"
        title="Social Ads That <em class='italic font-light'>Generate Demand</em> For Your Business"
        subtitle="We create paid social campaigns that build brand awareness, generate leads and drive sales across Facebook, Instagram, TikTok and LinkedIn."
        stats={[
          { value: "8x", label: "Average ROAS" },
          { value: "3x", label: "Lead Volume" },
          { value: "50+", label: "Brands Grown" },
        ]}
        image="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/08/Group-2085664245-1.avif"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Paid Social Services</h2>
            <p className="text-[#6F6F6F] text-lg max-w-2xl mx-auto">
              End-to-end paid social management from strategy and creative to launch and optimisation.
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
