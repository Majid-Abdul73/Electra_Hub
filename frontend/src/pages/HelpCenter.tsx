import type { FC } from 'react';

const HelpCenter: FC = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Help Center</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="p-4 rounded-lg bg-gray-50">
                <summary className="font-medium cursor-pointer">
                  How do I purchase tickets?
                </summary>
                <p className="mt-2 text-gray-600">
                  You can purchase tickets by browsing events and clicking on the "Buy Ticket" button. Follow the checkout process to complete your purchase.
                </p>
              </details>
              
              <details className="p-4 rounded-lg bg-gray-50">
                <summary className="font-medium cursor-pointer">
                  How does voting work?
                </summary>
                <p className="mt-2 text-gray-600">
                  Our secure voting system allows you to cast your vote for your preferred candidate. Each vote is encrypted and recorded on our platform.
                </p>
              </details>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full px-3 py-2 border rounded-md"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className="mt-1 block w-full px-3 py-2 border rounded-md"
                  rows={4}
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;