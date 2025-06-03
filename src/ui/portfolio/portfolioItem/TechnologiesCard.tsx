import TitledCard from "@/components/custom/TitledCard";
import IconLabelBadge from "@/components/custom/IconLabelBadge";
import { Technology } from "@/types/backend";
import { Stack } from "@phosphor-icons/react/dist/ssr";

export default function TechnologiesCard({
  technologies,
}: {
  technologies: Technology[];
}) {
  return (
    <TitledCard Icon={Stack} title="Technologies">
      <div className="flex flex-wrap gap-5 items-start">
      {technologies.map((technology) => (
        <IconLabelBadge
        key={technology.label}
        text={technology.label}
        icon={technology.icon}
        />
      ))}
      </div>
    </TitledCard>
  );
}
