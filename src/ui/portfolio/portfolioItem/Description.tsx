import { ReactNode } from "react";
import { Article } from "@phosphor-icons/react/dist/ssr";
import TitledCard from "@/components/custom/TitledCard";

export default function Description({
  title,
  children,
}: {
  className?: string;
  title: string;
  children: ReactNode;
}) {
  return (
      <TitledCard Icon={Article} title={title}>
        <p className="text-justify font-semibold">{children}</p>
      </TitledCard>
  );
}
