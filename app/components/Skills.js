import React from "react";

function Skills() {
  return (
    <>
      <div className="bg-white-base w-full">
        <div className="max-w-[1440px] px-[5.5%] mx-auto">
          <h2 className="font-geologica text-base-size uppercase text-black-primary pb-[2rem] lg:pb-[5rem] font-[400] small-arrow">
            Skills
          </h2>
          <h3
            className="font-geologica text-[2rem] md:text-title-size text-black-primary font-[600] py-[2rem] tracking-tight leading-[1.2] title-wrap"
            data-final-text="Graphic Design × Coding = Creative Dev."
          >
            <div
              className="scramble-text"
              data-final-text="Graphic Design × Coding = "
            >
              <span>Graphic Design</span> × <sapn>Coding</sapn>
              <sapn>=</sapn>{" "}
            </div>
            <div className="scramble-text" data-final-text="Creative Dev.">
              <span>Creative Dev.</span>
            </div>
          </h3>
          <div>
            <ul className="lg:max-w-[600px] lg:mr-0 lg:ml-auto">
              <li className="mt-[2rem] lg:mt-[5rem]">
                <h4 className="font-geologica font-[600] text-black-primary">
                  # Design
                </h4>
                <p className="font-zenKakuNew text-base-size text-black-primary leading-[1.6] mt-[1rem]">
                  photoshopやIllustratorを用いてバナーやポスターの作成、Figmaを用いたデザイン還付の作成や簡単なプロトタイプ作成が可能。
                  <br />
                  見た目の綺麗さだけでなく、機能性なども踏まえ、デザインすることを心がけている。
                  <br />
                  また、クライアントから依頼された内容をそのまま投影するのではなく、どういう経緯で依頼に至ったかを考え、こちらから提案できることはないかを意識している。
                </p>
                <small className="inline-block font-geologica text-[#999] mt-[0.5rem]">
                  Keywords: <br />
                  Photoshop, Illustrator, Figma
                </small>
              </li>
              <li className="mt-[2rem] lg:mt-[3rem]">
                <h4 className="font-geologica font-[600] text-black-primary">
                  # Creative Coding
                </h4>
                <p className="font-zenKakuNew text-base-size text-black-primary leading-[1.6] mt-[1rem]">
                  動きがあったり、体験作りとして演出の凝ったサイトを好むこともり、Swiper.jsやGSAP、Three.jsといった様々な技術も積極的に学習を行なっている。
                  <br />
                  もちろん、演出だけでなく予測しやすい命名や保守性の高いコードを記述することも意識して、実装を行なっている。
                </p>
                <small className="inline-block font-geologica text-[#999] mt-[0.5rem]">
                  Keywords: <br />
                  Swiper.js, GSAP, Three.js
                </small>
              </li>
              <li className="mt-[2rem] lg:mt-[3rem]">
                <h4 className="font-geologica font-[600] text-black-primary">
                  # Web Development
                </h4>
                <p className="font-zenKakuNew text-base-size text-black-primary leading-[1.6] mt-[1rem]">
                  チームであらゆる場面で開発を行うことを見据え、WordPressだけでなくJAMStack開発やフレームワーク(NextJSやtailwindCSSなど)、TypeScriptの学習も行なっている。現在は、Dockerを使ってのWordPressの環境構築の学習に力を入れている。
                  <br />
                  また、日頃から記述したコードなどはGitHubにアップするよう意識している。
                </p>
                <small className="inline-block font-geologica text-[#999] mt-[0.5rem]">
                  Keywords: <br />
                  WordPress, NextJS, tailwindCSS, Astro, Docker, Git
                </small>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center w-full h-auto py-[5rem] overflow-hidden">
          <h3 className="font-geologica text-title-size text-black-primary font-[200] whitespace-nowrap js-textWidth animate-loop py-[2rem]">
            Thank you for visiting Thank you for visiting Thank you for visiting
            Thank you for visiting Thank you for visiting Thank you for visiting
            Thank you for visiting Thank you for visiting Thank you for visiting
          </h3>
        </div>
      </div>
    </>
  );
}

export default Skills;
