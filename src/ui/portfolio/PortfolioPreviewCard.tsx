import Image from "next/image";
import { Technology } from "@/data/types";
import { portfolioCategory } from "@/data/Portfolio";
import IconLabelBadge from "@/components/custom/IconLabelBadge";
import Link from "next/link";
import DynamicPhosphorIcon from "@/components/custom/DynamicIcon";

export default function PortfolioPreviewCard({
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
          <DynamicPhosphorIcon icon={category.icon} />
          {category.title}
        </div>
      </div>
      <div className="flex flex-col justify-between h-full px-[30px] py-[20px] gap-4">
        <h2 className="text-[32px] font-bold m-0">{title}</h2>
        <div className="flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <IconLabelBadge
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
