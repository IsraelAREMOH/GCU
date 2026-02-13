import boxmodel from "../assets/boxmodel.jpg";
import sterling from "../assets/sterling.jpg";
import lds from "../assets/lds.jpg";
import Awoof from "../assets/Awoof.jpg";

const Project_BrandSection = () => {
  return (
    <div>
      <section className="text-center mt-8 mb-8 border-b border-neutral-700/80 py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="underline underline-offset-1 text-3xl text-gray-500 font-semibold mb-12">
            Brands We Have Worked With
          </h2>
          <div className="flex justify-center gap-16 flex-wrap">
            <img src={boxmodel} alt="Box Models" className="h-12" />
            <img src={sterling} alt="LDS" className="h-12" />
            <img src={lds} alt="Sterling" className="h-12" />
            <img src={Awoof} alt="Awoof" className="h-12" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project_BrandSection;
