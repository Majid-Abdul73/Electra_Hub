import type { FC } from 'react';
import { useParams } from 'react-router-dom';

const Purchase: FC = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6">Complete Your Purchase</h1>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border rounded-md"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border rounded-md"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border rounded-md"
                  placeholder="123"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name on Card
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border rounded-md"
                placeholder="John Doe"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-900"
            >
              Complete Purchase
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;