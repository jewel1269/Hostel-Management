import { NavLink } from "react-router-dom";
import logo from "../../../assets/jewe-removebg-preview.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Tooltip } from 'react-tooltip'
import './Active.css'
import 'animate.css';



const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const scrollToTopFeature = () => {
    const topFeatureSection = document.getElementById("topFeatureSection");
    if (topFeatureSection) {
      topFeatureSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <ul id="sidebar"
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to={"/"}>
              <button className="btn btn-sm btn-ghost">Home</button>
            </NavLink>
            <NavLink  onClick={scrollToTopFeature}>
              <button className="btn btn-sm btn-ghost">Top Features</button>
            </NavLink>
            <NavLink to={"/contact"}>
              <button className="btn btn-sm btn-ghost">Contact Us</button>
            </NavLink>
          </ul>
        </div>
        <img className="lg:h-16 h-8 w-8  lg:w-16" src={logo} alt="" />
        <a className="btn btn-ghost text-xl">Hosteller</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
        id="sidebar" className="menu menu-horizontal px-1">
          <NavLink to={"/"}>
            <button className="btn btn-sm btn-ghost">Home</button>
          </NavLink>
          <NavLink onClick={scrollToTopFeature}>
            <button className="btn text-black btn-sm btn-ghost">Top Features</button>
          </NavLink>
          <NavLink to={"/contact"}>
            <button className="btn btn-sm btn-ghost">Contact Us</button>
          </NavLink>
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
              {user ? (
                <div>
                  <div>
                    <img 
                    
                      alt="Tailwind CSS Navbar component"
                      src={user.photoURL}
                      data-tooltip-id="my-tooltip" 
                      data-tooltip-content={user ? user.displayName : "Null"}
                    />
                  </div>
                  <Tooltip id="my-tooltip" />
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content text-start mt-3 z-[100] p-2 shadow bg-gradient-to-r from-indigo-300 from-10% via-sky-600 via-30% to-emerald-400 to-90% rounded-box w-52"
                  >
                    <button
                      className="btn btn-xs  btn-ghost text-start"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      <span>1.</span> Profile
                    </button>
                    <dialog
                      id="my_modal_3"
                      className="   modal sm:modal md:modal   bg-gradient-to-r from-indigo-200  "
                    >
                      <div className="  modal-box bg-slate-200 bg-gradient-to-r from-teal-200 to-yellow-100 h-[450px] ">
                        <form method="dialog bg-slate-100">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>

                        <div className="max-w-md lg:inline-block   sm:flex sm:space-x-6  ">
                          <div className=" w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                            <img
                              src={user.photoURL}
                              alt=""
                              className="object-cover shadow-2xl shadow-black object-center lg:ml-7  lg:w-full lg:h-full md:h-full md:w-full h-full w-full rounded  bg-g dark:bg-gray-500"
                            />
                          </div>
                          <div className="flex p-1.5 mx-auto my-4 max-w-sm rounded-xl bg-gradient-to-r from-rose-100 via-fuchsia-200 to-indigo-100 shadow-2xl shadow-black  border mt-4 flex-col space-y-4">
                            <div>
                              <h2 className="text-2xl  border-black rounded-xl p-2 font-semibold">
                                Name: {user.displayName}
                              </h2>
                              <hr  />

                              <span className="text-sm hover:border border-black rounded-xl p-2  dark:text-gray-600">
                                General manager
                              </span>
                              <hr />
                            </div>
                            <div className="space-y-1">
                              <span className="flex items-center ml-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  aria-label="Email address"
                                  className="w-4 h-4"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                                  ></path>
                                </svg>
                                <span className="   dark:text-gray-600">
                                  {user ? (
                                    <div className=" border-black text-lg  rounded-xl p-2">
                                      Email: {user.email}
                                    </div>
                                  ) : (
                                    <h2>Email:("Null")</h2>
                                  )}
                                </span>
                                
                              </span>
                              <hr />
                              <h2 className=" rounded-xl p-2">
                                Uid: {user.uid}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </dialog>
                    <NavLink to={"/upProfile"}>
                      <span className="ml-10">2.</span>
                      <button className="btn  btn-xs btn-ghost">
                        Update Profile
                      </button>
                    </NavLink>
                  </ul>
                </div>
              ) : (
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              )}
            </div>
          </div>
        </div>
        {user ? (
          <button onClick={handleSignOut} className="btn btn-accent btn-sm">
            Log Out
          </button>
        ) : (
          <NavLink to={"/login"}>
            <button className="btn btn-accent btn-sm">Login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
