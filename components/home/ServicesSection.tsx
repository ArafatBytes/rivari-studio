"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const services = [
  {
    title: "Web design & development",
    desc: "We create purposeful websites that go beyond aesthetics. With our expertise in SEO and CRO, we design sites that turn clicks into calls and revenue. Our focus on clean code, fast-loading pages, and future-proof development ensures your website can adapt and serve you for years.",
    tags: ["Copywriting", "WordPress", "UX Design", "Web Development", "CRO", "Graphic Design"],
    href: "/web-design-birmingham",
  },
  {
    title: "PPC",
    desc: "Put your business in front of the people who are actively looking for your services. We will reduce your CPA and increase your ROAS to help your business scale efficiently.",
    tags: ["Google Ads", "Microsoft Ads", "YouTube Ads", "Shopping Ads", "Display Ads"],
    href: "/ppc-agency",
  },
  {
    title: "SEO",
    desc: "Outrank your competitors with our transparent, data-driven approach. Turn organic traffic into your most valuable acquisition channel with content strategies that actually work.",
    tags: ["Technical SEO", "Link Building", "Local SEO", "Content Strategy", "Keyword Research"],
    href: "/seo-birmingham",
  },
  {
    title: "Paid Social",
    desc: "Build brand awareness and generate demand with scroll-stopping ad campaigns across Meta, TikTok, and LinkedIn. We create, test and optimise campaigns that speak directly to your ideal customer.",
    tags: ["Facebook Ads", "Instagram Ads", "TikTok Ads", "LinkedIn Ads", "Pinterest Ads"],
    href: "/facebook-ads-agency",
  },
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal heading words
    gsap.from(".services-heading .word", {
      scrollTrigger: { trigger: ".services-heading", start: "top 80%", once: true },
      y: 80, opacity: 0, duration: 0.8, stagger: 0.06, ease: "power4.out",
    });

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      // Pin the left column
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 120px",
        end: "bottom bottom",
        pin: leftColRef.current,
        pinSpacing: false,
      });

      // Rotate the arrow
      gsap.to(".service-arrow-img", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
        rotate: 360,
        ease: "none",
      });
    });

    // Blur/fade each service item in
    gsap.utils.toArray<HTMLElement>(".service-item").forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0.2, filter: "blur(8px)", y: 60 },
        {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 50%",
            scrub: false,
            once: true,
          },
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        }
      );
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section className="bg-[#f8f8f7] py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        {/* Top heading */}
        <div className="mb-20 max-w-4xl">
          <h2 className="services-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="word inline-block">We</span>{" "}
            <span className="word inline-block">Embrace</span>{" "}
            <span className="word inline-block">The</span>{" "}
            <em className="word inline-block font-light italic">Unknown</em>{" "}
            <span className="word inline-block">And</span>{" "}
            <span className="word inline-block">Turn</span>{" "}
            <span className="word inline-block">It</span>{" "}
            <span className="word inline-block">Into</span>{" "}
            <em className="word inline-block font-light italic">Known</em>
          </h2>
        </div>

        {/* Two column layout */}
        <div ref={containerRef} className="flex flex-col lg:flex-row gap-8 items-start relative">
          
          {/* LEFT: Pinned - Our Services + Arrow */}
          <div ref={leftColRef} className="lg:w-[35%] shrink-0 flex flex-col gap-8 pt-4 lg:pt-10 z-10">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Our<br />Services
            </h2>
            <div className="service-arrow-img hidden lg:flex w-24 h-24 items-center justify-center">
              <img 
                src="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/06/Arrow-Down.svg"
                alt="Arrow"
                className="w-24 h-24"
              />
            </div>
          </div>

          {/* RIGHT: Scrolling service items */}
          <div className="lg:w-[65%] flex flex-col gap-24 lg:gap-36 pb-24 lg:pl-16">
            {services.map((service, i) => (
              <div key={i} className="service-item">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{service.title}</h3>
                <p className="text-base md:text-lg text-[#6F6F6F] mb-8 leading-relaxed max-w-2xl">
                  {service.desc}
                </p>
                {/* Service badges */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {service.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-white border border-[#E8E8E8] text-[#040316] text-xs font-semibold px-4 py-2 rounded-full hover:border-[#016DFF] hover:text-[#016DFF] transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 bg-[#040316] text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#016DFF] transition-colors"
                >
                  Explore Service
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
