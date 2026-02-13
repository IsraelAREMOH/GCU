import BtnCenter from "./BtnCenter";
import Green_Underline from "../constants/Green_Underline";

const Project_TrainingSec = () => {
  return (
    <div>
      <section className="bg-white text-[#3A3737]">
        <div className="max-w-7xl px-4 py-16 text-center mx-auto">
          <h1 className="text-gray-400 font-semibold md:text-4xl">
            Training & <span className="text-[#19673B]">Consultation</span>
          </h1>
          <Green_Underline />
          <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto mb-10">
            Practical, creative training built for modern storytellers. Learn
            from professionals, gain hands-on experience, and level up your
            craft in a space that inspires growth.
          </p>
          <div className="w-full h-[500px] aspect-video flex justify-center">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/jPoHgzTeL8s?si=ufrGPEqVaZfmluEb"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <BtnCenter />
        </div>
      </section>
    </div>
  );
};

export default Project_TrainingSec;
