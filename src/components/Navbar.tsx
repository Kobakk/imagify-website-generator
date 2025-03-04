
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-playfair text-2xl">
              MDINNNA
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white mb-1.5 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink href="/about" isActive={location.pathname === '/about'}>SOBRE MI</NavLink>
            <NavLink href="/collections" isActive={location.pathname === '/collections'}>COLECCIONES</NavLink>
            <NavLink href="/shop" isActive={location.pathname === '/shop'}>TIENDA</NavLink>
            <NavLink href="/portfolio" isActive={location.pathname === '/portfolio'}>PORTAFOLIO</NavLink>
            <NavLink href="/services" isActive={location.pathname === '/services'}>SERVICIOS</NavLink>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/about" isActive={location.pathname === '/about'}>SOBRE MI</MobileNavLink>
            <MobileNavLink href="/collections" isActive={location.pathname === '/collections'}>COLECCIONES</MobileNavLink>
            <MobileNavLink href="/shop" isActive={location.pathname === '/shop'}>TIENDA</MobileNavLink>
            <MobileNavLink href="/portfolio" isActive={location.pathname === '/portfolio'}>PORTAFOLIO</MobileNavLink>
            <MobileNavLink href="/services" isActive={location.pathname === '/services'}>SERVICIOS</MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, isActive = false }: { href: string; children: React.ReactNode; isActive?: boolean }) => (
  <Link
    to={href}
    className={`px-3 py-2 text-sm font-inter tracking-wider transition-colors duration-200 ${
      isActive ? 'text-white' : 'text-gray-300 hover:text-white'
    }`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, children, isActive = false }: { href: string; children: React.ReactNode; isActive?: boolean }) => (
  <Link
    to={href}
    className={`block px-3 py-2 text-base font-inter tracking-wider ${
      isActive ? 'text-white' : 'text-gray-300 hover:text-white'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
