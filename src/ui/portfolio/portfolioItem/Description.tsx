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
    <>
      <div className="hidden sm:block">
        <h1 className="text-[4rem] font-black mb-[20px]">{title}</h1>
        <p className="text-[1.5rem] font-medium text-justify">{children}</p>
      </div>
      <TitledCard Icon={Article} title={title}>
        <p className="text-justify font-semibold text-[1.2rem]">{children}</p>
      </TitledCard>
    </>
  );
}
