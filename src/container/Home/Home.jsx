import AboutUsSection from "../../components/AboutUsSection";
import Service from "../../components/service";
import CardGreen from "../../components/CardGreen";
import MarketInsights from "../../components/MarketInsights";
import InvestmentPhilosophy from "../../components/InvestmentPhilosophy";

const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6">
        <AboutUsSection />
        <Service />
        <CardGreen />
        <MarketInsights />
        <InvestmentPhilosophy />
      </div>
    </>
  );
};

export default Home;
