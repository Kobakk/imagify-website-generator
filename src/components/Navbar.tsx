
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="/" className="text-white font-playfair text-2xl">
              MDINNNA
            </a>
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
            <NavLink href="/about">SOBRE MI</NavLink>
            <NavLink href="/collections">COLECCIONES</NavLink>
            <NavLink href="/shop">TIENDA</NavLink>
            <NavLink href="/portfolio">PORTAFOLIO</NavLink>
            <NavLink href="/services">SERVICIOS</NavLink>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/about">SOBRE MI</MobileNavLink>
            <MobileNavLink href="/collections">COLECCIONES</MobileNavLink>
            <MobileNavLink href="/shop">TIENDA</MobileNavLink>
            <MobileNavLink href="/portfolio">PORTAFOLIO</MobileNavLink>
            <MobileNavLink href="/services">SERVICIOS</MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-inter tracking-wider transition-colors duration-200"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white block px-3 py-2 text-base font-inter tracking-wider"
  >
    {children}
  </a>
);

export default Navbar;

