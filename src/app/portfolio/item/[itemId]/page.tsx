import { portfolios } from "@/app/data/Portfolio";
import Portfolio from "./SinglePortfolio";

export default async function Page({ params }: { params: Promise<{itemId: string}>}) {
  const { itemId } = await params;
  const data = portfolios.find(portfolio => String(portfolio.id) == itemId)
  return <Portfolio data={data}/>
}
