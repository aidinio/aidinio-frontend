import { ReactNode } from "react";

export default function SkillCollection({
    title,
    children,
  }: {
    title: string;
    children: ReactNode;
  }) {
    return (
      <div className="flex flex-col w-fit gap-[15px]">
        <h1 className="font-semibold text-[1.5rem]">{title}</h1>
        <div className="flex flex-wrap w-fit gap-[10px]">{children}</div>
      </div>
    );
  }