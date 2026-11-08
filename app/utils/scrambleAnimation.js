import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export const scrambleText = (element, finalText) => {
  gsap.to(element, {
    duration: 0.32,
    scrambleText: {
      text: finalText ?? element.textContent,
      chars: "qwertyuiop@[asdfghjkl;:]zxcvbnm,./_",
      revealDelay: 0,
      speed: 1,
    },
    overwrite: true,
  });
};
