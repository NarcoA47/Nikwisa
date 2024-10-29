"use client";
import React, { useEffect, useState, useCallback } from "react";

const heroImages = [
  "/lead.png",
  "/battery.jpg",
  "/computer.jpg",
  "bill-mead.jpg",
];
// const specialImages = ["/sale.png", "/pexels.jpeg", "/Gas.jpg", "/ExpI2.jpg"];

const Hero = () => {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevHero = useCallback(() => {
    setCurrentHeroImage((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  }, []);

  const handleNextHero = useCallback(() => {
    setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
  }, []);

  return (
    <section className="mt-20 mb-40 relative flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-12 mx-auto max-w-[1200px]">
      {/* Discovery Section - Appears first on mobile, right side on desktop */}
      <div className="order-1 md:order-none md:pl-11 pl-0">
        <h1 className="text-3xl md:text-5xl font-bold text-[#B88E2F] mb-5 md:w-2/3 w-full">
          Trusted Vendors & Skilled Taskers at Your Fingertips
        </h1>
        <p className="text-md md:text-lg text-[#514c41] md:w-2/3 w-full">
          From alternative energy solutions to everyday services, Nikwisa
          connects you with reliable experts and merchants—shop smart, live
          better!
        </p>
        <button className="bg-[#B88E2F] text-white px-4 py-2 mt-2 rounded hover:bg-[#b88f2fde] transition duration-200">
          Buy Now
        </button>
      </div>

      {/* Image Slider - Appears below the discovery section on mobile, left side on desktop */}
      <div className="relative w-full md:w-[75%] h-[10rem] hidden md:block md:h-[30rem] overflow-hidden rounded-lg shadow order-2 md:order-none pr-11 md:pr-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              currentHeroImage === index
                ? "opacity-100"
                : "opacity-0 absolute top-0 left-0"
            }`}
          />
        ))}
        {/* Hero slider controls */}
        <button
          onClick={handlePrevHero}
          className="absolute top-1/2 left-2 bg-gray-800 text-white px-4 py-2 rounded-md opacity-75 hover:opacity-100 transition"
        >
          Prev
        </button>
        <button
          onClick={handleNextHero}
          className="absolute top-1/2 right-2 bg-gray-800 text-white px-4 py-2 rounded-md opacity-75 hover:opacity-100 transition"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Hero;
