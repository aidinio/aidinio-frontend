import { navItems } from "@/data/NavbarItems";
import { NavbarItem } from "@/ui/NavbarItem";
import clsx from "clsx";

export default async function Navbar({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      className={clsx(
        `grow-[0] justify-self-start z-30 shadow-default md:shadow-none fixed bg-white md:bg-transparent h-fit rounded-full px-[2.4rem] py-[5px] md:py-0 md:px-0 md:rounded-none top-9 flex md:flex-col gap-7 md:gap-5 md:h-full items-start justify-center shrink-0 md:sticky`,
        { "md:hidden static opacity-0 mt-9": hidden }
      )}
    >
      {navItems.map((item) => (
        <li key={item.label}>
          <NavbarItem key={item.label} data={item} hidden={hidden} />
        </li>
      ))}
    </ul>
  );
}
