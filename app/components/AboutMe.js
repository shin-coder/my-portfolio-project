import React from "react";
import "../globals.css";

function AboutMe() {
  return (
    <>
      <div className="bg-dark-base">
        <section className="relative max-w-[1440px] mx-auto h-[100vh] px-[5.5%]">
          <div className="font-geologica font-[400] text-small-size text-white pt-[4rem] small-arrow-white">
            MY PROFILE
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div
              className="glitch animate-glitch animate-noiseAfter relative font-geologica font-[600] text-white z-1 tracking-tight text-large-size text-center whitespace-nowrap"
              data-text="Who is Shin?"
            >
              Who is Shin?
            </div>
            <p className="mt-[3rem] text-white font-zenKakuNew text-base-size lg:text-center">
              デザイン会社にてグラフィックデザインとコーディング業務を担当。
              <br></br>
              機能性と視覚的な魅力を両立させた実装を行う。
            </p>
            <p className="mt-[1.5rem] text-light-gray font-geologica font-[400] text-base-size lg:text-center">
              Handling graphic design and coding at a design company,<br></br>
              implementing solutions that balance functionality with visual
              appeal.
            </p>
            <div className="lg:text-center mt-[3rem]">
              <a
                className="relative inline-block text-white font-geologica font-[400] text-small-size cursor-default hover:animate-wiggle text-wiggle-shadow"
                href="/about"
              >
                Learn about him
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutMe;
