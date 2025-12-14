import React, { useState } from 'react';
import { Menu, X, Phone, Car } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-secondary/90 backdrop-blur-md text-white border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg">
              <Car className="h-8 w-8 text-white" />
            </div>
            <span className="font-bold text-2xl tracking-wide">اتو گالری <span className="text-primary">نوین</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline gap-8">
              <a href="#" className="hover:text-primary transition-colors px-3 py-2 rounded-md font-medium">صفحه اصلی</a>
              <a href="#inventory" className="hover:text-primary transition-colors px-3 py-2 rounded-md font-medium">محصولات</a>
              <a href="#brands" className="hover:text-primary transition-colors px-3 py-2 rounded-md font-medium">برندها</a>
              <a href="#about" className="hover:text-primary transition-colors px-3 py-2 rounded-md font-medium">درباره ما</a>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a href="tel:09123456789" className="bg-primary hover:bg-red-600 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 transition-transform transform hover:scale-105">
              <Phone size={18} />
              <span>تماس با ما</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">صفحه اصلی</a>
            <a href="#inventory" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">محصولات</a>
            <a href="#brands" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">برندها</a>
            <a href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">درباره ما</a>
            <a href="tel:09123456789" className="text-primary hover:text-red-400 block px-3 py-2 rounded-md text-base font-bold mt-4">
              ۰۹۱۲۳۴۵۶۷۸۹
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;