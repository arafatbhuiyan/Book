import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {

  const Links = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/readlist">ReadList</Link></li>
    </>
  );

  return (
    
    <div className="bg-base-100 shadow-sm mx-4 md:mx-8 lg:mx-16">
      
      <div className="navbar max-w-6xl mx-auto px-4 lg:px-8">

        {/* Left */}
        <div className="navbar-start">

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" fill="none" 
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
              {Links}
            </ul>
          </div>

          <a className="btn btn-ghost text-xl">Books</a>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {Links}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          <button className="btn">Button</button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;