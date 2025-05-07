import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedElements from "./AnimatedElements";
import Navbar from "./Navbar";
import MainContent from "./MainContent";

const inter = Inter({
  subsets: ["latin"],
  fallback: ["Arial", "Times New Roman"],
});

export const metadata: Metadata = {
  title: "Aidin",
  description: "Aidin's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="bg-black absolute top-0 left-0 w-[100vw] h-[100vh]"></div>
        <div className="bg-white rounded-[55px] absolute top-0 left-0 w-[100vw] h-[100vh] p-0 overflow-hidden">
          <div className="relative z-10 h-full overflow-scroll">
            <MySvg />
            <div className="blur-[150px] absolute left-[0px] top-[0px] rounded-full w-[100vw] h-[100vh]">
              <div className="filter-[url(#goo)]">
                <AnimatedElements />
              </div>
            </div>
            <div className="absolute left-[0px] top-[0px] rounded-full w-[100vw] h-[100vh] block filter-[url(#nnnoise-filter)] opacity-60"></div>
            <div className="relative p-10 z-10 w-[100vw] h-[100vh]">
              <div className="flex items-center justify-stretch h-full gap-[60px]">
                <Navbar />
                <MainContent>{children}</MainContent>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

function MySvg({ className }: { className?: string }) {
  return (
    <svg
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="0"
      height="0"
      viewBox="0 0 700 700"
    >
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 4 -0.21"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
        <filter
          id="nnnoise-filter"
          width="140%"
          height="140%"
          x="-20%"
          y="-20%"
          colorInterpolationFilters="linearRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
        >
          <feTurbulence
            width="100%"
            height="100%"
            x="0%"
            y="0%"
            baseFrequency="3.859"
            numOctaves="1"
            result="turbulence"
            seed="19"
            stitchTiles="stitch"
          ></feTurbulence>
          <feSpecularLighting
            width="100%"
            height="100%"
            x="0%"
            y="0%"
            in="turbulence"
            lightingColor="#fff"
            result="specularLighting"
            specularConstant="5"
            specularExponent="15"
            surfaceScale="8"
          >
            <feDistantLight azimuth="3" elevation="100"></feDistantLight>
          </feSpecularLighting>
        </filter>
      </defs>
      {/* <path fill="#000000ff" d="M0 0h700v700H0z"></path>
    <path fill="#fff" d="M0 0h700v700H0z" filter="url(#nnnoise-filter)"></path> */}
    </svg>
  );
}
