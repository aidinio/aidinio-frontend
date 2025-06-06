import MobileHeading from "@/components/custom/MobileHeading";
import PortfolioCategoryList from "@/ui/portfolio/PortfolioCategoryList";
import PortfolioList from "@/ui/portfolio/PortfolioList";

export default function Page({}) {
  return (
    <div className="w-full h-fit sm:bg-white rounded-[50px] mt-[8rem] sm:p-[4.5rem] box-border relative sm:shadow-default max-w-[2100px]">
      <div className="flex flex-col sm:flex-row gap-10">
        <MobileHeading title="Portfolio" />
        <PortfolioCategoryList />
      </div>
      <div className="flex items-center justify-center">
        <PortfolioList />
      </div>
    </div>
  );
}
