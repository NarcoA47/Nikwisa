import React from "react";
import Image from "next/image"; // Import Next.js Image component
import Link from "next/link";

const MobileSearchBar = () => {
  return (
    <div className="w-full p-4 bg-gray-100 md:hidden">
      <div className="flex justify-between items-center ">
        <Link href="/" className="flex-shrink-0 p-2 rounded-md">
          {/* Add background color around the logo */}
          <Image src="/logo.png" alt="Company Logo" width={180} height={50} />
        </Link>
        <div className="flex flex-col">
          <span className="text-xs text-gray-600">charinga@nikwisa.com</span>
          <span className="text-xs text-gray-600">+260977862033</span>
        </div>
      </div>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default MobileSearchBar;
