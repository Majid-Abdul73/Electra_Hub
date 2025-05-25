import type { FC } from 'react';

interface CongratsModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'vote' | 'ticket';
}

const CongratsModal: FC<CongratsModalProps> = ({ isOpen, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-sm p-8 text-center">
        <h2 className="text-3xl font-semibold mb-2">Congratulations</h2>
        <p className="text-xl mb-4">
          {type.charAt(0).toUpperCase() + type.slice(1)} Purchased
        </p>
      </div>
    </div>
  );
};

export default CongratsModal;