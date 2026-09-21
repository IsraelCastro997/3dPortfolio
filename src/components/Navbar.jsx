import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { site } from "../config/site";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 ${
        scrolled ? "bg-primary/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Israel Castro" width="36" height="36" className="w-9 h-9 object-contain" />
          <p className="text-white text-[17px] font-semibold cursor-pointer">
            {site.name}
            <span className="hidden sm:inline text-secondary font-medium"> · Full Stack</span>
          </p>
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-8">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[16px] font-medium`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <button
            type="button"
            className="p-2"
            aria-expanded={toggle}
            aria-controls="mobile-nav"
            aria-label={toggle ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setToggle((value) => !value)}
          >
            <img src={toggle ? close : menu} alt="" className="w-7 h-7 object-contain" />
          </button>

          <div
            id="mobile-nav"
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-xl`}
            hidden={!toggle}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    className={`font-medium text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
