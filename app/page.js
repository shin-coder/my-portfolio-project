"use client";
import Image from "next/image";
import { useEffect } from "react";
import FirstView from "./components/FirstView";
import { scrambleText } from "./utils/scrambleAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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

    if (document.readyState === "complete") {
      setupScrambleAnimations();
    } else {
      window.addEventListener("load", setupScrambleAnimations);
      return () => window.removeEventListener("load", setupScrambleAnimations);
    }
  }, []);

  return (
    <>
      <FirstView />
    </>
  );
}
