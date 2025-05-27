import type { FC } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TicketCard from '../cards/TicketCard';

interface TicketingEventProps {
  title?: string;
  showTitle?: boolean;
}

const TicketingEvent: FC<TicketingEventProps> = ({ 
  title = "Ticketing Events", 
  showTitle = true 
}) => {
  const navigate = useNavigate();
  const [events] = useState([
    {
      title: "The Beast Concert",
      image: "/images/beast.jpg",
      date: "12th December, 2024",
      time: "16:00GMT",
      venue: "National Event Centre",
      location: "Greater Accra, Lakeside",
      price: "$120"
    },
    {
        title: "The Beast Concert",
        image: "/images/beast.jpg",
        date: "12th December, 2024",
        time: "16:00GMT",
        venue: "National Event Centre",
        location: "Greater Accra, Lakeside",
        price: "$120"
      },
      {
        title: "The Beast Concert",
        image: "/images/beast.jpg",
        date: "12th December, 2024",
        time: "16:00GMT",
        venue: "National Event Centre",
        location: "Greater Accra, Lakeside",
        price: "$120"
      },
      {
        title: "The Beast Concert",
        image: "/images/beast.jpg",
        date: "12th December, 2024",
        time: "16:00GMT",
        venue: "National Event Centre",
        location: "Greater Accra, Lakeside",
        price: "$120"
      }
  ]);

  const handleBuyTicket = () => {
    console.log('Buy ticket button clicked');
    // You can implement modal opening logic here
  };

  const handleSeeAllEvents = () => {
    navigate('/ticket');
  };

  return (
    <div className="w-[750px]">
      {showTitle && (
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mx-auto">
        {events.map((event, index) => (
          <TicketCard 
            key={index}
            event={event}
            onBuyTicket={handleBuyTicket}
          />
        ))}
      </div>

      <div className='flex justify-between py-9 '>
        <img src="/icons/arrow.svg" alt="" className='w-14 h-8'/>
        <button 
          onClick={handleSeeAllEvents}
          className='text-white bg-black px-4 py-3 rounded-3xl '
        >
          See Events
        </button>
      </div>
    </div>
  );
};

export default TicketingEvent;