import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/home' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'About us', path: '/about-us' },
  ];

  const isActive = (path: string) => location.pathname === path || (location.pathname === '/' && path === '/home');

  const handleSearchClick = () => {
    navigate('/search');
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#1c1c1c] h-[64px] flex items-center shadow-md">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white mr-4 hover:text-gray-300 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* Branded text logo added to top-left */}
          <Link to="/" className="flex items-center">
            <span className="text-white text-[19px] md:text-[20px] font-bold tracking-[0.1em] uppercase font-['Poppins']">
              SAI POORNA
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[15px] transition-all relative py-1 ${
                  isActive(link.path) 
                    ? 'text-white font-bold' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></span>
                )}
              </Link>
            ))}
          </div>
          <button 
            onClick={handleSearchClick}
            className="text-white hover:text-gray-300 transition-colors ml-4"
          >
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Search Icon */}
        <div className="md:hidden flex items-center">
           <button onClick={handleSearchClick}>
              <Search size={22} className="text-white" />
           </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-[#1c1c1c] border-t border-gray-800 md:hidden shadow-2xl">
          <ul className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-bold ${isActive(link.path) ? 'text-white underline underline-offset-8' : 'text-gray-400'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;