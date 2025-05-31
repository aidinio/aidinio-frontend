import { navItems } from "@/data/NavbarItems";
import { NavbarItem } from "@/ui/NavbarItem";

export default async function Navbar() {
  return (
    <ul className="z-30 font-medium fixed bg-white sm:bg-transparent h-fit rounded-full px-[20px] sm:px-0 sm:rounded-none top-9 flex sm:flex-col gap-8 sm:gap-5 sm:h-full items-start justify-center justify-self-start shrink-0 sm:sticky">
      {navItems.map((item) => (
        <li key={item.label}>
          <NavbarItem key={item.label} data={item} />
        </li>
      ))}
    </ul>
  );
}
