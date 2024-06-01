import { useState } from "react";
import logo from "../assets/calidad-del-aire.png";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { link: "Inicio", path: "/" },
    { link: "Informacion del proyeto", path: "/infoProyecto" },
    { link: "Recursos", path: "/recursos" },
    { link: "Validacion", path: "/validacion" },
  ];
  return (
    <>
      <nav className="bg-white md:px-0 p-2 max-w-screen-2xl mx-auto text-primario   ">
        <div className=" text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-12  items-center">
            <a className="text-2xl font-semibold flex items-center space-x-3">
              <Link to="/">
                <img
                  src={logo}
                  alt=""
                  className="w-20 inline-block items-center"
                />
                <span>Calidad del aire</span>
              </Link>
            </a>
          </div>
          <div className="space-x-12 hidden md:flex items-center">
            <ul className="md:flex space-x-12 hidden ">
              {navItems.map(({ link, path }) => (
                <Link to={`${path}`}>{link}</Link>
              ))}
            </ul>

            <button className="bg-secundario py-2 px-4 transition-all duration-300 rounded-lg hover:text-white hover:bg-indigo-500">
              <Link to="/registrar">Registrarse</Link>
            </button>
            <button className="bg-white border-secundario border-2 py-2 px-4 transition-all duration-300 rounded-lg hover:text-white hover:bg-indigo-500">
              <Link to="/login">Login</Link>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className=" text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primario" />
              ) : (
                <FaBars className="w-6 h-6 text-primario" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`space-y-4 px-4 pt-32 pb-5 bg-secundario ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <a
            key={link}
            href={path}
            className="block hover:text-gray-300 text-lg"
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
