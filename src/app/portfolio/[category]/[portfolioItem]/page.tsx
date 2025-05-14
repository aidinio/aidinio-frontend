import { navItems } from "@/app/data/NavbarItems";

export default function Page({
  params,
}: {
  params: { category: string; portfolioItem: string };
}) {
  const { category, portfolioItem } = params;
  console.log(category, portfolioItem);
  return (
    <h1>
      Portfolio Item {category} {portfolioItem}{" "}
      {
        navItems
          .find((item) => item.label === "portfolio")
          ?.subItems?.find((item) => item.label === category)
          ?.subItems?.find((item) => item.label === portfolioItem)?.label
      }
    </h1>
  );
}
