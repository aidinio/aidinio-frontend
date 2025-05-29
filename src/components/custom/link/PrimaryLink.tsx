import Link from "next/link";
import { ReactNode } from "react";

export default function PrimaryLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      className="px-[25px] shadow-lg sm:px-[35px] py-[15px] sm:py-[20px] rounded-[20px] text-[14px] sm:text-[16px] bg-gradient-to-r to-50%  from-[#B3B8E9] to-[#FFD9F0] uppercase font-bold flex justify-center items-center gap-3"
      href={href}
    >
      {children}
    </Link>
  );
}
