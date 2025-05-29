"use client";

import { Portfolio } from "@/types/backend";
import { useSearchParams } from "next/navigation";
import PortfolioPreviewCard from "./PortfolioPreviewCard";
import { BASE } from "@/lib/client";

export default function FilteredPortfolioList({
  portfolios,
}: {
  portfolios: Portfolio[];
}) {
  const searchParams = useSearchParams();
  const categoryTitle = searchParams.get("category");
  return (
    <div className="gap-x-10 gap-y-10 grid justify-items-center grid-cols-[repeat(3,1fr)] max-w-[1920px]  mt-10">
      {portfolios
        .filter((portfolio) =>
          categoryTitle ? portfolio.category.title === categoryTitle : portfolio
        )
        .map((portfolio) => (
          <PortfolioPreviewCard
            key={portfolio.id}
            imageSrc={`${BASE}${portfolio.previewPicture.formats.medium.url}`}
            imageAlt={portfolio.title}
            category={portfolio.category}
            title={portfolio.title}
            technologies={portfolio.technologyTags}
            href={`/portfolio/${portfolio.urlTitle}`}
          />
        ))}
    </div>
  );
}
