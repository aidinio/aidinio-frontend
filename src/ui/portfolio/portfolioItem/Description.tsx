import { ReactNode } from "react";

export default function Description({
    className,
    title,
    children,
  }: {
    className?: string;
    title: string;
    children: ReactNode;
  }) {
    return (
      <div className={className}>
        <h1 className="text-[64px] font-black mb-[20px]">{title}</h1>
        <p className="text-[24px] font-medium text-justify">{children}</p>
      </div>
    );
  }