"use client";

import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";
import type { NavItem } from "@/types/navbar";
import { OpenItemContext } from "@/contexts/NavbarContexts";
import NavbarSubItem from "./NavbarSubItem";
import NavbarLink from "./NavbarLink";

export function NavbarItem({
  data,
  hidden,
}: {
  data: NavItem;
  hidden?: boolean;
}) {
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
          " flex flex-col gap-3 sm:px-[1.5rem] py-[1rem] sm:py-[1.5rem] font-medium",
          {
            "sm:shadow-default sm:bg-white sm:rounded-[24px]": isInPath,
          }
        )}
      >
        <div className="flex gap-9">
          <NavbarLink data={data} isActive={isActive} hidden={hidden} />
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
