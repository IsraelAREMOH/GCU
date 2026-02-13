import { useState } from "react";
import Logo from "../assets/Logo.png";
import { navItems } from "../constants";
import { Menu } from "Lucide-react";
import { NavLink } from "react-router-dom";
import Nav_DrawerMenu from "./Nav_DrawerMenu";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-emerald-500 font-semibold border-b-2 border-emerald-500 pb-1"
      : "hover:text-emerald-500";
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img src={Logo} alt="Logo" className="h-12 w-auto mr-2" />
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex ml-10 space-x-10">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink className={getNavLinkClass} to={item.href}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-6">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "py-2 px-4 rounded-md bg-gradient-to-r from-[#19673B] to-emerald-600 text-white"
                  : "py-2 px-4 rounded-md bg-gradient-to-r from-[#19673B] to-green-600 text-white"
              }
            >
              CONTACT US
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Toggle Mobile Menu"
              className="text-white focus:outline-none"
            >
              <Menu size={24} className="text-[#2a2727]" />
            </button>
          </div>
        </div>
        {/* DrawerMenu Component */}
        <Nav_DrawerMenu
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          navItems={navItems}
        />
      </div>
    </nav>
  );
};

export default Navbar;
