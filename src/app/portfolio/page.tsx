"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Portfolio() {
  return (
    <div className="w-full h-full bg-white rounded-[50px] overflow-hidden p-[75px] box-border relative shadow-default">
      <div className="z-10">
        <div className="w-[50%] h-[50%] absolute bg-[#BAF7FF] top-[-10%] left-[-5%] z-0 blur-[1050px] opacity-75 rounded-full"></div>
        <div className="w-[50%] h-[50%] absolute bg-[#FEFFBA] top-[20%] left-[-5%] z-0 blur-[1050px] opacity-75 rounded-full"></div>
        <div className="w-[50%] h-[50%] absolute bg-[#FFB2B2] bottom-[-10%] left-[-5%] z-0 blur-[1050px] opacity-75 rounded-full"></div>
      </div>
      <div className="grid grid-cols-[62fr_38fr] grid-rows-[minmax(auto,62fr)_48fr] gap-x-[40px] gap-y-[30px] h-full box-border z-20 relative">
        <div className="rounded-[50px] shadow-xl overflow-hidden">
          <Image
            src={"/portfolio-placeholder.png"}
            width={769}
            height={454}
            className="w-full scale-120"
            alt="portfolio picture"
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-x-[30px] gap-y-[10px]">
          <PreviewPicture />
          <PreviewPicture />
          <PreviewPicture />
          <PreviewPicture />
          <PreviewPicture />
          <PreviewPicture />
        </div>
        <Description className="" />
        <AdditionalInfo className="h-full w-full" />
      </div>
    </div>
  );
}

function SkillBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex gap-[10px] items-center px-[15px] py-[10px] text-[16px] font-semibold w-fit shadow-[0px_3px_6px_0px_#e8e8e8] rounded-[20px]">
      <Icon icon={icon} width={30} height={30} />
      <span>{text}</span>
    </div>
  );
}

function PreviewPicture() {
  return (
    <Image
      src={"/portfolio-placeholder.png"}
      width={227}
      height={134}
      className="rounded-[30px] w-full h-full max-w-[230px] max-h-[135px]"
      alt="portfolio picture"
    />
  );
}

function Description({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h1 className="text-[64px] font-black mb-[20px]">Company Name</h1>
      <p className="text-[24px] font-semibold text-justify">
        I developed a platform for Company Name to help them find new customers,
        and sell products without worrying about shipping and technicalities,
        and instead focus on delivering the best quality.
      </p>
    </div>
  );
}

function AdditionalInfo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-col justify-between h-full">
        <div className="">
          <h2 className="text-[36px] font-black mb-[10px]">Technologies</h2>
          <div className="flex flex-wrap gap-[20px] gap-y-[10px]">
            <SkillBadge icon="logos:nextjs-icon" text="Next.js" />
            <SkillBadge icon="logos:react" text="React" />
            <SkillBadge icon="logos:tailwindcss-icon" text="Tailwind CSS" />
            <SkillBadge icon="logos:mongodb-icon" text="MongoDB" />
          </div>
        </div>
        <Link
          href="#"
          className="w-[100%] py-[14px] text-[20px] font-semibold flex justify-center items-center self-center rounded-[19px] bg-gradient-to-r from-[#B1FFCB] to-[#D3FFC9] shadow-[0px_0px_15px_2px_#C2FFCA]"
        >
          View Live
        </Link>
      </div>
    </div>
  );
}
