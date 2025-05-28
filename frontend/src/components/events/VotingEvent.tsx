import type { FC } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VoteCard from '../cards/VoteCard';

interface VotingEventProps {
  title?: string;
  showTitle?: boolean;
}

// Export the events array so it can be imported in other components
export const votingEvents = [
  {
    id: "vote-1",
    title: "Miss Malaika",
    image: "/images/malaika.jpg",
    date: "12th December, 2024",
    time: "16:00GMT",
    venue: "National Event Centre",
    location: "Greater Accra, Lakeside"
  },
  {
    id: "vote-2",
    title: "Miss Malaika",
    image: "/images/malaika.jpg",
    date: "12th December, 2024",
    time: "16:00GMT",
    venue: "National Event Centre",
    location: "Greater Accra, Lakeside"
  },
  {
    id: "vote-3",
    title: "Miss Malaika",
    image: "/images/malaika.jpg",
    date: "12th December, 2024",
    time: "16:00GMT",
    venue: "National Event Centre",
    location: "Greater Accra, Lakeside"
  },
  {
    id: "vote-4",
    title: "Miss Malaika",
    image: "/images/malaika.jpg",
    date: "12th December, 2024",
    time: "16:00GMT",
    venue: "National Event Centre",
    location: "Greater Accra, Lakeside"
  }
];

const VotingEvent: FC<VotingEventProps> = ({ 
  title = "Voting Events", 
  showTitle = true 
}) => {
  const navigate = useNavigate();
  // Use the exported events array
  const [events] = useState(votingEvents);

  const handleVote = () => {
    console.log('Vote button clicked');
    // You can implement modal opening logic here
  };

  const handleSeeAllEvents = () => {
    navigate('/vote');
  };

  return (
    <div className="w-[750px]">
      {showTitle && (
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mx-auto">
        {events.map((event, index) => (
          <VoteCard 
            key={index}
            event={event}
            onVote={handleVote}
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

export default VotingEvent;