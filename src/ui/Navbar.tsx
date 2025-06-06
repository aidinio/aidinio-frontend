import { navItems } from "@/data/NavbarItems";
import { NavbarItem } from "@/ui/NavbarItem";
import clsx from "clsx";

export default async function Navbar({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      className={clsx(
        `z-30 shadow-default sm:shadow-none fixed bg-white sm:bg-transparent h-fit rounded-full px-[2.4rem] py-[5px] sm:py-0 sm:px-0 sm:rounded-none top-9 flex sm:flex-col gap-8 sm:gap-5 sm:h-full items-start justify-center justify-self-start shrink-0 sm:sticky`,
        { "sm:hidden static opacity-0 mt-9": hidden }
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
