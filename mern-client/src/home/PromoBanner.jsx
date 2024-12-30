import React from 'react';
import { Link } from 'react-router-dom';
import bookPic from '../assets/awardbooks.png'; 

const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-red-100 px-4 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 leading-snug text-red-800">
            Explore Our Curated Book Collection
          </h2>
          <p className="text-lg mb-6 text-gray-800">
            Discover books across various genres, from gripping thrillers to heartwarming stories. Explore now and find your next favorite read!
          </p>
          <Link to="/shop" className="block">
            <button className="bg-red-900 text-white font-semibold px-5 py-2 rounded hover:bg-brown-700 transition-all duration-300">
              Start Exploring
            </button>
          </Link>
        </div>
        <div>
          <img src={bookPic} alt="Book Collection" className="w-96 rounded-md shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
