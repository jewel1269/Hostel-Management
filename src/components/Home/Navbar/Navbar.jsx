import { NavLink } from "react-router-dom";
import logo from "../../../assets/jewe-removebg-preview.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to={"/"}>
              <button className="btn btn-sm btn-ghost">Home</button>
            </NavLink>
            <NavLink to={"/topFeature"}>
              <button className="btn btn-sm btn-ghost">Top Features</button>
            </NavLink>
            <NavLink to={"/"}>
              <button className="btn btn-sm btn-ghost">Contact Us</button>
            </NavLink>
          </ul>
        </div>
        <img className="lg:h-16 h-8 w-8  lg:w-16" src={logo} alt="" />
        <a className="btn btn-ghost text-xl">Hosteller</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink to={"/"}>
            <button className="btn btn-sm btn-ghost">Home</button>
          </NavLink>
          <NavLink to={"/topFeature"}>
            <button className="btn btn-sm btn-ghost">Top Features</button>
          </NavLink>
          <NavLink to={"/"}>
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
                      className="lg:tooltip"
                      data-tip="hello"
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content text-start mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
                      className="modal  bg-gradient-to-r from-indigo-500  "
                    >
                      <div className="modal-box bg-slate-200 ">
                        <form method="dialog bg-slate-100">
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>

                        <div className="max-w-md  sm:flex sm:space-x-6  ">
                          <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                            <img
                              src={user.photoURL}
                              alt=""
                              className="object-cover object-center w-full h-full rounded  bg-g dark:bg-gray-500"
                            />
                          </div>
                          <div className="flex flex-col space-y-4">
                            <div>
                              <h2 className="text-2xl font-semibold">
                                {user.displayName}
                              </h2>
                              <span className="text-sm   dark:text-gray-600">
                                General manager
                              </span>
                            </div>
                            <div className="space-y-1">
                              <span className="flex items-center space-x-2">
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
                                    <div>Email: {user.email}</div>
                                  ) : (
                                    <h2>Email:("Null")</h2>
                                  )}
                                </span>
                              </span>
                              <h2>Uid: {user.uid}</h2>
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
