import Service_courseSection from "../../components/Service_courseSection";
import Service_TainingSection from "../../components/Service_TainingSection";
import OutlookCard from "../../components/OutLookCard";

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 px-6">
      <Service_TainingSection />
      <Service_courseSection />
      <OutlookCard />
    </div>
  );
};

export default Service;
