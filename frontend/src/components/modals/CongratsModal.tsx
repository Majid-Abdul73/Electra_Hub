import type { FC } from 'react';

interface CongratsModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  type: 'vote' | 'ticket' | 'ride';
}

const CongratsModal: FC<CongratsModalProps> = ({ isOpen, onClose, message, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <svg 
            className="w-8 h-8 text-green-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-2">Congratulations!</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-black text-white py-2 rounded-md"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default CongratsModal;