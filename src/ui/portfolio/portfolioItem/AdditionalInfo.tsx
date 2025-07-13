import IconLabelBadge from "@/components/custom/IconLabelBadge";
import TitledCard from "@/components/custom/TitledCard";
import type { Technology } from "@/types/backend";
import { Stack } from "@phosphor-icons/react/dist/ssr";
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
      <div className="flex flex-col gap-[3rem] justify-between h-full">
        <TitledCard Icon={Stack} title="Technologies">
          <div className="flex flex-wrap gap-[20px] gap-y-[10px]">
            {technologies.map((technology) => (
              <IconLabelBadge
                key={technology.label}
                text={technology.label}
                icon={technology.icon}
              />
            ))}
          </div>
        </TitledCard>
        <Link
          href={liveSrc}
          className="w-[100%] py-[14px] text-[1.25rem] font-semibold flex justify-center items-center self-center rounded-[19px] bg-gradient-to-r from-[#B1FFCB] to-[#D3FFC9] shadow-[0px_0px_15px_2px_#C2FFCA]"
        >
          View Live
        </Link>
      </div>
    </div>
  );
}
