import Service_courseSection from "../../components/Service_courseSection";
import Service_trainingTestimo from "../../components/Service_trainingTestimo";
import Service_TainingSection from "../../components/Service_TainingSection";

const Service = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 px-6">
      <Service_TainingSection />
      <Service_courseSection />
      <Service_trainingTestimo />
    </div>
  );
};

export default Service;
