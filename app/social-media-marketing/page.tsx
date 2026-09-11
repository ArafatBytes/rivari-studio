import type { Metadata } from "next";
import ServicePageHero from "@/components/shared/ServicePageHero";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Social Media Marketing Agency - Rivari Studio",
  description: "Grow your brand with expert social media marketing. We manage your presence across all major platforms to build an engaged community.",
};

const features = [
  { title: "Content Creation", desc: "Scroll-stopping content crafted by our creative team that reflects your brand voice and resonates with your audience." },
  { title: "Community Management", desc: "Daily management of your social channels, responding to comments and building genuine relationships with your followers." },
  { title: "Social Strategy", desc: "A bespoke content strategy built around your business goals, target audience and competitive landscape." },
  { title: "Platform Management", desc: "Management of Instagram, Facebook, LinkedIn, TikTok and more from one integrated team." },
  { title: "Analytics & Reporting", desc: "Monthly reporting on follower growth, engagement rates and the business impact of your social presence." },
  { title: "Influencer Marketing", desc: "Identify and partner with relevant influencers to expand your reach and build brand credibility." },
];

export default function SocialMediaPage() {
  return (
    <>
      <ServicePageHero
        badge="Social Media Marketing"
        title="Social Media That <em class='italic font-light'>Builds</em> Your Brand"
        subtitle="We manage your social media presence across all major platforms, creating content that grows your audience and drives real business results."
        stats={[
          { value: "10x", label: "Follower Growth" },
          { value: "25%", label: "Engagement Rate" },
          { value: "60+", label: "Brands Managed" },
        ]}
        image="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/08/Rectangle-41963-5.avif"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Social Media Services</h2>
            <p className="text-[#6F6F6F] text-lg max-w-2xl mx-auto">
              Full-service social media management that keeps your brand active, engaged and growing.
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
