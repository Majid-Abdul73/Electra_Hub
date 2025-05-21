import type { FC } from 'react';

interface BuyVoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  voteDetails: {
    candidate: string;
    price: number;
    election: string;
  };
}

const BuyVoteModal: FC<BuyVoteModalProps> = ({ isOpen, onClose, voteDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Buy Vote Token</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Candidate:</span>
            <span className="font-semibold">{voteDetails.candidate}</span>
          </div>
          <div className="flex justify-between">
            <span>Election:</span>
            <span>{voteDetails.election}</span>
          </div>
          <div className="flex justify-between">
            <span>Price:</span>
            <span className="font-semibold">${voteDetails.price}</span>
          </div>
          <div className="flex gap-4 mt-6">
            <button 
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button 
              className="flex-1 px-4 py-2 bg-green-500 text-white rounded-md"
            >
              Buy Vote Token
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyVoteModal;