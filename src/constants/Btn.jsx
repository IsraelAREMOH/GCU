import { useState } from "react";
import Contact_FormSection from "../components/Contact_FormSection";

function Btn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <button
        onClick={openModal}
        className="
    group inline-flex items-center
    rounded-full p-[2px]
    bg-gradient-to-r from-orange-400 via-blue-900 to-green-400
    transition-transform duration-300
    hover:scale-[1.03]
  "
      >
        <span
          className="
      flex items-center gap-3
      rounded-full
      bg-black px-6 py-3
      text-white text-sm font-medium
      transition-colors duration-300
      group-hover:bg-neutral-900
    "
        >
          Connect with us
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-lg relative transition duration-300 ease-in-out transform scale-95">
            {/* Import and render your form component here */}
            <Contact_FormSection />

            <button
              onClick={closeModal}
              className="mt-6 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Btn;
