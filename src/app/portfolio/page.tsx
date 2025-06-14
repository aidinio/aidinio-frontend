import MobileHeading from "@/components/custom/MobileHeading";
import PortfolioCategoryList from "@/ui/portfolio/PortfolioCategoryList";
import PortfolioList from "@/ui/portfolio/PortfolioList";

export default function Page() {
  return (
    <div className="w-full h-fit sm:bg-white rounded-[50px] mt-[8rem] sm:p-[4.5rem] box-border relative sm:shadow-default max-w-[2100px]">
      <div className="flex flex-wrap flex-col sm:flex-row mb-10 xl:mb-0">
        <MobileHeading title="Portfolio" />
        <PortfolioCategoryList />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-[4rem]">
        <PortfolioList />
        <PortfolioList />
      </div>
    </div>
  );
}
