import { videoFiles } from "../constants";
import Green_Underline from "../constants/Green_Underline";

const Project_scenes = () => {
  return (
    <div>
      {/* Training Section */}
      <section className="bg-[#2a2727] text-gray-400 mt-8">
        <div className="max-w-7xl px-4 py-16 text-center mb-6 mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-4 text-gray-500 font-bold">
            Training <span className="text-[#19673B]">Moments</span>
          </h2>
          <Green_Underline />
          <p className="text-center mb-10 mt-4 m-auto max-w-2xl">
            From pre-production to final cut, we support creative teams with
            technical expertise, crew, and infrastructure.
          </p>

          <div className="mt-8 grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {videoFiles.map((src, index) => (
              <video
                key={index}
                className="w-full h-48 object-cover rounded-lg shadow-md"
                controls
                preload="metadata"
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
console.log("Video sources:", videoFiles);

export default Project_scenes;
