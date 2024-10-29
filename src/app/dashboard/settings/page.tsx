"use client";
import React, { useEffect, useState } from 'react';
import Header from '@/app/components/dashboard/navigation';

const SettingsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('blue'); // Default color

  // Update body class on theme change
  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('bg-gray-800', 'text-white');
      body.classList.remove('bg-white', 'text-black');
    } else {
      body.classList.add('bg-white', 'text-black');
      body.classList.remove('bg-gray-800', 'text-white');
    }
  }, [isDarkMode]);

  // Change primary color
  const handleColorChange = (color: string) => {
    setPrimaryColor(color);
    document.documentElement.style.setProperty('--primary-color', color); // Update CSS variable
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Theme</h2>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={() => setIsDarkMode(!isDarkMode)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2">Enable Dark Mode</span>
          </label>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Primary Color</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => handleColorChange('blue')}
              className={`w-10 h-10 rounded-full ${primaryColor === 'blue' ? 'ring-2 ring-blue-600' : ''} bg-blue-600`}
            />
            <button
              onClick={() => handleColorChange('red')}
              className={`w-10 h-10 rounded-full ${primaryColor === 'red' ? 'ring-2 ring-red-600' : ''} bg-red-600`}
            />
            <button
              onClick={() => handleColorChange('green')}
              className={`w-10 h-10 rounded-full ${primaryColor === 'green' ? 'ring-2 ring-green-600' : ''} bg-green-600`}
            />
            <button
              onClick={() => handleColorChange('yellow')}
              className={`w-10 h-10 rounded-full ${primaryColor === 'yellow' ? 'ring-2 ring-yellow-600' : ''} bg-yellow-600`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
