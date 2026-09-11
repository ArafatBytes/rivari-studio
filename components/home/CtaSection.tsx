"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function CtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Growing background effect
    gsap.fromTo(
      ".growing-bg-container",
      { width: "92%", "--pseudo-border-radius": "50" },
      {
        scrollTrigger: {
          trigger: ".growing-bg-container",
          start: "top 80%",
          end: "top 65%",
          scrub: 0.5,
        },
        width: "100%",
        "--pseudo-border-radius": "0",
        ease: "power4.out",
      }
    );

    // Text fade in
    gsap.from(".cta-content > *", {
      scrollTrigger: { trigger: ".cta-content", start: "top 80%", once: true },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-8 bg-[#f8f8f7] overflow-hidden">
      <div
        className="growing-bg-container mx-auto rounded-[50px] overflow-hidden bg-[#050419] py-24 md:py-36 px-8"
        style={{ transition: "border-radius 0.3s ease" }}
      >
        <div className="cta-content max-w-5xl mx-auto text-center">
          <span className="text-[#016DFF] text-sm font-semibold uppercase tracking-widest mb-6 block">Ready to grow?</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Let&apos;s build something
            <br />
            <em className="italic font-light text-[#016DFF]">extraordinary</em> together
          </h2>
          <p className="text-[#9B9BA8] text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with Rivari Studio and unlock the full potential of your digital presence. 
            Our team is ready to craft a strategy that transforms your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-[#016DFF] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white hover:text-[#040316] transition-colors"
            >
              Get in touch
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 px-8 py-4 rounded-full text-base font-semibold hover:border-white transition-colors"
            >
              View our work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
