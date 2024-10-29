"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../reducers/store";
import { fetchProducts } from "../../../reducers/productSlice";

const ProductHome = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="mt-4">
      <h3 className="text-2xl font-bold text-gray-800">
        Alternative Energy Products
      </h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 mt-4">
        {/* Product Data */}
        {products.map((product, index) => (
          <Link
            href={`/single-product/${product.id}`}
            key={index}
          >
            {/* Product Card */}
            <div className="bg-white text-center rounded-lg overflow-hidden shadow-md text-gray-800 hover:shadow-lg transition duration-200 cursor-pointer">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain p-4"
              />
              <div className="p-2">
                <h4 className="font-bold text-sm text-gray-800 mt-2">
                  {product.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">K{product.price}</p>
                <p className="text-xs text-gray-600 mt-1">{product.stock}</p>
                <div className="flex justify-center items-center mt-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-400 ${
                        i < product.rating ? "text-yellow-400" : "text-gray-300"
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
  );
};

export default ProductHome;