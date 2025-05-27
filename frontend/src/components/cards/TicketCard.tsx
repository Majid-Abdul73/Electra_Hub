import type { FC } from 'react';
import { useState } from 'react';

interface TicketCardProps {
  event: {
    title: string;
    image: string;
    date: string;
    time: string;
    venue: string;
    location: string;
    price: string;
  };
  onBuyTicket?: () => void;
}

const TicketCard: FC<TicketCardProps> = ({ event, onBuyTicket = () => {} }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm w-full max-w-sm">
      {/* Event Image */}
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-64 object-cover"
        />
        
        {/* Share Button */}
        <button 
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          aria-label="Share"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Bookmark */}
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-medium">{event.title}</h3>
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className={`${isFavorite ? 'text-black bg-white p-2 shadow-md rounded-full' : 'text-gray-300 bg-white p-2 shadow-md rounded-full'}`}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>
        
        {/* Date and Time */}
        <div className="text-gray-500 text-xs mb-1">
          <span>{event.date}</span>
          <span className="mx-1">•</span>
          <span>{event.time}</span>
        </div>
        
        {/* Venue and Location */}
        <div className="text-gray-500 text-xs mb-4">
          <div>{event.venue}</div>
          <div>{event.location}</div>
        </div>

        {/* Price and Rating */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-amber-400">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </div>
          <div className="text-xl font-bold">{event.price}</div>
        </div>
        
        {/* Buy Ticket Button */}
        <div className="mt-4">
          <button 
            onClick={onBuyTicket}
            className="w-full bg-black text-white py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2"
          >
            <span>BUY A TICKET</span>
            <img src="/icons/tick1.svg" alt="" className='h-4 w-6'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;