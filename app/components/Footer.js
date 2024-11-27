import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="w-full h-[60vh] bg-dark-base py-[5rem] relative">
          <div className="bg-[url('/images/noise-texture.png')] bg-cover bg-center absolute inset-0 opacity-10 -z-1"></div>
          <div className="max-w-[1440px] mx-auto px-[5.5%] relative">
            <ul className="flex flex-col gap-[3rem] lg:flex-row lg:items-center lg:gap-[8rem]">
              <li className="font-geologica text-base-size text-white">
                <p>・Contact</p>
                <a href="mailto:kawaguchi.shin.03@gmail.com">
                  kawaguchi.shin.03@gmail.com
                </a>
              </li>
              <li className="font-geologica text-base-size text-white">
                <a href="https://x.com/kwgsh53" target="_blank">
                  ・SNS(X)
                </a>
              </li>
            </ul>
            <h2 className="font-geologica text-[2rem] lg:text-[5rem] font-[600] text-white leading-[1] uppercase mt-[5rem] lg:mt-[8rem] tracking-tight">
              <span>Design to</span>
              <br></br>
              <span>Development</span>
            </h2>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
