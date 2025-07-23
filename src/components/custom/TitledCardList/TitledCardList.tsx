import { ReactElement, ReactNode } from "react";
import MobileHeading from "./MobileHeading";

export default function TitledCardList({
  title,
  Categories,
  Cards,
}: {
  title: string;
  Categories?: ReactNode;
  Cards: ReactElement;
}) {
  return (
    <div className="w-full h-fit sm:bg-white rounded-[50px] mt-[8rem] sm:p-[4.5rem] box-border relative sm:shadow-default max-w-[2100px]">
      <div className="flex flex-wrap flex-col sm:flex-row mb-10 xl:mb-0">
        <MobileHeading title={title} />
        {Categories}
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(450px,1fr))] grid-rows-[repeat(auto-fit,1fr)] gap-[3rem] items-center justify-items-center">
        {Cards}
      </div>
    </div>
  );
}
