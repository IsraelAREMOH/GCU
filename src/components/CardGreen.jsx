import { Link } from "react-router-dom";
import FinancialWheel from "./FinancialWheel";

const CardGreen = () => {
  return (
    <div>
      <section className="bg-white py-12 px-4 md:px-12 lg:px-24 space-y-16">
        {/* Header */}
        <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-800">
          People <span className="text-[#02066F] font-semibold">We Serve</span>
        </h2>

        {/* Top Section  */}
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">
          {/* Left part: image + overlapping card*/}
          <div className="w-full lg:w-[55%] xl:w-[58%] min-w-[320px] shrink-0">
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center">
              {/* Camera Image */}
              <div className="relative w-full lg:w-[40%] min-w-[280px]">
                <img
                  src="images/GCU4.jpg"
                  alt="officeImage"
                  className="w-full rounded-md shadow-md"
                />
              </div>

              {/* blue Card */}
              <div
                className="relative z-10 -mt-10 lg:-ml-16 bg-[#0693E3] text-white p-6 md:p-8 rounded-md shadow-xl w-fullw-full lg:max-w-2xl
                 lg:mt-0
                 xl:-ml-20"
              >
                <p className="mb-4 text-sm leading-relaxed">
                  Over three decades of experience, deep-rooted relationships
                  with 1000+ private equity firms and the expertise gained from
                  managing one of the industry’s largest and most diverse
                  portfolios, translates to a strength in scale and sourcing
                  selectivity that is hard to match.
                </p>
                <p className="text-sm font-semibold mb-1">We Serve:</p>

                <p className="text-sm mb-4 leading-relaxed">
                  Demonstrated across market cycles, GCUs’ tenured credit
                  culture has remained consistent since our founding over 30
                  years ago.
                </p>
                <p className="text-sm mb-4">
                  GCU takes meaningful principal risk alongside our investors.
                  We actively seek opportunities within our asset class, with an
                  emphasis on capturing relative value.
                </p>
                <button className="bg-[#02066f] hover:bg-[#8ed1fc] transition px-4 py-2 rounded text-sm">
                  <Link to="/about">Discover More</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Right side FinancialWheel  */}
          <div className="w-full lg:w-[40%] flex justify-center">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
              <FinancialWheel />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardGreen;
