import GCUBrandSection from "../../components/GCUBrandSection";
import Project_MovieSec from "../../components/Project_MovieSec";
import ClientGCU from "../../components/ClientGCU";
import Professionalservices from "../../components/Professionalservices";
import ClientService from "../../components/ClientService";

const Project = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 px-6">
      <ClientGCU />
      <Project_MovieSec />
      <Professionalservices />
      <ClientService />
      <GCUBrandSection />
    </div>
  );
};

export default Project;
