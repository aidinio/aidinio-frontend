import Portfolio from "@/ui/portfolio/portfolioItem/PortfolioItem";
import { getPortfolio } from "@/lib/client";

export default async function Page({ params }: { params: Promise<{urlTitle: string}>}) {
  const { urlTitle } = await params;
  const {data: portfolio} = await getPortfolio(urlTitle);
  if (!portfolio) return <h1>Portfolio not found!</h1>
  return <Portfolio data={portfolio}/>
}
