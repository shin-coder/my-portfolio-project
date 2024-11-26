import "./globals.css";
import { Geologica, Zen_Kaku_Gothic_New } from "next/font/google";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${geologica.variable} ${zenKakuNew.variable} h-[100svh]`}
      >
        {children}
      </body>
    </html>
  );
}
