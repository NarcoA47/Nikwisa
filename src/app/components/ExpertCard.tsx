import React from 'react';
import Image from 'next/image';

type ExpertProps = {
  name: string;
  title: string;
  rating: number;
  totalJobs: number;
  imageUrl: string;
};

const ExpertCard: React.FC<ExpertProps> = ({ name, title, rating, totalJobs, imageUrl }) => {
  return (
    <div className="bg-[#FAF4EB] p-2 sm:p-4 rounded-lg shadow-lg flex items-center space-x-2 sm:space-x-4 hover:bg-[#e6dbcc] transition duration-200">
      <Image
        width={96} height={96}
        className="rounded-md object-cover sm:w-[176px] sm:h-[176px]" 
        src={imageUrl}
        alt={name}
      />
      <div className="flex-1">
        <h2 className="text-base sm:text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-xs sm:text-sm text-[#B88E2F]">{title}</p>
        <div className="mt-2 flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
          <span className="text-yellow-500 text-xs sm:text-sm">Rating ⭐ {rating}</span>
          <span className="text-gray-500 text-xs sm:text-sm">Total Jobs: {totalJobs}</span>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
