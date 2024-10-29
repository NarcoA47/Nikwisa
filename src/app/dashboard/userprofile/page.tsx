"use client";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../reducers/store';
import Header from '@/app/components/dashboard/navigation';
import { fetchUserProfile, updateUserProfile } from '@/reducers/authSlice';

const UserProfilePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const userProfile = useSelector((state: RootState) => state.auth.user) as {
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    phone: string;
  } | null;
  const loading = useSelector((state: RootState) => state.auth.loading);
  // const error = useSelector((state: RootState) => state.auth.error);

  const [editProfile, setEditProfile] = useState(false);
  const [newProfileData, setNewProfileData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (userProfile) {
      setNewProfileData({
        first_name: userProfile.first_name || '',
        last_name: userProfile.last_name || '',
        username: userProfile.username || '',
        email: userProfile.email || '',
        phone: userProfile.phone || '',
      });
    }
  }, [userProfile]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProfileData({
      ...newProfileData,
      [name]: value,
    });
  };

  const handleEditClick = () => {
    setEditProfile(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(updateUserProfile(newProfileData));
    setEditProfile(false);
  };

  return (
    <div className="flex-grow container mx-auto p-4 ">
      <Header />
      <div className="ml-[16rem] mt-[2.5rem] bg-white shadow-md rounded-lg p-4 ">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        {loading && <p>Loading...</p>}
        {/* {error && <p className="text-red-500">Error: {error}</p>} */}
        {userProfile && (
          <div className="space-y-2 overflow-x-hidden">
            <div className="flex flex-col md:flex-row md:items-center">
              <label className="font-bold w-24 text-sm">First Name:</label>
              <p className="border p-1 my-2 w-full md:w-full bg-gray-200 text-sm">{userProfile.first_name}</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center">
              <label className="font-bold w-24 text-sm">Last Name:</label>
              <p className="border p-1 my-2 w-full md:w-full bg-gray-200 text-sm">{userProfile.last_name}</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center">
              <label className="font-bold w-24 text-sm">Username:</label>
              <p className="border p-1 my-2 w-full md:w-full bg-gray-200 text-sm">{userProfile.username}</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center">
              <label className="font-bold w-24 text-sm">Email:</label>
              <p className="border p-1  my-2 w-full md:w-full bg-gray-200 text-sm">{userProfile.email}</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center">
              <label className="font-bold w-24 text-sm">Phone:</label>
              <p className="border p-1 my-4 w-full md:w-full bg-gray-200 text-sm">{userProfile.phone}</p>
            </div>
            <button
              onClick={handleEditClick}
              className="bg-yellow-800 text-white px-3 py-1 rounded hover:bg-yellow-400 transition duration-200 text-sm"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>

      {/* Edit Profile Modal */}
      {editProfile && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex flex-col">
                <label className="font-bold text-sm">First Name:</label>
                <input
                  type="text"
                  name="first_name"
                  value={newProfileData.first_name}
                  onChange={handleInputChange}
                  className="border p-1 rounded text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold text-sm">Last Name:</label>
                <input
                  type="text"
                  name="last_name"
                  value={newProfileData.last_name}
                  onChange={handleInputChange}
                  className="border p-1 rounded text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold text-sm">Username:</label>
                <input
                  type="text"
                  name="username"
                  value={newProfileData.username}
                  onChange={handleInputChange}
                  className="border p-1 rounded text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold text-sm">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={newProfileData.email}
                  onChange={handleInputChange}
                  className="border p-1 rounded text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold text-sm">Phone:</label>
                <input
                  type="tel"
                  name="phone"
                  value={newProfileData.phone}
                  onChange={handleInputChange}
                  className="border p-1 rounded text-sm"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setEditProfile(false)}
                  className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition duration-200 text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200 text-sm"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfilePage;
