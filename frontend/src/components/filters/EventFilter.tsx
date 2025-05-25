import type { FC } from 'react';
import { useState } from 'react';

interface FilterOptions {
  keyword: string;
  category: string;
  date: string;
  votingEvents: {
    free: boolean;
    paid: boolean;
  };
  ticketEvents: {
    free: boolean;
    paid: boolean;
  };
}

const EventFilter: FC = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    keyword: '',
    category: '',
    date: '',
    votingEvents: {
      free: false,
      paid: false
    },
    ticketEvents: {
      free: false,
      paid: false
    }
  });

  const handleInputChange = (key: 'keyword' | 'category' | 'date', value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleCheckboxChange = (eventType: 'votingEvents' | 'ticketEvents', option: 'free' | 'paid', checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      [eventType]: {
        ...prev[eventType],
        [option]: checked
      }
    }));
  };

  const clearInput = (key: 'keyword' | 'category' | 'date') => {
    setFilters(prev => ({
      ...prev,
      [key]: ''
    }));
  };

  return (
    <div className=" p-6 rounded-lg">
      {/* Keyword */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Keyword
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Placeholder"
            value={filters.keyword}
            onChange={(e) => handleInputChange('keyword', e.target.value)}
            className="pl-10 pr-10 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          {filters.keyword && (
            <button
              onClick={() => clearInput('keyword')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <svg className="h-5 w-5 text-gray-400 hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
        <div className="text-right text-xs text-gray-500 mt-1">99/99</div>
      </div>

      {/* Category */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Placeholder"
            value={filters.category}
            onChange={(e) => handleInputChange('category', e.target.value)}
            className="pl-10 pr-10 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <button
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Date */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Date
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Placeholder"
            value={filters.date}
            onChange={(e) => handleInputChange('date', e.target.value)}
            className="pl-10 py-2 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
      </div>

      {/* Voting Events */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Voting Events
        </label>
        <div className="space-y-2">
          <div className="relative flex items-center">
            <input
              id="free-voting"
              type="checkbox"
              checked={filters.votingEvents.free}
              onChange={(e) => handleCheckboxChange('votingEvents', 'free', e.target.checked)}
              className="h-5 w-5 text-black border-gray-300 rounded focus:ring-black"
            />
            <label htmlFor="free-voting" className="ml-3 block text-sm text-gray-700 w-full py-3 px-4 border border-gray-300 rounded-full">
              Free Voting
            </label>
          </div>
          <div className="relative flex items-center">
            <input
              id="paid-voting"
              type="checkbox"
              checked={filters.votingEvents.paid}
              onChange={(e) => handleCheckboxChange('votingEvents', 'paid', e.target.checked)}
              className="h-5 w-5 text-black border-gray-300 rounded focus:ring-black"
            />
            <label htmlFor="paid-voting" className="ml-3 block text-sm text-gray-700 w-full py-3 px-4 border border-gray-300 rounded-full">
              Paid Voting
            </label>
          </div>
        </div>
      </div>

      {/* Ticket Events */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ticket Events
        </label>
        <div className="space-y-2">
          <div className="relative flex items-center">
            <input
              id="free-event"
              type="checkbox"
              checked={filters.ticketEvents.free}
              onChange={(e) => handleCheckboxChange('ticketEvents', 'free', e.target.checked)}
              className="h-5 w-5 text-black border-gray-300 rounded focus:ring-black"
            />
            <label htmlFor="free-event" className="ml-3 block text-sm text-gray-700 w-full py-3 px-4 border border-gray-300 rounded-full">
              Free Event
            </label>
          </div>
          <div className="relative flex items-center">
            <input
              id="paid-events"
              type="checkbox"
              checked={filters.ticketEvents.paid}
              onChange={(e) => handleCheckboxChange('ticketEvents', 'paid', e.target.checked)}
              className="h-5 w-5 text-black border-gray-300 rounded focus:ring-black"
            />
            <label htmlFor="paid-events" className="ml-3 block text-sm text-gray-700 w-full py-3 px-4 border border-gray-300 rounded-full">
              Paid Events
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventFilter;