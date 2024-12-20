import { useEffect } from "react";
import "../globals.css";
import gsap from "gsap";

function Works() {
  useEffect(() => {
    gsap.utils.toArray(".workThum").forEach((thum) => {
      gsap.set(thum, {
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        perspective: 1000,
      });

      const mousemoveHandler = (e) => {
        const rect = thum.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        const px = offsetX / thum.offsetWidth;
        const py = offsetY / thum.offsetHeight;
        const rx = -10 + 20 * px;
        const ry = 10 - 20 * py;

        gsap.to(thum, {
          duration: 0.5,
          rotationY: rx,
          rotationX: ry,
          rotationZ: 0,
          scale: 1.05,
          transformPerspective: 1000,
          ease: "quad.out",
        });
      };

      const mouseoutHandler = () => {
        gsap.to(thum, {
          duration: 0.5,
          rotationY: 0,
          rotationX: 0,
          rotationZ: 0,
          scale: 1,
          transformPerspective: 1000,
          ease: "quad.out",
        });
      };

      thum.addEventListener("mouseover", function () {
        this.addEventListener("mousemove", mousemoveHandler);
      });

      thum.addEventListener("mouseout", function () {
        this.removeEventListener("mousemove", mousemoveHandler);
        mouseoutHandler();
      });
    });
  }, []);

  return (
    <>
      <div className="w-full bg-dark-base">
        <section className="mx-[calc(50%-50vw)] px-[calc(50vw-50%)] w-full">
          <h1
            className="sticky top-[10px] text-large-size font-bold text-center uppercase text-white scramble-text title-wrap"
            data-final-text="WORKS"
          >
            (works)
          </h1>
          <div className="mt-[30%]">
            <div className="sticky top-0 h-[100vh]">
              <div className="absolute inset-0 w-full h-full  overflow-hidden">
                <div className="bg-cover bg-no-repeat bg-center w-[100vw] h-[100vh] -z-1 bg-[url('/images/work-case-01-bg.png')] bg-blur ">
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-[min(85vw,500px)] mt-[-3rem] lg:mt-0 lg:grid lg:grid-cols-[1fr_min(85vw,500px)_1fr] lg:max-w-[1440px] lg:mx-auto">
                    <p className="font-geologica text-small-size text-white w-[min(85vw,500px)] mx-auto lg:w-full lg:pl-[5.5%]">
                      #case_01
                    </p>
                    <div className="bg-[url('/images/work-case-01-thum.png')] w-[min(85vw,500px)] h-[min(85vw,500px)] bg-cover bg-center mx-auto mt-[24px] lg:mt-0 workThum"></div>
                    <div className="w-[min(85vw,500px)] mx-auto mt-[1.5rem] pb-[3rem] lg:pb-0 lg:mt-0 lg:w-full lg:grid lg:place-items-center">
                      <div className="w-[200px]">
                        <div className="title-wrap">
                          <p
                            className="font-geologica text-medium-size text-white font-[600] uppercase scramble-text"
                            data-final-text="FURYU"
                          >
                            furyu
                          </p>
                          <small
                            className="block font-geologica text-small-size text-white font-[400] scramble-text"
                            data-final-text="Brand site / Client work"
                          >
                            Brand site / Client work
                          </small>
                        </div>

                        <a
                          href="/works/Case_01"
                          className="inline-block font-geologica text-base-size text-white font-[400] mt-[1rem]"
                        >
                          view more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky top-0 h-[100vh]">
              <div className="absolute inset-0 w-full h-full  overflow-hidden">
                <div className="bg-cover bg-no-repeat bg-center w-[100vw] h-[100vh] -z-1 bg-[url('/images/work-case-02-bg.png')] bg-blur">
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-[min(85vw,500px)] mt-[-3rem] lg:mt-0 lg:grid lg:grid-cols-[1fr_min(85vw,500px)_1fr] lg:max-w-[1440px] lg:mx-auto">
                    <p className="font-geologica text-small-size text-white w-[min(85vw,500px)] mx-auto lg:w-full lg:pl-[5.5%]">
                      #case_02
                    </p>
                    <div className="bg-[url('/images/work-case-02-thum.png')] w-[min(85vw,500px)] h-[min(85vw,500px)] bg-cover bg-center mx-auto mt-[24px] lg:mt-0 workThum"></div>
                    <div className="w-[min(85vw,500px)] mx-auto mt-[1.5rem] pb-[3rem] lg:pb-0 lg:mt-0 lg:w-full lg:grid lg:place-items-center">
                      <div className="w-[200px]">
                        <div className="title-wrap">
                          <p
                            className="font-geologica text-medium-size text-white font-[600] uppercase scramble-text"
                            data-final-text="PORTFOLIO"
                          >
                            Portfolio
                          </p>
                          <small
                            className="block font-geologica text-small-size text-white font-[400] scramble-text"
                            data-final-text="Portfolio site / Private work"
                          >
                            Portfolio site / Private work
                          </small>
                        </div>
                        <a
                          href="/works/Case_02"
                          className="inline-block font-geologica text-base-size text-white font-[400] mt-[1rem]"
                        >
                          view more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky top-0 h-[100vh]">
              <div className="absolute inset-0 w-full h-full  overflow-hidden">
                <div className="bg-cover bg-no-repeat bg-center w-[100vw] h-[100vh] -z-1 bg-[url('/images/work-case-03-bg.png')] bg-blur">
                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-[min(85vw,500px)] mt-[-3rem] lg:mt-0 lg:grid lg:grid-cols-[1fr_min(85vw,500px)_1fr] lg:max-w-[1440px] lg:mx-auto">
                    <p className="font-geologica text-small-size text-white w-[min(85vw,500px)] mx-auto lg:w-full lg:pl-[5.5%]">
                      #case_03
                    </p>
                    <div className="bg-[url('/images/work-case-03-thum.png')] w-[min(85vw,500px)] h-[min(85vw,500px)] bg-cover bg-center mx-auto mt-[24px] lg:mt-0 workThum"></div>
                    <div className="w-[min(85vw,500px)] mx-auto mt-[1.5rem] pb-[3rem] lg:pb-0 lg:mt-0 lg:w-full lg:grid lg:place-items-center">
                      <div className="w-[200px]">
                        <div className="title-wrap">
                          <p
                            className="font-geologica text-medium-size text-white font-[600] uppercase scramble-text"
                            data-final-text="GREEN ENERGY"
                          >
                            Green Energy
                          </p>
                          <small
                            className="block font-geologica text-small-size text-white font-[400] scramble-text"
                            data-final-text="Corporate site / Private work"
                          >
                            Corporate site / Private work
                          </small>
                        </div>
                        <a
                          href="/works/Case_03"
                          className="inline-block font-geologica text-base-size text-white font-[400] mt-[1rem]"
                        >
                          view more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-[30vh] grid place-items-center bg-white-base">
          <a
            href="/works-archive"
            className="font-geologica text-base-size font-[400] inline-block border border-black-primary py-[1em] px-[2em] rounded-[100px] hover:bg-dark-base hover:text-white transition duration-500 ease-in-out"
          >
            ・view all works
          </a>
        </div>
      </div>
    </>
  );
}

export default Works;
