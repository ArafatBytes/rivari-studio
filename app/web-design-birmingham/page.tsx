import type { Metadata } from "next";
import ServicePageHero from "@/components/shared/ServicePageHero";
import CtaSection from "@/components/home/CtaSection";
import ProjectsSection from "@/components/home/ResultsCarousel";

export const metadata: Metadata = {
  title: "Web Design Agency Birmingham - Rivari Studio",
  description: "Award-winning web design agency in Birmingham. We build websites that are beautiful, fast and designed to convert visitors into customers.",
};

const features = [
  { title: "UX Design", desc: "User research and journey mapping to create intuitive experiences that guide visitors towards conversion." },
  { title: "UI Design", desc: "Beautiful, pixel-perfect interfaces that reflect your brand and impress your audience from the first click." },
  { title: "WordPress Development", desc: "Custom WordPress websites built for performance, security and ease of use." },
  { title: "Shopify Development", desc: "High-converting Shopify stores designed to maximise your e-commerce revenue." },
  { title: "Copywriting", desc: "Compelling website copy that communicates your value proposition and drives action." },
  { title: "Graphic Design", desc: "Brand identity, illustrations and visual assets that make your business stand out." },
];

export default function WebDesignPage() {
  return (
    <>
      <ServicePageHero
        badge="Web Design"
        title="Websites That Are <em class='italic font-light'>Beautiful</em> And Built To Convert"
        subtitle="We design and build purposeful websites that go beyond aesthetics. Every element is crafted to create an experience that converts visitors into customers."
        stats={[
          { value: "2x", label: "Conversion Rate" },
          { value: "99", label: "Performance Score" },
          { value: "100+", label: "Sites Launched" },
        ]}
        image="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/08/Rectangle-41964-1.avif"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">What&apos;s Included</h2>
            <p className="text-[#6F6F6F] text-lg max-w-2xl mx-auto">
              A full-service web design package covering strategy, design, development and copywriting.
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
