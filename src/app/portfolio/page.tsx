import { portfolioCategories, portfolios } from "@/data/Portfolio";
import PortfolioPreviewCard from "@/ui/portfolio/PortfolioPreviewCard";
import IconLabelBadge from "@/components/custom/PhosphorLabelBadge";

export default function Page() {
  return <PortfolioPage />;
}

export function PortfolioPage({ categoryTitle }: { categoryTitle?: string }) {
  return (
    <div className="w-full h-fit bg-white rounded-[50px] p-[75px] box-border relative shadow-default max-w-[2100px]">
      <div className="flex gap-10">
        <h1 className="text-[64px] font-black">Portfolio</h1>
        <div className="flex items-center justify-center gap-5">
          {Object.keys(portfolioCategories).map((category) => (
            <IconLabelBadge
              icon={portfolioCategories[category].icon}
              label={portfolioCategories[category].title}
              key={portfolioCategories[category].title}
              href={`/portfolio/${encodeURIComponent(
                portfolioCategories[category].title
              )}`}
              selected={categoryTitle === portfolioCategories[category].title}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="gap-x-10 gap-y-10 grid justify-items-center grid-cols-[repeat(3,1fr)] max-w-[1920px]  mt-10">
          {portfolios.map((portfolio) => {
            const category =
              Object.keys(portfolioCategories).find(
                (category) =>
                  portfolioCategories[category].title === portfolio.category
              ) || "Other";
            if (
              categoryTitle &&
              categoryTitle !== portfolioCategories[category].title
            )
              return null;
            return (
              <PortfolioPreviewCard
                key={portfolio.id}
                imageSrc={portfolio.images[0]}
                imageAlt={portfolio.title}
                category={{
                  icon: portfolioCategories[category].icon,
                  title: portfolioCategories[category].title,
                }}
                title={portfolio.title}
                technologies={portfolio.technologies}
                href={`/portfolio/item/${portfolio.id}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
