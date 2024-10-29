'use client';

import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Image from 'next/image'
import BottmNavigation from '../components/BottomNav';

const ProductPage: React.FC = () => {
    const [rating, setRating] = useState(5);
    const [feedback, setFeedback] = useState('');
    const [selectedImage, setSelectedImage] = useState<string>("/bill-mead.jpg");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to an API)
        console.log({ rating, feedback });
    };

    return (
        <div className="font-sans bg-white text-gray-800">
            <Navbar />

            {/* Main Product Section */}
            <section className="container mx-auto py-6 px-4 lg:px-12 overflow-x-hidden">
                <div className="flex flex-col lg:flex-row">


                    {/* Product Thumbnail Section */}
                    <div className="w-full lg:w-[18%] h-30 flex flex-row lg:flex-col justify-center items-center lg:items-start mb-6 lg:mb-0 space-x-4 lg:space-x-0 lg:space-y-4">
                        {
                            Array.from(["/bill-mead.jpg", "/computer.jpg", "/Gas.jpg", "/sale.png"]).map((item, i) => (
                                <div key={i} className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px]">
                                    <Image
                                        onClick={() => setSelectedImage(item)}
                                        width={100}
                                        height={100}
                                        src={item}
                                        alt="415w jinko solar panel"
                                        className="rounded-md cursor-pointer w-full h-full object-cover"
                                    />
                                </div>
                            ))
                        }
                    </div>


                    {/* Product Image Preview with Fixed Height */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0">
                        <div className="w-full h-[20rem] lg:h-[25rem]"> {/* Fixed height for the image preview */}
                            <img
                                src={selectedImage}
                                alt="415w jinko solar panel"
                                className="w-full h-full rounded-md object-cover"
                            />
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="w-full lg:w-1/2 lg:pl-12">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">415w Jinko Solar Panel</h1>
                        <p className="text-xl md:text-2xl text-yellow-600 mt-4">K2900</p>
                        <div className="flex items-center mt-4">
                            <span className="text-yellow-500 text-lg md:text-xl">★★★★☆</span>
                            <span className="ml-2 text-gray-600">|</span>
                            <span className="ml-2 text-gray-600 text-sm md:text-base">5 Customer Reviews</span>
                        </div>
                        <p className="mt-4 text-sm md:text-base text-gray-600">
                            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a
                            well-balanced audio which boasts a clear midrange and extended highs for a sound.
                        </p>
                        <button className="bg-white border border-gray-800 py-2 px-4 md:px-6 mt-4 hover:bg-gray-100 transition duration-200 text-sm md:text-base">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </section>


            {/* Featured Product + Reviews Section */}
            <section className="container mx-auto py-6 px-4 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Side: Featured Product */}
                    <div>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="flex flex-col lg:flex-row items-start justify-center my-4">
                                <Image width={250} height={250} src="/bill-mead.jpg" alt="Green Belt Africa" className="rounded-lg" />
                                <div className="lg:ml-6 mt-4 lg:mt-0">
                                    <h3 className="text-lg font-semibold text-gray-800">Green Belt Africa</h3>
                                    <p className="text-yellow-600 mt-2">{"★".repeat(3)} {" | "} 37 Customer Reviews</p>
                                    <button className="bg-yellow-600 text-white py-1 text-sm rounded-md px-2 mt-1 hover:bg-yellow-700 transition duration-200">
                                        Enter Store
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Reviews List */}
                    <div className="lg:w-full lg:pl-12">
                        <h2 className="text-2xl font-bold text-gray-800">Reviews [5]</h2>
                        <div className="space-y-6 mt-6">
                            {[
                                { name: 'Jabulani Chiringa', rating: 5, review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
                                { name: 'Ihano Yowela', rating: 4, review: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                                { name: 'Sibatha Kaseba', rating: 5, review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
                            ].map((review, index) => (
                                <div key={index} className="bg-[#FFF3E3] p-4 lg:p-6 shadow-md border border-gray-200 rounded-lg">
                                    <h3 className="font-semibold text-lg text-gray-800">{review.name}</h3>
                                    <p className="text-yellow-500">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</p>
                                    <p className="text-gray-600 mt-2 text-sm md:text-base">{review.review}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Review Submission Section */}
            <section className="container mx-auto py-12">
                <div className="bg-gray-100 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Leave a Review</h2>
                    <form onSubmit={handleSubmit} className="bg-gray-300 p-6 rounded-lg space-y-4">
                        <div>
                            <label htmlFor="rating" className="block text-lg font-semibold text-gray-800 mb-2">Rating</label>
                            <input
                                type="number"
                                id="rating"
                                min="1"
                                max="5"
                                value={rating}
                                onChange={(e) => setRating(Number(e.target.value))}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div>
                            <label htmlFor="feedback" className="block text-lg font-semibold text-gray-800 mb-2">Feedback</label>
                            <textarea
                                id="feedback"
                                rows={4}
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                placeholder="Hi! I'd like to ask about..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-yellow-600 text-white py-2 px-6 mt-4 hover:bg-yellow-700 transition duration-200 w-full"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </section>
            <BottmNavigation/>
        </div>
    );
};

export default ProductPage;
