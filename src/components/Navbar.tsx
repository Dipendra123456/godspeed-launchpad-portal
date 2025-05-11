
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Product', href: '#product' },
    { name: 'Team', href: '#team' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-primary">
          <span className={scrolled ? 'text-primary' : 'text-white'}>Godspeed</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`font-medium hover:text-blue-600 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            className={`${scrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
