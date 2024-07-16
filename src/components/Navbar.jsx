import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">MyAuthApp</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-gray-300 hover:text-white">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="text-gray-300 hover:text-white">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
