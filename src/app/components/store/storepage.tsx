"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStores } from '../../../reducers/storeSlice';
import { RootState, AppDispatch } from '../../../reducers/store';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useRouter } from 'next/navigation';
import BottomNav from '../BottomNav';

const StoreCard: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const { stores, loading, error } = useSelector((state: RootState) => state.store);

  useEffect(() => {
    dispatch(fetchStores());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleStoreClick = (storeId: number) => {
    router.push(`/single-store/${storeId}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {stores.map((store) => (
        <div
          key={store.id}
          className="flex items-center p-4 bg-yellow-100 rounded-lg shadow-lg cursor-pointer"
          onClick={() => handleStoreClick(store.id)}
        >
          <div className="flex-grow">
            <h2 className="text-lg font-bold">{store.name}</h2>
            <p className="text-sm">{store.description}</p>
            <p className="text-xs text-gray-500">Owner: {store.owner}</p>
            <button className="mt-2 px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700">
              Enter Store
            </button>
          </div>
          <div className="ml-4 flex flex-col">
            <button className="text-green-600 text-2xl mb-2">
              <i className="fas fa-plus"></i>
            </button>
            <button className="text-green-600 text-2xl mt-2">
              <i className="fas fa-comments"></i>
            </button>
          </div>
        </div>
      ))}
      <BottomNav/>
    </div>
  );
};

export default StoreCard;
