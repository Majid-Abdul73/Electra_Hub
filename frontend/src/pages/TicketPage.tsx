import type { FC } from 'react';
import EventFilter from '../components/filters/EventFilter';
import TicketingEvent from '../components/events/TicketingEvent';
const TicketingAndVoting: FC = () => {

  return (
    <div className="min-h-screen py- bg-white">
      <img src="/images/banner.jpg" alt="Banner" className="w-full h-80 object-cover mb-8 -mt-16" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <section className="flex flex-col md:flex-row gap-8">
          {/* Filter section - takes 1 column */}
          <div className="w-full md:w-1/3">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <EventFilter />
            </div>
          </div>

          {/* Ticketing and Voting Events section - takes 2 columns */}
          <div className="w-full md:w-2/3 flex flex-col gap-8">

            {/* Ticketing Events section */}
            <div className="bg-[#ECECEC] p-12 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TicketingEvent />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TicketingAndVoting;