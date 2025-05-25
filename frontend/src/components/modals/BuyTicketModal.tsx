import type { FC } from 'react';

interface BuyTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventDetails: {
    title: string;
    description: string;
    image: string;
  };
}

const BuyTicketModal: FC<BuyTicketModalProps> = ({ isOpen, onClose, eventDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-xl">
        {/* Header with close button */}
        <div className="flex justify-between items-center p-4 border-b">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Event Details */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{eventDetails.title}</h2>
          <p className="text-gray-600 mb-6">{eventDetails.description}</p>
          
          {/* Event Image */}
          <img src={eventDetails.image} alt={eventDetails.title} className="w-full rounded-lg mb-6" />

          {/* Ticket Price */}
          <div className="bg-gray-100 p-3 rounded-lg text-center mb-6">
            <span className="text-xl font-bold">$100 PER TICKET</span>
          </div>

          {/* Ticket Quantity */}
          <div className="mb-6">
            <input
              type="number"
              placeholder="Enter number of Ticket"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Bulk Tickets */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">For Bulk Tickets click here</p>
            <div className="grid grid-cols-3 gap-3">
              {Array(3).fill(null).map((_, index) => (
                <button key={index} className="bg-black text-white text-sm py-2 px-3 rounded-lg hover:bg-gray-800">
                  3 TICKETS FOR $1000
                </button>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Choose Payment Mode</h3>
            <div className="space-y-3">
              <button className="w-full p-3 border rounded-lg flex items-center gap-2 hover:bg-gray-50">
                <img src="/icons/stripe.svg" alt="Stripe" className="h-6" />
                <span>Pay with Stripe</span>
              </button>
              <button className="w-full p-3 border rounded-lg flex items-center gap-2 hover:bg-gray-50">
                <img src="/icons/mobile-money.svg" alt="Mobile Money" className="h-6" />
                <span>Pay with Mobile Money</span>
              </button>
              <button className="w-full p-3 border rounded-lg flex items-center gap-2 hover:bg-gray-50">
                <img src="/icons/paypal.svg" alt="PayPal" className="h-6" />
                <span>Pay with PayPal</span>
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-6">
            <h3 className="font-medium mb-3">Name & Contact Information</h3>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Number / Email address"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyTicketModal;