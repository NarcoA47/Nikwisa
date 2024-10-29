'use client';
import React, { useState } from 'react';
import HeaderDashboard from '@/app/components/dashboard/navigation';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const CreateStorePage = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [owner, setOwner] = useState('');
  const router = useRouter(); // Initialize the router

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle the store creation logic here (e.g., dispatch action, API call)
    console.log({ name, location, owner });
  };

  return (
    <div className="flex font-sans">
      <div className="flex-grow">
        <HeaderDashboard />
        <div className="bg-gray-200 p-4 md:p-8">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            {/* Back Arrow */}
            <button
              onClick={() => router.back()} // Navigate back
              className="flex items-center text-yellow-800 mb-4 hover:underline"
            >
              <span className="mr-2">&larr;</span> {/* Left arrow symbol */}
              Back
            </button>

            <h2 className="text-2xl font-bold mb-6">Create Store</h2>
            <form onSubmit={handleSubmit}>
              {/* Store Name */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Store Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-800"
                  placeholder="Enter store name"
                  required
                />
              </div>

              {/* Store Location */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-800"
                  placeholder="Enter store location"
                  required
                />
              </div>

              {/* Store Owner */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="owner">
                  Owner
                </label>
                <input
                  id="owner"
                  type="text"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-800"
                  placeholder="Enter owner name"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-800 text-white py-2 rounded-lg hover:bg-yellow-700 transition"
              >
                Create Store
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStorePage;
