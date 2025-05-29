import { getPortfolioCategories } from "@/lib/client";
import PortfolioCategoryTag from "./PortfolioCategoryTag";

export default async function PortfolioCategoryList() {
  const { data: categories } = await getPortfolioCategories();
  return (
    <div className="flex items-center justify-center gap-5">
      {categories.map((category) => (
        <PortfolioCategoryTag key={category.id} category={category} />
      ))}
    </div>
  );
}
