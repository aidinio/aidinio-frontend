import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedElements from "../ui/AnimatedElements";
import Navbar from "../ui/home/Navbar";
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
    <html lang="en">
      <body
        className={`${inter.className} antialiased selection:bg-[#b48de1] selection:text-white`}
      >
        <div className="bg-black absolute top-0 left-0 w-[100vw] h-[100vh]"></div>
        <div className="bg-white sm:rounded-[55px] absolute top-0 left-0 w-[100vw] h-[100vh] p-0 overflow-hidden">
          <div className="relative z-10 h-full overflow-scroll">
            <FilterDefinitions />
              <div className="blur-[150px] absolute left-[0px] top-[0px] w-[100vw] h-[100vh] meow">
                <div className="filter-[url(#goo)] rounded-full overflow-hidden">
                  <AnimatedElements />
                </div>
              </div>
            <div className="absolute rounded-[100px] left-[0px] top-[0px] w-[100vw] h-[100vh] block filter-[url(#nnnoise-filter)] resize-none opacity-60"/>
            <div className="relative sm:p-10 z-10 w-[100vw] h-[100vh]">
              <div className="flex items-center justify-center h-full gap-[60px]">
                <Navbar />
                <div className="w-full h-full flex justify-center items-start fade-in-15 ease-in-out duration-1000 animate-move-in">
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
