import { team } from "../constants";
import Green_Underline from "../constants/Green_Underline";

const Contact_TeamSection = () => {
  return (
    <div>
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-500">
            Meet Board <span className="text-gray-400">of</span>{" "}
            <span className="text-[#02066f]">Directors</span>
          </h2>
          <Green_Underline />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            The role of the GCU Enterprise Management Board is to act as a
            steward on behalf of the shareholders of the corporation. To fulfill
            this role, such board is responsible for setting out the overall
            strategic direction of the corporation and for engaging with
            management to oversee the activities of the corporation.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 max-w-[740px] mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#0B102A] w-[220px] rounded-2xl shadow-lg p-4 text-left transition-transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-sm text-blue-800">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact_TeamSection;
