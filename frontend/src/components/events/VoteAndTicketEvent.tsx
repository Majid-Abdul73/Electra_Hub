import type { FC } from 'react';
import TicketVoteCard from '../cards/TicketVoteCard';

const VoteAndTicketEvent: FC = () => {
  // Dummy data for events
  const events = [
    {
      title: "Detty Rave 2025",
      image: "/images/detty-rave.jpg",
      date: "12th December, 2024",
      time: "16:00GMT",
      venue: "National Event Centre",
      location: "Greater Accra, Lakeside",
      ticketPrice: 120,
      originalPrice: 150
    },
    {
        title: "Detty Rave 2025",
        image: "/images/detty-rave.jpg",
        date: "12th December, 2024",
        time: "16:00GMT",
        venue: "National Event Centre",
        location: "Greater Accra, Lakeside",
        ticketPrice: 120,
        originalPrice: 150
      },
      {
        title: "Detty Rave 2025",
        image: "/images/detty-rave.jpg",
        date: "12th December, 2024",
        time: "16:00GMT",
        venue: "National Event Centre",
        location: "Greater Accra, Lakeside",
        ticketPrice: 120,
        originalPrice: 150
      },
      {
        title: "Detty Rave 2025",
        image: "/images/detty-rave.jpg",
        date: "12th December, 2024",
        time: "16:00GMT",
        venue: "National Event Centre",
        location: "Greater Accra, Lakeside",
        ticketPrice: 120,
        originalPrice: 150
      }
  ];

  const handleBuyTicket = () => {
    // Implement ticket purchase logic
    console.log('Buying ticket...');
  };

  const handleBuyVote = () => {
    // Implement vote purchase logic
    console.log('Buying vote...');
  };

  return (
    <div className="container mx-auto px-4 py-8 w-[750px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <TicketVoteCard
            key={index}
            event={event}
            onBuyTicket={handleBuyTicket}
            onBuyVote={handleBuyVote}
          />
        ))}
      </div>

      <div className='flex justify-between py-9 '>
        <img src="/icons/arrow.svg" alt="" className='w-14 h-8'/>
        <button className='text-white bg-black px-4 py-0 rounded-3xl '>See Events</button>
      </div>
    </div>
  );
};

export default VoteAndTicketEvent;