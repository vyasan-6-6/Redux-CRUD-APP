import { useState } from 'react';
import { Search } from 'lucide-react';

const Navbar = ( ) => {
   

  return (
    <nav className="  text-black shadow-lg">
  <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <img src="https://redux-toolkit.js.org/img/redux.svg" alt="RTK Logo" className="w-8 h-8" />
      <div className="text-2xl font-bold">MyApp</div>
    </div>

    {/* Menu Links */}
    <ul className="flex gap-6">
      <li><i className="fas fa-home"></i> <a href="#post" className="hover:text-blue-200 transition">Post</a></li>
      <li><i className="fas fa-list"></i> <a href="#all-post" className="hover:text-blue-200 transition">All Post</a></li>
    </ul>

    {/* Search and Button */}
    <div className="flex gap-3 items-center">
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search..." 
          className="px-4 py-2 rounded text-gray-800 focus:outline-none w-40"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <button className="bg-white text-blue-600 px-4 py-2 rounded font-medium hover:bg-blue-50 transition">
        Sign Up
      </button>
    </div>
  </div>
</nav>
  );
};

export default Navbar;