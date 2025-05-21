import type { FC } from 'react';
import { useState } from 'react';
import EventFilter from '../components/filters/EventFilter';

const TicketingAndVoting: FC = () => {
  const [activeTab, setActiveTab] = useState<'tickets' | 'voting'>('tickets');

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('tickets')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'tickets'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Tickets
            </button>
            <button
              onClick={() => setActiveTab('voting')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'voting'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Voting
            </button>
          </div>
          <EventFilter />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {activeTab === 'tickets' ? (
            // Event cards will be rendered here
            <div>Event Cards</div>
          ) : (
            // Vote cards will be rendered here
            <div>Vote Cards</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketingAndVoting;