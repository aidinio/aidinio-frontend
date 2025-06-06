import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedElements from "@/ui/AnimatedElements";
import Navbar from "@/ui/Navbar";
import FilterDefinitions from "@/components/custom/FilterDefinitions";

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
    <html lang="en" className=" text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px]">
      <body
        className={`${inter.className} antialiased selection:bg-[#b48de1] selection:text-white`}
      >
        <div className="bg-black absolute top-0 left-0 w-[100vw] h-[100vh]"></div>
        <div className="bg-white sm:rounded-[55px] absolute top-0 left-0 w-[100vw] h-[100vh] p-0 overflow-hidden">
          <div className="relative z-10 h-full overflow-scroll">
            <FilterDefinitions />
            <div className="blur-[50px] sm:blur-[150px] fixed sm:absolute left-[0px] top-[0px] w-[100vw] h-[100vh] meow">
              <div className="filter-[url(#goo)] overflow-hidden">
                <AnimatedElements />
              </div>
            </div>
            <div className="fixed sm:absolute rounded-[100px] left-[0px] top-[0px] w-[100vw] h-[100vh] block filter-[url(#nnnoise-filter)] resize-none opacity-60" />
            <div className="relative sm:p-10 z-10 w-[100vw] h-[100vh]">
              <div className="flex flex-col sm:flex-row items-center justify-center h-full sm:gap-[60px]">
                <Navbar />
                <div className="w-full h-full flex justify-center items-start fade-in-15 ease-in-out duration-1000 animate-move-in sm:mt-0 mt-[12rem]">
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
