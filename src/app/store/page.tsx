import React from 'react';
import StoreCard from '../components/store/storepage';
import Navbar from '../components/navbar';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Navbar/>
      <StoreCard/>
    </div>
  );
};

export default Home;
