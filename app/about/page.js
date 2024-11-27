"use client";
import React, { useEffect } from "react";
import { scrambleText } from "@/app/utils/scrambleAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutLower from "@/app/about/components/About";

gsap.registerPlugin(ScrollTrigger);

function Page() {
  // Scroll-linked scramble animation
  useEffect(() => {
    const setupScrambleAnimations = () => {
      const scrambleElements = document.querySelectorAll(".scramble-text");

      scrambleElements.forEach((element) => {
        const finalText = element.dataset.finalText;

        gsap.set(element, {
          autoAlpha: 0,
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: element.closest(".title-wrap"),
              start: "center bottom",
              // markers: true,
              onEnter: () => {
                scrambleText(element, finalText, 0);
              },
            },
          })
          .to(element, {
            autoAlpha: 1,
            duration: 0.5,
          });
      });
    };
    setupScrambleAnimations();
  }, []);

  return (
    <div>
      <AboutLower />
    </div>
  );
}

export default Page;
