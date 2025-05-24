import type { FC } from 'react';

interface EventCardProps {
  title: string;
  image: string;
}

const EventCard: FC<EventCardProps> = ({ title, image }) => {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg w-full max-w-sm">
      {/* Event Image */}
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Share Button */}
      <button 
        className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        aria-label="Share"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
      </button>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-center">{title}</h3>
        <button className='flex items-center justify-between w-full bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors'>
          <span>VIEW CATEGORIES</span>
          <span className="text-xl bg-white text-black rounded-full p-1 items-center w-8 h-8">→</span>
        </button>
      </div>
    </div>
  );
};

export default EventCard;