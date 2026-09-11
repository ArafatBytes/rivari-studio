import type { Metadata } from "next";
import ServicePageHero from "@/components/shared/ServicePageHero";
import CtaSection from "@/components/home/CtaSection";
import ProjectsSection from "@/components/home/ResultsCarousel";

export const metadata: Metadata = {
  title: "PPC Agency Birmingham - Republic Marketing",
  description: "Award-winning PPC agency in Birmingham. We drive measurable results through Google Ads, Shopping campaigns and paid search strategies. Get a free audit today.",
};

const features = [
  { title: "Google Search Ads", desc: "Capture high-intent searchers at the exact moment they're looking for your products or services." },
  { title: "Google Shopping", desc: "Showcase your products at the top of Google search results with optimised product listings." },
  { title: "Display Advertising", desc: "Build brand awareness and retarget potential customers across the Google Display Network." },
  { title: "YouTube Advertising", desc: "Engage your audience with compelling video ads that drive awareness and consideration." },
  { title: "Microsoft / Bing Ads", desc: "Expand your reach with Bing and reach audiences that your competitors may be missing." },
  { title: "Performance Reporting", desc: "Transparent, easy-to-understand reporting that shows exactly what your investment is delivering." },
];

export default function PPCPage() {
  return (
    <>
      <ServicePageHero
        badge="PPC Agency"
        title="Google Ads That <em class='italic font-light'>Actually</em> Deliver Results"
        subtitle="We create and manage PPC campaigns that drive qualified leads and sales for your business. Our data-driven approach means every pound of your budget works harder."
        stats={[
          { value: "5x", label: "Average ROAS" },
          { value: "60%", label: "CPA Reduction" },
          { value: "200+", label: "Campaigns Managed" },
        ]}
        image="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/08/Rectangle-41963-5.avif"
      />

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">What we manage for you</h2>
            <p className="text-[#6F6F6F] text-lg max-w-2xl mx-auto">
              Our PPC service covers every channel and campaign type to ensure maximum reach and return.
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
