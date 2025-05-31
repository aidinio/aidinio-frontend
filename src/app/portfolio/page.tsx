import PortfolioCategoryList from "@/ui/portfolio/PortfolioCategoryList";
import PortfolioList from "@/ui/portfolio/PortfolioList";

export default function Page({}) {
  return (
    <div className="w-full h-fit bg-white rounded-[50px] p-[75px] box-border relative shadow-default max-w-[2100px]">
    <div className="flex gap-10">
      <h1 className="text-[4rem] font-black">Portfolio</h1>
      <PortfolioCategoryList />
    </div>
    <div className="flex items-center justify-center">
      <PortfolioList />
    </div>
  </div>);
}
