import PHOTO_11 from "../assets/PHOTO_11.jpg";
import Green_Underline from "../constants/Green_Underline";
import { Link } from "react-router-dom";
import White_Underline from "../constants/White_Underline";

const CardGreen = () => {
  return (
    <div>
      <section className="bg-white py-12 px-4 md:px-12 lg:px-24 space-y-16">
        {/* Header */}
        <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-800">
          People <span className="text-[#19673b] font-semibold">We Serve</span>
        </h2>

        {/* Top Section */}
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-start">
          {/* Camera Image */}
          <div className="relative w-full lg:w-[40%] min-w-[280px]">
            <img
              src={PHOTO_11}
              alt="Camera"
              className="w-full rounded-md shadow-md"
            />
          </div>

          {/* Green Card */}
          <div className="relative z-10 -mt-10 lg:-ml-16 bg-[#19673b] text-white p-6 md:p-8 rounded-md shadow-xl w-full max-w-md">
            <p className="mb-4 text-sm leading-relaxed">
              We’re here for the dreamers, the doers, and the storytellers.
              Whether you're an independent creative, a brand, or a production
              team — we provide the tools, space, and expertise to help you
              shine.
            </p>
            <p className="text-sm font-semibold mb-1">We Serve:</p>

            <p className="text-sm mb-4 leading-relaxed">
              Photographers & Filmmakers, Content Creators & Influencers,
              Agencies & Brands, Musicians & Podcasters, Students & Educators in
              Media.
            </p>
            <p className="text-sm mb-4">
              Wherever you are in your creative journey, we meet you there.
            </p>
            <button className="bg-[#F66304] hover:bg-[#19673B] transition px-4 py-2 rounded text-sm">
              <Link to="/about">Discover More</Link>
            </button>
          </div>
          {/* Right Image <div className="w-full lg:w-1/3"> </div> */}
        </div>
      </section>
    </div>
  );
};

export default CardGreen;
