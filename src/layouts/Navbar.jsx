import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm bg-blend-color">
      {/* Logo section */}
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      {/* Centered navigation links */}
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/class">Class</Link>
          </li>
          <li>
            <a href="/about" className="text-black">
              About
            </a>
          </li>
          <li>
            <a href="/about" className="text-black">
              Countc
            </a>
          </li>
        </ul>
      </div>

      {/* Right side with dropdowns */}
      <div className="navbar-end">
        {/* Empty dropdown - you might want to add content here */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            {/* Empty button - add icon if needed */}
          </div>
          <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>

        {/* Profile dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
