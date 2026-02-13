import { motion, useInView } from "framer-motion";

import Lighting from "../assets/Lighting.jpg";
import close from "../assets/close.jpg";
import PHOTO_6 from "../assets/PHOTO_6.jpg";
import PHOTO_36 from "../assets/PHOTO_36.jpg";
import PHOTO_20 from "../assets/PHOTO_20.jpg";
import { useRef } from "react";
import { Link } from "react-router-dom";

const About_filmaking = () => {
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: true, margin: "-100px" });

  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true, margin: "-100px" });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div>
      <section className="min-h-screen p-6 bg-white flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Text Section */}
          <motion.div
            ref={textRef}
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isTextInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex text-3xl items-center mb-4">
              <h1 className="mb-4 font-semibold text-gray-600">
                Film Making & Editing
              </h1>
            </div>
            <p className="text-lg text-gray-600 mb-4">
              At GM Lawason Studios, we tell stories that stick — stories that
              move people, spark conversations, and leave lasting impressions.
              Our filmmaking process is driven by purpose and powered by
              creativity, with each project approached like a cinematic mission.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              From concept to script, from camera roll to final color grade, we
              deliver fully crafted video experiences. Whether it's a short
              film, commercial, music video, documentary, or branded content,
              our team brings a director's eye and an editor's precision to
              every frame.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              In post-production, our editors weave the visuals, sound, rhythm,
              and emotion into a seamless narrative.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              This is where vision meets execution, and where raw footage
              becomes unforgettable film.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#19673B] hover:bg-emerald-400 transition-colors duration-300 text-white font-semibold py-2 px-4 rounded w-fit"
            >
              <Link to="/contact">CONTACT US</Link>
            </motion.button>
          </motion.div>

          {/* Image Grid Section */}
          <motion.div
            ref={gridRef}
            className="grid grid-cols-3 grid-rows-3 gap-2 p-4 max-w-5xl mx-auto h-[700px]"
            initial="hidden"
            animate={isGridInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[
              {
                src: PHOTO_6,
                alt: "Clapperboard",
                className: "col-span-2 row-span-1",
              },
              {
                src: Lighting,
                alt: "Camera Operator",
                className: "col-start-3 row-span-2",
              },
              {
                src: PHOTO_20,
                alt: "Camera Sunset",
                className: "col-start-1 row-start-2 row-span-2",
              },
              {
                src: close,
                alt: "Editing Screen",
                className: "col-start-2 row-start-2",
              },
              {
                src: PHOTO_36,
                alt: "Cinema Camera",
                className: "col-start-2 row-start-3 col-span-2",
              },
            ].map(({ src, alt, className }, index) => (
              <motion.img
                key={index}
                src={src}
                alt={alt}
                className={`${className} rounded-xl object-cover w-full h-full`}
                variants={imageVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About_filmaking;
{
  /**
    
    
    
   <div className="min-h-screen bg-gray-200 p-6 flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Sidebar 
          <div className="flex flex-col justify-center">
            <div className="flex text-3xl items-center mb-4">
              <h1 className="mb-4 font-semibold text-gray-300">
                Film Making & Editing
              </h1>
            </div>
            <p className="text-lg text-gray-600 mb-4">
              At Om Lawason Studios, we tell stories that stick — stories that
              move people, spark conversations, and leave lasting impressions.
              Our filmmaking process is driven by purpose and powered by
              creativity, with each project approached like a cinematic mission.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              From concept to script, from camera roll to final color grade, we
              deliver fully crafted video experiences. Whether it’s a short
              film, commercial, music video, documentary, or branded content,
              our team brings a director’s eye and an editor’s precision to
              every frame.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              In post-production, our editors weave the visuals, sound, rhythm,
              and emotion into a seamless narrative.
            </p>
            <p className="text-lg text-grayy-600 mb-4">
              This is where vision meets execution, and where raw footage
              becomes unforgettable film.
            </p>
            <button className="bg-emerald-800 hover:bg-emrald-300 text-white font-semibold py-2 px-4 rounded w-fit">
              Contact Us
            </button>
          </div>

          {/* Right Image Collage 
          <div class="grid h-full w-full grid-cols-4 mx-auto p-4 max-w-6xl grid-rows-4 gap-2">
            {/* Row 1 
            <img
              src={jenny}
              alt="Img1"
              className="w-full h-full object-cover row-span-1 col-span-2 rounded-xl"
            />
            <img
              src={ose}
              alt="Img2"
              className="w-full h-full col-start-4 row-span-2 object-cover rounded-xl"
            />
            {/* Row 2 
            <img
              src={wifey}
              alt="Img3"
              className="w-full h-full object-cover col-span-1 row-span-2 row-start-3 col-start-1 rounded-xl"
            />
            {/* Row 3 

            <img
              src={jenny}
              alt="Image 4"
              className="w-full h-full col-start-2 row-start-2 col-span-2 row-span-1 object-cover rounded-xl"
            />
            <img
              src={ose}
              alt="Image 5"
              className="w-full h-full col-start-3 row-start-4 object-cover col-span-2 rounded-xl"
            />
          </div>
        </div>
      </div> 
    
    
    



      <div className="max-w-7xl w-full grid grid-cols-[1fr_0.6fr] gap-4">
        
        {/* Image 1 
        <img
          src="/images/img1.jpg"
          alt="Image 1"
          className="w-full h-40 object-cover rounded-lg"
        />

        {/* Image 2 - Tall narrow *
        <img
          src="/images/img2.jpg"
          alt="Image 2"
          className="w-full h-full object-cover rounded-lg row-span-2"
        />

        {/* Image 3 - Focal *
        <img
          src="/images/img3.jpg"
          alt="Image 3"
          className="w-full h-64 object-cover rounded-lg"
        />

        {/* Bottom Row - Img 4 & Img 5 in a nested grid *
        <div className="col-span-2 grid grid-cols-[0.4fr_1.6fr] gap-4">
          <img
            src="/images/img4.jpg"
            alt="Image 4"
            className="w-full h-40 object-cover rounded-lg"
          />
          <img
            src="/images/img5.jpg"
            alt="Image 5"
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
      </div>
    
    */
}
