import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedElements from "@/ui/AnimatedElements";
import Navbar from "@/ui/Navbar";
import FilterDefinitions from "@/components/custom/FilterDefinitions";
import clsx from "clsx";

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
    <html
      lang="en"
      className=" text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px]"
    >
      <body
        className={`
          ${inter.className}
          antialiased selection:bg-[#b48de1] selection:text-white`}
      >
        <div className="bg-black absolute top-0 left-0 w-[100vw] h-[100vh]"></div>
        <div className="bg-white rounded-[2rem] sm:rounded-[3.5rem] absolute top-0 left-0 w-[100vw] h-[100vh] p-0 overflow-hidden">
          <div className="relative z-10 h-full overflow-scroll">
            {/* <div className="fixed z-[2] bg-white rounded-[100px] left-[0px] top-[0px] w-[100vw] h-[100vh] block filter-[url(#nnnoise-filter)] resize-none opacity-60" /> */}
            <div className="fixed top-0 left-0 w-[100vw] h-[100vh] z-[2]">
              <svg className="w-full h-full">
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  clipPath={"url(#rounded-mask)"}
                  filter="url(#nnnoise-filter)"
                />
              </svg>
            </div>
            <FilterDefinitions />
            <div className="blur-[50px] sm:blur-[150px] w-[100vw] h-[100vh] meow z-[1] fixed top-0 cat">
              <div className="filter-[url(#goo)] overflow-hidden">
                <AnimatedElements />
              </div>
            </div>
            <div className="relative p-3 lg:p-10 z-10 w-[100vw] h-[100vh]">
              <div className="w-full flex flex-col sm:flex-row items-center justify-center h-full sm:gap-[1rem] xl:gap-[2rem] 2xl:gap-[3.75rem]">
                <Navbar />
                <div className="grow w-[70vw] h-full flex justify-center items-start fade-in-15 ease-in-out duration-1000 animate-move-in sm:mt-0 mt-[12rem]">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
