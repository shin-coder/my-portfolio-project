"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "@/app/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

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
      <div className="bg-white-base w-full px-[5.5%] pb-[5rem]">
        <div className="pt-[8rem] max-w-[1440px] mx-auto lg:pt-[10rem]">
          <section className="w-[min(100%,1000px)] mx-auto">
            <div className="relative h-[min(58vw,395px)] bg-white-base title-wrap">
              <h2
                className="font-geologica text-title-size font-[600] text-white mix-blend-exclusion absolute top-[50%] left-0 translate-y-[-50%] z-[9] uppercase scramble-text"
                data-final-text="ABOUT"
              >
                About
              </h2>
              <div className="absolute top-0 left-[50%] translate-x-[-50%] max-w-[300px] h-auto">
                {/* <Image
                  src="/images/prof-image.png"
                  width={300}
                  height={395}
                  alt="自分のプロフィール写真"
                  data-aos="zoom-out"
                /> */}
                <video
                  className="w-[min(100%,300px)] h-[58vw] max-h-[395px] object-cover"
                  src="/video/typing.mp4"
                  width={1920}
                  height={1080}
                  autoPlay
                  muted
                  playsInline
                  loop
                  controls={false}
                />
              </div>
              <h2
                className="font-geologica text-title-size font-[600] text-white mix-blend-exclusion absolute top-[50%] right-0 translate-y-[-50%] z-[9] uppercase scramble-text"
                data-final-text="SHIN"
              >
                Shin
              </h2>
            </div>
            <div className="grid place-items-center lg:flex lg:justify-between lg:items-start lg:mt-[5rem]">
              <div className="text-center mt-[2.5rem] lg:mt-0 lg:text-left lg:20vw">
                <p className="font-geologica font-[600] whitespace-nowrap text-black-primary text-base-size uppercase">
                  Shinnosuke Kawaguchi
                </p>
                <p className="font-zenKakuNew font-[400] text-light-gray text-small-size">
                  川口 慎之亮
                </p>
              </div>
              <p className="mt-[2.5rem] font-zenKakuNew font-[400] text-black-primary text-base-size leading-[1.6] w-[min(90%,650px)] lg:mt-0">
                医薬系の大学院を卒業後、環境コンサルタントに勤務。その後、デザイン会社に転職し、広報部として社内のメディア運用などを担う。
                <br />
                2022年7月から同社のデザイン部に異動し、グラフィックデザイナーとして勤務。
                <br />
                <br />
                2023年6月にデジタルハリウッドSTUDIO by
                LIGのWebデザイン専攻コースを卒業後、同社でコーディング業務も兼任している。
                <br />
              </p>
            </div>
          </section>
          <section className="mt-[6rem] lg:grid lg:grid-cols-[19vw,860px] lg:justify-between">
            <h2
              className="font-geologica font-[600] text-[2.5rem] uppercase arrow text-black-primary title-wrap scramble-text"
              data-final-text="SKILLS"
            >
              Skills
            </h2>
            <ul className="lg:mt-[5rem] lg:max-w-[45rem]">
              <li>
                <h3 className="font-geologica font-semibold text-[1.5rem] mt-[3rem] text-black-primary">
                  Development Language
                </h3>
                <ul className="flex gap-[0.5rem] mt-[1rem] text-small-size font-geologica text-light-gray">
                  <li>HTML/CSS</li>
                  <li>Sass</li>
                  <li>JavaScript</li>
                </ul>
                <p className="mt-[1rem] font-zenKakuNew text-black-primary leading-[1.6] text-base-size">
                  HTML/CSS(またはSass)、JavaScriptを使って静的なサイトのコーディングが可能。
                  <br />
                  BEMを活用したクラス管理とセマンティックなコーディングを意識している。
                  <br />
                  JavaScriptはjQueryに依存しないライブラリを使用しているため、ピュアな記述を採用している。
                  <br />
                </p>
              </li>
              <li>
                <h3 className="font-geologica font-semibold text-[1.5rem] mt-[3rem] text-black-primary">
                  Library
                </h3>
                <ul className="flex gap-[0.5rem] mt-[1rem] text-small-size font-geologica text-light-gray">
                  <li>Swiper</li>
                  <li>Three.js</li>
                  <li>GSAP</li>
                </ul>
                <p className="mt-[1rem] font-zenKakuNew text-black-primary leading-[1.6] text-base-size">
                  SwiperやGSAPをはじめとした、多くのサイトで見受けらるライブラリーを積極的に取り入れた実装も可能。
                  <br />
                  情報収集はなるべくドキュメントを読むことを前提としているが、ZennなどのブログやYouTube、Udemyなどの動画からの情報収集も行っている。
                </p>
              </li>
              <li>
                <h3 className="font-geologica font-semibold text-[1.5rem] mt-[3rem] text-black-primary">
                  Framework / CMS
                </h3>
                <ul className="flex gap-[0.5rem] mt-[1rem] text-small-size font-geologica text-light-gray">
                  <li>WordPress</li>
                  <li>TailwindCSS</li>
                  <li>Next.js</li>
                  <li>Astro</li>
                </ul>
                <p className="mt-[1rem] font-zenKakuNew text-black-primary leading-[1.6] text-base-size">
                  WordPressで独自のテーマ開発が可能。最近は、Dockerでの環境構築の学習も行なっている。
                  <br />
                  モダンな開発も出来るようNext.jsやAstro、TailwindCSS、
                  TypeScriptを活用したJamStack開発の学習を行っている。
                </p>
              </li>
              <li>
                <h3 className="font-geologica font-semibold text-[1.5rem] mt-[3rem] text-black-primary">
                  Tools
                </h3>
                <ul className="flex gap-[0.5rem] mt-[1rem] text-small-size font-geologica text-light-gray">
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>Figma</li>
                  <li>Git</li>
                  <li>Notion</li>
                </ul>
                <p className="mt-[1rem] font-zenKakuNew text-black-primary leading-[1.6] text-base-size">
                  現職では、PhotoshopやIllustratorを使用してデザイン制作を行っている（グラフィックデザイン全般）。
                  <br />
                  デザインカンプは、Figmaでの作成も可能（簡単なプロトタイプの作成も可能）。
                  <br />
                  開発面では、Gitを使ったファイル管理を行っていたり、Notionを使って作業管理や情報収集したものをまとめている。
                </p>
              </li>
            </ul>
          </section>
          <section className="mt-[6rem] lg:grid lg:grid-cols-[19vw,860px] lg:justify-between">
            <h2
              className="font-geologica font-[600] text-[2.5rem] uppercase arrow text-black-primary title-wrap scramble-text"
              data-final-text="Career"
            >
              Career
            </h2>
            <ul className="lg:mt-[5rem] lg:max-w-[45rem]">
              <li className="mt-[3rem]">
                <h3 className="flex gap-[0.5rem] font-geologica font-[600] text-[1.5rem] text-black-primary">
                  <span className="flex items-start month-start">04</span>
                  <span>-</span>
                  <span className="flex items-start month-end">08</span>
                </h3>
                <small className="font-geologica text-light-gray font-[400] text-small-size mt-[1rem]">
                  Environmental Consul
                </small>
                <p className="mt-[1rem] font-zenKakuNew text-black-primary leading-[1.6] text-base-size">
                  2019年4月、環境コンサルタント会社に入社。
                  <br />
                  業務部営業課に配属され、試料サンプルの取引や分析結果の報告などを行う。
                  <br />
                  2021年4月に同社の技術部に異動。水質や土壌などの採取/分析を行う。同年8月に退職。
                </p>
              </li>
              <li className="mt-[3rem]">
                <h3 className="flex gap-[0.5rem] font-geologica font-[600] text-[1.5rem] text-black-primary">
                  <span className="flex items-start month-start--second">
                    10
                  </span>
                  <span>-</span>
                  <span className="flex items-start month-end--second">
                    now
                  </span>
                </h3>
                <small className="font-geologica text-light-gray font-[400] text-small-size mt-[1rem]">
                  Environmental Consul
                </small>
                <p className="mt-[1rem] font-zenKakuNew text-black-primary leading-[1.6] text-base-size">
                  2021年10月、都内のデザイン会社に入社。
                  <br />
                  メディア事業部として、記事作成や公式サイトやSNS運用（画像作成やアカウントの運用）、
                  撮影補助などを行う。
                  <br />
                  2022年7月に同社の制作部に異動。ポスターやロゴ、ノベルティ、名刺の作成を行う。2024年8月からWEB事業部のコーダーも兼任。主に美容サイトの実装を担当。
                </p>
              </li>
            </ul>
          </section>
          <section className="mt-[6rem] lg:grid lg:grid-cols-[19vw,860px] lg:justify-between">
            <h2
              className="font-geologica font-[600] text-[2.5rem] uppercase arrow text-black-primary title-wrap scramble-text"
              data-final-text="POLICY"
            >
              Policy
            </h2>
            <ul className="lg:mt-[5rem] lg:flex lg:flex-wrap lg:justify-between">
              <li className="mt-[3rem] w-full lg:max-w-[28vw]">
                <p className="font-zenKakuNew text-black-primary leading-[1.6] text-base-size flex gap-[1rem] before:content-['01)'] before:text-[0.875rem]">
                  機能的でシンプルなデザインを好むため、静止画としても美しいことを目指した実装を心がけている。
                  <br />
                  また、デザインの意図を正確に読み解き、実装に反映させることにも重きを置いている。
                </p>
              </li>
              <li className="mt-[3rem] w-full lg:max-w-[28vw]">
                <p className="font-zenKakuNew text-black-primary leading-[1.6] text-base-size flex gap-[1rem] before:content-['02)'] before:text-[0.875rem]">
                  動きのあるサイトや演出も好きだが、無闇に取り入れるのではなく、目的に沿った体験作りとして組み込むことを第一に考えている。
                </p>
              </li>
              <li className="mt-[3rem] w-full lg:max-w-[28vw]">
                <p className="font-zenKakuNew text-black-primary leading-[1.6] text-base-size flex gap-[1rem] before:content-['03)'] before:text-[0.875rem]">
                  技術面においては、比較的にモダンなものにも興味を持っており、YouTubeやZennなどで情報をキャッチアップしている。
                </p>
              </li>
            </ul>
          </section>
          <section className="mt-[6rem] lg:grid lg:grid-cols-[19vw,860px] lg:justify-between">
            <h2
              className="font-geologica font-[600] text-[2.5rem] uppercase arrow text-black-primary title-wrap scramble-text"
              data-final-text="STRENGTHS"
            >
              Strengths
            </h2>
            <ul className="lg:mt-[5rem]">
              <details className="mb-[0.5em] border-light-gray border-b">
                <summary className="font-zenKakuNew text-black-primary text-base-size flex justify-between items-center relative py-[1.5em] pr-[0.5em] cursor-default accordion">
                  01) 高い学習意欲と適応力
                </summary>
                <p className="font-zenKakuNew text-black-primary text-base-size leading-[1.6] px-[1em] pb-[2em] translate-y-[-1em] opacity-0 lg:max-w-[45rem]">
                  未経験から1年でHTML/CSS、JavaScriptだけでなく、AstroやNext.jsといったモダンな技術にも積極的に学習を行ってきた。また、様々なプロジェクトに対応出来るよう、JavaScriptライブラリであるGSAPやthree.jsに関する学習も行った。
                  実際のプロジェクトでも、様々な技術を取り扱うため、この強みを活かしていきたい。
                </p>
              </details>
              <details className="mb-[0.5em] border-light-gray border-b">
                <summary className="font-zenKakuNew text-black-primary text-base-size flex justify-between items-center relative py-[1.5em] pr-[0.5em] cursor-default accordion">
                  02) ユーザー中心の問題解決力
                </summary>
                <p className="font-zenKakuNew text-black-primary text-base-size leading-[1.6] px-[1em] pb-[2em] translate-y-[-1em] opacity-0 lg:max-w-[45rem]">
                  クライアントから名刺専用のサイトが欲しいという声や業務対応のマニュアルがないことを受け、発注におけるフローやQ&Aを組み込んだサイトを作成。
                  結果、やりとりがスムーズになったことに加え、サイトのお陰で他のお客様にも紹介しやすくなったという声を頂けた。
                </p>
              </details>
              <details className="mb-[0.5em] border-light-gray border-b">
                <summary className="font-zenKakuNew text-black-primary text-base-size flex justify-between items-center relative py-[1.5em] pr-[0.5em] cursor-default accordion">
                  03) デザインに対する知識
                </summary>
                <p className="font-zenKakuNew text-black-primary text-base-size leading-[1.6] px-[1em] pb-[2em] translate-y-[-1em] opacity-0 lg:max-w-[45rem]">
                  現職がグラフィックデザイナーのため、文字組みや文字詰め、グラフィッカルな表現に対する知見がある。プロジェクトでは、デザイナーとのやりとりが多いため、デザインの意図を考慮した実装を行える。
                </p>
              </details>
            </ul>
          </section>
          <section className="mt-[6rem] lg:grid lg:grid-cols-[19vw,860px] lg:justify-between">
            <h2
              className="font-geologica font-[600] text-[2.5rem] uppercase arrow text-black-primary title-wrap scramble-text"
              data-final-text="FUTURE"
            >
              Future
            </h2>
            <ul className="lg:mt-[5rem] lg:flex lg:flex-wrap lg:justify-between">
              <li className="mt-[3rem]">
                <h3 className="font-geologica text-black-primary font-[600] text-base-size before:content-['#']">
                  Three Years Later
                </h3>
                <p className="mt-[1rem] font-zenKakuNew text-black-primary leading-[1.6] text-base-size lg:max-w-[45rem]">
                  大規模なプロジェクトにも参画出来るようになりたい。<br></br>
                  そのために、デザインカンプの仕様に沿った正確性と他のエンジニアでも更新しやすい保守性の高い実装を目指していく。
                  <br></br>
                  また、サーバーサイド側の知見も身につけフルスタックでの開発が行えるようになりたい。
                </p>
              </li>
              <li className="mt-[3rem]">
                <h3 className="font-geologica text-black-primary font-[600] text-base-size before:content-['#']">
                  Five Years Later
                </h3>
                <p className="mt-[1rem] font-zenKakuNew text-black-primary leading-[1.6] text-base-size lg:max-w-[45rem]">
                  エンジニアとして、より高い技術力とそれを社内に還元出来るような存在になりたい。
                  <br></br>
                  プロジェクトではメインの実装担当並びに演出の考案、機能面での設計や技術選定など、プロジェクトマネジメントとして関われる人材を目指していく。
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
