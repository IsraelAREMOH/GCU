import About_studioLighting from "../../components/About_studioLighting";
import About_ProductionSupport from "../../components/About_ProductionSupport";
import About_photoStudio from "../../components/About_photoStudio";
import About_TrainingConsultation from "../../components/About_TrainingConsultation";
import AboutHeroSec from "../../components/AboutHeroSec";
import ReplicaAbout from "../../components/ReplicaAbout";
import Charity from "../../components/Charity";

const About = () => {
  return (
    <>
      <AboutHeroSec />
      <div className="max-w-7xl mx-auto pt-10 px-6">
        <ReplicaAbout />
        <About_photoStudio />
        <About_TrainingConsultation />
        <About_ProductionSupport />
        <About_studioLighting />
        <Charity />
      </div>
    </>
  );
};

export default About;
