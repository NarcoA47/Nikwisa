import { FC } from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import moment from 'moment';
import BottomNav from '../components/BottomNav';

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 px-2 pb-10">
        <section className="py-12 text-center flex flex-wrap justify-between items-start">
          <div className="max-w-4xl mx-auto my-10">
            <Image
              src="/bill-mead.jpg"
              alt="How To Install A Solar Panel"
              width={800}
              height={400}
              className="w-full rounded-lg object-cover"
            />
            <div className="text-gray-700 text-sm mt-2">
              <span>Admin</span> <span>•</span> <span>14 Oct 2022</span> <span>•</span> <span>Wood</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold text-gray-900">How To Install A Solar Panel</h1>
          </div>
          <div className='md:w-[25%] sm:w-full h-auto px-4 flex justify-center items-center sm:flex-row md:flex-col'>
          {
              Array.from([{ name: 'Makusi Nyirenda', date: '2023-10-01', rating: 4.6, totalJobs: 24 }, { name: 'Bwalya Chitalu', date: '2023-09-15', rating: 4.2, totalJobs: 59 }, { name: 'Khumbo Nyirenda', date: '2023-08-30', rating: 4.8, totalJobs: 39 }]).map((product, index) => (
              <div key={index} className="p-2 rounded-lg sm:w-full">
                <div className="flex flex-col justify-center items-center space-x-4">
                  <Image width={120} height={120} src="/Expi1.jpg" alt="Makusi Nyirenda" className="rounded-xl" />
                  <div>
                    <h3 className="text-md font-normal pt-2 text-gray-900">{product.name}</h3>
                    <div className="text-sm text-gray-500">
                      <p>{moment(product.date).format('MMMM Do, YYYY')}</p>
                    </div>
                  </div>
                </div>
              </div>))
            }
          </div>
        </section>

        {/* Find Skilled Taskers */}
        <section className="py-12">
          <h2 className="text-center text-3xl font-bold text-gray-900">Find Skilled Taskers</h2>
          <div className="container md:w-[50%] sm:w-full mx-auto grid grid-cols-1 gap-8 mt-8">
            {
              Array.from([{ name: 'Makusi Nyirenda', field: 'Heating Expert', rating: 4.6, totalJobs: 24 }, { name: 'Bwalya Chitalu', field: 'LPG Consultant', rating: 4.2, totalJobs: 59 }, { name: 'Khumbo Nyirenda', field: 'Bio Gas Expert', rating: 4.8, totalJobs: 39 }]).map((product, index) => (
              <div key={index} className="bg-[#FFF3E3] p-6 rounded-lg shadow-md">
                <div className="flex space-x-4">
                  <Image width={176} height={176} src="/Expi1.jpg" alt="Makusi Nyirenda" className="w-44 h-full" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-gray-700">{product.field}</p>
                    <div className="mt-2 text-sm text-gray-500">
                      <p>Rating: <span className="text-yellow-500">{product.rating} ★</span></p>
                      <p>Total Jobs: {product.totalJobs}</p>
                    </div>
                  </div>
                </div>
              </div>))
            }
          </div>
        </section>

        {/* Find Products Section */}
        <section className="py-12">
          <h2 className="text-center text-3xl font-bold text-gray-900">Find Products</h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {
              Array.from([{ name: '415w jinko solar panel', img: '/battery.jpg', price: 3200 }, { name: '415w jinko solar panel', img: '/battery.jpg', price: 23200 }, { name: '415w jinko solar panel', img: '/battery.jpg', price: 4200 }]).map((product, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="mx-auto"
                  />
                  <div className="mt-4 bg-[#FFF3E3] p-2">
                    <h3 className="mt-4 text-xl font-light text-gray-900">{product.name}</h3>
                    <p className="text-gray-700">K {product.price}</p>
                    <button className="text-gray-900 border border-gray-700 px-4 py-2 mt-4 rounded hover:bg-[#b88f2fde] transition duration-200">
                      Add to Cart
                    </button>
                  </div>

                </div>
              ))
            }
          </div>

          <div className="text-center mt-8">
            <button className="bg-transparent border border-[#B88E2F] text-[#B88E2F] px-4 py-2 rounded hover:bg-[#b88f2fde] transition duration-200">
              Show More
            </button>
          </div>
        </section>
      </div>
      <BottomNav/>
    </>
  );
};

export default Home;
