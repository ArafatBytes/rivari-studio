"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(useGSAP);

interface ServicePageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  image?: string;
  stats?: { value: string; label: string }[];
}

export default function ServicePageHero({
  badge,
  title,
  subtitle,
  ctaText = "Get in touch",
  ctaHref = "/contact-us",
  image,
  stats,
}: ServicePageHeroProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".service-hero-badge", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out", delay: 0.2 });
    gsap.from(".service-hero-title", { y: 60, opacity: 0, duration: 0.9, ease: "power4.out", delay: 0.35 });
    gsap.from(".service-hero-sub", { y: 30, opacity: 0, duration: 0.7, ease: "power3.out", delay: 0.55 });
    gsap.from(".service-hero-cta", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out", delay: 0.7 });
    if (stats) {
      gsap.from(".service-stat", { y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out", delay: 0.8 });
    }
  }, { scope: ref });

  return (
    <section ref={ref} className="relative pt-40 pb-20 bg-[#f8f8f7] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <span className="service-hero-badge inline-block bg-[#016DFF]/10 text-[#016DFF] text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
              {badge}
            </span>
            <h1
              className="service-hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="service-hero-sub text-lg text-[#6F6F6F] leading-relaxed mb-10 max-w-xl">
              {subtitle}
            </p>
            <div className="service-hero-cta flex flex-wrap gap-4">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 bg-[#016DFF] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#040316] transition-colors"
              >
                {ctaText}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 border border-[#040316] text-[#040316] px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#040316] hover:text-white transition-colors"
              >
                See our work
              </Link>
            </div>

            {/* Stats */}
            {stats && (
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gray-200 pt-10">
                {stats.map((stat, i) => (
                  <div key={i} className="service-stat">
                    <p className="text-3xl md:text-4xl font-bold text-[#016DFF]">{stat.value}</p>
                    <p className="text-sm text-[#6F6F6F] font-medium mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right image */}
          {image && (
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
