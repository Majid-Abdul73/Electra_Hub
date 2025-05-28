import type { FC } from 'react';
import { Link } from 'react-router-dom';

// Props interface for the Menu component
interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Main Menu component that displays a full-screen navigation menu
const Menu: FC<MenuProps> = ({ isOpen, onClose }) => {
  // Don't render anything if menu is closed
  if (!isOpen) return null;

  return (
    // Overlay background with semi-transparent black
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      {/* // Main menu container with white background */}
      <div className="fixed inset-y-0 left-0 w-full bg-white p-8 overflow-y-auto min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* // Header section with title and close button */}
          <div className="flex justify-between items-center mb-8 z-50">
            <h2 className="text-4xl font-normal">Menu</h2>
            <button 
              onClick={onClose}
              className=""
            >
              <img src="/icons/close.svg" alt="" className='w-12 h-12'/>
            </button>
          </div>

          {/* // Navigation links container */}
          <div className="space-y-1">
            <MenuLink number="/icons/01.svg" title="Discover" description="Vote seamlessly, book tickets effortlessly, and enjoy affordable rides all in one app" to="/" onClose={onClose} />
            <MenuLink number="/icons/02.svg" title="Find Events" description="Vote seamlessly, book tickets effortlessly, and enjoy affordable rides all in one app" isDark to="/events" onClose={onClose} />
            <MenuLink number="/icons/03.svg" title="Marketplace" description="Vote seamlessly, book tickets effortlessly, and enjoy affordable rides all in one app" to="/marketplace" onClose={onClose} />
            <MenuLink number="/icons/04.svg" title="Help Center" description="Vote seamlessly, book tickets effortlessly, and enjoy affordable rides all in one app" isDark to="/help" onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Props interface for individual menu links
interface MenuLinkProps {
  number: string;      
  title: string;     
  description: string; 
  isDark?: boolean;   
  to: string;         
  onClose: () => void;
}

// MenuLink component for individual navigation items
const MenuLink: FC<MenuLinkProps> = ({ number, title, description, isDark = false, to, onClose }) => {
  return (
    // Link container with conditional styling based on isDark prop
    <Link 
      to={to} 
      onClick={onClose}
      className={`block p-8 rounded-3xl transition-transform hover:scale-[0.998] ${
        isDark ? 'bg-black text-white' : 'bg-[#F5F5F5]'
      }`}
    >
      <div className="flex items-center justify-between px-10">
          {/* Number and content layout */}
          <div className='flex items-center gap-8'>
            <div>
              <img src={number} alt="" className="w-32 h-32 opacity-50" />
            </div>
            <div>
              <h3 className="text-6xl mt-4 mb-2">{title}</h3>
              <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {description}
              </p>
            </div>
          </div>

          <div className='flex'>
            {/* Arrow icon */}
            <img src="/icons/menu.arrow.svg" alt="" className='w-20 h-16'/>
          </div>
      </div>
    </Link>
  );
};

export default Menu;