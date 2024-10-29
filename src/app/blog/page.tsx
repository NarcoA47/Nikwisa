import { FC } from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import BottomNav from '../components/BottomNav';

const Home: FC = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50">

    {/* Welcome Section */}
    <section className="bg-[#FFF3E3] py-12 text-center">
      <h1 className="text-4xl font-bold text-[#B88E2F]">Welcome To Nikwisa</h1>
      <p className="text-lg mt-2 text-gray-800">What Do You Need Help With Today</p>
    </section>

    {/* Main Content */}
    <div className="container mx-auto py-12 px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Blog posts */}
      <div className="lg:col-span-2 space-y-12">
        {/* Post 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/bill-mead.jpg"
            alt="How To Install A Solar Panel"
            width={800}
            height={400}
            className="w-full object-cover"
          />
          <div className="p-6">
            <div className="text-sm text-gray-600 flex items-center space-x-2">
              <span>Admin</span>
              <span>&bull;</span>
              <span>14 Oct 2022</span>
              <span>&bull;</span>
              <span>Wood</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold text-gray-800">How To Install A Solar Panel</h2>
          </div>
        </div>

        {/* Post 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/battery.jpg"
            alt="Lead Acid Batteries Vs Lithium"
            width={800}
            height={400}
            className="w-full object-cover"
          />
          <div className="p-6">
            <div className="text-sm text-gray-600 flex items-center space-x-2">
              <span>Admin</span>
              <span>&bull;</span>
              <span>14 Oct 2022</span>
              <span>&bull;</span>
              <span>Handmade</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold text-gray-800">Lead Acid Batteries Vs Lithium</h2>
          </div>
        </div>

        {/* Post 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/Gas.jpg"
            alt="How to Choose the Best Gas Stove Brands"
            width={800}
            height={400}
            className="w-full object-cover"
          />
          <div className="p-6">
            <div className="text-sm text-gray-600 flex items-center space-x-2">
              <span>Admin</span>
              <span>&bull;</span>
              <span>14 Oct 2022</span>
              <span>&bull;</span>
              <span>Wood</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold text-gray-800">How to Choose the Best Gas Stove Brands</h2>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside>
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Categories</h3>
          <ul className="space-y-2">
            <li className="hover:underline text-[#B88E2F]"><a href="#">Lighting (2)</a></li>
            <li className="hover:underline text-gray-800"><a href="#">Cooking (8)</a></li>
            <li className="hover:underline text-gray-800"><a href="#">Heating (7)</a></li>
            <li className="hover:underline text-gray-800"><a href="#">Cooling (1)</a></li>
            <li className="hover:underline text-gray-800"><a href="#">Solar (6)</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Recent Posts</h3>
          <ul className="space-y-4">
            <li className="hover:underline text-gray-800"><a href="#">Going all-in with millennial design</a></li>
            <li className="hover:underline text-gray-800"><a href="#">Exploring new ways of decorating</a></li>
            <li className="hover:underline text-gray-800"><a href="#">Handmade pieces that took time to make</a></li>
            <li className="hover:underline text-gray-800"><a href="#">Modern home in Milan</a></li>
            <li className="hover:underline text-gray-800"><a href="#">Colorful office redesign</a></li>
          </ul>
        </div>
      </aside>
    </div>
    </div>
    <BottomNav/>
    </>
  );
};

export default Home;
