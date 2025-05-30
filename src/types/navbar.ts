import { PhosphorIcon } from "./PhosphorIcon";

export type NavItem = {
  icon: PhosphorIcon;
  label: string;
  href: string;
  subItems?: NavItem[];
};
