import type { FC } from 'react';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Menu: FC<MenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed inset-y-0 left-0 w-full bg-white p-8 overflow-y-auto min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-normal">Menu</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            <MenuLink number="01" title="Discover" description="Vote seamlessly, book tickets effortlessly, and enjoy affordable rides all in one app" />
            <MenuLink number="02" title="Find Events" description="Vote seamlessly, book tickets effortlessly, and enjoy affordable rides all in one app" isDark />
            <MenuLink number="03" title="Marketplace" description="Vote seamlessly, book tickets effortlessly, and enjoy affordable rides all in one app" />
            <MenuLink number="04" title="Help Center" description="Vote seamlessly, book tickets effortlessly, and enjoy affordable rides all in one app" isDark />
          </div>
        </div>
      </div>
    </div>
  );
};

interface MenuLinkProps {
  number: string;
  title: string;
  description: string;
  isDark?: boolean;
}

const MenuLink: FC<MenuLinkProps> = ({ number, title, description, isDark = false }) => {
  return (
    <a 
      href="#" 
      className={`block p-8 rounded-3xl transition-transform hover:scale-[0.98] ${
        isDark ? 'bg-black text-white' : 'bg-gray-100'
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <span className="text-6xl font-light opacity-50">{number}</span>
          <h3 className="text-4xl mt-4 mb-2">{title}</h3>
          <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {description}
          </p>
        </div>
        <svg 
          className={`w-8 h-8 mt-2 transform rotate-45 ${isDark ? 'text-white' : 'text-black'}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
        </svg>
      </div>
    </a>
  );
};

export default Menu;