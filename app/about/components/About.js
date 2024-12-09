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
                  モダンな開発も出来るようNext.jsやAstro、TailwindCSS、TypeScriptを活用したJamStack開発の学習を行っている。
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
                  実装未経験から1年半でHTML/CSS、JavaScript、WordPressだけでなく、GSAPやThree.jsなどのJavaScriptライブラリなどの学習にも意欲的に取り組んだ。
                  <br></br>
                  日頃からZennといったブログや比較的新しい技術情報を発信しているYouTubeチャンネルから情報をNotionに内容をまとめたり、自身で簡単なサイトなどを作成したりした。
                  <br></br>
                  卒業後も学習を続け、最近はNext.jsやtailwindCSS、TypeScriptといったモダンな技術に関する学習を行なっている。
                  {/* <a
                    href="https://www.notion.so/shin03/Dev-memo-11aa2460db0342e48d0231420c32c6d7?pvs=4"
                    className="font-zenKakuNew text-light-gray text-samll-size leading-[1.6] underline mt-[1rem] inline-block"
                  >
                    学習用のNotionはこちら
                  </a> */}
                </p>
              </details>
              <details className="mb-[0.5em] border-light-gray border-b">
                <summary className="font-zenKakuNew text-black-primary text-base-size flex justify-between items-center relative py-[1.5em] pr-[0.5em] cursor-default accordion">
                  02) ユーザー中心の問題解決力
                </summary>
                <p className="font-zenKakuNew text-black-primary text-base-size leading-[1.6] px-[1em] pb-[2em] translate-y-[-1em] opacity-0 lg:max-w-[45rem]">
                  名刺デザイン・印刷業務に従事する中で、クライアントからの問い合わせ対応において、統一されたマニュアルやルールが整備されていない課題に直面していた。特に、頻出する質問や発注手順に関する問い合わせが多く、効率的な対応が困難な状況だった。
                  <br></br>
                  この状況を改善するため、名刺専用のサイトを企画・作成。発注フローの可視化やよくある質問へのQ&A機能を実装し、クライアントとのコミュニケーションをスムーズにする仕組みを構築した。
                </p>
              </details>
              <details className="mb-[0.5em] border-light-gray border-b">
                <summary className="font-zenKakuNew text-black-primary text-base-size flex justify-between items-center relative py-[1.5em] pr-[0.5em] cursor-default accordion">
                  03) デザインに対する知識
                </summary>
                <p className="font-zenKakuNew text-black-primary text-base-size leading-[1.6] px-[1em] pb-[2em] translate-y-[-1em] opacity-0 lg:max-w-[45rem]">
                  現職のグラフィックデザイナーとしての経験を活かし、タイポグラフィーの基礎となる文字組みや文字詰め、視覚的階層構造の設計など、デザインの本質的な要素に対する深い理解がある。
                  <br></br>
                  そのため、各プロジェクトでは、デザイナーとの密接なコミュニケーションを通じて、クリエイティブの意図や細部へのこだわりを十分に理解し、それらを損なうことなく実装に反映させることができる。
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
                  フロントエンド開発の専門性を高め、大規模プロジェクトでも即戦力として活躍できるエンジニアを目指したい。
                  <br></br>
                  具体的には、アクセシビリティや新しいWeb標準に準拠したコーディング、パフォーマンス最適化、そしてTypeScriptやReactを活用したコンポーネント設計のベストプラクティスを習得する。
                  <br></br>
                  また、Jestなどのテストツールを活用し、品質担保の観点からもプロジェクトに貢献できるようになりたい。
                </p>
              </li>
              <li className="mt-[3rem]">
                <h3 className="font-geologica text-black-primary font-[600] text-base-size before:content-['#']">
                  Five Years Later
                </h3>
                <p className="mt-[1rem] font-zenKakuNew text-black-primary leading-[1.6] text-base-size lg:max-w-[45rem]">
                  フロントエンド領域のテックリードとして、プロジェクト全体の技術的な意思決定や設計に関与できる立場を目指したい。
                  <br></br>
                  具体的には、大規模なWebサイトの機能性設計や技術選定、ビルドの最適化など、プロジェクトの技術基盤に関わる重要な判断を担当。
                  <br></br>
                  また、社内の技術力向上にも貢献し、技術共有会の企画や社内ドキュメントの更新なども推進していく。
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
