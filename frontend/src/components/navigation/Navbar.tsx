import type { FC } from 'react';
import { useState } from 'react';
import Menu from './Menu';

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex gap-6 items-center">
            <img src="/logo.svg" alt="Electra" className="h-6 w-auto" />
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="flex gap-2 text-gray-600 hover:text-gray-900"
            >
              Menu
              <img src="/menu.svg" alt="" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">Organizer</button>
          </div>

          <div className="flex-1 max-w-lg mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder=""
                className="w-full px-4 py-2 rounded-full bg-[#F5F5F5]"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <img src="/search.svg" alt="Search" className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="bg-[#EFEFEF] px-8 py-2 rounded-full hover:bg-gray-200 transition-colors">
              Create Event
            </button>
            <button className="flex gap-2 items-center text-gray-600 hover:text-gray-900 border border-black px-4 py-2 rounded-full">
              <img src="/auth.svg" alt="" className="w-5 h-5"/>
              Sign in / Sign Up
            </button>
          </div>
        </div>
      </div>

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
};

export default Navbar;