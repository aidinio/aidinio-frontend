"use client";

import { useContext, useState } from "react";
import { Triangle, Circle, Spiral } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import clsx from "clsx";
import type { NavItem } from "./Navbar";
import { createContext } from "react";

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
  const Icon = dynamic(
    () => import("@phosphor-icons/react").then((mod) => mod[data.icon]),
    {
      ssr: false,
    }
  );
  return (
    <levelContext.Provider value={level + 1}>
      {level === 0 && (
        <div className="shadow-default flex flex-col gap-3 px-[24px] py-[24px] bg-white rounded-[24px]">
          <div className="flex gap-3">
            <Icon size={20} weight="bold" />
            <Link
              href={data.href}
              className={clsx(
                "text-black hover:text-gray-500 transition-colors duration-200",
                { "font-bold": isActive }
              )}
            >
              {data.label}
            </Link>
          </div>

          {data.subItems &&
            data.subItems?.map((item) => (
              <NavbarItem key={item.label} data={item} />
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
  const [state, setState] = useState<"open" | "closed" | "selected" | "normal">(
    data.subItems ? "open" : "normal"
  );
  const Icon = dynamic(
    () => import("@phosphor-icons/react").then((mod) => mod[data.icon]),
    {
      ssr: false,
      loading: () => (
        <Spiral size={20} weight="bold" className="animate-spin text-black" />
      ),
    }
  );
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex items-center content-center gap-3">
        <Icon
          size={20}
          weight={state === "open" || state === "selected" ? "bold" : undefined}
        />
        <span
          className={
            state === "open" || state === "selected" ? "font-bold" : ""
          }
        >
          {data.label}
        </span>
        {state === "open" ? (
          <Triangle size={10} weight="fill" className="rotate" />
        ) : state === "closed" ? (
          <Triangle size={10} weight="fill" className="rotate-180" />
        ) : state === "selected" ? (
          <Circle size={10} weight="fill" />
        ) : null}
      </div>
      {state === "open" && data.subItems && (
        <div className="ml-[20px] flex flex-col gap-[15px]">
          {data.subItems.map((item) => (
            <SubItem key={item.label} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}
