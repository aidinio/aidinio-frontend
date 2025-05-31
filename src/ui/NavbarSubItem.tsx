"use client";

import DynamicPhosphorIcon from "@/components/custom/DynamicIcon";
import { LevelContext, OpenItemContext } from "@/contexts/NavbarContexts";
import { NavItem } from "@/types/navbar";
import { Circle, Triangle } from "@phosphor-icons/react";
import clsx from "clsx";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useContext, useState } from "react";

export default function NavbarSubItem({ data }: { data: NavItem }) {
  const level = useContext(LevelContext);
  const pathname = usePathname();
  const { openItem, setOpenItem } = useContext(OpenItemContext);
  const searchParams = useSearchParams();
  const isActive =
    level === 1
      ? searchParams.get("category") === data.label
      : pathname === data.href;
  const isOpen = openItem === data.href;
  const [state, setState] = useState<"open" | "closed" | "normal">(
    data.subItems && isOpen
      ? "open"
      : data.subItems && !isOpen
      ? "closed"
      : "normal"
  );
  return (
    <LevelContext.Provider value={level + 1}>
      <div className="flex flex-col gap-[15px] ml-0">
        <div className="flex items-center content-center gap-3 ml-4">
          <Link href={data.href} className="flex gap-2 items-center">
            <DynamicPhosphorIcon weight={"bold"} icon={data.icon} ssr={false} />
            <span className={isActive ? "font-bold" : ""}>{data.label}</span>
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
                marginLeft: "16px",
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
              className="h-full w-full flex flex-col gap-[15px] overflow-hidden overflow-x-visible"
            >
              {data.subItems.map((item) => (
                <NavbarSubItem key={item.href} data={item} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LevelContext.Provider>
  );
}
