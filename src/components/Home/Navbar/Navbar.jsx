import { NavLink } from "react-router-dom";
import logo from "../../../assets/jewe-removebg-preview.png"


const Navbar = () => {
  return (
    <div className="navbar border bg-gradient-to-r from-indigo-500   rounded-2xl shadow-xl bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>Update Profile</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <img className="lg:h-16 h-8 w-8  lg:w-16" src={logo} alt="" />
        <a className="btn btn-ghost text-xl">Hosteller</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          
           <NavLink to={'/'}><button className="btn btn-sm btn-ghost">Home</button></NavLink>
           <NavLink to={'/'}><button className="btn btn-sm btn-ghost">Update Profile</button></NavLink>
           <NavLink to={'/'}><button className="btn btn-sm btn-ghost">Home</button></NavLink>
         
          
            
        
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
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
        <NavLink to={'/login'}><button className="btn btn-accent btn-sm">Login</button></NavLink>
      </div>
    </div>
  );
};

export default Navbar;
