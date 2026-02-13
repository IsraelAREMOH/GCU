import About_Podcast from "../../components/About_Podcast";
import About_filmaking from "../../components/About_filmaking";
import About_studioLighting from "../../components/About_studioLighting";
import About_ProductionSupport from "../../components/About_ProductionSupport";
import TestimonialCard from "../../components/testimonialCard";
import About_photoStudio from "../../components/About_photoStudio";
import About_TrainingConsultation from "../../components/About_TrainingConsultation";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 px-6">
      <About_photoStudio />
      <About_Podcast />
      <About_filmaking />
      <About_studioLighting />
      <About_ProductionSupport />
      <About_TrainingConsultation />
      <TestimonialCard />
    </div>
  );
};

export default About;
