"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const awards = [
  {
    img: "https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2025/01/global_award_fall_2024-1-2.png",
    label: "Clutch Global Awards 2024",
    w: 312, h: 267,
  },
  {
    img: "https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/12/Awwards-logotype-2018-1-1.png",
    label: "Pro Member Agency",
    w: 392, h: 62,
  },
  {
    img: "https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/12/crown-1.png",
    label: "UK Enterprise Awards 2022",
    w: 238, h: 238,
  },
];

const featuredIn = [
  "https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/06/Screenshot-2023-09-15-at-01.25-3.png",
  "https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/06/Screenshot-2023-09-15-at-01.25-5.png",
  "https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/06/Screenshot-2023-09-15-at-01.25-2.png",
  "https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/06/Screenshot-2023-09-15-at-01.25-4.png",
];

export default function AwardsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fade in the section title
    gsap.from(".awards-title", {
      scrollTrigger: { trigger: ".awards-title", start: "top 85%", once: true },
      y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
    });

    // Stagger in award cards
    gsap.from(".award-card", {
      scrollTrigger: { trigger: ".awards-grid", start: "top 80%", once: true },
      y: 50, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
    });

    // Fade in featured logos
    gsap.from(".featured-logo", {
      scrollTrigger: { trigger: ".featured-logos", start: "top 85%", once: true },
      y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out",
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-[#f8f8f7]">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <h2 className="awards-title text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              We Embrace The <em className="italic font-light">Unknown</em> And Turn It Into <em className="italic font-light">Known</em>
            </h2>
          </div>
          <p className="max-w-xs text-[#6F6F6F] text-base leading-relaxed">
            Accelerate growth with our tech-driven marketing strategies, experienced team and unique solutions.
          </p>
        </div>

        {/* Awards grid */}
        <div className="awards-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {awards.map((award, i) => (
            <div key={i} className="award-card bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="relative mb-6" style={{ height: award.h > 150 ? 80 : 50 }}>
                <img 
                  src={award.img} 
                  alt={award.label}
                  className="h-full object-contain"
                />
              </div>
              <p className="text-sm font-semibold text-[#040316]">{award.label}</p>
            </div>
          ))}
        </div>

        {/* Featured In */}
        <div className="border-t border-gray-200 pt-12">
          <p className="text-sm font-semibold text-[#6F6F6F] mb-8">We&apos;ve been featured on:</p>
          <div className="featured-logos flex flex-wrap items-center gap-8 md:gap-12">
            {featuredIn.map((src, i) => (
              <img 
                key={i} 
                src={src} 
                alt="" 
                className="featured-logo h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
