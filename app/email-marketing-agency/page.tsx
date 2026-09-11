import type { Metadata } from "next";
import ServicePageHero from "@/components/shared/ServicePageHero";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Email Marketing Agency - Rivari Studio",
  description: "Expert email marketing services. We design, write and manage email campaigns that nurture your leads and drive repeat revenue.",
};

const features = [
  { title: "Email Strategy", desc: "A bespoke email marketing strategy built around your customer journey and business objectives." },
  { title: "Campaign Design", desc: "Beautiful, on-brand email designs that grab attention in a crowded inbox and drive clicks." },
  { title: "Copywriting", desc: "Compelling email copy that resonates with your audience and drives the actions you want." },
  { title: "Automation Flows", desc: "Set up powerful automated sequences that nurture leads and drive revenue 24/7." },
  { title: "List Management", desc: "Segment and manage your email list to ensure the right message reaches the right person." },
  { title: "A/B Testing", desc: "Continuous testing of subject lines, content and send times to maximise your open and click rates." },
];

export default function EmailMarketingPage() {
  return (
    <>
      <ServicePageHero
        badge="Email Marketing"
        title="Email Marketing That <em class='italic font-light'>Nurtures</em> And Converts"
        subtitle="We build and manage email marketing programmes that keep your audience engaged, nurture your leads and drive revenue from your existing customers."
        stats={[
          { value: "45%", label: "Open Rate" },
          { value: "12%", label: "Click Rate" },
          { value: "5x", label: "ROI Average" },
        ]}
        image="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/08/Rectangle-41964-3.avif"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Email Marketing Services</h2>
            <p className="text-[#6F6F6F] text-lg max-w-2xl mx-auto">
              Everything you need to build a high-performing email marketing programme.
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

      <CtaSection />
    </>
  );
}
