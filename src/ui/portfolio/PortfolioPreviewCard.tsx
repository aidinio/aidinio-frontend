import Image from "next/image";
import { Technology } from "@/types/backend";
import IconLabelBadge from "@/components/custom/IconLabelBadge";
import Link from "next/link";
import { PortfolioCategory } from "@/types/backend";

export default function PortfolioPrecategoryviewCard({
  imageSrc,
  imageAlt,
  category,
  title,
  technologies,
  href,
}: {
  imageSrc: string;
  imageAlt: string;
  category: PortfolioCategory;
  title: string;
  technologies: Technology[];
  href: string;
}) {
  return (
    <div className="grow sm:flex-1/2 xl:flex-1/3 sm:grow-0 flex items-center justify-center h-full">
      <div className="flex-1/2 lg:flex-1/3 flex flex-col grow rounded-[30px] shadow-default max-w-[425px] bg-white h-full">
        <div className="overflow-hidden rounded-t-[30px] relative">
          <div className="w-full h-[250px]">
            <Image
              className="w-full h-full object-cover"
              src={imageSrc}
              alt={imageAlt}
              width="300"
              height="200"
            />
          </div>
          <div className="rounded-tl-[20px] absolute bottom-0 right-0 flex gap-3 items-center justify-center bg-white p-3 shadow-default">
            {category.title}
          </div>
        </div>
        <div className="flex flex-col justify-between px-[30px] py-[20px] gap-4 grow">
          <div className="flex flex-col gap-4">
          <h2 className="text-[2rem] font-bold m-0">{title}</h2>
            <div className="flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <IconLabelBadge
                  key={technology.icon}
                  icon={technology.icon}
                  text={technology.label}
                />
              ))}
            </div>
          </div>
          <Link
            href={href}
            className="text-[1.25rem] font-bold text-white bg-black rounded-[25px] flex items-center justify-center py-[17px] mt-5"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
