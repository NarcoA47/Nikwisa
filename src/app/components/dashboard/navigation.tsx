"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser, FaBars, FaTimes, FaBell } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../reducers/store';
import { logout } from '../../../reducers/authSlice';
import Drawer from './drawer';
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleNotifications = () => {
    setNotificationOpen(!notificationOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push('/signin');
  };

  // Fetch username from Redux state
  const username = useSelector((state: RootState) => state.auth.user?.username || 'Guest');

  return (
    <div className="flex">
      <Drawer
        isOpen={isOpen}
        onClose={toggleDrawer}
        onSelectPage={(page) => console.log(page)}
        selectedPage="home"
      />
      <div className="flex-grow">
        <nav className="p-6 fixed top-0 left-0 md:left-64 w-full md:w-[calc(100%-16rem)] shadow-md z-10 bg-white">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <button className="md:hidden" onClick={toggleDrawer}>
                {isOpen ? <FaTimes className="text-yellow-800" fontSize="large" /> : <FaBars className="text-yellow-800" fontSize="large" />}
              </button>
              <div
                className="md:hidden mx-4 text-lg text-white font-bold cursor-pointer"
                onClick={() => router.push("/home")}
              >
                <Image src="/logo.png" alt="Company Logo" width={180} height={50} />
              </div>
            </div>

            <div className="flex items-center">
              {/* Notification Icon */}
              <div
                className="relative cursor-pointer p-2 rounded-full bg-white mx-2"
                onClick={toggleNotifications}
              >
                <FaBell className="text-yellow-800" />
                {notificationOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                    {/* Notification content */}
                  </div>
                )}
              </div>

              {/* User Dropdown */}
              <div className="relative">
                <div className="flex items-center cursor-pointer p-2 rounded-full bg-white mx-2" onClick={toggleDropdown}>
                  <FaUser className="text-yellow-800" />
                  <span className="ml-2 font-bold text-yellow-800">{username}</span>
                </div>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                    <Link href="/dashboard/userprofile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Profile
                    </Link>
                    <Link href="/dashboard/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Settings
                    </Link>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
        <main className="p-6 mt-20 md:mt-0 flex justify-center items-center">
          {/* Main content goes here */}
          <div className="w-full md:w-[calc(100%-16rem)]">
            {/* Centered content */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Navbar;
