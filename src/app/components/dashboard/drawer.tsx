import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers/store';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPage: string;
  onSelectPage: (page: string) => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, selectedPage, onSelectPage }) => {
  const role = useSelector((state: RootState) => state.auth.role); // Get the user role from Redux state

  // Handle drawer navigation
  const handleNavigation = (page: string) => {
    onSelectPage(page);
    onClose(); // Close drawer after selecting a page
  };

  const getButtonClass = (page: string) => {
    return selectedPage === page
      ? 'w-full text-left px-4 py-2 text-gray-700 bg-gray-200 underline'
      : 'w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100';
  };

  // Set default selected page to "messages"
  useEffect(() => {
    if (!selectedPage) {
      onSelectPage('messages');
    }
  }, [selectedPage, onSelectPage]);

  return (
    <>
      {/* Static drawer for web view */}
      <div className="hidden md:block bg-white w-64 h-full shadow-lg p-4 fixed left-0 top-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            <Image src="/logo.png" alt="Company Logo" width={180} height={50} />
          </h2>
        </div>
        <ul className="space-y-2">
          {role === 'merchant' && (
            <>
              <li>
                <Link href="/dashboard/messages/" className={getButtonClass('messages')} onClick={() => handleNavigation('messages')}>
                  Messages
                </Link>
              </li>
              <li>
                <Link href="/dashboard/addproducts/" className={getButtonClass('add-product')} onClick={() => handleNavigation('add-product')}>
                  Add Product
                </Link>
              </li>
              <li>
                <Link href="/dashboard/allproducts/" className={getButtonClass('products')} onClick={() => handleNavigation('products')}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/dashboard/stores/" className={getButtonClass('stores')} onClick={() => handleNavigation('stores')}>
                  Stores
                </Link>
              </li>
              <li>
                <Link href="/dashboard/company/" className={getButtonClass('messages')} onClick={() => handleNavigation('messages')}>
                  Company
                </Link>
              </li>
            </>
          )}
          {role === 'tasker' && (
            <>
              <li>
                <Link href="/dashboard/messages/" className={getButtonClass('messages')} onClick={() => handleNavigation('messages')}>
                  Messages
                </Link>
              </li>
              <li>
                <Link href="/dashboard/taskersProfile/" className={getButtonClass('taskersprofile')} onClick={() => handleNavigation('taskersprofile')}>
                  Taskers Profile
                </Link>
              </li>
              <li>
                <Link href="/dashboard/alltasks/" className={getButtonClass('view-tasks')} onClick={() => handleNavigation('view-tasks')}>
                  View Tasks
                </Link>
              </li>
              <li>
                <Link href="/dashboard/company/" className={getButtonClass('messages')} onClick={() => handleNavigation('messages')}>
                  Company
                </Link>
              </li>
            </>
          )}
          {role === 'customer' && (
            <>
              <li>
                <Link href="/dashboard/messages/" className={getButtonClass('messages')} onClick={() => handleNavigation('messages')}>
                  Messages
                </Link>
              </li>
              <li>
                <Link href="/dashboard/allproducts/" className={getButtonClass('messages')} onClick={() => handleNavigation('messages')}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/dashboard/taskers/" className={getButtonClass('messages')} onClick={() => handleNavigation('messages')}>
                  Taskers
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Collapsible drawer for mobile view */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-start md:hidden">
          <div className="bg-white w-64 h-full shadow-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={onClose}>
                <FaTimes />
              </button>
            </div>
            <ul className="space-y-2">
              {role === 'merchant' && (
                <>
                  <li>
                    <Link href="/dashboard/messages/" className={getButtonClass('messages')} onClick={() => handleNavigation('messages')}>
                      Messages
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/addproducts/" className={getButtonClass('add-product')} onClick={() => handleNavigation('add-product')}>
                      Add Product
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/allproducts/" className={getButtonClass('products')} onClick={() => handleNavigation('products')}>
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/stores/" className={getButtonClass('stores')} onClick={() => handleNavigation('stores')}>
                      Stores
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/company/" className={getButtonClass('messages')} onClick={() => handleNavigation('messages')}>
                      Company
                    </Link>
                  </li>
                </>
              )}
              {role === 'tasker' && (
                <>
                  <li>
                    <Link href="/dashboard/messages/" className={getButtonClass('messages')} onClick={() => handleNavigation('messages')}>
                      Messages
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/taskersProfile/" className={getButtonClass('taskersprofile')} onClick={() => handleNavigation('taskersprofile')}>
                      Taskers Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/alltasks/" className={getButtonClass('view-tasks')} onClick={() => handleNavigation('view-tasks')}>
                      View Tasks
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/company/" className={getButtonClass('messages')} onClick={() => handleNavigation('messages')}>
                      Company
                    </Link>
                  </li>
                </>
              )}
              {role === 'customer' && (
                <>
                  <li>
                    <Link href="/dashboard/messages/" className={getButtonClass('messages')} onClick={() => handleNavigation('messages')}>
                      Messages
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/messages/" className={getButtonClass('messages')} onClick={() => handleNavigation('messages')}>
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard/taskers/" className={getButtonClass('messages')} onClick={() => handleNavigation('messages')}>
                      Taskers
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Drawer;
