"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Hero from "./Hero";
import CategoriesFilter from "./CategoriesFilter";
import SpecialOffer from "./SpecialOffer";
import TaskerHome from "./TaskerHome";
// import Image from 'next/image';

export default function Home() {
  const heroImages = [
    "/lead.png",
    "/battery.jpg",
    "/computer.jpg",
    "bill-mead.jpg",
  ];
  const [, setCurrentHeroImage] = useState(0);

  const specialImages = ["/sale.png", "/pexels.jpeg", "/Gas.jpg", "/ExpI2.jpg"];
  const [, setCurrentSpecialImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialImage((prev) => (prev + 1) % specialImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [specialImages.length]);

  // const handlePrevHero = () => {
  //   setCurrentHeroImage((prev) =>
  //     prev === 0 ? heroImages.length - 1 : prev - 1
  //   );
  // };

  // const handleNextHero = () => {
  //   setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
  // };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <main className="mx-auto px-4 max-w-screen-xl">
        <Hero />
        <CategoriesFilter />
        <SpecialOffer />
        <TaskerHome />

        {/* Products Section */}
        <section className="mt-8">
          <h3 className="text-2xl font-bold text-gray-800">Products</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {[
              { name: "415w jinko solar panel", price: "K2900" },
              { name: "415w jinko solar panel", price: "K2900" },
              { name: "415w jinko solar panel", price: "K2900" },
              { name: "415w jinko solar panel", price: "K2900" },
              { name: "415w jinko solar panel", price: "K2900" },
              { name: "415w jinko solar panel", price: "K2900" },
            ].map((product, index) => (
              <Link
                href={`/products/${product.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                key={index}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow text-gray-800 hover:shadow-lg transition duration-200 cursor-pointer">
                  <img src="/pexels.jpeg" alt={product.name} className="" />
                  <div className="p-2">
                    <h4 className="font-bold md:text-lg text-sm text-gray-800 mt-2">
                      {product.name}
                    </h4>
                    <p className="text-sm md:text-sm">{product.price}</p>
                    <button className="bg-[#B88E2F] w-full text-white md:px-4 md:py-2 px-2 py-1 mt-2 rounded hover:bg-yellow-600 transition duration-200 text-xs md:text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
