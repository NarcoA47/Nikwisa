"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="bg-white p-8">
      {/* Product Image and Details Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left: Product Image */}
        <div className="md:w-1/2 p-4">
          <Image
            src="/assets/1.jpg" // Replace with actual image path
            alt="415w Jinko Solar Panel"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        
        {/* Right: Product Details */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800">415w Jinko Solar Panel</h1>
          <p className="text-xl text-gray-800 font-bold">K2900</p>
          <div className="flex items-center my-2">
            <span className="text-yellow-400 text-lg">★★★★☆</span>
            <span className="ml-2 text-sm text-gray-500">(5 Reviews)</span>
          </div>
          <p className="my-4 text-gray-800">
            A highly efficient solar panel designed for maximum power output and durability in various weather conditions.
          </p>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg">Add to Cart</button>
        </div>
      </div>

      {/* Description and Reviews Tabs */}
      <div className="mt-10">
        <div className="flex border-b border-gray-300 mb-4">
          <button 
            className={`px-4 py-2 text-xl font-semibold ${activeTab === 'description' ? 'border-b-2 border-yellow-500 text-gray-800' : 'text-gray-800'}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={`px-4 py-2 text-xl font-semibold ${activeTab === 'reviews' ? 'border-b-2 border-yellow-500 text-gray-800' : 'text-gray-800'}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews (5)
          </button>
        </div>
        
        {/* Content Section */}
        <div>
          {activeTab === 'description' ? (
            <p className="text-gray-800">
              Weighing in under 19 pounds, the 415w is a lightweight piece of reliable solar engineering, setting the bar for off-grid renewable options. The monocrystalline cells are combined with a durable build to give excellent power generation.
            </p>
          ) : (
            <div>
              {/* Mocked Reviews Data */}
              <div className="my-4">
                <p className="font-semibold text-gray-800">John Doe</p>
                <p className="text-sm text-gray-500">★★★★☆</p>
                <p className="text-gray-800">Great solar panel! Helped me cut down on energy costs significantly.</p>
              </div>
              <div className="my-4">
                <p className="font-semibold text-gray-800">Jane Smith</p>
                <p className="text-sm text-gray-500">★★★★★</p>
                <p className="text-gray-800">Very efficient and durable, highly recommended!</p>
              </div>
              {/* More reviews can go here */}
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Related Product */}
          <div className="border p-4 rounded-lg">
            <Image
              src="/assets/1.jpg" // Replace with actual image path
              alt="415w Jinko Solar Panel"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <p className="font-bold mt-2 text-gray-800">415w Jinko Solar Panel</p>
            <p className="text-gray-800 font-bold">K2900</p>
            <button className="mt-2 bg-yellow-500 text-white py-1 px-4 rounded-lg">Add to Cart</button>
          </div>

          {/* Second Related Product */}
          <div className="border p-4 rounded-lg">
            <Image
              src="/assets/1.jpg" // Replace with actual image path
              alt="Battery Storage"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <p className="font-bold mt-2 text-gray-800">Battery Storage</p>
            <p className="text-gray-800 font-bold">K1500</p>
            <button className="mt-2 bg-yellow-500 text-white py-1 px-4 rounded-lg">Add to Cart</button>
          </div>

          {/* Third Related Product */}
          <div className="border p-4 rounded-lg">
            <Image
              src="/assets/1.jpg" // Replace with actual image path
              alt="Solar Kit"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <p className="font-bold mt-2 text-gray-800">Complete Solar Kit</p>
            <p className="text-gray-800 font-bold">K5000</p>
            <button className="mt-2 bg-yellow-500 text-white py-1 px-4 rounded-lg">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
