import IconLabelBadge from "@/components/custom/IconLabelBadge";
import { Technology } from "@/data/types";
import Link from "next/link";

export default function AdditionalInfo({
    className,
    technologies,
    liveSrc,
  }: {
    className?: string;
    technologies: Technology[];
    liveSrc: string;
  }) {
    return (
      <div className={`h-full w-full ${className}`}>
        <div className="flex flex-col justify-between h-full">
          <div className="">
            <h2 className="text-[36px] font-black mb-[10px]">Technologies</h2>
            <div className="flex flex-wrap gap-[20px] gap-y-[10px]">
              {technologies.map((technology) => (
                <IconLabelBadge
                  key={technology.text}
                  text={technology.text}
                  icon={technology.icon}
                />
              ))}
            </div>
          </div>
          <Link
            href={liveSrc}
            className="w-[100%] py-[14px] text-[20px] font-semibold flex justify-center items-center self-center rounded-[19px] bg-gradient-to-r from-[#B1FFCB] to-[#D3FFC9] shadow-[0px_0px_15px_2px_#C2FFCA]"
          >
            View Live
          </Link>
        </div>
      </div>
    );
  }