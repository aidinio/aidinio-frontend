import { portfolios } from "@/data/Portfolio";
import Portfolio from "../../../../ui/portfolio/portfolioItem/PortfolioItem";

export default async function Page({ params }: { params: Promise<{itemId: string}>}) {
  const { itemId } = await params;
  const data = portfolios.find(portfolio => String(portfolio.id) == itemId)
  if (!data) return <h1>Portfolio not found!</h1>
  return <Portfolio data={data}/>
}
