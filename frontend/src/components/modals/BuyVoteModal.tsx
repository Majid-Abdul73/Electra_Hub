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
      {/* <div className="bg-white rounded-lg w-full max-w-md overflow-y-auto max-h-[90vh]"> */}
      <div className="bg-white rounded-lg w-full max-w-md overflow-y-auto max-h-[90vh] scrollbar-hide">

        <div className="relative">
          <button
            onClick={onClose}
            className="absolute w-20 top-4 right-4 text-2xl"
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
            <div className="flex gap-2 text-xs">
              <button className="bg-black text-white rounded-lg p-1">100 VOTES FOR $1000</button>
              <button className="bg-black text-white rounded-lg p-1">100 VOTES FOR $1000</button>
              <button className="bg-black text-white rounded-lg p-1">100 VOTES FOR $1000</button>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Choose Payment Mode</h3>
            <div className="space-y-3">
              <button className="w-full p-2 py-4 border rounded-lg flex items-center justify-between gap-2 hover:bg-gray-50">
                <div className='flex gap-2'>
                  <img src="/icons/stripe.svg" alt="Stripe" className="h-6" />
                  <span>Pay with Stripe</span>
                </div>
                <div className='w-4 h-4 bg-slate-200 rounded-full'> </div>
              </button>

              <button className="w-full p-2 py-4 border rounded-lg flex items-center justify-between gap-2 hover:bg-gray-50">
                <div className='flex gap-2'>
                  <img src="/icons/mtn.svg" alt="Mobile Money" className="h-6" />
                  <img src="/icons/telecel.svg" alt="Mobile Money" className="h-6" />
                  <img src="/icons/at.svg" alt="Mobile Money" className="h-6" />
                  <span>Pay with Mobile Money</span>
                </div>
                <div>
                  <div className='w-4 h-4 bg-slate-200 rounded-full'> </div>
                </div>
              </button>

              <button className="w-full p-2 py-4 border rounded-lg flex items-center justify-between gap-2 hover:bg-gray-50">
                <div className='flex gap-2'>
                  <img src="/icons/PayPal.svg" alt="PayPal" className="h-6" />
                  <span>Pay with PayPal</span>
                </div>
                <div className='w-4 h-4 bg-slate-200 rounded-full'> </div>
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