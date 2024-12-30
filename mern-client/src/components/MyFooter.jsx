import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const MyFooter = () => {
  return (
    <footer className="bg-red-400 text-gray py-8">
      <div className="w-full px-6 lg:px-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold text-xl mb-3">About Us</h3>
            <ul>
              <li><a href="#" className="block hover:text-gray-800 transition duration-200">Our Story</a></li>
              <li><a href="#" className="block hover:text-gray-800 transition duration-200">Careers</a></li>
              <li><a href="#" className="block hover:text-gray-800 transition duration-200">Blog</a></li>
              <li><a href="#" className="block hover:text-gray-800 transition duration-200">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-3">Support</h3>
            <ul>
              <li><a href="#" className="block hover:text-gray-800 transition duration-200">Help Center</a></li>
              <li><a href="#" className="block hover:text-gray-800 transition duration-200">FAQs</a></li>
              <li><a href="#" className="block hover:text-gray-800 transition duration-200">Contact Us</a></li>
              <li><a href="#" className="block hover:text-gray-800 transition duration-200">Live Chat</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-3">Legal</h3>
            <ul>
              <li><a href="#" className="block hover:text-gray-800 transition duration-200">Privacy Policy</a></li>
              <li><a href="#" className="block hover:text-gray-800 transition duration-200">Terms & Conditions</a></li>
              <li><a href="#" className="block hover:text-gray-800 transition duration-200">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-3">Download</h3>
            <ul>
              <li><a href="#" className="block hover:text-gray-800 transition duration-200">iOS</a></li>
              <li><a href="#" className="block hover:text-gray-800 transition duration-200">Android</a></li>
              <li><a href="#" className="block hover:text-gray-800 transition duration-200">Windows</a></li>
              <li><a href="#" className="block hover:text-gray-800 transition duration-200">MacOS</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-red-500 py-4 sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-sm">© BOOK SYNC</p>
          </div>
          <div className="mt-4 flex justify-center space-x-6 sm:mt-0">
            <a href="#" className="text-gray-300 hover:text-white transition duration-200">
              <BsFacebook size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-200">
              <BsInstagram size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-200">
              <BsTwitter size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-200">
              <BsGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
