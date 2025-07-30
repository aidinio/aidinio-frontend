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

export default function Page() {
  return (
    <div className="h-full w-full items-center justify-center overflow-visible">
      <div className="hidden sm:flex flex-col xl:flex-row xl:justify-center items-center sm:gap-[1rem] xl:gap-[1.8rem] 2xl:gap-[3.125rem] h-full overflow-visible">
        <Image
          alt="Portrait of Aidin"
          src={"/portrait.jpg"}
          width={575}
          height={575}
          className="block xl:hidden rounded-[60px] shadow-default w-[max(40vw,300px)] -mb-[5rem] -mt-[0rem] h-fit shrink-0 grow"
        />
        <div className="place-self-center-safe flex flex-col bg-white rounded-[50px] sm:p-[3rem] md:p-[3.5rem] lg:p-[3.8rem] xl:p-[5rem] 2xl:p-[5.625rem] gap-[65px] max-w-[1000px] shadow-default grow-0 shrink">
          <div className="flex flex-col gap-[15px]">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <h1 className="text-[4rem] font-bold">
                {"Hi, I'm"} <GradientText>Aidin!</GradientText>
              </h1>
              <div className="grow-1 max-w-[10rem]">
                <PrimaryLink href={"#"}>
                  Resume <DownloadSimple size={22} weight="bold" />
                </PrimaryLink>
              </div>
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
          <div className="flex justify-between flex-wrap xl:flex-nowrap gap-[3rem]">
            <SkillCollection title="Core Frontend">
              <SkillBadge icon="logos:javascript" text="Javascript" />
              <SkillBadge icon="logos:typescript-icon" text="Typescript" />
              <SkillBadge icon="logos:react" text="React" />
              <SkillBadge icon="logos:nextjs-icon" text="Next.js" />
              <SkillBadge icon="logos:tailwindcss-icon" text="TailwindCSS" />
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
          <div className="flex justify-between flex-wrap gap-[2rem]">
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
          className="hidden xl:block rounded-[60px] shadow-default w-fit h-fit shrink-0"
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
    </div>
  );
}
