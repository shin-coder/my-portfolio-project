"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "@/app/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { scrambleText } from "@/app/utils/scrambleAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { works } from "@/data/works";
import Footer from "@/app/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Workpage({ params }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

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

  const work = works.find((work) => work.id === params.id);

  if (!work) {
    return <div>Work not found</div>;
  }

  return (
    <>
      <div className="fixed top-[3%] left-[50%] translate-x-[-50%] w-[89%] max-w-[1440px] max-auto mix-blend-exclusion z-[999] title-wrap">
        <nav className="flex justify-between items-center w-full text-white font-semibold">
          <a
            href="/"
            className="font-geologica text-base-size scramble-text"
            data-final-text="_SK"
          >
            _SK
          </a>
          <ul className="flex justify-between items-center w-[min(40%,150px)]">
            <li>
              <a
                href="/works-archive"
                className="font-geologica text-base-size scramble-text font-[400] uppercase"
                data-final-text="WORKS"
              >
                works
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="font-geologica text-base-size scramble-text font-[400] uppercase"
                data-final-text="ABOUT"
              >
                about
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bg-white-base">
        <div className="w-full max-w-[1440px] mx-auto px-[5.5%] pt-[8rem]">
          <div className="lg:grid lg:grid-cols-[1fr_min(90%,820px)_1fr] gap-[5%] pb-[80px]">
            <small className="font-geologica font-normal text-base-size">
              {work.id}
            </small>
            <section className="mt-[45px]">
              <h1
                className="font-geologica font-bold text-title-size text-black-primary scramble-text"
                data-final-text={work.title}
              >
                {work.title}
              </h1>
              <small className="font-geologica font-light text-small-size text-black-primary">
                <a
                  href={work.url}
                  target="_blank"
                  className="flex items-center gap-[0.5rem]"
                >
                  Launch Site
                  <span className="inline-block scale-[0.8] lg:scale-100">
                    <Image
                      src="/images/launch-arrow.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </span>
                </a>
              </small>
              <article className="mt-[4rem]">
                <div className="grid gap-[2.5rem] lg:grid-cols-2">
                  <div className="w-[min(90%,400px)]">
                    <h2 className="text-base-size text-light-gray">担当領域</h2>
                    <p className="text-base-size text-black-primary mt-[1rem]">
                      {work.fields}
                    </p>
                  </div>
                  <div className="w-[min(90%,400px)]">
                    <h2 className="text-base-size text-light-gray">開発</h2>
                    <p className="text-base-size text-black-primary mt-[1rem]">
                      {work.tech}
                    </p>
                  </div>
                  <div className="w-[min(90%,400px)]">
                    <h2 className="text-base-size text-light-gray">
                      プロジェクト概要
                    </h2>
                    <p className="text-base-size text-black-primary mt-[1rem] leading-[1.6]">
                      {work.project}
                    </p>
                  </div>
                  <div className="w-[min(90%,400px)]">
                    <h2 className="text-base-size text-light-gray">制作期間</h2>
                    <p className="text-base-size text-black-primary mt-[1rem]">
                      {work.period}
                    </p>
                  </div>
                </div>
                <div className="mt-[2.5rem]">
                  <h2 className="text-base-size text-light-gray">実装内容</h2>
                  <ul className="flex justify-between flex-wrap">
                    {work.description.articles.map((article, index) => (
                      <li key={index} className="w-[min(90%,400px)] mt-[1rem]">
                        <h3 className="text-base-size text-black-primary font-bold">
                          {article.title}
                        </h3>
                        <ul className="pl-[0.8em]">
                          {article.details.map((detail, detailIndex) => (
                            <li
                              key={detailIndex}
                              className="text-base-size text-black-primary mt-[0.5rem] before:content-['・'] indent-[-1.2em] pl-[1em] leading-[1.6]"
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
              <div className="mt-[5rem] w-full">
                <div>
                  <Image
                    src={work.images[0]}
                    alt="workのイメージ画像1"
                    width={832}
                    height={400}
                    data-aos="zoom-out"
                  />
                </div>
                <div className="flex mt-[3rem] gap-[1.5rem] lg:gap-[9rem] lg:mt-[9rem]">
                  <div className="w-full max-w-[300px]">
                    <Image
                      src={work.images[1]}
                      alt="workのイメージ画像2"
                      width={350}
                      height={300}
                      data-aos="zoom-out"
                    />
                  </div>
                  <div className="mt-[2rem] w-full max-w-[300px] lg:mt-[5rem]">
                    <Image
                      src={work.images[2]}
                      alt="workのイメージ画像3"
                      width={350}
                      height={300}
                      data-aos="zoom-out"
                    />
                  </div>
                </div>
                <div className="w-[90%] mt-[3rem] lg:mt-[9rem]">
                  <Image
                    src={work.images[3]}
                    alt="workのイメージ画像4"
                    width={700}
                    height={450}
                    data-aos="zoom-out"
                  />
                </div>
              </div>
            </section>
            <div className="relative w-full h-[4rem] lg:h-full">
              <div className="absolute bottom-0 right-0 mt-[2rem]  lg:mt-0 lg:right-0">
                <ul className="flex gap-[1.5rem] lg:flex-col">
                  <li className="font-geologica font-normal text-small-size text-light-gray">
                    <a href="#">Case_02</a>
                  </li>
                  <li className="font-geologica font-normal text-small-size text-light-gray">
                    <a href="#">Case_03</a>
                  </li>
                  <li className="font-geologica font-normal text-small-size text-light-gray">
                    <a href="#">Case_04</a>
                  </li>
                  <li className="font-geologica font-normal text-small-size text-light-gray">
                    <a href="#">Case_05</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
