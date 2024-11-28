import React from "react";
import Image from "next/image";
import { works } from "@/data/works";
import Footer from "@/app/components/Footer";

export default function Workpage({ params }) {
  const work = works.find((work) => work.id === params.id);

  if (!work) {
    return <div>Work not found</div>;
  }

  return (
    <>
      <div className="bg-white-base">
        <div className="fixed top-0 left-0 w-full z-50 mix-blend-exclusion">
          <div className="w-full max-w-[1440px] mx-auto py-[20px] px-[5.5%]">
            <nav>
              <ul className="flex justify-between items-center">
                <li className="font-geologica text-base-size text-white">
                  <a href="#">_SK</a>
                </li>
                <div className="flex gap-[1rem]">
                  <li className="font-geologica text-small-size text-white">
                    <a href="#">WORKS</a>
                  </li>
                  <li className="font-geologica text-small-size text-white">
                    <a href="#">ABOUT</a>
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
        <div className="w-full max-w-[1440px] mx-auto px-[5.5%] pt-[80px]">
          <div className="lg:grid lg:grid-cols-[1fr_min(90%,820px)_1fr] gap-[5%] pb-[80px]">
            <small className="font-geologica font-normal text-base-size">
              {work.label}
            </small>
            <section className="mt-[45px]">
              <h1 className="font-geologica font-bold text-title-size text-black-primary">
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
                    {/* <img src="/images/launch-arrow.svg" alt="" /> */}
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
                    {/* <li className="w-[min(90%,400px)] mt-[1.5rem]">
                      <h3 className="text-base-size text-black-primary font-bold before:content-['2'] before:mr-[0.5em]">
                        {work.description.articles[1].title}
                      </h3>
                      <ul className="pl-[0.8em]">
                        {work.description.articles[1].details.map(
                          (detail, index) => (
                            <li
                              key={index}
                              className="text-base-size text-black-primary mt-[0.5rem] before:content-['・'] indent-[-1.2em] pl-[1em] leading-[1.6]"
                            >
                              {detail}
                            </li>
                          )
                        )}
                      </ul>
                    </li>
                    <li className="w-[min(90%,400px)] mt-[1.5rem]">
                      <h3 className="text-base-size text-black-primary font-bold before:content-['3'] before:mr-[0.5em]">
                        {work.description.articles[2].title}
                      </h3>
                      <ul className="pl-[0.8em]">
                        {work.description.articles[2].details.map(
                          (detail, index) => (
                            <li
                              key={index}
                              className="text-base-size text-black-primary mt-[0.5rem] before:content-['・'] indent-[-1.2em] pl-[1em] leading-[1.6]"
                            >
                              {detail}
                            </li>
                          )
                        )}
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </article>
              <div className="mt-[5rem] w-full">
                <div>
                  {/* <img src="/src/image/work_image_1.png" alt="" /> */}
                </div>
                <div className="flex mt-[3rem] gap-[1.5rem] lg:gap-[5rem] lg:mt-[9rem]">
                  <div className="w-full max-w-[300px]">
                    {/* <img src="/src/image/work_image_2.png" alt="" /> */}
                  </div>
                  <div className="mt-[2rem] w-full max-w-[300px] lg:mt-[5rem]">
                    {/* <img src="/src/image/work_image_3.png" alt="" /> */}
                  </div>
                </div>
                <div className="w-[80%] max-w-[640px] mt-[3rem] lg:mt-[9rem]">
                  {/* <img src="/src/image/work_image_4.png" alt="" /> */}
                </div>
              </div>
            </section>
            <div className="relative w-full">
              <div className="absolute bottom-0 right-[7%] mt-[2rem] xs-top-0 lg:mt-0] lg:right-0">
                <ul className="flex gap-[4%] lg:flex-col">
                  <li className="font-geologica font-normal text-small-size text-light-gray mb-[2rem]">
                    <a href="#">Case_02</a>
                  </li>
                  <li className="font-geologica font-normal text-small-size text-light-gray mb-[2rem]">
                    <a href="#">Case_03</a>
                  </li>
                  <li className="font-geologica font-normal text-small-size text-light-gray mb-[2rem]">
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
