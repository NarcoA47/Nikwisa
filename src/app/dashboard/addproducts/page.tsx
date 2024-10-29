'use client';
import React from 'react';
import { useRouter } from 'next/navigation';  // Import useRouter
import HeaderDashboard from '@/app/components/dashboard/navigation';

const AddProductPage = () => {
  const router = useRouter();  // Initialize the router

  const handleCreateProduct = () => {
    router.push('/dashboard/createproduct');  // Navigate to Create Product page
  };


  return (
    <div className="flex h-screen font-sans bg-gray-100 rounded-lg shadow-lg p-4 md:p-8">
      <div className="flex-grow">
        <HeaderDashboard />
        <div className='ml-[14rem] md:pt-8'>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Store Management</h2>

            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              {/* Create Store Card */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Create Store</h3>
                <p className="mb-4 text-gray-600">Set up your store to start selling.</p>
                <button
                  onClick={() => router.push('/dashboard/createstore')}
                  className="w-full bg-yellow-800 text-white py-2 rounded-lg hover:bg-yellow-700 transition"
                  
                >
                  Create Store
                </button>
              </div>

              {/* Create Product Card */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Create Product</h3>
                <p className="mb-4 text-gray-600">Add new products to your store.</p>
                <button
                  onClick={handleCreateProduct}
                  className="w-full bg-yellow-800 text-white py-2 rounded-lg hover:bg-yellow-700 transition"
                >
                  Create Product
                </button>
              </div>

              {/* View Products Card */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
