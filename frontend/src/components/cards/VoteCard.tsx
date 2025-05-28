import type { FC } from 'react';
import { useState } from 'react';
import { Link } from'react-router-dom';

interface VoteCardProps {
  event: {
    id: string;
    title: string;
    image: string;
    date: string;
    time: string;
    venue: string;
    location: string;
  };
  onVote: () => void;
}

const VoteCard: FC<VoteCardProps> = ({ event, onVote }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      {/* Event Image with Share Button */}
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-64 object-cover"
        />
        <button 
          className="absolute top-4 right-4 bg-gray-700 bg-opacity-70 text-white rounded-full p-2 w-8 h-8 flex items-center justify-center"
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
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-xl font-semibold">{event.title}</h3>
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
        <div className='text-gray500 text-xl mb-'>{event.venue}</div>
        <div className='text-gray-500 text-xs mb-4'>{event.location}</div>

        {/* Vote Button */}
        <div className="mt-4">
          <Link to={`/event/${event.id}`}
            onClick={onVote}
            className="flex w-full justify-center gap-4 bg-black text-white py-3 rounded-full font-medium text-sm"
          >
            BUY A VOTE
            <img src="/icons/vote1.svg" alt="" className='h-4 w-6'/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VoteCard;