import type { FC } from 'react';

interface BuyTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventDetails: {
    title: string;
    price: number;
    date: string;
  };
}

const BuyTicketModal: FC<BuyTicketModalProps> = ({ isOpen, onClose, eventDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{eventDetails.title}</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Price:</span>
            <span className="font-semibold">${eventDetails.price}</span>
          </div>
          <div className="flex justify-between">
            <span>Date:</span>
            <span>{eventDetails.date}</span>
          </div>
          <div className="flex gap-4 mt-6">
            <button 
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
            >
              Cancel
            </button>
            <button 
              className="flex-1 px-4 py-2 bg-black text-white rounded-md"
            >
              Confirm Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTicketModal;