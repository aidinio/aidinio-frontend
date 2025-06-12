import DynamicPhosphorIcon from "@/components/custom/DynamicIcon";
import { NavItem } from "@/types/navbar";
import clsx from "clsx";
import Link from "next/link";

export default function NavbarLink({
  hidden,
  data,
  isActive,
}: {
  hidden?: boolean;
  data: NavItem;
  isActive: boolean;
}) {
  const className = clsx(
    "text-black hover:text-gray-500 transition-colors duration-200 flex items-center justify-center gap-2 md:gap-2  text-[1rem] md:text-base",
    { "font-bold": isActive }
  );
  return hidden ? (
    <span className={`${className} cursor-default`}>
      <DynamicPhosphorIcon
        fontSize={"1.1rem"}
        weight={isActive ? "bold" : "regular"}
        icon={data.icon}
        ssr={false}
      />
      {data.label}
    </span>
  ) : (
    <Link href={data.href} className={className}>
      <DynamicPhosphorIcon
        fontSize={"1.1rem"}
        weight={isActive ? "bold" : "regular"}
        icon={data.icon}
        ssr={false}
      />
      {data.label}
    </Link>
  );
}
