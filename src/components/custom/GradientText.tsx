import { ReactNode } from "react";

export default function GradientText({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span className={`bg-gradient-to-r from-[#DCBAFF] to-[#FFA4A4] bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}
