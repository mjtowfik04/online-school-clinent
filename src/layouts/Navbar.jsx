import { Link } from "react-router-dom";
import useAuthContext from "../components/hooks/useAuthContext";
import { useState } from "react";

const Navbar = () => {
  const { user, logoutUser } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Logo */}
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Alo</a>
      </div>

      {/* Hamburger menu on small screens */}
      <div className="navbar-center lg:hidden">
        <button
          className="btn btn-ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Horizontal menu for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {user && <li><Link to="/support">Support</Link></li>}
          {user && <li><Link to="/class">Class</Link></li>}
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Right section */}
      <div className="navbar-end">
        {/* Cart */}
        {user&&(<div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            🛒
          </div>
          <div tabIndex={0} className="card dropdown-content bg-base-100 mt-3 w-52 shadow z-50">
            <div className="card-body">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>)}

        {/* User Profile or Auth Links */}
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-52 bg-base-100 rounded-box shadow z-50">
              <li><Link to="/dashboard">Settings</Link></li>
              <li><a onClick={logoutUser}>Logout</a></li>
            </ul>
          </div>
        ) : (
          <div className="hidden lg:flex gap-2">
            <Link to="/login" className="btn btn-primary text-white">Login</Link>
            <Link to="/register" className="btn btn-outline btn-primary">Register</Link>
          </div>
        )}
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-base-100 shadow-md z-40 lg:hidden">
          <ul className="menu menu-vertical px-4 py-2">
            {user && <li><Link to="/support">Support</Link></li>}
            {user && <li><Link to="/class">Class</Link></li>}
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {!user && (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
