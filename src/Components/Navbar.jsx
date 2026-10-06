import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black-200">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          MyPortfolio
        </Link>

        {/* Navigation */}
        <div className="flex gap-6 text-gray-700 font-medium">

          <Link
            to="/home"
            className="hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/projects"
            className="hover:text-blue-600 transition duration-300"
          >
            Project
          </Link>

          <Link
            to="/contact"
            className="hover:text-blue-600 transition duration-300"
          >
            Contact
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;