import { navItems } from "./data/NavbarItems";
import { NavbarItem } from "./NavbarClient";

export default function Navbar() {
  return (
    <ul className="font-medium flex flex-col gap-5 h-full items-start justify-center justify-self-start shrink-0 sticky">
      {navItems.map((item) => (
        <li key={item.label}>
          <NavbarItem key={item.label} data={item} />
        </li>
      ))}
    </ul>
  );
}