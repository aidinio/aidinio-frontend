import { NavbarItem } from "./NavbarClient";

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

const navItems: NavItem[] = [
  { icon: "House", label: "Home", href: "/" },
  {
    icon: "Cube",
    label: "Portfolio",
    href: "/portfolio",
    subItems: [
      {
        icon: "ProjectorScreen",
        label: "Frontend",
        href: "/portfolio/frontend",
        subItems: [
          {
            icon: "ProjectorScreen",
            label: "aidin.io",
            href: "/portfolio/frontend/aidin",
          },
          {
            icon: "ProjectorScreen",
            label: "i3wm.org",
            href: "/portfolio/frontend/i3wm",
          },
          {
            icon: "ProjectorScreen",
            label: "awesomewm.org",
            href: "/portfolio/frontend/awesomewm",
          },
          {
            icon: "ProjectorScreen",
            label: "hover",
            href: "/portfolio/frontend/hover",
          },
        ],
      },
      {
        icon: "Cube",
        label: "Personal",
        href: "/portfolio/personal",
        subItems: [
          {
            icon: "ProjectorScreen",
            label: "aidin.io",
            href: "/portfolio/personal/aidin",
          },
          {
            icon: "ProjectorScreen",
            label: "i3wm.org",
            href: "/portfolio/personal/i3wm",
          },
        ],
      },
      {
        icon: "Cube",
        label: "UI/UX",
        href: "/portfolio/uiux",
        subItems: [
          {
            icon: "ProjectorScreen",
            label: "aidin.io",
            href: "/portfolio/uiux/aidin",
          },
          {
            icon: "ProjectorScreen",
            label: "i3wm.org",
            href: "/portfolio/uiux/i3wm",
          },
        ],
      },
      {
        icon: "Cube",
        label: "Other",
        href: "/portfolio/other",
        subItems: [
          {
            icon: "ProjectorScreen",
            label: "aidin.io",
            href: "/portfolio/other/aidin",
          },
          {
            icon: "ProjectorScreen",
            label: "i3wm.org",
            href: "/portfolio/other/i3wm",
          },
        ],
      },
    ],
  },
  { icon: "User", label: "About Me", href: "/about" },
  { icon: "Article", label: "Blog", href: "/blog" },
];

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

export type navItems = typeof navItems;
