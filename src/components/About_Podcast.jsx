import PHOTO_33 from "../assets/PHOTO_33.jpg";
import PHOTO_19 from "../assets/PHOTO_19.jpg";
import PHOTO_20 from "../assets/PHOTO_20.jpg";
import PHOTO_36 from "../assets/PHOTO_36.jpg";
import famous from "../assets/famous.jpg";
import jenny from "../assets/jenny.jpg";

const About_Podcast = () => {
  return (
    <div>
      <div className="min-h-screen bg-[#1e1e1e] text-white p-6 flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 mt-8">
          <div className="max-w-7xl w-full grid grid-cols-[1fr_0.6fr] gap-2">
            {/* Image 1 */}
            <img
              src={PHOTO_19}
              alt="Image 1"
              className="w-full h-40 object-cover rounded-br rounded-tl"
            />

            {/* Image 2 - Tall narrow */}
            <img
              src={PHOTO_20}
              alt="Image 2"
              className="w-full h-full object-cover rounded-br rounded-tr row-span-2"
            />

            {/* Image 3 - Focal */}
            <img
              src={PHOTO_33}
              alt="Image 3"
              className="w-full h-64 object-cover rounded-br"
            />

            {/* Bottom Row - Img 4 & Img 5 in a nested grid */}
            <div className="col-span-2 grid grid-cols-[0.4fr_1.6fr] gap-2">
              <img
                src={famous}
                alt="Image 4"
                className="w-full h-40 items-center object-cover rounded-bl"
              />
              <img
                src={PHOTO_36}
                alt="Image 5"
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Podcast Studio</h2>
            <p className="mb-4 text-gray-300">
              Step into a space where voices come alive and ideas echo far
              beyond the room. Our podcast studio is built for creators who
              demand quality — whether you're recording an intimate
              conversation, hosting a panel, or launching a full audio series.
              With industry-grade microphones, acoustic treatment, and a
              controlled recording environment, we offer a professional sound
              experience tailored to your style. But it’s more than just the
              gear — it’s the atmosphere. We provide a creative, comfortable
              space that helps you focus, flow, and engage your audience.
            </p>
            <p className="mb-4 text-gray-300">
              Whether you’re an influencer, storyteller, coach, or a creative
              brand, we support every stage of your production journey — from
              setup and scripting to recording and post-editing. Here, your
              voice doesn’t just get heard — it makes an impact.
            </p>

            <button className="bg-[#F66304] hover:bg-[#19673B] text-white font-semibold py-2 px-4 rounded w-fit">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_Podcast;
