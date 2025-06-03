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
    <div className="flex flex-col rounded-[30px] shadow-default max-w-[425px] bg-white">
      <div className="overflow-hidden rounded-t-[30px] relative">
        <Image
          className="w-full"
          src={imageSrc}
          alt={imageAlt}
          width="300"
          height="200"
        />
        <div className="rounded-tl-[20px] absolute bottom-0 right-0 flex gap-3 items-center justify-center bg-white p-3 shadow-default">
          {category.title}
        </div>
      </div>
      <div className="flex flex-col justify-between h-full px-[30px] py-[20px] gap-4">
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
        <Link
          href={href}
          className="text-[1.25rem] font-bold text-white bg-black rounded-[25px] flex items-center justify-center py-[17px] mt-5"
        >
          View
        </Link>
      </div>
    </div>
  );
}
