"use client";

import { Dispatch, SetStateAction, useContext, useState } from "react";
import { Triangle, Circle, Spiral } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import clsx from "clsx";
import type { NavItem } from "@/data/types";
import { createContext } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { iconCache } from "@/data/cache";
import DynamicPhosphorIcon from "@/components/custom/DynamicIcon";

const levelContext = createContext<number>(0);
const openItemContext = createContext<{
  openItem: string | null;
  setOpenItem: Dispatch<SetStateAction<string | null>> | null;
}>({ openItem: null, setOpenItem: null });

export function NavbarItem({ data }: { data: NavItem }) {
  const [openItem, setOpenItem] = useState<string | null>(null);
  return (
    <openItemContext.Provider value={{ openItem, setOpenItem }}>
      <NavbarItem2 data={data} />
    </openItemContext.Provider>
  );
}

export function NavbarItem2({ data }: { data: NavItem }) {
  const pathname = usePathname();
  const isActive = data.href === pathname;
  const level = useContext(levelContext);
  const isInPath =
    pathname.split("/")[1] === data.href.split("/")[1].toLowerCase();
  const [isHovered] = useState(false);
  return (
    <levelContext.Provider value={level + 1}>
      {level === 0 && (
        <div
          className={clsx(
            " flex flex-col gap-3 sm:px-[24px] py-[12px] sm:py-[24px]",
            {
              "sm:shadow-default sm:bg-white sm:rounded-[24px]": isInPath,
            }
          )}
        >
          <div className="flex gap-3">
            <Link
              href={data.href}
              className={clsx(
                "text-black hover:text-gray-500 transition-colors duration-200 flex items-center justify-center gap-1 sm:gap-3 text-xs sm:text-base",
                { "font-bold": isActive }
              )}
            >
              <DynamicPhosphorIcon icon={data.icon} ssr={false} />
              {data.label}
            </Link>
          </div>

          {(isInPath || isHovered) &&
            data.subItems &&
            data.subItems?.map((item) => (
              <NavbarItem2 key={item.href} data={item} />
            ))}
        </div>
      )}
      {level !== 0 && (
        <div className="ml-[20px] flex flex-col gap-[15px]">
          <SubItem data={data} />
        </div>
      )}
    </levelContext.Provider>
  );
}

export function SubItem({ data }: { data: NavItem }) {
  const level = useContext(levelContext);
  const pathname = usePathname();
  const { openItem, setOpenItem } = useContext(openItemContext);
  const isActive = pathname === data.href;
  const isOpen = openItem === data.href;
  const [state, setState] = useState<"open" | "closed" | "selected" | "normal">(
    isActive
      ? "selected"
      : data.subItems && isOpen
      ? "open"
      : data.subItems && !isOpen
      ? "closed"
      : "normal"
  );
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex items-center content-center gap-3">
        <Link href={data.href} className="flex gap-2 items-center">
        <DynamicPhosphorIcon icon={data.icon} ssr={false} />
          <span className={state === "selected" || isActive ? "font-bold" : ""}>
            {data.label}
          </span>
        </Link>
        <div
          onClick={() =>
            data.subItems && isOpen && setOpenItem
              ? (setState("closed"), setOpenItem(null))
              : data.subItems && !isOpen && setOpenItem
              ? (setState("open"), setOpenItem(data.href))
              : null
          }
          className={clsx({
            "bg-white shadow-sm p-2 rounded-full": data.subItems,
          })}
        >
          {data.subItems && isOpen ? (
            <Triangle size={10} weight="fill" className="rotate" />
          ) : data.subItems && !isOpen ? (
            <Triangle size={10} weight="fill" className="rotate-180" />
          ) : isActive ? (
            <Circle size={10} weight="fill" />
          ) : null}
        </div>
      </div>
      <AnimatePresence>
        {state === "open" && isOpen && data.subItems && (
          <motion.div
            initial={{
              opacity: 0,
              height: "1px",
              width: "1px",
              display: "hidden",
              marginLeft: "0px",
              marginTop: "-15px",
            }}
            animate={{
              opacity: 1,
              height: "auto",
              width: "auto",
              display: "flex",
              marginLeft: "20px",
              marginTop: "0px",
            }}
            exit={{
              opacity: 0,
              display: "hidden",
              height: "1px",
              width: "1px",
              marginLeft: "0px",
              marginTop: "-15px",
            }}
            transition={{ duration: 0.3, ease: easeInOut }}
            className="ml-[20px] h-full w-full flex flex-col gap-[15px] overflow-hidden overflow-x-visible"
          >
            {data.subItems.map((item) => (
              <SubItem key={item.href} data={item} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
