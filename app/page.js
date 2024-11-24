"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import FirstView from "./components/FirstView";
import LoadingScreen from "./components/LoadingScreen";
import { scrambleText } from "./utils/scrambleAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // loading process
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoading = async () => {
      // GSAPとThree.jsの初期化を待機
      await Promise.all([
        // ここに必要な初期化処理を追加
        new Promise((resolve) => {
          if (document.readyState === "complete") {
            resolve();
          } else {
            window.addEventListener("load", resolve);
          }
        }),
      ]).then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
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

  // if (loading) {
  //   return <LoadingScreen />; // ローディング画面コンポーネント
  // }

  return <>{loading ? <LoadingScreen /> : <FirstView />}</>;
}
