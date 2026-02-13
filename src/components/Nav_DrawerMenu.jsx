import { motion as Motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { X } from "Lucide-react";

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
            className="fixed inset-0 bg-black z-40"
          />

          {/* Drawer Panel */}
          <Motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-3/4 sm:w-2/5 bg-black/90 text-white z-50 p-8 shadow-lg"
          >
            <div className="flex justify-end">
              <button onClick={onClose} aria-label="Close Menu">
                <X size={24} />
              </button>
            </div>

            <ul className="mt-8 space-y-6 text-lg">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.href}
                    onClick={onClose}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <NavLink
                to="/contact"
                className="block bg-gradient-to-r from-[#19673B] to-green-600 py-2 px-4 rounded-md text-center"
                onClick={onClose}
              >
                Contact Us
              </NavLink>
            </div>

            <p className="mt-6 text-sm text-center">8219358649</p>
          </Motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Nav_DrawerMenu;
