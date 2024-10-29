"use client"
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../reducers/store';
import { fetchCompanyProfile, updateCompanyProfile } from '../../../reducers/companySlice'; 
import Navbar from '@/app/components/dashboard/navigation';

const TaskersProfilePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const companyProfile = useSelector((state: RootState) => state.company.profile) as {
    name: string;
    email: string;
    phone: string;
    address: string;
  } | null;
  const loading = useSelector((state: RootState) => state.company.loading);
  const error = useSelector((state: RootState) => state.company.error);
  
  const [newProfileData, setNewProfileData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    legalDocuments: null as File | null,
  });

  useEffect(() => {
    dispatch(fetchCompanyProfile());
  }, [dispatch]);

  useEffect(() => {
    if (companyProfile) {
      setNewProfileData({
        name: companyProfile.name || '',
        email: companyProfile.email || '',
        phone: companyProfile.phone || '',
        address: companyProfile.address || '',
        legalDocuments: null,
      });
    }
  }, [companyProfile]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProfileData({
      ...newProfileData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setNewProfileData({
      ...newProfileData,
      legalDocuments: file,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', newProfileData.name);
    formData.append('email', newProfileData.email);
    formData.append('phone', newProfileData.phone);
    formData.append('address', newProfileData.address);
    if (newProfileData.legalDocuments) {
      formData.append('legalDocuments', newProfileData.legalDocuments);
    }

    await dispatch(updateCompanyProfile(formData)); // Dispatch action to update the company profile
  };

  return (
    <div className='flex h-screen font-sans bg-gray-100 rounded-lg shadow-lg p-4 md:p-8'>
    <Navbar/>
    <div className="ml-[14rem] mt-[4rem] md:pt-[4rem] bg-white container border p-4 rounded-lg shadow-sm ">
      <h1 className="text-2xl font-bold mb-4">Company Profile</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={newProfileData.name}
          onChange={handleInputChange}
          placeholder="Company Name"
          required
          className="border p-2 w-full"
        />
        <input
          type="email"
          name="email"
          value={newProfileData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
          className="border p-2 w-full"
        />
        <input
          type="tel"
          name="phone"
          value={newProfileData.phone}
          onChange={handleInputChange}
          placeholder="Phone Number"
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="address"
          value={newProfileData.address}
          onChange={handleInputChange}
          placeholder="Address"
          className="border p-2 w-full"
        />
        <input
          type="file"
          name="legalDocuments"
          onChange={handleFileChange}
          accept=".pdf, .doc, .docx" // Accept legal document formats
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
          {loading ? 'Updating...' : 'Update Profile'}
        </button>
      </form>
    </div>
    </div>
  );
};

export default TaskersProfilePage;
