import type { FC } from 'react';
import VoteCard from '../components/cards/VoteCard';

const Marketplace: FC = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Marketplace</h1>
          <div className="flex gap-4">
            <select className="px-4 py-2 border rounded-md">
              <option>All Categories</option>
              <option>Votes</option>
              <option>Tickets</option>
              <option>Rides</option>
            </select>
            <button className="bg-black text-white px-4 py-2 rounded-md">
              Create Listing
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Marketplace items will be rendered here */}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;