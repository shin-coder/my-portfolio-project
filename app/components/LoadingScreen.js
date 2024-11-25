import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function LoadingScreen() {
  const counterRef = useRef(null);
  const countRef = useRef({ value: 0 });

  useEffect(() => {
    const counter = counterRef.current;

    gsap.to(countRef.current, {
      value: 100,
      duration: 3,
      ease: "linear",
      onUpdate: () => {
        counter.textContent = Math.floor(countRef.current.value);
      },
    });
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-dark-base z-50 flex items-center justify-center">
        <div className="absolute bottom-0 right-[5.5%]">
          <div className="flex items-end">
            <div
              ref={counterRef}
              className="text-large-size text-white font-geologica tracking-tighter pr-[0.1em]"
            >
              0
            </div>
            <span className="text-title-size text-white font-geologica pb-[0.1em] lg:pb-[0.5em]">
              %
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
