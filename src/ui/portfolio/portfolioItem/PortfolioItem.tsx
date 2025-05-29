import Image from "next/image";
import { portfolios } from "@/data/Portfolio";
import type { Portfolio } from "@/data/types";
import AdditionalInfo from "@/ui/portfolio/portfolioItem/AdditionalInfo";
import Description from "@/ui/portfolio/portfolioItem/Description";
import PreviewPicture from "@/ui/portfolio/portfolioItem/PreviewPicture";
import Blobs from "@/ui/portfolio/portfolioItem/Blobs";

export default function PortfolioItem({ data }: { data: Portfolio }) {
  const portfolio = portfolios[0];
  return (
    <div className="w-full h-full bg-white rounded-[50px] overflow-hidden p-[75px] box-border relative shadow-default">
      <Blobs />
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
