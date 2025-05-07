import Image from "next/image";
import Link from "next/link";
import Badge from "@/app/portfolio/Badge";
import { portfolios, Technology } from "./data";
import { ReactNode } from "react";

export default function Portfolio() {
  const portfolio = portfolios[0];
  return (
    <div className="w-full h-full bg-white rounded-[50px] overflow-hidden p-[75px] box-border relative shadow-default">
      <BGBlobs />
      <div className="grid grid-cols-[62fr_38fr] grid-rows-[minmax(auto,62fr)_48fr] gap-x-[40px] gap-y-[30px] h-full box-border z-20 relative">
        <div className="rounded-[50px] shadow-xl overflow-hidden">
          <Image
            src={portfolio.images[0]}
            width={769}
            height={454}
            className="w-full scale-120"
            alt="portfolio picture"
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-3 gap-x-[30px] gap-y-[10px]">
          {portfolio.images.map((portfolioImage) => (
            <PreviewPicture key={portfolioImage} src={portfolioImage} />
          ))}
        </div>
        <Description title={portfolio.title}>
          {portfolio.description}
        </Description>
        <AdditionalInfo
          technologies={portfolio.technologies}
          liveSrc={portfolio.liveLink}
        />
      </div>
    </div>
  );
}

function PreviewPicture({ src }: { src: string }) {
  return (
    <Image
      src={src}
      width={227}
      height={134}
      className="rounded-[30px] w-full h-full max-w-[230px] max-h-[135px]"
      alt="portfolio picture"
    />
  );
}

function Description({
  className,
  title,
  children,
}: {
  className?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <h1 className="text-[64px] font-black mb-[20px]">{title}</h1>
      <p className="text-[24px] font-medium text-justify">{children}</p>
    </div>
  );
}

function AdditionalInfo({
  className,
  technologies,
  liveSrc,
}: {
  className?: string;
  technologies: Technology[];
  liveSrc: string;
}) {
  return (
    <div className={`h-full w-full ${className}`}>
      <div className="flex flex-col justify-between h-full">
        <div className="">
          <h2 className="text-[36px] font-black mb-[10px]">Technologies</h2>
          <div className="flex flex-wrap gap-[20px] gap-y-[10px]">
            {technologies.map((technology) => (
              <Badge
                key={technology.text}
                text={technology.text}
                icon={technology.icon}
              />
            ))}
          </div>
        </div>
        <Link
          href={liveSrc}
          className="w-[100%] py-[14px] text-[20px] font-semibold flex justify-center items-center self-center rounded-[19px] bg-gradient-to-r from-[#B1FFCB] to-[#D3FFC9] shadow-[0px_0px_15px_2px_#C2FFCA]"
        >
          View Live
        </Link>
      </div>
    </div>
  );
}

function BGBlobs() {
  return (
    <div className="z-10">
      <div className="w-[50%] h-[50%] absolute bg-[#BAF7FF] top-[-10%] left-[-5%] z-0 blur-[1050px] opacity-75 rounded-full"></div>
      <div className="w-[50%] h-[50%] absolute bg-[#FEFFBA] top-[20%] left-[-5%] z-0 blur-[1050px] opacity-75 rounded-full"></div>
      <div className="w-[50%] h-[50%] absolute bg-[#FFB2B2] bottom-[-10%] left-[-5%] z-0 blur-[1050px] opacity-75 rounded-full"></div>
    </div>
  );
}
