"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const testimonials = [
  {
    quote: "Republic Marketing completely transformed our online presence. Our Google Ads campaigns now consistently deliver a 5x ROAS and we've seen a 300% increase in qualified leads.",
    name: "Sarah Thompson",
    title: "CEO, Rove Legal",
    rating: 5,
  },
  {
    quote: "The team at Republic are exceptional. They don't just run ads, they become a genuine extension of your marketing team. Our e-commerce revenue doubled within 6 months.",
    name: "James Mitchell",
    title: "Founder, Harmonique",
    rating: 5,
  },
  {
    quote: "Best investment we ever made. The SEO strategy they built for us has driven a 400% increase in organic traffic and we're ranking page 1 for all our target keywords.",
    name: "Emily Clarke",
    title: "Marketing Director, PureBurn",
    rating: 5,
  },
  {
    quote: "Outstanding results from day one. Republic's data-driven approach to PPC management has reduced our CPA by 60% while tripling our lead volume. Highly recommend!",
    name: "David Patel",
    title: "Head of Growth, Plume Studio",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".testimonial-card", {
      scrollTrigger: {
        trigger: ".testimonials-grid",
        start: "top 80%",
        once: true,
      },
      y: 50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-semibold text-[#6F6F6F] uppercase tracking-widest mb-4 block">Client Reviews</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-lg">
              Don&apos;t take our word for it
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <img 
              src="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/06/Footer_clutch_white_may_2026-1-1.svg" 
              alt="Clutch Reviews"
              className="h-10 object-contain"
            />
            <img 
              src="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/06/Republic-Marketing-Google-reviews.svg" 
              alt="Google Reviews"
              className="h-10 object-contain"
            />
          </div>
        </div>

        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="testimonial-card bg-[#f8f8f7] rounded-3xl p-8 md:p-10 flex flex-col justify-between"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#016DFF">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <blockquote className="text-base md:text-lg text-[#040316] leading-relaxed mb-8 font-medium flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div>
                <p className="font-bold text-[#040316]">{t.name}</p>
                <p className="text-sm text-[#6F6F6F]">{t.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-[#016DFF] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#040316] transition-colors"
          >
            Work with us
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
