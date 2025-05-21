import type { FC } from 'react';

const Revolution: FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex text-center justify-between mb-16">
          <h2 className="text-4xl font-bold mb-4">Revolutionizing <br /> Convenience.</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A seamless platform for ticketing, e-voting, and ride booking, enhanced by AI-powered tools and integrated payment options. It offers USSD ticketing
          </p>
        </div>

        <div className="grid md:grid-cols-2 py-10 justify-between lg:grid-cols-3 gap-8">
          {/* Voting Section */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Voting</h3>
            <p className="text-gray-600 mb-6">
              Empowering communities to participate in decision-making with ease and security.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Secure Voting</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Accessible Anywhere</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Real-time Results</span>
              </li>
            </ul>
            <button className="bg-black flex text-white px-6 py-2 rounded-full gap-4 hover:bg-primary-light transition-colors">
                <img src="/vote.svg" alt="" />
              Once off Voting
            </button>
          </div>

          {/* Ticketing Section */}
          <div className="bg-black text-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">Ticketing</h3>
            <p className="text-gray-300 mb-6">
              Your gateway to hassle-free event access.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Event Discovery</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Instant Bookings</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Digital Wallet</span>
              </li>
            </ul>
            <button className="flex bg-white text-black px-6 py-2 gap-4 rounded-full hover:bg-gray-100 transition-colors">
              <img src="/tick.svg" alt="" />
              Once off ticketing
            </button>
          </div>          
        </div>


        {/* Ride Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-">
            <div className=" bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">Ride</h3>
              <span className="text-sm text-gray-500">Optional</span>
            </div>
            <p className="text-gray-600 mb-6">
              Reliable transportation, wherever you need to go.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Quick Bookings</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Affordable Rates</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Safety First</span>
              </li>
            </ul>
          </div>
          <img src="/car.png" alt="Car illustration" className="w-full h-auto" />

        </div>

        
        

        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold mb-4">Revolutionizing <br /> Convenience.</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Electra is your ultimate companion for a connected and convenient lifestyle. Designed to empower users with secure voting, seamless ticketing, and reliable rides, we are committed to making everyday tasks simpler. Whether you're expressing your choice, exploring events, or moving around, Electra has got you covered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Revolution;