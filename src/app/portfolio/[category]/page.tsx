import { PortfolioPage } from "../page";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = await params.then((data) => decodeURIComponent(data.category));
  return <PortfolioPage categoryTitle={decodeURIComponent(category)} />;
}
