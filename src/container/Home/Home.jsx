import AboutUsSection from "../../components/AboutUsSection";
import Service from "../../components/service";
import CardGreen from "../../components/cardGreen";
import TestimonialCard from "../../components/testimonialCard";

const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6">
        <AboutUsSection />
        <Service />
        <CardGreen />
        <TestimonialCard />
      </div>
    </>
  );
};

export default Home;
