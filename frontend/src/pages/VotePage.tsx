import type { FC } from 'react';
import EventFilter from '../components/filters/EventFilter';
import VotingEvent from '../components/events/VotingEvent';

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

            {/* Voting Events section */}
            <div className="bg-[#F5F1E9] p-12 justify-between rounded-lg shadow-sm">
            <div>
                  <h1 className='text-3xl font-semibold'>
                    Unforgettable Entertainment <br /> Experiences
                  </h1>
                  <p className='text-gray-400'>
                    Experience the Best in Music concerts, Parties and Arts
                  </p>
                </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <VotingEvent />
              </div>
            </div>
                       
          </div>
        </section>
      </div>
    </div>
  );
};

export default TicketingAndVoting;