// RatingPopup.tsx
import React, { useState } from 'react';

interface RatingPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (rating: number) => void;
}

const RatingPopup: React.FC<RatingPopupProps> = ({ isOpen, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleSubmit = () => {
    if (rating > 0) {
      onSubmit(rating);
      onClose(); // Close the pop-up after submitting
    } else {
      alert('Please select a rating before submitting.'); // Simple validation
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Rate Product</h2>
        <div className="flex space-x-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRatingChange(star)}
              className={`text-2xl ${rating >= star ? 'text-yellow-500' : 'text-gray-400'}`}
            >
              ★
            </button>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit Rating
        </button>
        <button
          onClick={onClose}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 ml-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RatingPopup;
