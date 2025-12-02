import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'О НАС', href: '#about' },
    { name: 'ЗАЛЫ', href: '#rooms' },
    { name: 'АПАРТАМЕНТЫ', href: '#apartments' },
    { name: 'КОНТАКТЫ', href: '#contacts' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-sauna-base/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <Logo className={`w-10 h-10 md:w-12 md:h-12 text-sauna-primary`} />
          <div className={`text-lg md:text-2xl font-display font-bold tracking-widest uppercase leading-tight text-white`}>
            БАНИ<span className="text-sauna-primary mx-2">НА</span><br className="md:hidden"/>МОСКОВСКОЙ
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-xs font-bold tracking-widest transition-colors text-white/80 hover:text-sauna-primary`}>
              {link.name}
            </a>
          ))}
          <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-2 bg-sauna-primary text-white px-4 py-2 hover:bg-sauna-primaryHover transition-all rounded text-xs font-bold tracking-wider shadow-lg shadow-sauna-primary/20">
            <Phone size={14} />
            <span>БРОНЬ</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="text-white md:hidden cursor-pointer hover:text-sauna-primary transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-sauna-base border-t border-sauna-primary/20 p-6 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold tracking-widest text-white hover:text-sauna-primary"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;