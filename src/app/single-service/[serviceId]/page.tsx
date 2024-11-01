"use client";
import { useState, useEffect, useRef } from "react";
import BottmNavigation from "../components/BottomNav";
import Navbar from "../components/navbar";

const product = {
  tasker: "John Doe", // Adding tasker name
  name: "Solar Expert",
  rating: 4.5,
  description: "Simply dummy text of the printing and typesetting industry.",
  serviceDetails: `
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
    
    Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    
    Services offered:
    - Solar Installation
    - Consultancy
    - Battery Maintenance
  `,
  reviews: [
    {
      name: "Jabulani Charinga",
      rating: 5,
      comment: "Great service, very professional!",
    },
    {
      name: "Ihano Yowela",
      rating: 4,
      comment: "Satisfied with the work, will recommend!",
    },
    {
      name: "Beauty Mubanga",
      rating: 5,
      comment: "Amazing experience, exceeded expectations!",
    },
    {
      name: "Sibatha Kaseba",
      rating: 4.5,
      comment: "Good work, reliable and timely.",
    },
  ],
};

export default function ServicePage() {
  const [tab, setTab] = useState("details");
  const [imageHeight, setImageHeight] = useState(0);
  const infoRef = useRef<HTMLDivElement>(null);

  // UseEffect to calculate height of info section for desktop view
  useEffect(() => {
    if (infoRef.current) {
      setImageHeight(infoRef.current.offsetHeight);
    }
  }, []);

  return (
    <div>
      <Navbar />

      <div className="min-h-screen  bg-gray-100 flex justify-start">
        {/* Container to manage page width and alignment */}
        <div className="w-full md:w-[90vw] mx-auto mt-8 mb-8 p-6 bg-white shadow-lg rounded-lg">
          {/* Top Section - Service Image & Basic Info */}
          <section className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 text-left">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <img
                src="/ExpI1.jpg"
                alt="Solar Expert"
                className="w-full md:h-84 md:object-cover rounded-md"
                style={{
                  height: imageHeight ? `${imageHeight}px` : "auto", // Aligning height with info section
                }}
              />
            </div>

            {/* Service Information Section */}
            <div
              className="flex flex-col lg:w-1/2 space-y-4 mt-4 lg:mt-0"
              ref={infoRef}
            >
              <h1 className="text-3xl font-bold text-black">{product.name}</h1>
              {/* Tasker Name */}
              <p className="text-lg text-gray-700">By {product.tasker}</p>

              <div className="flex items-center my-2 space-x-2">
                <span className="text-yellow-500">
                  {"★".repeat(Math.floor(product.rating))}
                  {product.rating % 1 ? "½" : ""}
                </span>
                <span className="border-l border-gray-500 h-6"></span>
                <span className="text-black">{product.rating} / 5 Rating</span>
              </div>

              <p className="text-gray-500 text-sm">{product.description}</p>
            </div>
          </section>

          {/* Tab Section for Details and Reviews */}
          <section className="mt-8">
            <div className="flex border-b">
              <button
                onClick={() => setTab("details")}
                className={`mr-4 pb-2 ${
                  tab === "details" ? "border-b-2 border-yellow-500" : ""
                } text-black`}
              >
                Service Details
              </button>
              <button
                onClick={() => setTab("reviews")}
                className={`pb-2 ${
                  tab === "reviews" ? "border-b-2 border-yellow-500" : ""
                } text-black`}
              >
                Reviews
              </button>
            </div>

            <div className="mt-4 text-black">
              {tab === "details" ? (
                <p className="whitespace-pre-line">{product.serviceDetails}</p>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {product.reviews.map((review, idx) => (
                    <div
                      key={idx}
                      className="mb-4 bg-gray-100 p-4 rounded-md w-full"
                    >
                      <h4 className="text-lg font-semibold text-black">
                        {review.name}
                      </h4>
                      <div className="flex items-center my-1">
                        <span className="text-yellow-500">
                          {"★".repeat(Math.floor(review.rating))}
                          {review.rating % 1 ? "½" : ""}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      <BottmNavigation />
    </div>
  );
}