"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function VideoScaleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !videoContainerRef.current) return;

    // Calculate scale required to make the container full width
    const calculateScale = () => {
      const elementWidth = videoContainerRef.current!.offsetWidth;
      const viewportWidth = window.innerWidth;
      return viewportWidth / elementWidth;
    };

    // Responsive GSAP MatchMedia could be used, but keeping it simple as in the original JS:
    const mm = gsap.matchMedia();

    mm.add("(min-width: 888px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: videoContainerRef.current,
          start: "center center",
          end: "+=1000",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          onLeaveBack: () => {
            gsap.to(videoRef.current, {
              borderRadius: "20px",
              duration: 0.1,
            });
          },
        },
      });

      tl.to(videoContainerRef.current, {
        scale: () => calculateScale(),
        ease: "power2.out",
      }).to(
        videoRef.current,
        {
          borderRadius: "0px",
          ease: "power2.out",
        },
        0
      );
    });

    mm.add("(max-width: 887px)", () => {
       gsap.to(videoContainerRef.current, {
        scrollTrigger: {
          trigger: videoContainerRef.current,
          start: "center center",
          scrub: 1,
        },
        scale: () => calculateScale(),
        ease: "power2.out",
      });
      gsap.to(videoRef.current, {
        scrollTrigger: {
          trigger: videoContainerRef.current,
          start: "center center",
          scrub: 1,
        },
        borderRadius: "0px",
        ease: "power2.out",
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex justify-center items-center min-h-[60vh]">
        <div 
          ref={videoContainerRef} 
          className="w-full max-w-4xl aspect-video origin-center will-change-transform z-10"
        >
          {/* We are using a placeholder video URL if the CDN one fails, but let's try their actual CDN URL for accuracy */}
          <video 
            ref={videoRef}
            className="w-full h-full object-cover rounded-[20px] will-change-transform shadow-2xl"
            autoPlay 
            loop 
            muted 
            playsInline
            src="https://rmvideos.b-cdn.net/Webdesign%20video.webm"
          />
        </div>
      </div>
    </section>
  );
}
