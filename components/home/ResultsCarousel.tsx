"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const projects = [
  {
    title: "Harmonique™",
    desc: "Enhancing fitness journeys with premium gummies",
    tags: ["UX", "Web Design", "Digital Marketing"],
    bg: "#F5EDE8",
    img: "https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/08/Rectangle-41964-3.avif",
    href: "/case-studies/product-photography-and-website-design-nutritional-supplement-brand",
  },
  {
    title: "Rove Legal",
    desc: "Reimagining an immigration law firm's website",
    tags: ["UX", "Web Design", "Digital Marketing"],
    bg: "#E8EFF5",
    img: "https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/08/Rectangle-41963-5.avif",
    href: "/case-studies/website-design-for-immigration-lawfirm-rove",
  },
  {
    title: "PureBurn™",
    desc: "Redefining fitness nutrition with PureBurn",
    tags: ["UX", "Web Design", "Digital Marketing"],
    bg: "#F5E8EF",
    img: "https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/08/Rectangle-41964-1.avif",
    href: "/case-studies/product-photography-and-website-design-health-and-wellness-brand",
  },
  {
    title: "Plume Studio",
    desc: "Accelerating the growth of a tech agency",
    tags: ["Google Ads", "SEO", "Digital Marketing"],
    bg: "#E8F5EE",
    img: "https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/08/Group-2085664245-1.avif",
    href: "/case-studies/growth-marketing-for-plume",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stat1Ref = useRef<HTMLSpanElement>(null);
  const stat2Ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    // Title reveal
    gsap.from(".projects-title", {
      scrollTrigger: { trigger: ".projects-title", start: "top 85%", once: true },
      y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
    });

    // Project cards stagger
    gsap.from(".project-card", {
      scrollTrigger: { trigger: ".projects-grid", start: "top 80%", once: true },
      y: 60, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
    });

    // Odometer counter animation for stats
    const animateStat = (ref: React.RefObject<HTMLSpanElement | null>, target: number) => {
      if (!ref.current) return;
      const obj = { val: 0 };
      gsap.to(obj, {
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        val: target,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          if (ref.current) ref.current.textContent = Math.round(obj.val).toString();
        },
      });
    };

    animateStat(stat1Ref, 60);
    animateStat(stat2Ref, 45);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        
        <h2 className="projects-title text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
          Few projects we&apos;re proud of
        </h2>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {projects.map((project, i) => (
            <Link
              href={project.href}
              key={i}
              className="project-card group block rounded-3xl overflow-hidden relative"
              style={{ backgroundColor: project.bg }}
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-1">{project.title}</h3>
                <p className="text-[#6F6F6F] mb-4 font-medium">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-white/70 text-[#040316] text-xs font-semibold px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow indicator */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 duration-300 shadow-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-100 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Driven by results,<br />
                <em className="font-light italic">not just promises</em>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="flex items-end gap-1 mb-3">
                  <span ref={stat1Ref} className="text-7xl lg:text-8xl font-bold text-[#016DFF]">0</span>
                  <span className="text-4xl lg:text-5xl font-bold text-[#016DFF] mb-2">%</span>
                </div>
                <p className="text-lg font-semibold text-[#6F6F6F]">Repeat Revenue</p>
              </div>

              <div>
                <div className="flex items-end gap-1 mb-3">
                  <span ref={stat2Ref} className="text-7xl lg:text-8xl font-bold text-[#016DFF]">0</span>
                  <span className="text-4xl lg:text-5xl font-bold text-[#016DFF] mb-2">%</span>
                </div>
                <p className="text-lg font-semibold text-[#6F6F6F]">Growth Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
