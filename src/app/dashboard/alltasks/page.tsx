"use client";
import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../reducers/store';
import { fetchTaskers } from '../../../reducers/taskersSlice'; // Assuming you have a slice for taskers
import Header from '@/app/components/dashboard/navigation';
import RatingPopup from '@/app/components/dashboard/rating';

const ViewTasks = () => {
  const dispatch = useDispatch<AppDispatch>();
  const role = useSelector((state: RootState) => state.auth.role);

  const { taskers, loading, error } = useSelector((state: RootState) => state.taskers) as {
    taskers: {
        image: string | undefined;
        rating: ReactNode;
        description: ReactNode; id: number; name: string; email: string; phone: string 
}[];
    loading: boolean;
    error: string | null;
  };

 // Get the user role from Redux state

  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [selectedTaskerId, setSelectedTaskerId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchTaskers()); // Fetch taskers when the component mounts
  }, [dispatch]);

  const handleRate = (id: number) => {
    setSelectedTaskerId(id); // Set the selected tasker ID
    setIsRatingOpen(true); // Open the rating pop-up
  };

  const handleRatingSubmit = (rating: number) => {
    // Implement the rate tasker functionality here, e.g., update the server or Redux state
    console.log(`Rated tasker with ID: ${selectedTaskerId}, Rating: ${rating}`);
    // Here you can dispatch an action or make an API call to submit the rating
  };

  return (
    <div className='flex h-screen font-sans bg-gray-100 rounded-lg shadow-lg p-4 md:p-8'>
      <Header />
      <div className="ml-[14rem] md:pt-[4rem] container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Taskers</h1>
        
        {loading && <p>Loading taskers...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.isArray(taskers) && taskers.length > 0 ? (
            taskers.map((tasker) => (
              <div key={tasker.id} className="border p-4 rounded-lg shadow-sm flex flex-col">
                <img src={tasker.image} alt={tasker.name} className="w-full h-40 object-cover mb-4 rounded" />
                <h2 className="text-xl font-semibold">{tasker.name}</h2>
                <p className="text-gray-600 flex-1">{tasker.description}</p>
                <p className="text-gray-800 font-bold">Rating: {tasker.rating}</p>

                <div className="flex justify-between mt-4">
                  {role === 'customer' && (
                    <button
                      onClick={() => handleRate(tasker.id)} // Show Rate Tasker button for customers
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                    >
                      Rate Tasker
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No taskers available</p>
          )}
        </div>
      </div>

      {/* Render the Rating Popup */}
      <RatingPopup
        isOpen={isRatingOpen}
        onClose={() => setIsRatingOpen(false)} // Close the pop-up
        onSubmit={handleRatingSubmit} // Handle rating submission
      />
    </div>
  );
};

export default ViewTasks;
