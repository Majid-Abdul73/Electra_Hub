import type { FC } from 'react';

interface RideBookingProps {
  onBook: (details: {
    pickup: string;
    destination: string;
    date: string;
    passengers: number;
  }) => void;
}

const RideBooking: FC<RideBookingProps> = ({ onBook }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Book a Ride</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pickup Location
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border rounded-md"
            placeholder="Enter pickup location"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Destination
          </label>
          <input
            type="text"
            className="mt-1 block w-full px-3 py-2 border rounded-md"
            placeholder="Enter destination"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              className="mt-1 block w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Passengers
            </label>
            <input
              type="number"
              min="1"
              className="mt-1 block w-full px-3 py-2 border rounded-md"
              defaultValue="1"
            />
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default RideBooking;