"use client";

import { ReactNode } from "react";
import { House, Cube, User, Article, Icon } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <ul className="font-medium flex flex-col gap-5 h-full items-start justify-center justify-self-start">
      <li>
        <NavbarItem Icon={House}>Home</NavbarItem>
      </li>
      <li>
        <NavbarItem Icon={Cube}>Portfolio</NavbarItem>
      </li>
      <li>
        <NavbarItem Icon={User}>About Me</NavbarItem>
      </li>
      <li>
        <NavbarItem Icon={Article}>Blog</NavbarItem>
      </li>
      {/* <li>
        <NavbarItem>Portfolio</NavbarItem>
      </li>
      <li>
        <NavbarItem>Resume</NavbarItem>
      </li>
      <li>
        <NavbarItem>About Me</NavbarItem>
      </li> */}
    </ul>
  );
}

function NavbarItem({ Icon, children }: { Icon: Icon; children: ReactNode }) {
  return (
    <div className="flex items-center content-center gap-3 px-[24px] py-[24px] bg-white rounded-[24px]">
      <Icon size={20} weight="bold" />
      {children}
    </div>
  );
}
