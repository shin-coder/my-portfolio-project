import "./globals.css";
import { Geologica, Zen_Kaku_Gothic_New } from "next/font/google";
import SmoothScroll from "./utils/smoothScroll";

const geologica = Geologica({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geologica",
  weight: "variable",
});

const zenKakuNew = Zen_Kaku_Gothic_New({
  preload: false,
  subsets: ["latin"],
  variable: "--font-zen-kaku-new",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Design to Development",
  description: "Portfolio site with modern technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${geologica.variable} ${zenKakuNew.variable} overflow-x-hidden`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
