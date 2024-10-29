'use client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../reducers/store'; // Adjust based on your setup
import { fetchStores } from '@/reducers/storeSlice';
import HeaderDashboard from '@/app/components/dashboard/navigation';
import { useRouter } from 'next/navigation';

const ViewStoresPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const stores = useSelector((state: RootState) => state.store.stores); // Adjust to match your state
  const loading = useSelector((state: RootState) => state.store.loading);
  const error = useSelector((state: RootState) => state.store.error);

  useEffect(() => {
    dispatch(fetchStores());
  }, [dispatch]);

  return (
    <div className="flex h-screen font-sans bg-gray-100 rounded-lg shadow-lg p-4 md:p-8">
      <div className="flex-grow">
        <HeaderDashboard />
        <div className='ml-[14rem] md:pt-8'>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">View Stores</h2>
            {loading && <p className="text-gray-700">Loading...</p>}
            {error && <p className="text-red-700">Error: {error}</p>}
            {stores && stores.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {stores.map((store) => (
                  <div key={store.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">{store.name}</h3>
                    {store.image && (
                      <img
                        src={store.image}
                        alt={String(store.name)}
                        className="w-full h-auto mt-2 rounded-md"
                      />
                    )}
                    <p className="text-gray-700 mb-1"><strong>Description:</strong> {store.description}</p>
                    <p className="text-gray-700 mb-1"><strong>Owner:</strong> {store.owner}</p>
                  </div>
                ))}
              </div>
            ) : (
              !loading && <p className="text-gray-700">No stores available.</p>
            )}
            <div className="mt-4">
              <button
                onClick={() => router.push('/createstore')}
                className="bg-yellow-800 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition"
              >
                Create New Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewStoresPage;
