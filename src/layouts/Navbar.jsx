import { Link } from "react-router-dom";
import useAuthContext from "../components/hooks/useAuthContext";

const Navbar = () => {
  const { user, logoutUser } = useAuthContext();

  return (
    <div className="navbar bg-base-100 shadow-sm bg-blend-color">
      {/* Logo section */}
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Alo</a>
      </div>

      {/* Centered navigation links */}
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1">
          {user&&(<li>
            <a>Support</a>
          </li>)}
          {user && (
            <li>
              <Link to="/class">Class</Link>
            </li>
          )}
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
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <button className="btn btn-primary btn-block bg-black">
                View cart
              </button>
            </div>
          </div>
        </div>

        {/* Profile dropdown */}
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {/* <li>
              <Link to="profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
              </li> */}
              <li>
                <Link to="/dashboard">Settings</Link>
              </li>
              <li>
                <a onClick={logoutUser}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-center gap-4 mt-6">
              <Link
                to="/login"
                className="px-6 py-2 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-6 py-2 rounded-xl border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
