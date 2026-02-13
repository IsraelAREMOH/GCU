import { team } from "../constants";
import Green_Underline from "../constants/Green_Underline";

const Contact_TeamSection = () => {
  return (
    <div>
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-500">
            The <span className="text-gray-400">passionate</span>{" "}
            <span className="text-[#19673b]">Team</span>
          </h2>
          <Green_Underline />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We’re a collective of passionate visual storytellers –
            photographers, filmmakers, editors, strategists, and creatives – all
            driven by the same mission: to tell bold, beautiful stories with
            heart and purpose.
          </p>
        </div>

        {/* Responsive fixed-width 3-column grid */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 max-w-[740px] mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-black w-[220px] rounded-2xl shadow-lg p-4 text-left transition-transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact_TeamSection;
