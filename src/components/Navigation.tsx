import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CrabLogo from './CrabLogo';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Juegos', href: '#juegos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Comunidad', href: '#comunidad' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-900/90 backdrop-blur-md border-b border-orange-500/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a 
              href="#inicio" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#inicio'); }}
              className="flex items-center gap-3 group"
            >
              <CrabLogo size={40} animated />
              <span className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                CrabCode
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="text-gray-300 hover:text-orange-400 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#comunidad"
                onClick={(e) => { e.preventDefault(); scrollToSection('#comunidad'); }}
                className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white font-medium hover:opacity-90 transition-opacity glow-orange"
              >
                Únete
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-16 left-0 right-0 bg-gray-900 border-b border-orange-500/20 p-4 transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-gray-300 hover:text-orange-400 transition-colors font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#comunidad"
              onClick={(e) => { e.preventDefault(); scrollToSection('#comunidad'); }}
              className="mt-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white font-medium text-center glow-orange"
            >
              Únete a la comunidad
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
