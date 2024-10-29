import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../reducers/store';
import { fetchCategories } from '../../../reducers/productSlice';

const CategoriesFilter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) => state.product.categories);
  const loading = useSelector((state: RootState) => state.product.loading);
  const error = useSelector((state: RootState) => state.product.error);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="hidden md:flex">
      <section className="my-12 mx-32 text-center items-center  ">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">Categories</h3>
        <a href="#categories" className="text-yellow-500 font-medium">
          See All
        </a>
      </div>
      {/* Horizontal Scrollable Container */}
      <div className="flex items-center justify-center overflow-x-auto space-x-6 mt-4 no-scrollbar">
        {categories.map((category) => (
          <a
            href={`/categories/${category.name.toLowerCase()}`}
            key={category.id}
            className="flex flex-col items-center text-center"
          >
            <div className="md:w-24 md:h-24 h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="mt-2 text-sm text-gray-700">{category.name}</span>
          </a>
        ))}
      </div>
    </section>
    </div>
  );
};

export default CategoriesFilter;
