"use client";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
//import { FaSpinner } from 'react-icons/fa';
import Drawer from '../components/dashboard/drawer';
import Messages from './messages/page';
import Company from './company/page';
import TaskersProfilePage from './taskersProfile/page';
import Profile from '../profile/page';
import ViewTasks from './alltasks/page';
import TaskersPage from './taskers/page';
import AllProductsPage from './allproducts/page';
import AddProduct from './addproducts/page';
import ViewStoresPage from './stores/page';
import { RootState, AppDispatch } from '../../reducers/store';
import { logout } from '../../reducers/authSlice';
import Header from '../components/dashboard/navigation';

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  //const isCheckingAuth = useSelector((state: RootState) => state.auth.loading);
  const [selectedPage, setSelectedPage] = useState('messages');
  const [drawerOpen, setDrawerOpen] = useState(false); // Add state for the drawer

  useEffect(() => {
    if (!accessToken) {
      dispatch(logout());
      router.push('/signin');
    }
  }, [accessToken, dispatch, router]);

  const onSelectPage = (page: string) => {
    setSelectedPage(page);
    setDrawerOpen(false); // Close the drawer on mobile when a page is selected
  };
  {/*
  if (isCheckingAuth) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FaSpinner className="animate-spin text-2xl text-yellow-800 mx-4" />
        <h6>Checking for Authentication</h6>
      </div>
    );
  }*/}

  if (!accessToken) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Drawer */}
      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onSelectPage={onSelectPage}
        selectedPage={selectedPage}
      />

      {/* Main content area */}
      <div className="flex flex-col flex-grow md:ml-64"> {/* Adjust margin to account for drawer width */}
        <Header />
        <div className="mt-16 p-6"> {/* Margin to push content below the nav */}
          <div className={selectedPage === 'messages' ? '' : 'hidden'}>
            <Messages />
          </div>
          <div className={selectedPage === 'addProduct' ? '' : 'hidden'}>
            <AddProduct />
          </div>
          <div className={selectedPage === 'company' ? '' : 'hidden'}>
            <Company />
          </div>
          <div className={selectedPage === 'taskersProfile' ? '' : 'hidden'}>
            <TaskersProfilePage />
          </div>
          <div className={selectedPage === 'profile' ? '' : 'hidden'}>
            <Profile />
          </div>
          <div className={selectedPage === 'viewTasks' ? '' : 'hidden'}>
            <ViewTasks />
          </div>
          <div className={selectedPage === 'taskers' ? '' : 'hidden'}>
            <TaskersPage />
          </div>
          <div className={selectedPage === 'products' ? '' : 'hidden'}>
            <AllProductsPage />
          </div>
          <div className={selectedPage === 'stores' ? '' : 'hidden'}>
            <ViewStoresPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
