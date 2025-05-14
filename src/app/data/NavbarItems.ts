import { NavItem } from "./types";
import { portfolioCategories, portfolios } from "./Portfolio";

export const navItems: NavItem[] = [
  { icon: "House", label: "Home", href: "/" },
  {
    icon: "Cube",
    label: "Portfolio",
    href: "/portfolio",
    subItems: [
      ...Object.keys(portfolioCategories).map((categoryName) => ({
        icon: portfolioCategories[categoryName].icon,
        label: portfolioCategories[categoryName].title,
        href: `/portfolio/category/${portfolioCategories[categoryName].title}`,
        subItems: portfolios
          .filter(
            (portfolio) =>
              portfolio.category === portfolioCategories[categoryName].title
          )
          .map((portfolio) => {
            console.log("[ ]", portfolio);
            return {
              icon: portfolioCategories[categoryName].icon,
              label: portfolio.title,
              href: `/portfolio/item/${portfolio.id}`,
            };
          }),
      })),
    ],
  },
  { icon: "User", label: "About Me", href: "/about" },
  { icon: "Article", label: "Blog", href: "/blog" },
];
