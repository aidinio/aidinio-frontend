import type { Portfolio } from "@/types/backend";
import AdditionalInfo from "@/ui/portfolio/portfolioItem/AdditionalInfo";
import Description from "@/ui/portfolio/portfolioItem/Description";
import PreviewPicture from "@/ui/portfolio/portfolioItem/PreviewPicture";
import Blobs from "@/ui/portfolio/portfolioItem/Blobs";
import { BASE } from "@/lib/client";
import ImageGallery from "./ImageGallery";

export default function PortfolioItem({ data }: { data: Portfolio }) {
  const portfolio = data;
  return (
    <div className="w-full h-full bg-white rounded-[50px] overflow-hidden p-[75px] box-border relative shadow-default">
      <Blobs />
      <div className="grid grid-cols-[62fr_38fr] grid-rows-[minmax(auto,62fr)_48fr] gap-x-[40px] gap-y-[30px] h-full box-border z-20 relative">
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
  );
}
