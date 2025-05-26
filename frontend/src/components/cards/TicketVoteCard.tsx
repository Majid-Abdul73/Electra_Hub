import type { FC } from 'react';
import { useState } from 'react';

interface TicketVoteCardProps {
  event: {
    title: string;
    image: string;
    date: string;
    time: string;
    venue: string;
    location: string;
    ticketPrice: number;
    originalPrice?: number;
  };
  onBuyTicket: () => void;
  onBuyVote: () => void;
}

const TicketVoteCard: FC<TicketVoteCardProps> = ({ event, onBuyTicket, onBuyVote }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      {/* Event Image with Share Button */}
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-64 object-cover"
        />
        <button 
          className="absolute top-4 right-4 bg-teal-600 text-white rounded-full p-2 w-8 h-8 flex items-center justify-center"
          aria-label="Share"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
        </button>
      </div>
      
      {/* Event Details */}
      <div className="p-4">
        {/* Title and Bookmark */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{event.title}</h3>
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="text-gray-400 hover:text-yellow-500"
          >
            {isFavorite ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Date and Time */}
        <div className="flex items-center text-gray-500 text-sm mb-1">
          <span>{event.date}</span>
          <span className="mx-1">•</span>
          <span>{event.time}</span>
        </div>
        
        {/* Venue and Location */}
        <div className="text-gray-500 text-sm mb-4">
          <div>{event.venue}</div>
          <div>{event.location}</div>
        </div>
        
        {/* Rating Stars */}
        <div className="flex mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        {/* Price and Action Buttons */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-xl font-bold">${event.ticketPrice}</span>
            {event.originalPrice && (
              <span className="text-gray-400 line-through ml-2">${event.originalPrice}</span>
            )}
          </div>
          
          <div className="flex space-x-2">
            <button 
              onClick={onBuyTicket}
              className="bg-black text-white text-xs px-3 py-2 rounded-full font-medium"
            >
              BUY A TICKET
            </button>
            <button 
              onClick={onBuyVote}
              className="bg-black text-white text-xs px-3 py-2 rounded-full font-medium"
            >
              BUY A VOTE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketVoteCard;