import React from 'react';
import bookImage from '../assets/istockphoto-173562091-612x612.jpg'; 
import bookImg from '../assets/reading-communities-1024x535.png'; 

const About = () => {
  return (
    <div className="bg-red-50 min-h-screen flex flex-col"> 
      <div className="container mx-auto p-8 flex-1"> 
        <h1 className="text-center text-4xl font-bold text-red-900 mb-6 mt-20"> 
          Welcome to BOOK SYNC
        </h1>
        <p className="text-lg text-gray-800 text-center mb-8"> 
          BOOK SYNC is your ultimate online destination for discovering, sharing, and enjoying a world of books. 
          Whether you're a casual reader or a book enthusiast, our platform helps you connect with your favorite 
          books and authors in an easy and seamless way.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img 
              src={bookImage}
              alt="Book Collection" 
              className="w-full h-auto object-contain"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-red-600 mb-2">
                Explore a Wide Range of Books
              </h2>
              <p className="text-gray-700"> 
                Browse through our vast collection of books across various genres, from bestsellers to timeless classics. 
                Whether you're looking for fiction, non-fiction, self-help, or educational resources, we have it all!
              </p>
            </div>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img 
              src={bookImg}
              alt="Community of Readers" 
              className="w-full h-auto object-contain"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-red-600 mb-2"> 
                Join a Community of Book Lovers
              </h2>
              <p className="text-gray-700"> 
                Become a part of our vibrant community where readers share their favorite books, reviews, and recommendations. 
                Engage in lively discussions and discover new reads through our platform.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-red-700 mb-4"> 
            Why Choose BOOK SYNC?
          </h2>
          <p className="text-lg text-gray-800"> 
            At BOOK SYNC, we offer a streamlined, user-friendly experience, making it easier than ever to find and enjoy 
            books. From personalized recommendations to a curated list of trending titles, we help you sync with your 
            reading preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
