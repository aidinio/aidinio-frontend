"use client";

import { ReactNode } from "react";
import {
  House,
  Cube,
  User,
  Article,
  Icon,
  Triangle,
  Circle,
  ProjectorScreen,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const siteSection = pathname.split("/")[1];
  return (
    <ul className="font-medium flex flex-col gap-5 h-full items-start justify-center justify-self-start shrink-0 sticky">
      <li>
        <Link href="/">
          <NavbarItem Icon={House}>Home</NavbarItem>
        </Link>
      </li>
      <li>
        <Link href="/portfolio">
          {siteSection === "portfolio" ? (
            <div>
              <div className="shadow-default flex items-center content-center gap-[15px] px-[24px] py-[24px] bg-white rounded-[24px]">
                <SubItem Icon={Cube} text="Portfolio" state="open">
                  <SubItem Icon={House} text="Frontend" state="open">
                    <SubItem Icon={ProjectorScreen} text="aidin.io" />
                    <SubItem Icon={ProjectorScreen} text="i3wm.org" />
                    <SubItem
                      Icon={ProjectorScreen}
                      text="awesomewm.org"
                      state="selected"
                    />
                    <SubItem Icon={ProjectorScreen} text="hover" />
                  </SubItem>
                  <SubItem Icon={Cube} text="Personal" state="closed">
                    <SubItem Icon={ProjectorScreen} text="aidin.io" />
                    <SubItem Icon={ProjectorScreen} text="i3wm.org" />
                  </SubItem>
                  <SubItem Icon={Cube} text="UI/UX" state="closed" />
                  <SubItem Icon={Cube} text="Other" state="closed" />
                </SubItem>
              </div>
            </div>
          ) : (
            <NavbarItem Icon={Cube}>Portfolio</NavbarItem>
          )}
        </Link>
      </li>
      <li>
        <Link href="/about">
          <NavbarItem Icon={User}>About Me</NavbarItem>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <NavbarItem Icon={Article}>Blog</NavbarItem>
        </Link>
      </li>
    </ul>
  );
}

function NavbarItem({ Icon, children }: { Icon: Icon; children: ReactNode }) {
  return (
    <div className="shadow-default flex items-center content-center gap-3 px-[24px] py-[24px] bg-white rounded-[24px]">
      <Icon size={20} weight="bold" />
      {children}
    </div>
  );
}

function SubItem({
  Icon,
  text,
  children,
  state,
}: {
  Icon: Icon;
  text: string;
  children?: ReactNode;
  state?: "open" | "closed" | "selected" | "normal";
}) {
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
          {text}
        </span>
        {state === "open" ? (
          <Triangle size={10} weight="fill" className="rotate" />
        ) : state === "closed" ? (
          <Triangle size={10} weight="fill" className="rotate-180" />
        ) : state === "selected" ? (
          <Circle size={10} weight="fill" />
        ) : null}
      </div>
      {state === "open" && children && (
        <div className="ml-[20px] flex flex-col gap-[15px]">{children}</div>
      )}
    </div>
  );
}
