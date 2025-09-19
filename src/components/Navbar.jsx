
import { Link } from "react-scroll";

export default function Navbar() {
  const navItems = ["Home", "Services", "Products", "Cases", "Reviews", "Process", "FAQ", "Contact"];

  return (
    <nav className="font-jetbrains fixed top-0 left-0 w-full bg-black text-green-400 px-8 py-4 flex items-center shadow-lg z-50">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-widest cursor-pointer">
        TROR.AI
      </div>

      {/* Nav Links */}
      <div className="flex space-x-8 mx-auto">
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
    </nav>
  );
}
