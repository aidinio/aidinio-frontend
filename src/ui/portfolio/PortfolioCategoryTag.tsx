"use client"

import TextTag from "@/components/custom/TextTag";
import { PortfolioCategory } from "@/types/backend";
import { useSearchParams } from "next/navigation";

export default function PortfolioCategoryTag({
  category,
}: {
  category: PortfolioCategory;
}) {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");
  return (
    <TextTag
      label={category.title}
      key={category.title}
      href={`/portfolio?category=${encodeURIComponent(category.title)}`}
      selected={selectedCategory === String(category.title)}
    />
  );
}
