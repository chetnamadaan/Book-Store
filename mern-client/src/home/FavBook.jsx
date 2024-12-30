import React from 'react';
import { Link } from 'react-router-dom';
import FavBookImg from "../assets/favoriteBook.jpg"; 

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
        <img src={FavBookImg} alt="Favorite Book" className='rounded-md shadow-lg md:w-10/12' />
      </div>
      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 text-red-800'>
          Discover Your <span className='text-brown-700'>Next Favorite Book</span>
        </h2>
        <p className='mb-10 text-lg md:w-5/6 text-gray-800'>
          Dive into a world of endless possibilities with our wide collection of books. Whether you are looking for timeless classics or the latest bestsellers, you’ll find the perfect book to satisfy your curiosity and enrich your mind.
        </p>

        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
          <div>
            <h3 className='text-3xl font-bold text-red-600'>800+</h3>
            <p className='text-base text-gray-700'>Books in Our Collection</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold text-red-600'>500+</h3>
            <p className='text-base text-gray-700'>Registered Readers</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold text-red-600'>1200+</h3>
            <p className='text-base text-gray-700'>PDF Downloads</p>
          </div>
        </div>

        <Link to="/shop" className='mt-8 block'>
          <button className='bg-red-900 text-white font-semibold px-5 py-2 rounded hover:bg-brown-700 transition-all duration-300'>
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FavBook;
