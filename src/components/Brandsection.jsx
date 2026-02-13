//import sterling from "../assets/sterling.jpg";
//import boxmodel from "../assets/boxmodel.jpg";
//import Awoof from "../assets/Awoof.jpg";
//import lds from "../assets/lds.jpg";
import { NavLink } from "react-router-dom";
import navLogo from "../assets/navLogo.png";

const Brandsection = () => {
  return (
    <div>
      <section className="bg-white-100 text-white border-b border-neutral-700/80 text-center py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Contact and Navigation Section */}
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-4">
              <img
                src={navLogo}
                alt="GM Lawason"
                className=" items-center h-12 mr-2"
              />
            </div>
            <p className="text-gray-600 mb-4">
              Xpress House, Off Otumba Jobi Fele Way, Alausa Ikeja, Lagos State.
              <br />
              <a
                href="mailto:GMLawasonstudios@gmail.com"
                className="text-blue-500 hover:underline"
              >
                GMLawasonstudios@gmail.com
              </a>{" "}
              |{" "}
              <a
                href="tel:+2348055603608"
                className="text-green-500 hover:underline"
              >
                +234 805 5603 608
              </a>{" "}
              |{" "}
              <a
                href="https://instagram.com/GMLawasonstudios"
                className="text-blue-500 hover:underline"
              >
                @GMLawasonstudios
              </a>
            </p>
            <div className="flex justify-center gap-6 text-gray-700">
              <NavLink to="/about" className="hover:text-emerald-950">
                About Us
              </NavLink>
              <NavLink to="/services" className="hover:text-emerald-950">
                Our Services
              </NavLink>
              <NavLink to="/training" className="hover:text-emerald-950">
                Training
              </NavLink>
              <NavLink to="/projects" className="hover:text-emerald-950">
                Projects
              </NavLink>
              <NavLink to="/team" className="hover:text-emerald-950">
                Team
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brandsection;

{
  /*
 Brands Section 
<div className="text-center mb-8">
<h2 className="text-xl font-bold mb-6">
  Brands We Have Worked With
</h2>
<div className="flex justify-center gap-16 flex-wrap">
  {/* Replace with actual image sources *
  <img src={boxmodel} alt="Box Models" className="h-12" />
  <img src={sterling} alt="LDS" className="h-12" />
  <img src={lds} alt="Sterling" className="h-12" />
  <img src={Awoof} alt="Awoof" className="h-12" />
</div>
</div>
 */
}
