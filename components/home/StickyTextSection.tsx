"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const lines = [
  {
    className: "fading-sticky-text1",
    text: "We understand that your business is unique, which is why we never offer a one-size-fits-all solution.",
  },
  {
    className: "fading-sticky-text2",
    text: "Our team takes the time to deeply understand your goals, audience, and competitive landscape.",
  },
  {
    className: "fading-sticky-text3",
    text: "Then we build a bespoke strategy designed to deliver results that matter to you.",
  },
];

export default function StickyTextSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1300px)", () => {
      gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          trigger: ".sticky-text-opacity",
          start: "center 50%",
          end: "bottom -75%",
          pin: ".sticky-text-opacity",
          pinSpacing: "margin",
        },
      })
        .fromTo(".fading-sticky-text1", { autoAlpha: 0.5 }, { autoAlpha: 1, duration: 0.6 }, 0)
        .from(".fading-sticky-text2", { autoAlpha: 0.1, duration: 0.7 }, 0.6)
        .from(".fading-sticky-text3", { autoAlpha: 0.1, duration: 0.7 }, 1.3);
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-[#f8f8f7]">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="sticky-text-opacity flex flex-col gap-8 max-w-4xl">
          <span className="text-xs font-semibold text-[#6F6F6F] uppercase tracking-widest">Our Approach</span>
          {lines.map((line, i) => (
            <p
              key={i}
              className={`${line.className} text-3xl md:text-4xl lg:text-5xl font-bold leading-tight`}
            >
              {line.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
