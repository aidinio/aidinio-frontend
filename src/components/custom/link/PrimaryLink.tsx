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
      className="w-full shadow-lg py-[1rem] px-[1rem] lg:py-[1rem] rounded-[1rem] lg:rounded-[1.25rem] text-[.875rem] sm:text-[0.8rem] xl:text-[1rem] bg-gradient-to-r to-50%  from-[#B3B8E9] to-[#FFD9F0] uppercase font-semibold flex justify-center items-center gap-4"
      href={href}
    >
      {children}
    </Link>
  );
}
