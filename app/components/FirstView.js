import React from "react";

function FirstView() {
  return (
    <>
      <div className="bg-dark-base">
        <div className="absolute inset-0 bg-[url('/images/noise-texture.png')] bg-cover mix-blend-lighten opacity-[0.3] "></div>
        <main className="px-[5.5%] max-w-[1440px] mx-auto">
          <div className="relative h-[98vh]">
            <div className="fixed top-[3%] left-[50%] translate-x-[-50%] w-[89%] max-w-[calc(1440px-11%)] max-auto mix-blend-exclusion">
              <nav className="flex justify-between items-center w-full text-white font-semibold">
                <a
                  href="/"
                  className="font-geologica text-base-size scramble-text"
                  data-final-text="_SK"
                >
                  _SK
                </a>
                <ul className="flex justify-between items-center w-[min(35%,150px)]">
                  <li>
                    <a
                      href=""
                      className="font-geologica text-base-size scramble-text"
                      data-final-text="WORK"
                    >
                      WORK
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="font-geologica text-base-size scramble-text"
                      data-final-text="ABOUT"
                    >
                      ABOUT
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="inline-block mt-[12.5rem] title-wrap">
              <p
                className="text-white text-large-size font-geologica font-[600] tracking-tighter leading-none scramble-text"
                data-final-text="DESIGN TO"
              >
                DESIGN TO
              </p>
              <p
                className="text-white text-large-size font-geologica font-[600] tracking-tighter leading-none scramble-text"
                data-final-text="DEVELOPMENT"
              >
                DEVELOPMENT
              </p>
              <div>
                <p
                  className="text-white font-geologica text-medium-size tracking-tighter mt-[3rem] scramble-text"
                  data-final-text="SHINNOSUKE PORTFOLIO SITE"
                >
                  SHINNOSUKE PORTFOLIO SITE
                </p>
              </div>
            </div>
            <div className="text-white font-geologica text-small-size flex justify-between items-center absolute bottom-[2%] left-0 w-full">
              <p className="scramble-text" data-final-text="DESIGN">
                DESIGN
              </p>
              <p className="scramble-text" data-final-text="AND">
                AND
              </p>
              <p className="scramble-text" data-final-text="CODING">
                CODING
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default FirstView;
