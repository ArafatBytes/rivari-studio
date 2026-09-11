import type { Metadata } from "next";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "About Rivari Studio - Award-Winning Digital Agency",
  description: "Learn about Rivari Studio, our story, our team and our mission to help ambitious businesses grow through innovative digital marketing.",
};

const team = [
  {
    name: "Adam Walker",
    title: "Founder & CEO",
    img: "https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/07/P1226497-1-4.png",
  },
  {
    name: "Jessica Mills",
    title: "Head of PPC",
    img: "https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/07/Ellipse-148-1.svg",
  },
  {
    name: "Tom Richards",
    title: "Head of SEO",
    img: "https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/07/Rectangle-2-copy-scaled.webp",
  },
];

const values = [
  {
    number: "01",
    title: "Transparency First",
    desc: "We believe in complete honesty with our clients. You'll always know exactly what we're doing, why we're doing it, and the results it's delivering.",
  },
  {
    number: "02",
    title: "Data-Driven Decisions",
    desc: "Every strategy we build and every decision we make is grounded in data. We let the numbers tell us what works and what doesn't.",
  },
  {
    number: "03",
    title: "Growth Obsessed",
    desc: "We're obsessed with helping our clients grow. We measure our success by the results we achieve for you.",
  },
  {
    number: "04",
    title: "Always Innovating",
    desc: "The digital landscape never stands still and neither do we. We're constantly testing new strategies and approaches to stay ahead.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-[#f8f8f7]">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <span className="text-xs font-semibold text-[#016DFF] uppercase tracking-widest mb-4 block">About Us</span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                We&apos;re <em className="italic font-light">Rivari Studio</em>
              </h1>
              <p className="text-lg md:text-xl text-[#6F6F6F] leading-relaxed max-w-lg">
                Founded in 2020, we&apos;re an award-winning digital marketing and web design agency helping ambitious businesses grow online. We&apos;re based in Birmingham and London, but we work with brands all over the UK.
              </p>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden">
              <img 
                src="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/07/Rectangle-2-copy-scaled.webp"
                alt="Rivari Studio Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2020", label: "Founded" },
              { value: "150+", label: "Clients Served" },
              { value: "£10M+", label: "Revenue Generated" },
              { value: "5★", label: "Average Review" },
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#f8f8f7]">
                <p className="text-4xl md:text-5xl font-bold text-[#016DFF] mb-2">{stat.value}</p>
                <p className="text-[#6F6F6F] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#f8f8f7]">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="mb-14">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-[#6F6F6F] text-lg max-w-xl">
              These are the principles that guide how we work and the culture we&apos;ve built.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.number} className="bg-white rounded-3xl p-10 flex gap-8">
                <span className="text-4xl font-bold text-[#016DFF]/20 shrink-0">{v.number}</span>
                <div>
                  <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                  <p className="text-[#6F6F6F] leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="mb-14">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet the team</h2>
            <p className="text-[#6F6F6F] text-lg max-w-xl">
              Experienced digital marketers who are passionate about helping businesses grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-[#f8f8f7]">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-[#6F6F6F] font-medium">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-[#f8f8f7]">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <p className="text-sm font-semibold text-[#6F6F6F] uppercase tracking-widest mb-8 text-center">Our Credentials</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <img src="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/08/Partner-RGB-2-1.png" alt="Google Partner" className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/06/logo-meta-partner-1.svg" alt="Meta Partner" className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/06/Digital-Agency-Network-2.svg" alt="Digital Agency Network" className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/06/Footer_clutch_white_may_2026-1-1.svg" alt="Clutch" className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
