import { getPortfolio, getPortfolios } from "@/lib/client";
import ImageGallery from "@/ui/portfolio/portfolioItem/ImageGallery";
import Description from "@/ui/portfolio/portfolioItem/Description";
import TechnologiesCard from "@/ui/portfolio/portfolioItem/TechnologiesCard";
import Link from "next/link";
import { GithubLogo, MonitorPlay } from "@phosphor-icons/react/dist/ssr";

export async function generateStaticParams() {
  const { data: portfolios } = await getPortfolios();
  return portfolios.map((portfolio) => ({
    urlTitle: portfolio.urlTitle,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ urlTitle: string }>;
}) {
  const { urlTitle } = await params;
  const { data: portfolio } = await getPortfolio(urlTitle);
  if (!portfolio) return <h1>Portfolio not found!</h1>;
  return (
    <div className="flex grow h-full w-full items-start justify-center mt-[6rem]">
      <div className="flex flex-col items-center gap-[2rem] lg:w-full">
        <ImageGallery images={portfolio.images} />
        <div className="flex flex-col items-center md:items-start gap-[3rem] lg:flex-row w-full justify-center px-[2rem] md:px-0">
          <div className="grow md:max-w-[50rem]">
            <Description title={portfolio.title}>
              {portfolio.description}
            </Description>
          </div>
          <div className="flex flex-col grow-[2] w-full max-w-[30rem] gap-[2rem] items-center md:items-start">
            <TechnologiesCard technologies={portfolio.technologyTags} />
            <div className="flex grow w-full gap-[2rem]">
              {portfolio?.liveLink && (
                <Link
                href={portfolio.liveLink}
                className="w-full grow py-[14px] text-[1.25rem] font-semibold flex justify-center items-center self-center rounded-[19px] bg-gradient-to-r from-[#B1FFCB] to-[#D3FFC9] shadow-[0px_0px_15px_2px_#C2FFCA] mb-[2rem] md:mb-0"
                >
                  <MonitorPlay weight="bold" fontSize={"1.5rem"} className="mr-2"/>
                  Live
                </Link>
              )}
              {portfolio?.githubLink && (
                <Link
                  href={portfolio.githubLink}
                  className="w-full grow py-[14px] text-[1.25rem] font-semibold flex justify-center items-center self-center rounded-[19px] bg-gradient-to-r bg-white md:mb-0 shadow-default"
                >
                  <GithubLogo weight="bold" fontSize={"1.5rem"} className="mr-2"/>
                  Github
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
