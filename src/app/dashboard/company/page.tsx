"use client"
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../reducers/store';
import { fetchCompanyProfile } from '../../../reducers/companySlice'; 
import UserProfilePage from '../userprofile/page';

const CompanyProfilePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const companyProfile = useSelector((state: RootState) => state.company.profile) as {
    company_name: string;
    registration_number: string;
    tin_number: string;
    company_registration_document: string;
    tin_certificate: string;
    user_national_id: string;
  } | null;
  const loading = useSelector((state: RootState) => state.company.loading);
  const error = useSelector((state: RootState) => state.company.error);

  useEffect(() => {
    dispatch(fetchCompanyProfile());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <UserProfilePage />
      <div className="ml-[16rem] mt-[2.5rem] bg-white shadow-md rounded-lg p-4">
        <h1 className="text-2xl font-bold mb-4">Company Profile</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {companyProfile && (
          <div className="space-y-4">
            <div>
              <label className="font-bold">Company Name:</label>
              <p className="border p-2 bg-gray-200">{companyProfile.company_name}</p>
            </div>
            <div>
              <label className="font-bold">Registration Number:</label>
              <p className="border p-2 bg-gray-200">{companyProfile.registration_number}</p>
            </div>
            <div>
              <label className="font-bold">TPIN Number:</label>
              <p className="border p-2 bg-gray-200">{companyProfile.tin_number}</p>
            </div>
            <div>
              <label className="font-bold">Company Registration Document:</label>
              <a href={companyProfile.company_registration_document} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                View Document
              </a>
            </div>
            <div>
              <label className="font-bold">TIN Certificate:</label>
              <a href={companyProfile.tin_certificate} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                View Certificate
              </a>
            </div>
            <div>
              <label className="font-bold">User National ID:</label>
              <a href={companyProfile.user_national_id} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                View National ID
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyProfilePage;
