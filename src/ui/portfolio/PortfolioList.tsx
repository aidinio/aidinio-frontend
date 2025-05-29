import { getPortfolios } from "@/lib/client";
import FilteredPortfolioList from "./FilteredPortfolioList";

export default async function PortfolioList() {
  const { data: portfolios } = await getPortfolios();
  return <FilteredPortfolioList portfolios={portfolios} />;
}
