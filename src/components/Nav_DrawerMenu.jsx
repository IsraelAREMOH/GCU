import { motion as Motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

const Nav_DrawerMenu = ({ isOpen, onClose, navItems }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40"
          />

          {/* Drawer Panel */}
          <Motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-3/4 sm:w-2/5 bg-[#002366] text-white z-50 shadow-lg"
          >
            {/* Header */}
            <div className="flex justify-end p-5">
              <button onClick={onClose} aria-label="Close Menu">
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <ul
              className="
                w-full
                mt-2
                space-y-6
                text-lg
                bg-[#002366]
                backdrop-blur-md
                px-8 py-6
                shadow-lg
              "
            >
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.href}
                    onClick={onClose}
                    className="
                      block
                      text-white
                      font-medium
                      tracking-wide
                      hover:text-blue-400
                      transition-colors
                    "
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="p-8 mt-auto">
              <NavLink
                to="/contact"
                onClick={onClose}
                className="block bg-gradient-to-r from-[#02066f] to-[#002366] py-2 px-4 rounded-md text-center text-white font-medium"
              >
                Contact Us
              </NavLink>
            </div>
          </Motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Nav_DrawerMenu;
