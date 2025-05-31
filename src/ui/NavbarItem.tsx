"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";
import type { NavItem } from "@/types/navbar";
import DynamicPhosphorIcon from "@/components/custom/DynamicIcon";
import { OpenItemContext } from "@/contexts/NavbarContexts";
import NavbarSubItem from "./NavbarSubItem";

export function NavbarItem({ data }: { data: NavItem }) {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isActive =
    data.href === pathname && searchParams.get("category") === null;
  const isInPath = pathname.split("/")[1] === data.href.split("/")[1];
  return (
    <OpenItemContext.Provider value={{ openItem, setOpenItem }}>
      <div
        className={clsx(
          " flex flex-col gap-3 sm:px-[1.5rem] py-[1rem] sm:py-[1.5rem]",
          {
            "sm:shadow-default sm:bg-white sm:rounded-[24px]": isInPath,
          }
        )}
      >
        <div className="flex gap-9">
          <Link
            href={data.href}
            className={clsx(
              "text-black hover:text-gray-500 transition-colors duration-200 flex items-center justify-center gap-1 sm:gap-2 text-sm md:text-base",
              { "font-bold": isActive }
            )}
          >
            <DynamicPhosphorIcon weight={"bold"} icon={data.icon} ssr={false} />
            {data.label}
          </Link>
        </div>

        {isInPath &&
          data.subItems &&
          data.subItems?.map((item) => (
            <NavbarSubItem key={item.href} data={item} />
          ))}
      </div>
    </OpenItemContext.Provider>
  );
}
