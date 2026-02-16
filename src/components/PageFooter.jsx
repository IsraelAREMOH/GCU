import { MessageSquare, ArrowUp } from "Lucide-react";
import { useState } from "react";
import ContactModal from "../constants/ContactModal";

const PageFooter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <footer className="relative bg-gradient-to-b from-[#02066f] to-[#0f1220] text-white">
        {/* MAIN CONTENT */}
        <div className="max-w-7xl mx-auto px-6 py-14 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
            {/* LOGO + TAGLINE */}
            <div className="text-center md:text-left">
              <img
                src="/images/SiteLogo.png"
                alt="Oyster Consulting"
                className="h-20 mb-3 mx-auto md:mx-0"
              />
              <p className="text-xl font-bold tracking-widest text-gray-300 uppercase">
                GCU Trading Enterprise Ltd
              </p>
            </div>

            {/* ADDRESS */}
            <div className="text-sm text-gray-300 leading-relaxed text-center md:text-left">
              <p>
                AIA Tower, Avenida Commercial de Macau 251, Macau. Hong Kong
              </p>
              <p className="mt-1">
                GCU Trading Enterprise LLC © 2025 |
                <span className="hover:underline cursor-pointer">
                  Alright Reserved
                </span>
              </p>
            </div>
          </div>

          {/* FOOTER-AFFIXED ACTION BUTTONS */}
          <div className="absolute right-0 top-0 -translate-y-1/2 flex flex-col gap-3">
            <button
              onClick={openModal}
              className=" flex items-center gap-2 bg-[#2b2f6f] px-4 py-2 rounded shadow hover:bg-[#3b3f8f] transition"
            >
              <MessageSquare size={16} />
              <span className="text-sm whitespace-nowrap">Get In Touch</span>
            </button>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 bg-[#2b2f6f] px-4 py-2 rounded shadow hover:bg-[#3b3f8f] transition"
            >
              <ArrowUp size={16} />
              <span className="text-sm whitespace-nowrap">Scroll Up</span>
            </button>
          </div>
        </div>

        {/* DIVIDER LINE */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </footer>
      {isModalOpen && <ContactModal onClose={closeModal} />}
    </>
  );
};

export default PageFooter;
