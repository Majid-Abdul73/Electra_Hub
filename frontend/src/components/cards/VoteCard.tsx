import type { FC } from 'react';

interface VoteCardProps {
  candidate: {
    name: string;
    image: string;
    position: string;
    votes: number;
  };
  onVote: () => void;
}

const VoteCard: FC<VoteCardProps> = ({ candidate, onVote }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img 
        src={candidate.image} 
        alt={candidate.name} 
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold">{candidate.name}</h3>
      <p className="text-gray-600 mb-2">{candidate.position}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          {candidate.votes} votes
        </span>
        <button 
          onClick={onVote}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Vote Now
        </button>
      </div>
    </div>
  );
};

export default VoteCard;