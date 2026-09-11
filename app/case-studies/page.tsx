import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Case Studies - Republic Marketing",
  description: "Explore our portfolio of award-winning digital marketing and web design work. Real results for real businesses.",
};

const projects = [
  {
    title: "Harmonique™",
    desc: "Enhancing fitness journeys with premium gummies",
    tags: ["UX", "Web Design", "Digital Marketing"],
    bg: "#F5EDE8",
    img: "https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/08/Rectangle-41964-3.avif",
    href: "/case-studies/product-photography-and-website-design-nutritional-supplement-brand",
    result: "300% increase in online revenue",
  },
  {
    title: "Rove Legal",
    desc: "Reimagining an immigration law firm's website",
    tags: ["UX", "Web Design", "Digital Marketing"],
    bg: "#E8EFF5",
    img: "https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/08/Rectangle-41963-5.avif",
    href: "/case-studies/website-design-for-immigration-lawfirm-rove",
    result: "200% increase in qualified leads",
  },
  {
    title: "PureBurn™",
    desc: "Redefining fitness nutrition with PureBurn",
    tags: ["UX", "Web Design", "Digital Marketing"],
    bg: "#F5E8EF",
    img: "https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/08/Rectangle-41964-1.avif",
    href: "/case-studies/product-photography-and-website-design-health-and-wellness-brand",
    result: "5x ROAS from Google Ads",
  },
  {
    title: "Plume Studio",
    desc: "Accelerating the growth of a tech agency",
    tags: ["Google Ads", "SEO", "Digital Marketing"],
    bg: "#E8F5EE",
    img: "https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/08/Group-2085664245-1.avif",
    href: "/case-studies/growth-marketing-for-plume",
    result: "400% increase in organic traffic",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-[#f8f8f7]">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <span className="text-xs font-semibold text-[#016DFF] uppercase tracking-widest mb-4 block">Our Work</span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
            Projects We&apos;re{" "}
            <em className="italic font-light">Proud Of</em>
          </h1>
          <p className="text-[#6F6F6F] text-lg md:text-xl max-w-2xl leading-relaxed">
            We&apos;ve helped ambitious brands across the UK transform their digital presence and drive real, measurable growth.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <Link
                href={project.href}
                key={i}
                className="group block rounded-3xl overflow-hidden relative hover:-translate-y-1 transition-transform duration-300"
                style={{ backgroundColor: project.bg }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-1">{project.title}</h2>
                      <p className="text-[#6F6F6F] font-medium">{project.desc}</p>
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 duration-300 shadow-md shrink-0 ml-4">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-white/70 text-[#040316] text-xs font-semibold px-3 py-1.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm font-semibold text-[#016DFF]">↗ {project.result}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
