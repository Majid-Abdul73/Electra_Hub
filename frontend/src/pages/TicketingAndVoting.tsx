import type { FC } from 'react';
import EventFilter from '../components/filters/EventFilter';
import EventCard from '../components/cards/EventCard';

const TicketingAndVoting: FC = () => {
  // Sample event data - you can replace this with actual data from an API
  const events = [
    {
      title: 'Ethan Concert 2022',
      image: '/images/bhim.jpg',
    },
    {
      title: 'Ethan Concert 2022',
      image: '/images/bhim.jpg',
    },
    {
      title: 'Ethan Concert 2022',
      image: '/images/bhim.jpg',
    },
    {
      title: 'Ethan Concert 2022',
      image: '/images/bhim.jpg',
    },
  ];

  return (
    <div className="min-h-screen py- bg-white">
      <img src="/images/banner.jpg" alt="Banner" className="w-full h-80 object-cover mb-8" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <section className="flex flex-col md:flex-row gap-8">
          {/* Filter section - takes 1 column */}
          <div className="w-full  md:w-1/3">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <EventFilter />
            </div>
          </div>

          {/* Ticketing and voting events section - takes 2 columns */}
          <div className="w-full md:w-2/3 bg-gray-50 p-6">
          <h1 className="text-3xl font-bold mb-6">Ticketing and Voting Events</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <EventCard 
                  key={index}
                  title={event.title}
                  image={event.image}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TicketingAndVoting;