"use client";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../reducers/store';
import { fetchCategories, fetchProducts } from '../../../reducers/productSlice';
import SortingBar from '../SortingBar';
import Link from 'next/link';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
  stock: React.ReactNode;
  rating: number;
}

export interface Category {
  id: number;
  name: string;
}

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) => state.product.categories);
  const products = useSelector((state: RootState) => state.product.products);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (categories.length > 0) {
      setActiveCategory(categories[0].id); // Set the first category as the default active category
    }
  }, [categories]);

  return (
    <>
      <SortingBar items={products} callback={(sortedItems: Product[]) => console.log(sortedItems)} />
      <div className="flex justify-center py-6">
        <div className="max-w-screen-lg w-full px-4">
          {/* Filter Buttons on Top */}
          <div className="flex flex-wrap justify-center mb-6 gap-2">
            {categories.map((category: Category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 w-auto min-w-[120px] text-center rounded-md border ${
                  activeCategory === category.id ? 'bg-yellow-500 text-white' : 'bg-white text-gray-800'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Render Products Here */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 mt-4">
            {products.map((product, index) => (
              <Link
                href={`/products/${product.title.toLowerCase().replace(/\s+/g, "-")}`}
                key={index}
              >
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
                    <p className="text-xs text-gray-500 mt-1">${product.price}</p>
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
        </div>
      </div>
    </>
  );
};

export default Products;
