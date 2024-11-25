"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { scrambleText } from "./utils/scrambleAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FirstView from "./components/FirstView";
import LoadingScreen from "./components/LoadingScreen";
import SecondSection from "./components/AboutMe";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // loading process
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoading = async () => {
      await new Promise((resolve) => {
        if (document.readyState === "complete") {
          resolve();
        } else {
          window.addEventListener("load", resolve);
        }
      });
      await new Promise((resolve) => {
        setTimeout(() => {
          setLoading(false);
        }, 3500);
      });
    };

    handleLoading();
  }, []);

  // Scroll-linked scramble animation
  useEffect(() => {
    if (!loading) {
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
      setupScrambleAnimations();
    }
  }, [loading]);

  return (
    <>
      {loading ? <LoadingScreen /> : <FirstView />}
      <SecondSection />
    </>
  );
}
