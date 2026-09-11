"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Stagger word reveal - each word slides up from clip
    const words = document.querySelectorAll(".hero-word");
    gsap.fromTo(words, 
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: "power4.out",
        delay: 0.1,
      }
    );

    // Hero img3 - the floating photo that comes in from the side
    gsap.fromTo(".hero-img3-wrap",
      { scale: 0.73, autoAlpha: 0, xPercent: -150, yPercent: 80 },
      { scale: 1, autoAlpha: 1, xPercent: -50, yPercent: 0, duration: 0.7, ease: "power3.out", delay: 0.9 }
    );

    // Hero img1 and img2 fade/scale in
    gsap.fromTo(".hero-img1-wrap",
      { scale: 0.8, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 0.8, ease: "back.out(1.4)", delay: 0.6 }
    );

    gsap.fromTo(".hero-img2-wrap",
      { scale: 0.8, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, duration: 0.8, ease: "back.out(1.4)", delay: 0.75 }
    );

    // Logos fade up
    gsap.from(".hero-logo-item", {
      y: 24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: "power2.out",
      delay: 0.8,
    });

    // Subtitle
    gsap.from(".hero-subtitle", {
      y: 20,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      delay: 0.7,
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative pt-36 md:pt-44 pb-16 overflow-hidden bg-[#f8f8f7]">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        
        {/* Hero Title */}
        <h1 className="text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.88] font-bold tracking-tight mb-0">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {/* Line 1 */}
            <div className="overflow-hidden">
              <span className="hero-word inline-block">Digital</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-word inline-block">Agency</span>
            </div>
            
            {/* Floating image 1 - people photo */}
            <div className="hero-img1-wrap overflow-hidden rounded-[50px] w-[clamp(8rem,14vw,16rem)] h-[clamp(4rem,7vw,8rem)] relative inline-block align-middle">
              <Image
                src="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/08/Rectangle-41961-1.avif"
                alt="Team"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
          
          {/* Line 2 */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-1">
            <div className="overflow-hidden">
              <span className="hero-word inline-block">For</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-word inline-block text-[#016DFF]">Growth</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-word inline-block">Minded</span>
            </div>
          </div>
          
          {/* Line 3 */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-1">
            <div className="overflow-hidden">
              <span className="hero-word inline-block">Companies</span>
            </div>
            
            {/* Floating image 2 - abstract shape */}
            <div className="hero-img2-wrap hidden md:inline-block overflow-hidden rounded-[30px] w-[clamp(6rem,10vw,11rem)] h-[clamp(4rem,7vw,8rem)] relative align-middle">
              <Image
                src="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/06/Rectangle-41960.svg"
                alt=""
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Floating image 3 - person, absolute positioned */}
            <div className="hero-img3-wrap hidden md:inline-block overflow-hidden rounded-[20px] w-[clamp(6rem,10vw,12rem)] h-[clamp(4.5rem,7vw,9rem)] relative align-middle -ml-4 -rotate-6">
              <Image
                src="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/06/saikrishna-saketh-yellapragada-lFGgPEu3vS0-unsplash-1.png"
                alt="Person"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </h1>

        {/* Bottom row: logos + subtitle */}
        <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          {/* Award logos */}
          <div className="flex flex-wrap items-center gap-6 md:gap-8 opacity-70">
            <img 
              src="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/06/clutch-1.svg" 
              alt="Clutch" 
              className="hero-logo-item h-8 md:h-10 object-contain"
            />
            <img 
              src="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/06/Digital-Agency-Network-1.svg" 
              alt="Digital Agency Network" 
              className="hero-logo-item h-8 md:h-11 object-contain"
            />
            <img 
              src="https://bunny-wp-pullzone-wpreqcclyi.b-cdn.net/wp-content/uploads/2024/12/Global-Badge-2023-Fall-1-1.png" 
              alt="Global Badge" 
              className="hero-logo-item h-12 md:h-16 object-contain"
            />
          </div>
          
          {/* Subtitle text */}
          <p className="hero-subtitle max-w-sm md:max-w-xs lg:max-w-sm text-base md:text-lg text-[#6F6F6F] leading-relaxed font-medium">
            Accelerate growth with our tech-driven marketing strategies, experienced team and unique solutions and gain a competitive advantage.
          </p>
        </div>
      </div>
    </section>
  );
}
