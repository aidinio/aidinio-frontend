import { getPortfolio } from "@/lib/client";
import ImageGallery from "@/ui/portfolio/portfolioItem/ImageGallery";
import Description from "@/ui/portfolio/portfolioItem/Description";
import AdditionalInfo from "@/ui/portfolio/portfolioItem/AdditionalInfo";
import Technologies from "@/ui/portfolio/portfolioItem/TechnologiesCard";
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
    <>
      <div className="hidden sm:block w-full h-full bg-white rounded-[50px] sm:overflow-hidden p-[75px] box-border relative shadow-default">
        {/* <Blobs /> */}
        <div className="sm:grid grid-cols-[62fr_38fr] grid-rows-[minmax(auto,62fr)_48fr] gap-x-[40px] gap-y-[30px] h-full box-border z-20 relative">
          <ImageGallery images={portfolio.images} />
          <Description title={portfolio.title}>
            {portfolio.description}
          </Description>
          <AdditionalInfo
            technologies={portfolio.technologyTags}
            liveSrc={portfolio.liveLink}
          />
        </div>
      </div>
      <div className="flex flex-col items-center sm:hidden gap-[2rem]">
        <ImageGallery images={portfolio.images} />
        <Description title={portfolio.title}>
          {portfolio.description}
        </Description>
        <Technologies technologies={portfolio.technologyTags} />
        <Link
          href={portfolio.liveLink}
          className="fixed bottom-0 left-0 w-[100%] py-[14px] text-[2rem] font-semibold flex justify-center items-center self-center bg-gradient-to-r from-[#B1FFCB] to-[#D3FFC9] shadow-[0px_0px_15px_2px_#C2FFCA]"
        >
          View Live
        </Link>
        <div className="w-[100%] h-[70px] opacity-0"></div>
      </div>
    </>
  );
}
