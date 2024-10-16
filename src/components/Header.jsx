import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavItem from "./navItem";
import Button from "./button";
import Modal from "./modalForm";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeDropdowns = () => {
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
  };

  const handleNavItemClick = () => {
    closeDropdowns();
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsMobileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/60 z-50">
      <nav className="container mx-auto flex items-center justify-between px-8 py-4">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/logoPixo.png"
              alt="Logo Pixo"
              className="w-14 h-8 sm:w-16 sm:h-9 lg:w-24 lg:h-12"
            />
          </Link>
        </div>

        <ul className="hidden md:flex items-center space-x-8 text-white font-bold uppercase">
          <NavItem label="Inicio" to="/" onClick={handleNavItemClick} />
          <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-white hover:text-blue-500 font-bold uppercase flex items-center"
          >
            PIXO IA
            <span className="ml-2">
              {isDropdownOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </span>
          </button>
          {isDropdownOpen && (
            <ul className="absolute w-60 top-full bg-black/60 text-white py-2 pr-4 space-y-2 uppercase z-50">
              <NavItem label="Marketing Digital" to="/services/marketing" onClick={handleNavItemClick} />
              <NavItem label="Desarrollo de Software" to="/services/software" onClick={handleNavItemClick} />
              <NavItem label="Inteligencia Artificial" to="/services/ai" onClick={handleNavItemClick} />
              <NavItem label="Diseño Gráfico" to="/services/disenografico" onClick={handleNavItemClick} />
              <NavItem label="Páginas Web" to="/services/paginaweb" onClick={handleNavItemClick} />
            </ul>
          )}
        </div>
        <NavItem label="Compañía" to="/company" onClick={handleNavItemClick} />
      </ul>

        <div className="hidden md:block">
          <Button
            className="bg-transparent border-2 border-white py-1 px-12 hover:bg-blue-500 hover:border-0"
            onClick={toggleModal}
          >
            COTIZA AHORA
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/60 text-white z-40" ref={mobileMenuRef}>
          <ul className="flex flex-col items-center uppercase">
            <NavItem label="Inicio" to="/" onClick={handleNavItemClick} />
            <li className="w-full">
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="w-full text-white hover:text-blue-500 py-2 px-4 flex justify-center items-center"
              >
                PIXO IA
                <span className="ml-2">
                  {isMobileDropdownOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              <ul className={`bg-black/70 text-white overflow-hidden transition-all duration-300 ease-in-out text-center ${
                isMobileDropdownOpen ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="py-3">
                  <NavItem className="border-b-2" label="Desarrollo de Software" to="/services/software" onClick={handleNavItemClick} />
                  <NavItem className="border-b-2" label="Marketing Digital" to="/services/marketing" onClick={handleNavItemClick} />
                  <NavItem className="border-b-2" label="Inteligencia Artificial" to="/services/ai" onClick={handleNavItemClick} />
                  <NavItem className="border-b-2" label="Diseño Gráfico" to="/services/disenografico" onClick={handleNavItemClick} />
                  <NavItem className="border-b-2" label="Páginas Web" to="/services/paginaweb" onClick={handleNavItemClick} />
                </div>
              </ul>
            </li>
            <NavItem label="Compañía" to="/company" onClick={handleNavItemClick} />
              <li className="py-2 px-4 w-full">
                <Button 
                  onClick={() => { toggleModal(); setIsMobileMenuOpen(false); }}
                  className="w-full bg-transparent border-2 border-white py-2 px-4 hover:bg-blue-500 hover:border-0"
                >
                  COTIZA AHORA
                </Button>
              </li>
            </ul>
          </div>
        )}

        {isModalOpen && <Modal isVisible={isModalOpen} onClose={toggleModal} />}
      </nav>
    </header>
  );
};

export default Header;