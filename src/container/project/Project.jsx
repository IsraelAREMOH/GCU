import Project_BrandSection from "../../components/Project_BrandSection";
import Project_MovieSec from "../../components/Project_MovieSec";
import Project_RentalMedia from "../../components/Project_RentalMedia";
import Project_scenes from "../../components/Project_scenes";
import Project_SupportSec from "../../components/Project_SupportSec";
import Project_TrainingSec from "../../components/Project_TrainingSec";

const Project = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 px-6">
      <Project_MovieSec />
      <Project_RentalMedia />
      <Project_SupportSec />
      <Project_TrainingSec />
      <Project_scenes />
      <Project_BrandSection />
    </div>
  );
};

export default Project;
