"use client";
import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../reducers/store';
import { fetchTaskers } from '../../../reducers/taskersSlice'; // Assuming you have a slice for taskers
import Header from '@/app/components/dashboard/navigation';
import RatingPopup from '@/app/components/dashboard/rating';

const TaskersPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { taskers, loading, error } = useSelector((state: RootState) => state.taskers) as {
    taskers: {
        image: string | undefined;
        rating: ReactNode;
        description: ReactNode; 
        id: number; 
        name: string; 
        email: string; 
        phone: string; 
        tasks: { taskId: number; title: string; description: string }[] // Assuming tasks associated with the tasker
    }[];
    loading: boolean;
    error: string | null;
  };

  const role = useSelector((state: RootState) => state.auth.role); // Get the user role from Redux state

  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [selectedTaskerId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchTaskers()); // Fetch taskers when the component mounts
  }, [dispatch]);


  const handleRatingSubmit = (rating: number) => {
    // Implement the rate tasker functionality here, e.g., update the server or Redux state
    console.log(`Rated tasker with ID: ${selectedTaskerId}, Rating: ${rating}`);
    // Here you can dispatch an action or make an API call to submit the rating
  };


  const handleApproveTasker = (taskId: number) => {
    // Implement the approve tasker functionality for taskers
    console.log(`Approved task request with ID: ${taskId}`);
    // Here you can dispatch an action or make an API call to approve the task request
  };

  const handleDeclineTasker = (taskId: number) => {
    // Implement the decline tasker functionality for taskers
    console.log(`Declined task request with ID: ${taskId}`);
    // Here you can dispatch an action or make an API call to decline the task request
  };

  return (
    <div className='flex h-screen font-sans bg-gray-100 rounded-lg shadow-lg p-4 md:p-8'>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Tasks</h1>
        
        {loading && <p>Loading taskers...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.isArray(taskers) && taskers.length > 0 ? (
            taskers
              .filter((tasker) => role === 'tasker' && tasker.tasks && tasker.tasks.length > 0) // Only show taskers with tasks
              .map((tasker) => (
                <div key={tasker.id} className="border p-4 rounded-lg shadow-sm flex flex-col">
                  <img src={tasker.image} alt={tasker.name} className="w-full h-40 object-cover mb-4 rounded" />
                  <h2 className="text-xl font-semibold">{tasker.name}</h2>
                  <p className="text-gray-600 flex-1">{tasker.description}</p>
                  <p className="text-gray-800 font-bold">Rating: {tasker.rating}</p>

                  <div className="mt-4">
                    {tasker.tasks.map(task => (
                      <div key={task.taskId} className="mb-2 p-2 border">
                        <p>{task.title}</p>
                        <p>{task.description}</p>
                        <div className="flex justify-between">
                          <button
                            onClick={() => handleApproveTasker(task.taskId)} // Approve button for taskers
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleDeclineTasker(task.taskId)} // Decline button for taskers
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                          >
                            Decline
                          </button>
                        </div>
                      </div>
                    ))}
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

export default TaskersPage;
