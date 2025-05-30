import { getPortfolioCategories, getPortfolios } from "@/lib/client";
import type { NavItem } from "@/types/navbar";

const { data: portfolioCategories } = await getPortfolioCategories();
const { data: portfolios } = await getPortfolios();

export const navItems: NavItem[] = [
  { icon: "House", label: "Home", href: "/" },
  {
    icon: "Cube",
    label: "Portfolio",
    href: "/portfolio",
    subItems: portfolioCategories.map((category) => ({
      icon: "Folder",
      label: category.title,
      href: `/portfolio?category=${category.title}`,
      subItems: portfolios
        .filter((portfolio) => portfolio.category.id === category.id)
        .map((portfolio) => ({
          icon: "File",
          label: portfolio.title,
          href: `/portfolio/${portfolio.urlTitle}`,
        })),
    })),
  },
  { icon: "User", label: "About Me", href: "/about" },
  { icon: "Article", label: "Blog", href: "/blog" },
];
