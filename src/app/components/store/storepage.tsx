import React from "react";
import Image from "next/image";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Link from "next/link";
import { products } from "@/app/utils/data"; // Assuming you have the product data in the same way as in ProductHome
import BottomNav from "../BottomNav";

const StorePage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 sm:p-2 md:p-4 lg:p-6 mx-auto sm:px-2 md:px-4 lg:px-8 max-w-screen-xl">
        {/* Store Banner */}

        <section className="container mx-auto py-8">
          <div className="flex flex-row items-center justify-between p-4 rounded-lg space-x-4">
            {/* Store Image (First Section) */}
            <div className="flex-shrink-0">
              <Image
                src="/ExpI3.jpg"
                alt="Green Belt Africa"
                width={150}
                height={150}
                style={{ width: "100%", height: "auto" }}
                className="max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-[200px]"
              />
            </div>

            {/* Store Information (Second Section) */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-sm lg:text-3xl font-bold text-gray-800 mb-0">
                Green Belt Africa
              </h1>
              <div className="flex items-center justify-center lg:justify-start space-x-2 mt-1">
                <span className="text-yellow-500 text-lg lg:text-2xl">
                  ★★★★☆
                </span>
                <span className="text-gray-500 text-xs lg:text-base">
                  (37 Reviews)
                </span>
              </div>
              <p className="text-sm lg:text-lg text-gray-600 mt-1">
                216 products available
              </p>
            </div>

            {/* Action Icons (Third Section) */}
            <div className="flex-shrink-0 flex flex-col space-y-2">
              <button className="bg-green-500 text-white p-2 lg:p-3 rounded-full">
                <LibraryAddIcon fontSize="small" />
              </button>
              <button className="bg-green-500 text-white p-2 lg:p-3 rounded-full">
                <QuestionAnswerIcon fontSize="small" />
              </button>
            </div>
          </div>
        </section>

        {/* Tabs for Top Selling and All Products */}
        <section className="container mx-auto py-4 px-4">
          <div className="flex justify-center lg:justify-start space-x-8 border-b border-gray-200 pb-4">
            <button className="text-lg font-semibold text-gray-800 border-b-4 border-yellow-600 pb-2">
              Top Selling
            </button>
            <button className="text-lg font-semibold text-gray-800 hover:border-b-4 hover:border-yellow-600 pb-2">
              All Products
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-4">
            {/* Using the same product cards from ProductHome */}
            {products.map((product, index) => (
              <Link
                href={`/products/${product.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                key={index}
              >
                {/* Product Card */}
                <div className="bg-white text-center rounded-lg overflow-hidden shadow-md text-gray-800 hover:shadow-lg transition duration-200 cursor-pointer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-contain p-4"
                  />
                  <div className="p-2">
                    <h4 className="font-bold text-sm text-gray-800 mt-2">
                      {product.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {product.price}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">
                      {product.stock}
                    </p>
                    <div className="flex justify-center items-center mt-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span
                          key={i}
                          className={`text-yellow-400 ${
                            i < product.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <button className="bg-[#B88E2F] w-full text-white px-3 py-1 mt-2 rounded hover:bg-yellow-600 transition duration-200 text-xs md:text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <BottomNav />
    </>
  );
};

export default StorePage;

