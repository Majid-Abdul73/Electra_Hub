import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Subscribe to our newsletter</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="your@email.ru"
                className="w-full bg-neutral-900 px-4 py-3 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Info Links */}
          <div className="space-y-4">
            <h4 className="text-sm text-gray-400">INFO</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-secondary">About</a></li>
              <li><a href="/clientele" className="hover:text-secondary">Clientele</a></li>
              <li><a href="/blog" className="hover:text-secondary">Blog</a></li>
              <li><a href="/newsletter" className="hover:text-secondary">Newsletter</a></li>
              <li><a href="/testimonial" className="hover:text-secondary">Testimonial</a></li>
              <li><a href="/services" className="hover:text-secondary">Services</a></li>
            </ul>
          </div>

          {/* Additional Links */}
          <div className="space-y-4">
            <h4 className="text-sm text-gray-400">ADDITIONAL</h4>
            <ul className="space-y-2">
              <li><a href="/upcoming" className="hover:text-secondary">Upcoming</a></li>
              <li><a href="/trending" className="hover:text-secondary">Trending</a></li>
              <li><a href="/due-today" className="hover:text-secondary">Due Today</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div>
              <h4 className="text-sm text-gray-400">OFFICE HELPLINE</h4>
              <p>+233 24 031 2264</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-400">CUSTOMER SERVICE</h4>
              <p>+233 50 476 1407</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-400">EMAIL</h4>
              <p>info@electra.com</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-400">ADDRESS</h4>
              <p>North Legon, 27 Avenue Haatso, Accra.</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2024 — Copyright</p>
          <div className="flex gap-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://youtube.com" className="text-gray-400 hover:text-white">
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="flex gap-4">
            <button className="text-sm text-gray-400 hover:text-white">EN</button>
            <button className="text-sm text-gray-400 hover:text-white">SE</button>
            <button className="text-sm text-gray-400 hover:text-white">DE</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;