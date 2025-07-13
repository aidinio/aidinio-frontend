import { getPortfolio } from "@/lib/client";
import ImageGallery from "@/ui/portfolio/portfolioItem/ImageGallery";
import Description from "@/ui/portfolio/portfolioItem/Description";
import TechnologiesCard from "@/ui/portfolio/portfolioItem/TechnologiesCard";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ urlTitle: string }>;
}) {
  const { urlTitle } = await params;
  const { data: portfolio } = await getPortfolio(urlTitle);
  if (!portfolio) return <h1>Portfolio not found!</h1>;
  return (
    <div className="flex grow h-full w-full items-start justify-center">
      <div className="flex flex-col items-center gap-[2rem] sm:w-full">
        <ImageGallery images={portfolio.images} />
        <div className="flex flex-col items-center md:items-start gap-[3rem] sm:flex-row w-full justify-center px-[2rem] md:px-0">
          <div className="grow md:max-w-[50rem]">
            <Description title={portfolio.title}>
              {portfolio.description}
            </Description>
          </div>
          <div className="flex flex-col grow-[2] w-full max-w-[30rem] gap-[2rem] items-center md:items-start">
            <TechnologiesCard technologies={portfolio.technologyTags} />
            <Link
              href={portfolio.liveLink}
              className="w-full py-[14px] text-[1.25rem] font-semibold flex justify-center items-center self-center rounded-[19px] bg-gradient-to-r from-[#B1FFCB] to-[#D3FFC9] shadow-[0px_0px_15px_2px_#C2FFCA] mb-[2rem] md:mb-0"
              >
              View Live
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
