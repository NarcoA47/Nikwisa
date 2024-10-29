"use client";
import Navbar from '@/app/components/dashboard/navigation';
// import Header from '@/app/components/dashboard/navigation';
import { FC, useState } from 'react';
import { FaUser, FaPlus } from "react-icons/fa";

interface Message {
  id: number;
  text: string;
}

const Messages: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const messages: Message[] = [
    { id: 1, text: 'Hello, I need a system just enough for lighting and charging my PC for at least 8 hours' },
    { id: 2, text: 'Hello, I need a system just enough for lighting and charging my PC for at least 8 hours' },
    { id: 3, text: 'Hello, I need a system just enough for lighting and charging my PC for at least 8 hours' },
  ];

  const handleStartChat = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSearchTerm('');
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Navbar/>
      <div className="flex font-sans">
        <div className="flex-grow">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{messages.length} Messages Found</h2>
            </div>

            <div className="gap-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="m-8 flex items-center p-4 bg-white rounded-lg shadow"
                >
                  <FaUser className="text-yellow-800" fontSize="large" />
                  <p className="ml-4 text-gray-800">{message.text}</p>
                </div>
              ))}
            </div>

            {/* Plus button is visible on both mobile and web view */}
            <button
              className="bg-yellow-800 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 fixed bottom-8 right-8 md:bottom-8 md:right-8"
              onClick={handleStartChat}
            >
              <FaPlus fontSize="large" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal for starting a chat */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Start a New Chat</h2>
            <input
              type="text"
              placeholder="Search for a user"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
            />
            <div className="flex justify-end">
              <button
                className="bg-gray-300 p-2 rounded-lg mr-2 hover:bg-gray-400"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button className="bg-yellow-800 text-white p-2 rounded-lg hover:bg-yellow-600">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
