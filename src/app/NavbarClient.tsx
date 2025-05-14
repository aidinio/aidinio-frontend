"use client";

import { useContext, useState } from "react";
import { Triangle, Circle, Spiral, Icon } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import clsx from "clsx";
import type { NavItem } from "@/app/data/types";
import { createContext } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const levelContext = createContext(0);

export type PhosphorIcon = keyof Omit<
  typeof import("@phosphor-icons/react/dist/ssr"),
  "SSRBase"
>;

export function NavbarItem({ data }: { data: NavItem }) {
  const pathname = usePathname();
  const siteSection = pathname.split("/")[1];
  const isActive = data.href === `/${siteSection}`;
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
              <NavbarItem key={item.href} data={item} />
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

const iconCache: Map<PhosphorIcon, Icon> = new Map();

export function SubItem({ data }: { data: NavItem }) {
  const [state, setState] = useState<"open" | "closed" | "selected" | "normal">(
    data.subItems ? "closed" : "normal"
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
            weight={
              state === "open" || state === "selected" ? "bold" : undefined
            }
          />
          <span
            className={
              state === "open" || state === "selected" ? "font-bold" : ""
            }
          >
            {data.label}
          </span>
        </Link>
        <div
          onClick={() =>
            state === "open" ? setState("closed") : setState("open")
          }
          className="bg-white shadow-sm p-2 rounded-full"
        >
          {state === "open" ? (
            <Triangle size={10} weight="fill" className="rotate" />
          ) : state === "closed" ? (
            <Triangle size={10} weight="fill" className="rotate-180" />
          ) : state === "selected" ? (
            <Circle size={10} weight="fill" />
          ) : null}
        </div>
      </div>
      <AnimatePresence>
        {state === "open" && data.subItems && (
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
