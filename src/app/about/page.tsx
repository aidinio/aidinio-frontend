"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import {
  DownloadSimple,
  Envelope,
  GithubLogo,
  LinkedinLogo,
  Icon as PIcon,
  TelegramLogo,
} from "@phosphor-icons/react";
import Image from "next/image";
import { ReactNode } from "react";

export default function Page() {
  return (
    <div className="flex justify-center items-center gap-[50px] h-full">
      <div className="flex flex-col bg-white rounded-[50px] py-[70px] px-[90px] gap-[65px]">
        <div className="flex flex-col gap-[15px]">
            <div className="flex justify-between items-center">
              <h1 className="text-[64px] font-bold">
                {"Hi, I'm"}{" "}
                <span className="bg-gradient-to-r from-[#DCBAFF] to-[#FFA4A4] bg-clip-text text-transparent">
                  Aidin!
                </span>
              </h1>
              <a
                href="#"
                className="flex items-center justify-center rounded-[20px] font-semibold text-[16px] gap-[10px] bg-gradient-to-r to-50%  from-[#B3B8E9] to-[#FFD9F0] px-[30px] py-[18px] shadow-lg"
              >
                Resume <DownloadSimple size={22} weight="bold" />
              </a>
            </div>
            <div className="leading-[160%] font-medium text-[20px]">
              <p className="">
                I am a programmer currently focused on design and development of
                beautiful, functional frontends. I implement my designs with React
                and Next.js
              </p>
              <br/>
              <p>
                Throughout my programming journey, I have worked in multiple areas
                with different technologies, which has taught me the skills to find
                my way in any kind of environment and easily adapt to it.
              </p>
            </div>
        </div>
        <div className="flex justify-between">
          <SkillCollection title="Core Frontend">
            <SkillBadge icon="logos:javascript" text="Javascript" />
            <SkillBadge icon="logos:typescript-icon" text="Javascript" />
            <SkillBadge icon="logos:react" text="React" />
            <SkillBadge icon="logos:nextjs-icon" text="Javascript" />
            <SkillBadge icon="logos:tailwindcss-icon" text="Javascript" />
          </SkillCollection>
          <SkillCollection title="Additional Frontend">
            <SkillBadge icon="logos:redux" text="Redux" />
            <SkillBadge icon="devicon:jquery" text="JQuery" />
            <SkillBadge icon="logos:react-query-icon" text="Tanstack Query" />
            <SkillBadge icon="simple-icons:reacttable" text="Tanstack Table" />
            <SkillBadge
              icon="simple-icons:reacthookform"
              text="React Hook Form"
            />
            <SkillBadge icon="logos:atlassian" text="Pragmatic DND" />
          </SkillCollection>
        </div>
        <div className="flex justify-between">
          <ContactItem
            Icon={Envelope}
            title="Email"
            content="aidin.ntr@gmail.com"
          />
          <ContactItem Icon={TelegramLogo} title="Telegram" content="aidinio" />
          <ContactItem Icon={LinkedinLogo} title="LinkedIn" content="aidinio" />
          <ContactItem Icon={GithubLogo} title="Github" content="aidinio" />
        </div>
      </div>
      <Image
        alt="Portrait of Aidin"
        src={"/portrait.jpg"}
        width={575}
        height={575}
        className="rounded-[60px] shadow-default w-fit h-fit"
      />
    </div>
  );
}

function SkillBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex gap-[10px] items-center bg-white px-[15px] py-[10px] text-[16px] font-semibold w-fit shadow-[0px_3px_6px_0px_#e8e8e8] rounded-[20px]">
      <Icon icon={icon} width={22} height={22} />
      <span>{text}</span>
    </div>
  );
}

function ContactItem({
  Icon,
  title,
  content,
}: {
  Icon: PIcon;
  title: string;
  content: string;
}) {
  return (
    <div className="flex items-center gap-[11px]">
      <Icon size={24} />
      <div className="flex flex-col gap-[2px]">
        <span className="font-bold">{title}</span>
        <span className="font-medium">{content}</span>
      </div>
    </div>
  );
}

function SkillCollection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col w-fit gap-[15px]">
      <h1 className="font-semibold text-[24px]">{title}</h1>
      <div className="flex flex-wrap w-fit gap-[10px]">{children}</div>
    </div>
  );
}
