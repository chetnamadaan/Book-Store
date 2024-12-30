import React from 'react';
import { HiOutlineBookOpen, HiOutlineLibrary, HiOutlineClock } from 'react-icons/hi';

const Dashboard = () => {
    return (
        <div className="flex-1 px-6 py-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome to the BOOK SYNC Dashboard</h1>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <HiOutlineBookOpen className="text-3xl text-blue-600" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-600">Total Books</h3>
                        <p className="text-3xl font-bold text-gray-800">1,250+</p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <HiOutlineLibrary className="text-3xl text-yellow-600" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-600">Genres Available</h3>
                        <p className="text-3xl font-bold text-gray-800">15+</p>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <HiOutlineClock className="text-3xl text-green-600" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-600">Upcoming Releases</h3>
                        <p className="text-3xl font-bold text-gray-800">5+</p>
                    </div>
                </div>
            </div>


            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">About This Site</h3>
                <p className="text-gray-500">
                    Welcome to BOOK SYNC, our Book Management platform! This platform allows you to manage and buy a vast collection of books, explore genres, track new releases, and manage your reading lists. Whether you're a book lover or a library manager, this platform offers an intuitive interface to help you stay organized and engaged with the literary world.
                </p>
            </div>


            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Books Overview</h3>
                <p className="text-gray-500">
                    Our collection spans various genres, including Fiction, Non-Fiction, Science Fiction, Mystery, Fantasy, and more. You can browse, add to your favorites, and even manage your library.
                </p>
            </div>

          


            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Features</h3>
                <ul className="space-y-4">
                    <li className="flex items-center">
                        <span className="text-gray-500">📚 Browse books by genre, author, or title.</span>
                    </li>
                    <li className="flex items-center">
                        <span className="text-gray-500">🔖 Add books to your favorites and keep track of your reading progress.</span>
                    </li>
                    <li className="flex items-center">
                        <span className="text-gray-500">📝 Maintain your personal reading lists and share them with others.</span>
                    </li>
                    <li className="flex items-center">
                        <span className="text-gray-500">🚀 Receive notifications for upcoming releases and new book arrivals.</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
