"use client";

import { Dispatch, SetStateAction, useContext, useState } from "react";
import { Triangle, Circle, Spiral, Icon } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import clsx from "clsx";
import type { NavItem } from "@/app/data/types";
import { createContext } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { iconCache } from "./data/cache";

const levelContext = createContext<number>(0);
const openItemContext = createContext<{
  openItem: string | null;
  setOpenItem: Dispatch<SetStateAction<string | null>> | null;
}>({ openItem: null, setOpenItem: null });

export type PhosphorIcon = keyof Omit<
  typeof import("@phosphor-icons/react/dist/ssr"),
  "SSRBase"
>;

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
  const Icon = iconCache.has(data.icon)
    ? iconCache.get(data.icon)
    : dynamic(
        () =>
          import("@phosphor-icons/react").then((mod) => {
            iconCache.set(data.icon, mod[data.icon]);
            return mod[data.icon];
          }),
        {
          ssr: false,
          loading: () => (
            <Spiral
              size={20}
              weight="bold"
              className="animate-spin text-black"
            />
          ),
        }
      );
  return (
    <levelContext.Provider value={level + 1}>
      {level === 0 && (
        <div className="shadow-default flex flex-col gap-3 px-[24px] py-[24px] bg-white rounded-[24px]">
          <div className="flex gap-3">
            <Link
              href={data.href}
              className={clsx(
                "text-black hover:text-gray-500 transition-colors duration-200 flex gap-3",
                { "font-bold": isActive }
              )}
            >
              <Icon size={20} weight="bold" />
              {data.label}
            </Link>
          </div>

          {data.subItems &&
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
  const Icon = iconCache.has(data.icon)
    ? iconCache.get(data.icon)
    : dynamic(
        () =>
          import("@phosphor-icons/react").then((mod) => {
            iconCache.set(data.icon, mod[data.icon]);
            return mod[data.icon];
          }),
        {
          ssr: false,
          loading: () => (
            <Spiral
              size={20}
              weight="bold"
              className="animate-spin text-black"
            />
          ),
        }
      );
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex items-center content-center gap-3">
        <Link href={data.href} className="flex gap-2 items-center">
          <Icon
            size={20}
            weight={state === "selected" || isActive ? "bold" : undefined}
          />
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
