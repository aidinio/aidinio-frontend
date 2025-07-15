import TitledCardList from "@/components/custom/TitledCardList/TitledCardList";
import PortfolioCategoryList from "@/ui/portfolio/PortfolioCategoryList";
import PortfolioList from "@/ui/portfolio/PortfolioList";

export default function Page() {
  return (
    <TitledCardList title="Portfolio" Categories={<PortfolioCategoryList />} Cards={<PortfolioList />} />
  );
}
