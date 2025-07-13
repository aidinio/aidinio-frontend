import { getPortfolios } from "@/lib/client";
import FilteredPortfolioList from "./FilteredPortfolioList";
import { Suspense } from "react";

export const revalidate = 60
export const dynamicParams = true

export default async function PortfolioList() {
  const { data: portfolios } = await getPortfolios();
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <FilteredPortfolioList portfolios={portfolios} />
    </Suspense>
  );
}
