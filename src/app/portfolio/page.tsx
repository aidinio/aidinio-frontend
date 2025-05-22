import { Spiral } from "@phosphor-icons/react/dist/ssr";
import { PhosphorIconName, Technology } from "../data/types";
import { iconCache } from "@/app/data/cache";
import dynamic from "next/dynamic";
import clsx from "clsx";
import { portfolioCategories, portfolioCategory } from "../data/Portfolio";
import Link from "next/link";
import Image from "next/image";
import Badge from "./Badge";
import { portfolios } from "../data/Portfolio";

export default function Page() {
  return (
    <PortfolioPage />
  )
}

export function PortfolioPage({categoryTitle}: {categoryTitle?: string}) {
  return (
    <div className="w-full h-fit bg-white rounded-[50px] p-[75px] box-border relative shadow-default">
      <div className="flex gap-10">
        <h1 className="text-[64px] font-black">Portfolio</h1>
        <div className="flex items-center justify-center gap-5">
          {Object.keys(portfolioCategories).map((category) => (
            <CategoryBadge
              icon={portfolioCategories[category].icon}
              label={portfolioCategories[category].title}
              key={portfolioCategories[category].title}
              href={`/portfolio/${encodeURIComponent(portfolioCategories[category].title)}`}
              selected={categoryTitle === portfolioCategories[category].title}
            />
          ))}
        </div>
      </div>
      <div className="grid gap-[auto] gap-y-10 justify-items-center grid-cols-[repeat(3,1fr)]  mt-10">
      {portfolios.map((portfolio) => {
        const category = Object.keys(portfolioCategories).find(category => portfolioCategories[category].title === portfolio.category) || "Other";
        if (categoryTitle && categoryTitle !== portfolioCategories[category].title) return null;
        return (
          <PortfolioPreview
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
  );
}

function PortfolioPreview({
  imageSrc,
  imageAlt,
  category,
  title,
  technologies,
  href,
}: {
  imageSrc: string;
  imageAlt: string;
  category: portfolioCategory;
  title: string;
  technologies: Technology[];
  href: string;
}) {
  const Icon = iconCache.has(category.icon)
    ? iconCache.get(category.icon)
    : dynamic(
        () =>
          import("@phosphor-icons/react/dist/ssr").then((mod) => {
            iconCache.set(category.icon, mod[category.icon]);
            return mod[category.icon];
          }),
        {
          loading: () => (
            <Spiral
              size={20}
              weight="bold"
              className="animate-spin text-black"
            />
          ),
        }
      );
  return (
    <div className="flex flex-col rounded-[30px] shadow-default max-w-[425px]">
      <div className="overflow-hidden rounded-t-[30px] relative">
        <Image
          className="w-full"
          src={imageSrc}
          alt={imageAlt}
          width="300"
          height="200"
        />
        <div className="rounded-tl-[20px] absolute bottom-0 right-0 flex gap-3 items-center justify-center bg-white p-3 shadow-default">
          <Icon
            size={20}
            weight="bold"
            className="text-black rounded-full bg-white shadow-default"
          />
          {category.title}
        </div>
      </div>
      <div className="flex flex-col px-[30px] py-[20px] gap-4">
        <h2 className="text-[32px] font-bold m-0">{title}</h2>
        <div className="flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <Badge
              key={technology.icon}
              icon={technology.icon}
              text={technology.text}
            />
          ))}
        </div>
        <Link
          href={href}
          className="text-[20px] font-bold text-white bg-black rounded-[25px] flex items-center justify-center py-[17px] mt-5"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export function CategoryBadge({
  icon,
  label,
  href,
  selected,
}: {
  icon: PhosphorIconName;
  label: string;
  href: string;
  selected?: boolean;
}) {
  const Icon = iconCache.has(icon)
    ? iconCache.get(icon)
    : dynamic(
        () =>
          import("@phosphor-icons/react/dist/ssr").then((mod) => {
            iconCache.set(icon, mod[icon]);
            return mod[icon];
          }),
        {
          loading: () => (
            <Spiral
              size={20}
              weight="bold"
              className="animate-spin text-black"
            />
          ),
        }
      );
  return (
    <Link
      className={clsx(
        "flex p-[20px] shadow-default items-center justify-center rounded-full gap-2",
        { "font-bold text-white bg-black shadow-none": selected }
      )}
      href={encodeURI(href)}
    >
      <Icon weight={selected ? "bold" : "regular"} />
      {label}
    </Link>
  );
}
