"use client";
import React, { useEffect, useState } from "react";
import { scrambleText } from "./utils/scrambleAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LoadingScreen from "./components/LoadingScreen";
import FirstView from "./components/FirstView";
import AboutSection from "./components/AboutMe";
import WorksSection from "./components/Works";
import SkillsSection from "./components/Skills";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // Loading
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#1b1b1b";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  useEffect(() => {
    const handleLoading = async () => {
      await new Promise((resolve) => {
        if (document.readyState === "complete") {
          resolve();
        } else {
          window.addEventListener("load", resolve);
        }
      });

      await new Promise((resolve) => setTimeout(resolve, 3000));

      setLoading(false);

      setTimeout(() => setContentVisible(true), 100);
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
                start: "center 97.5%",
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
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div
          style={{
            opacity: contentVisible ? 1 : 0,
            transition: "opacity 0.3s ease-out",
          }}
        >
          <FirstView />
          <AboutSection />
          <WorksSection />
          <SkillsSection />
          <Footer />
        </div>
      )}
    </>
  );
}
