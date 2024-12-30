import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaStar } from "react-icons/fa6";
import { Avatar } from 'flowbite-react';
import proPic from "../assets/profile.jpg"; 

const ReviewCard = ({ rating, reviewText, name, role, image }) => {
  return (
    <div className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
      <div className="text-amber-500 flex gap-2 mb-4">
        {[...Array(rating)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
      <div className="flex flex-col items-start text-left mt-0 space-y-4"> 
        <p className="max-w-lg">{reviewText}</p>
        <div className="flex items-center gap-4">
          <Avatar alt={`avatar of ${name}`} img={image} className="w-16 h-16" />
          <div>
            <h5 className="text-lg font-medium">{name}</h5>
            <p className="text-base">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Review = () => {
  const reviews = [
    {
      id: 1,
      rating: 4,
      reviewText:
        "This platform has made discovering new books so much easier. The recommendations are always spot on, and the layout is intuitive. I found my next favorite book here!",
      name: "Alice Williams",
      role: "Editor, BookWorld",
    },
    {
      id: 2,
      rating: 5,
      reviewText:
        "A truly fantastic experience! The variety of books available is impressive, and the purchase process is quick and seamless. This is my go-to for all book purchases now.",
      name: "Bob Johnson",
      role: "Author & Blogger",
    },
    {
      id: 3,
      rating: 3,
      reviewText:
        "The app is decent, but it could use a few improvements, like adding book reviews directly from the platform. The catalog is great, though, and I still use it regularly.",
      name: "Charlie Brown",
      role: "Freelance Writer",
    },
    {
      id: 4,
      rating: 5,
      reviewText:
        "I’m loving this app! It’s so easy to find books, and the layout makes browsing enjoyable. Plus, the recommendations have helped me discover books I never would’ve found otherwise.",
      name: "Dana Lee",
      role: "Product Manager, LitMarket",
    },
    {
      id: 5,
      rating: 4,
      reviewText:
        "This app has a great collection of books, but I’d love to see more audiobooks. Still, the browsing experience is fantastic and I’ve bought several great books here.",
      name: "Ethan Green",
      role: "Student, Book Enthusiast",
    },
  ];

  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">Our Customers</h2>
      <div className="mySwiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard
                rating={review.rating}
                reviewText={review.reviewText}
                name={review.name}
                role={review.role}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Review;
