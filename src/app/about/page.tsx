import GradientText from "@/components/custom/GradientText";
import PrimaryLink from "@/components/custom/link/PrimaryLink";
import ContactItem from "@/ui/about/ContactItem";
import SkillBadge from "@/ui/about/SkillBadge";
import SkillCollection from "@/ui/about/SkillCollection";
import PortraitCard from "@/ui/home/PortraitCard";
import {
  DownloadSimple,
  Envelope,
  GithubLogo,
  LinkedinLogo,
  TelegramLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="hidden sm:flex justify-center items-center gap-[50px] h-full">
        <div className="flex flex-col bg-white rounded-[50px] py-[70px] px-[90px] gap-[65px] max-w-[1000px] shadow-default grow-0 shrink">
          <div className="flex flex-col gap-[15px]">
            <div className="flex justify-between items-center">
              <h1 className="text-[4rem] font-bold">
                {"Hi, I'm"} <GradientText>Aidin!</GradientText>
              </h1>
              <Link
                href="#"
                className="flex items-center justify-center rounded-[20px] font-semibold text-[1rem] gap-[10px] bg-gradient-to-r to-50%  from-[#B3B8E9] to-[#FFD9F0] px-[30px] py-[1.125rem] shadow-lg"
              >
                Resume <DownloadSimple size={22} weight="bold" />
              </Link>
            </div>
            <div className="leading-[160%] font-medium text-[1.25rem]">
              <p>
                I am a programmer currently focused on design and development of
                beautiful, functional frontends. I implement my designs with
                React and Next.js
              </p>
              <br />
              <p>
                Throughout my programming journey, I have worked in multiple
                areas with different technologies, which has taught me the
                skills to find my way in any kind of environment and easily
                adapt to it.
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
              <SkillBadge
                icon="simple-icons:reacttable"
                text="Tanstack Table"
              />
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
            <ContactItem
              Icon={TelegramLogo}
              title="Telegram"
              content="aidinio"
            />
            <ContactItem
              Icon={LinkedinLogo}
              title="LinkedIn"
              content="aidinio"
            />
            <ContactItem Icon={GithubLogo} title="Github" content="aidinio" />
          </div>
        </div>
        <Image
          alt="Portrait of Aidin"
          src={"/portrait.jpg"}
          width={575}
          height={575}
          className="rounded-[60px] shadow-default w-fit h-fit shrink-0 grow"
        />
      </div>
      {/* Mobile version */}
      <div className="flex sm:hidden flex-col sm:flex-row items-center gap-[1.5rem] sm:gap-[2rem]">
        <PortraitCard alt={"Aidin's portrait"} src="/portrait.jpg" />
        <div className="sm:size-[36rem] w-[80vw] max-w-[27rem] sm:max-w-none bg-white rounded-[40px] sm:rounded-[60px] flex -mt-[7rem] sm:mt-0 flex-col gap-[1.875rem] items-center justify-between py-[2.75rem] sm:py-[65px] px-[40px] sm:px-[5rem] drop-shadow-[10px_10px_0_0_rgba(0,0,0,1)] shadow-default">
          <h1 className="text-[3.75rem] sm:text-[6rem] font-bold w-fit">
            {`I'm`} <GradientText>Aidin!</GradientText>
          </h1>
          <PrimaryLink href="/about">
            Resume
            <DownloadSimple fontSize={"1.5rem"} weight="bold" />
          </PrimaryLink>
          <p className="text-justify text-[1.125rem] sm:text-[1.5rem] font-medium">
            I am a programmer currently focused on design and development of
            beautiful, functional frontends. I implement my designs with React
            and Next.js
          </p>
          <p className="text-justify text-[1.125rem] sm:text-[1.5rem] font-medium">
            Throughout my programming journey, I have worked in multiple areas
            with different technologies, which has taught me the skills to find
            my way in any kind of environment and easily adapt to it.
          </p>
        </div>
        <div className="sm:size-[36rem] w-[80vw] max-w-[27rem] sm:max-w-none bg-white rounded-[40px] sm:rounded-[60px] flex sm:mt-0 flex-wrap gap-[1.875rem] py-[2.75rem] sm:py-[65px] px-[40px] sm:px-[5rem] drop-shadow-[10px_10px_0_0_rgba(0,0,0,1)] shadow-default">
          <SkillCollection title="Core Frontend">
            <SkillBadge icon="logos:javascript" text="Javascript" />
            <SkillBadge icon="logos:typescript-icon" text="Typescript" />
            <SkillBadge icon="logos:react" text="React" />
            <SkillBadge icon="logos:nextjs-icon" text="Next.js" />
            <SkillBadge icon="logos:tailwindcss-icon" text="TailwindCSS" />
          </SkillCollection>
        </div>
        <div className="sm:size-[36rem] w-[80vw] max-w-[27rem] sm:max-w-none bg-white rounded-[40px] sm:rounded-[60px] flex sm:mt-0 flex-wrap gap-[1.875rem] py-[2.75rem] sm:py-[65px] px-[40px] sm:px-[5rem] drop-shadow-[10px_10px_0_0_rgba(0,0,0,1)] shadow-default">
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
        <div className="sm:size-[36rem] w-[80vw] max-w-[27rem] sm:max-w-none bg-white rounded-[40px] sm:rounded-[60px] flex sm:mt-0 flex-wrap gap-[1.875rem] py-[2.75rem] sm:py-[65px] px-[40px] sm:px-[5rem] drop-shadow-[10px_10px_0_0_rgba(0,0,0,1)] shadow-default">
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
    </>
  );
}
