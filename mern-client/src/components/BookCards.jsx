import React from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules'; 
import { Link } from 'react-router-dom';

import { FaCartShopping } from "react-icons/fa6";

const BookCards = ({ headline, books }) => {
    console.log(books);
  

    const validBooks = books.filter(book => book); 

    return (
        <div className='my-16 px-4 lg:px-24'>
            <h2 className='text-6xl text-center font-bold text-black my-5'>{headline}</h2>

            <div className='mt-12'>
                {validBooks.length > 0 ? ( 
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 60,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper w-full h-full"
                    >
                        {validBooks.map(book => (
                            <SwiperSlide key={book._id}>
                                <Link to={`/book/${book._id}`}>
                                    <div className="relative">
                                        <img src={book.imageUrl} alt={book.bookTitle} className="w-full h-auto object-cover" />
                                        <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-3 rounded-full'>
                                            <FaCartShopping className='w-6 h-6 text-white'/>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-2xl font-semibold">{book.bookTitle}</h3>
                                        <p className="text-xl text-gray-700">{book.authorName}</p>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-2xl font-semibold">₹500.00</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <p className='text-center text-xl text-gray-500'>No books available.</p> 
                )}
            </div>
        </div>
    );
};

export default BookCards;
