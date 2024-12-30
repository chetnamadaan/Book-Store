import React from 'react';
import BannerCard from '../home/BannerCard';

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-red-300 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">


        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Discover and Manage Your Favorite Books <span className="text-teal-700">with Ease</span>
          </h2>
<p className="md:w-5/5 text-lg font-semibold text-transparent bg-clip-text bg-black leading-relaxed mb-6 drop-shadow-lg">
          Welcome to <strong>BOOK SYNC</strong>, your go-to platform for managing and exploring a vast collection of books. 
            Whether you're looking to discover new reads, organize your personal library, or share recommendations, 
            we provide everything you need in one place. Connect with fellow book enthusiasts, explore various genres, 
            and enhance your reading experience seamlessly.
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="py-2 px-2 rounded-sm outline-none"
            />
            <button
              className="bg-teal-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200"
            >
              Search
            </button>
          </div>
        </div>


        <div>
          <BannerCard />

        </div>
      </div>
    </div>
  );
};

export default Banner;
