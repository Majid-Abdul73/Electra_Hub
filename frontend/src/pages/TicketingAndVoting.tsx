import type { FC } from 'react';
import EventFilter from '../components/filters/EventFilter';
import VotingEvent from '../components/events/VotingEvent';
import TicketingEvent from '../components/events/TicketingEvent';
import VoteAndTicketEvent from '../components/events/VoteAndTicketEvent';

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

            {/* Ticketing and Voting Events section */}
            <div className="bg-[#FAFAFA] p-10 rounded-lg shadow-sm">
              <h2 className="text-3xl font-semibold mb-4">Ticketing and Voting Events</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <VoteAndTicketEvent />
                {/* Voting event cards would go here */}
              </div>
            </div>

            {/* Voting Events section */}
            <div className="bg-[#F5F1E9] p-10 justify-between rounded-lg shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <VotingEvent />
              </div>
            </div>
            
            {/* Ticketing Events section */}
            <div className="bg-[#ECECEC] p-10 rounded-lg shadow-sm">
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