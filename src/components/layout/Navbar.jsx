import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // NEW: State to track if the page is scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // --- This useEffect for body scroll lock is unchanged ---
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // NEW: Effect to detect scroll and change navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Products', path: '/products' },
    { title: 'Services', path: '/services' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Reviews', path: '/reviews' },
    { title: 'Contact', path: '/contact' },
  ];

  const linkClasses = "block py-2 px-3 text-gray-700 rounded-lg hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0 transition-colors duration-200";
  const activeLinkClasses = "text-white bg-blue-600 lg:bg-transparent lg:text-blue-600 lg:font-semibold";

  return (
    // UPDATED: Added transition-shadow and conditional shadow-lg
    <nav className={`bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="container mx-auto flex flex-wrap items-center justify-between py-3">
        
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img 
            src="/assets/images/logo.png"
            className="h-16 w-auto" // UPDATED: h-15 is not a standard class, h-16 (4rem) is.
            alt="Shree Shai Enterprises Logo" 
          />
          <span className="self-center text-xl sm:text-3xl font-semibold whitespace-nowrap text-gray-800">
            Shree Shahi Ro System
          </span>
        </Link>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>

        {/* UPDATED: Added classes for smooth slide-down animation on mobile */}
        <div 
          className={`w-full lg:block lg:w-auto overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'} lg:max-h-none lg:overflow-visible`} 
          id="navbar-menu"
        >
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  // UPDATED: Added 'relative' and 'group' for the underline animation
                  className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''} relative group`}
                  end={link.path === '/'} 
                >
                  <p className='text-xl font-bold'> {link.title}</p>
                  {/* NEW: Animated underline for desktop hover */}
                  <span className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left hidden lg:block"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;