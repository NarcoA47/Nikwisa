// components/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
  onRetry?: () => void; // Optional retry handler
}

const Modal: React.FC<ModalProps> = ({ isOpen, message, onClose, onRetry }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">{message}</h2>
        <div className="flex justify-end">
          {onRetry && (
            <button 
              className="mr-2 text-yellow-500 hover:underline" 
              onClick={onRetry}
            >
              Retry
            </button>
          )}
          <button 
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600" 
            onClick={onClose}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
