import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function LoadingScreen() {
  const counterRef = useRef(null);
  const countRef = useRef({ value: 0 });

  useEffect(() => {
    const counter = counterRef.current;

    gsap.to(countRef.current, {
      value: 100,
      duration: 1.2,
      ease: "linear",
      onUpdate: () => {
        counter.textContent = Math.round(countRef.current.value);
      },
      onComplete: () => {
        // ２秒後にローディング完了
        gsap.delayedCall(2);
      },
    });
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="absolute bottom-0 right-[5.5%]">
          <div className="flex items-center">
            <div
              ref={counterRef}
              className="text-large-size text-black-primary font-geologica"
            >
              0
            </div>
            <span className="text-title-size text-black-primary font-geologica">
              %
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
