import { getPortfolioCategories } from "@/lib/client";
import PortfolioCategoryTag from "./PortfolioCategoryTag";

export default async function PortfolioCategoryList() {
  const { data: categories } = await getPortfolioCategories();
  return (
    <div className="flex grow flex-wrap items-center justify-center xl:justify-start gap-5">
      {categories.map((category) => (
        <PortfolioCategoryTag key={category.id} category={category} />
      ))}
    </div>
  );
}
