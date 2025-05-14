import { navItems } from "./NavbarItems";

export type PhosphorIconName = keyof Omit<
  typeof import("@phosphor-icons/react/dist/ssr"),
  "SSRBase"
>;

export type NavItem = {
  icon: PhosphorIconName;
  label: string;
  href: string;
  subItems?: NavItem[];
};

export type Technology = {
  icon: string;
  text: string;
};

export type Portfolio = {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: Technology[];
  liveLink: string;
  category: string;
};

export type NavItems = typeof navItems;