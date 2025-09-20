import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    "Home",
    "Services",
    "Products",
    "Cases",
    "Reviews",
    "Process",
    "FAQ",
    "Contact",
  ];

  return (
    <nav className="font-jetbrains fixed top-0 left-0 w-full bg-black text-green-400 px-6 py-4 flex items-center justify-between shadow-lg z-50">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-widest cursor-pointer">
        TROR.AI
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-8 mx-auto">
        {navItems.map((item) => (
          <Link
            key={item}
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className="cursor-pointer text-sm transition-colors duration-300 hover:text-white"
          >
            [{item.toUpperCase()}]
          </Link>
        ))}
      </div>

      {/* Mobile Burger */}
      <button
        className="md:hidden text-green-400 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-6 py-6 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="cursor-pointer text-lg transition-colors duration-300 hover:text-white"
              onClick={() => setIsOpen(false)} // close after click
            >
              [{item.toUpperCase()}]
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
