'use client';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch} from '../../../reducers/store'; // Update based on your store setup
import { addProduct } from '../../../reducers/productSlice';
import HeaderDashboard from '@/app/components/dashboard/navigation';

const CreatePrpductPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const products = useSelector((state: RootState) => state.product.products);
  // const { loading, error } = useSelector((state: RootState) => state.products);

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [image, ] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) return alert('Please upload an image');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price.toString());
    formData.append('description', description);
    formData.append('imageUrl', image);

    const product = {
      name,
      title: name, // Assuming title is the same as name
      price: price.toString(), // Convert price to string
      description,
      imageUrl: URL.createObjectURL(image),
      image: URL.createObjectURL(image), // Convert image to string URL
      category: 'default', // Replace 'default' with the appropriate category
      stock: 0, // Add default stock value
      rating: 0 // Add default rating value
    };

    dispatch(addProduct(product));
  };

  function handleImageUpload(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="flex h-screen font-sans">
      <div className="flex-grow">
        <HeaderDashboard />
        <div className='bg-gray-200 p-4 md:p-8'>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Create Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-800"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                  Price
                </label>
                <input
                  id="price"
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-800"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-800"
                  placeholder="Hi! I'd like to ask about"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
                  Images
                </label>
                <input
                  id="images"
                  type="file"
                  onChange={handleImageUpload}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-800 text-white py-2 rounded-lg hover:bg-yellow-700 transition"
              >
                Create Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePrpductPage;
