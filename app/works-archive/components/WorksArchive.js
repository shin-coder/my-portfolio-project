import React from "react";
import Image from "next/image";
import "@/app/globals.css";

function WorksArchive() {
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
                href="/works"
                className="font-geologica text-base-size scramble-text font-[400] uppercase"
                data-final-text="WORK"
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
      <div className="bg-white-base w-full px-[5.5%]">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="font-geologica font-[600] text-large-size text-black-primary uppercase pt-[12rem]">
            Works
          </h1>
          <ul className="mt-[10rem] lg:mt-[20rem] pb-[5rem]">
            <li className="relative lg:item-1 lg:overflow-hidden lg:mx-[calc(50%-50vw)] lg:px-[calc(50vw-50%)] z-[1]">
              <div className="flex gap-[1.5rem] flex-col md:flex-row">
                <div className="w-[15rem] h-[10rem] aspect-[3/2] md:w-[28rem] md:h-auto">
                  <Image
                    src="/images/work-archive-01-1.png"
                    alt="case01のwork-image-1"
                    width={450}
                    height={300}
                  />
                </div>
                <div className="w-[15rem] h-[10rem] aspect-[3/2]">
                  <Image
                    src="/images/work-archive-01-2.png"
                    alt="case01のwork-image-2"
                    width={240}
                    height={160}
                  />
                </div>
              </div>
              <div className="mt-[1rem] flex justify-between items-center">
                <a
                  href="/works/Case_01"
                  className="font-geologica font-[400] text-base-size text-black-primary"
                >
                  View Detail
                </a>
                <small className="font-geologica font-[200] text-small-size text-black-primary">
                  (01 FURYU Brand Site)
                </small>
              </div>
            </li>
            <li className="relative lg:item-2 lg:overflow-hidden lg:mx-[calc(50%-50vw)] lg:px-[calc(50vw-50%)] mt-[3rem] lg:mt-[5rem] z-[1]">
              <div className="flex gap-[1.5rem] flex-col md:flex-row">
                <div className="w-[15rem] h-[10rem] aspect-[3/2] md:w-[28rem] md:h-auto">
                  <Image
                    src="/images/work-archive-02-1.png"
                    alt="case02のwork-image-1"
                    width={450}
                    height={300}
                  />
                </div>
                <div className="w-[15rem] h-[10rem] aspect-[3/2]">
                  <Image
                    src="/images/work-archive-02-2.png"
                    alt="case02のwork-image-2"
                    width={240}
                    height={160}
                  />
                </div>
              </div>
              <div className="mt-[1rem] flex justify-between items-center">
                <a
                  href="#"
                  className="font-geologica font-[400] text-base-size text-black-primary"
                >
                  View Detail
                </a>
                <small className="font-geologica font-[200] text-small-size text-black-primary">
                  (02 My Portfolio Site)
                </small>
              </div>
            </li>
            <li className="relative lg:item-3 lg:overflow-hidden lg:mx-[calc(50%-50vw)] lg:px-[calc(50vw-50%)] mt-[3rem] lg:mt-[5rem] z-[1]">
              <div className="flex gap-[1.5rem] flex-col md:flex-row">
                <div className="w-[15rem] h-[10rem] aspect-[3/2] md:w-[28rem] md:h-auto">
                  <Image
                    src="/images/work-archive-03-1.png"
                    alt="case03のwork-image-1"
                    width={450}
                    height={300}
                  />
                </div>
                <div className="w-[15rem] h-[10rem] aspect-[3/2]">
                  <Image
                    src="/images/work-archive-03-2.png"
                    alt="case03のwork-image-2"
                    width={240}
                    height={160}
                  />
                </div>
              </div>
              <div className="mt-[1rem] flex justify-between items-center">
                <a
                  href="#"
                  className="font-geologica font-[400] text-base-size text-black-primary"
                >
                  View Detail
                </a>
                <small className="font-geologica font-[200] text-small-size text-black-primary">
                  (03 Green Energy Company)
                </small>
              </div>
            </li>
            <li className="relative lg:item-4 lg:overflow-hidden lg:mx-[calc(50%-50vw)] lg:px-[calc(50vw-50%)] mt-[3rem] lg:mt-[5rem] z-[1]">
              <div className="flex gap-[1.5rem] flex-col md:flex-row">
                <div className="w-[15rem] h-[10rem] aspect-[3/2] md:w-[28rem] md:h-auto">
                  <Image
                    src="/images/work-archive-04-1.png"
                    alt="case04のwork-image-1"
                    width={450}
                    height={300}
                  />
                </div>
                <div className="w-[15rem] h-[10rem] aspect-[3/2]">
                  <Image
                    src="/images/work-archive-04-2.png"
                    alt="case04のwork-image-2"
                    width={240}
                    height={160}
                  />
                </div>
              </div>
              <div className="mt-[1rem] flex justify-between items-center">
                <a
                  href="#"
                  className="font-geologica font-[400] text-base-size text-black-primary"
                >
                  View Detail
                </a>
                <small className="font-geologica font-[200] text-small-size text-black-primary">
                  (04 SUGUTABE LP Site)
                </small>
              </div>
            </li>
            <li className="relative lg:item-5 lg:overflow-hidden lg:mx-[calc(50%-50vw)] lg:px-[calc(50vw-50%)] mt-[3rem] lg:mt-[5rem] z-[1]">
              <div className="flex gap-[1.5rem] flex-col md:flex-row">
                <div className="w-[15rem] h-[10rem] aspect-[3/2] md:w-[28rem] md:h-auto">
                  <Image
                    src="/images/work-archive-05-1.png"
                    alt="case05のwork-image-1"
                    width={450}
                    height={300}
                  />
                </div>
                <div className="w-[15rem] h-[10rem] aspect-[3/2]">
                  <Image
                    src="/images/work-archive-05-2.png"
                    alt="case05のwork-image-2"
                    width={240}
                    height={160}
                  />
                </div>
              </div>
              <div className="mt-[1rem] flex justify-between items-center">
                <a
                  href="#"
                  className="font-geologica font-[400] text-base-size text-black-primary"
                >
                  View Detail
                </a>
                <small className="font-geologica font-[200] text-small-size text-black-primary">
                  (05 DIGI LIG LP Site)
                </small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default WorksArchive;
