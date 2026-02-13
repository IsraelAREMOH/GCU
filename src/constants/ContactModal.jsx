import { X } from "Lucide-react";
import Contact_FormSection from "../components/Contact_FormSection";

const ContactModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL CARD */}
      <div className="relative bg-white w-full max-w-lg mx-4 rounded-lg shadow-xl z-10 max-h-[90vh] flex flex-col">
        {/* CLOSE BUTTON */}
        <div
          className="sticky top-0 bg-white z-20 flex items-start justify-between
                        px-6 py-4 border-b"
        >
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 mt-1"
          >
            <X size={20} />
          </button>

          {/* CONTENT */}
          <h3 className="text-2xl ml-4 font-serif text-blue-900">
            Get In Touch
          </h3>

          <p className="text-sm text-gray-600 mt-1">
            Fill in the form below and our team will get back to you.
          </p>
        </div>
        {/* FORM */}
        <div className="overflow-y-auto px-6 py-6">
          <Contact_FormSection />
        </div>
      </div>
    </div>
  );
};
export default ContactModal;
