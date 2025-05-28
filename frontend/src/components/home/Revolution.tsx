import type { FC } from 'react';
import { Link } from 'react-router-dom';

const Revolution: FC = () => {
  return (
    <div className="py-20 bg-white p-8">
      <div className="max-w-7xl rounded-3xl p-10 mx-auto bg-[#F2F2F2] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between mb-16 px-10">
          <h2 className="text-6xl font-semibold mb-4">Revolutionizing <br /> Convenience.</h2>
          <p className="text-gray-600 max-w-xl">
            A seamless platform for ticketing, e-voting, and ride booking, <br /> enhanced by AI-powered tools and integrated <br /> payment options. It offers USSD ticketing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 px-10">
          {/* Voting Section */}
          <div className="bg-white p-16 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-bold mb-4">Voting</h3>
            <p className="text-gray-600 mb-6">
              Empowering communities to participate in decision-making with ease and security.
            </p>
            <ul className="space-y- mb-6">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-black"></span>
                <span>Secure Voting</span>
              </li>
              <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-black"></span>
                <span>Accessible <br /> Anywhere</span>
              </li>
              <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-black"></span>
                <span>Real-time Results</span>
              </li>
            </ul>
            <Link to="/vote" className="bg-black flex items-center text-white px-6 py-2 rounded-full gap-4 hover:bg-gray-800 transition-colors">
              <img src="/icons/vote.svg" alt="Vote icon" className="w-5 h-5" />
              Once off Voting
            </Link>
          </div>

          {/* Ticketing Section */}
          <div className="bg-black text-white p-16 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-bold mb-4">Ticketing</h3>
            <p className="text-[#606060] mb-6">
              Your gateway to hassle-free <br /> event access.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white"></span>
                <span>Event Discovery</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white"></span>
                <span>Instant Bookings</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white"></span>
                <span>Digital Wallet</span>
              </li>
            </ul>
            <Link to="/ticket" className="flex items-center bg-white text-black px-6 py-2 gap-4 rounded-full hover:bg-gray-100 transition-colors">
              <img src="/icons/tick.svg" alt="Ticket icon" className="w-5 h-5" />
              Once off ticketing
            </Link>

            {/* <Link to="/tick" className="flex">
            <img src="/icons/tick.svg" alt="Ticket icon" className="w-5 h-5" />
            </Link> */}
            
          </div>          
        </div>


         {/* Ride Section */}
         <div className='bg-white mt-10 px-2 justify-center grid grid-cols-2 rounded-2xl shadow-sm max-w-6xl mx-auto'>
          <div className='flex'>
          <div className="flex flex-col items-center">
            <div className="p-8 rounded-2xl shadow-sm">
              <div className="items-start mb-4">
                <span className="text-sm mb-4 text-gray-500">Optional</span>
                <h3 className="text-2xl font-bold">Ride</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Reliable transportation, wherever <br /> you need to go.
              </p>
              <ul className="mb-6">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-black"></span>
                  <span>Quick Bookings</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-black"></span>
                  <span>Affordable Rates</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-black"></span>
                  <span>Safety First</span>
                </li>
              </ul>
            </div>
            </div>
            <div className='my-auto ml-auto'>
              <img src="/icons/arrow.svg" alt="Arrow" className="w-28 h-24" />
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <img src="/images/car.png" alt="Car illustration" className="w-3/4 h-auto" />
          </div>
        </div>

        
      </div>
      <div className="text-center mt-16 bg-white">
          <h2 className="text-6xl font-semibold mb-10">Revolutionizing <br /> Convenience.</h2>
          <p className="text-gray-600 text-sm max-w-3xl mx-auto">
            Electra is your ultimate companion for a connected and convenient lifestyle. Designed to <br /> empower users with secure voting, seamless ticketing, and reliable rides, we are <br /> committed to making everyday tasks simpler. Whether you're expressing your choice, <br /> exploring events, or moving around, Electra has got you covered.
          </p>
        </div>
    </div>
  );
};

export default Revolution;