"use client";
import React, { useEffect } from "react";
import { scrambleText } from "@/app/utils/scrambleAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorksArchive from "@/app/works-archive/components/WorksArchive";
import Footer from "@/app/components/Footer";

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
              start: "10% bottom",
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
    <>
      <WorksArchive />
      <Footer />
    </>
  );
}

export default Page;
