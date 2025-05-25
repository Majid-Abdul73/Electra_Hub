import type { FC } from 'react';
import { useState } from 'react';

interface BuyVoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  voteDetails: {
    title: string;
    description: string;
    price: number;
    image: string;
  };
}

const BuyVoteModal: FC<BuyVoteModalProps> = ({ isOpen, onClose, voteDetails }) => {
  const [quantity, setQuantity] = useState('');
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md overflow-y-auto max-h-[90vh]">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ×
          </button>
          <h2 className="text-2xl font-bold p-4">{voteDetails.title}</h2>
          <p className="px-4 text-gray-600">{voteDetails.description}</p>
        </div>

        <div className="p-4">
          <img src={voteDetails.image} alt={voteDetails.title} className="w-full h-48 object-cover rounded-lg mb-4" />
          
          <div className="text-xl font-bold mb-4">${voteDetails.price} PER VOTE</div>
          
          <input
            type="number"
            placeholder="Enter number of Votes"
            className="w-full p-2 border rounded-lg mb-4"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <div className="mb-4">
            <p className="text-sm mb-2">For Bulk Votes click here</p>
            <div className="grid grid-cols-1 gap-2">
              <button className="bg-black text-white rounded-full py-2">100 VOTES FOR $1000</button>
              <button className="bg-black text-white rounded-full py-2">100 VOTES FOR $1000</button>
              <button className="bg-black text-white rounded-full py-2">100 VOTES FOR $1000</button>
            </div>
          </div>

          <div className="mb-4">
            <p className="font-semibold mb-2">Choose Payment Mode</p>
            <div className="space-y-2">
              <button className="w-full p-2 border rounded-lg flex items-center gap-2">
                <img src="/stripe-logo.png" alt="Stripe" className="h-6" />
                Pay with Stripe
              </button>
              <button className="w-full p-2 border rounded-lg flex items-center gap-2">
                <img src="/mobile-money-logo.png" alt="Mobile Money" className="h-6" />
                Pay with Mobile Money
              </button>
              <button className="w-full p-2 border rounded-lg flex items-center gap-2">
                <img src="/paypal-logo.png" alt="PayPal" className="h-6" />
                Pay with PayPal
              </button>
            </div>
          </div>

          <div className="mb-4">
            <p className="font-semibold mb-2">Name & Contact Information</p>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded-lg mb-2"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Number / Email address"
              className="w-full p-2 border rounded-lg"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold">
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyVoteModal;