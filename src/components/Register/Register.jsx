import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");

  const handleRegi = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    if (password.length < 6) {
      setRegisterError("Password should be 6 character");
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one Upper Case character"
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one Lower Case character"
      );
      return;
    }

    //createUser
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Registered");
      })
      .then((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };

  return (
    <section className="p-6 border lg:mb-5 bg-gradient-to-r from-teal-300 to-yellow-100 border-black lg:ml-20 lg:mr-20 lg:mt-10 rounded-xl">
      <form
        onSubmit={handleRegi}
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm  dark:bg-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Personal Inormation</p>
            <p className="text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              fuga autem eum!
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                Name
              </label>
              <input
                id="name"
                type="name"
                placeholder="Name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2  focus:ring-violet-400 focus:dark:ring-violet-600 border-2 shadow-xl dark:border-gray-300"
              />
            </div>

            <br />
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2  focus:ring-violet-400 focus:dark:ring-violet-600 border-2 shadow-xl dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full rounded-md focus:ring focus:ring-opacity-75  p-2 focus:ring-violet-400 focus:dark:ring-violet-600 border-2 shadow-xl dark:border-gray-300"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75  p-2 focus:ring-violet-400 focus:dark:ring-violet-600 border-2 shadow-xl dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-sm">
                City
              </label>
              <input
                id="city"
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2  focus:ring-violet-400 focus:dark:ring-violet-600 border-2 shadow-xl dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="state" className="text-sm">
                State / Province
              </label>
              <input
                id="state"
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75  p-2 focus:ring-violet-400 focus:dark:ring-violet-600 border-2 shadow-xl dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="zip" className="text-sm">
                ZIP / Postal
              </label>
              <input
                id="zip"
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2  focus:ring-violet-400 focus:dark:ring-violet-600 border-2 shadow-xl dark:border-gray-300"
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Profile</p>
            <p className="text-xs">Adipisci fuga autem eum!</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="username" className="text-sm">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2  focus:ring-violet-400 focus:dark:ring-violet-600 border-2 shadow-xl dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="website" className="text-sm">
                Website
              </label>
              <input
                id="website"
                type="text"
                placeholder="https://"
                className="w-full rounded-md focus:ring focus:ring-opacity-75  p-2 focus:ring-violet-400 focus:dark:ring-violet-600 border-2 shadow-xl dark:border-gray-300"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm">
                Bio
              </label>
              <textarea
                id="bio"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2  focus:ring-violet-400 focus:dark:ring-violet-600 border-2 shadow-xl dark:border-gray-300"
              ></textarea>
            </div>
            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm">
                Photo
              </label>
              <div className="flex items-center space-x-2">
                <img
                  src="https://source.unsplash.com/30x30/?random"
                  alt=""
                  className="w-10 h-10  rounded-full bg-gray-700 dark:bg-gray-300"
                />
                <input type="file" name="" id="" />

                {registerError && (
                  <p className="lg:text-sm  md:text-md text-sm  font-bold bg-gradient-to-r from-red-700 via--700 to-red-700 inline-block text-transparent bg-clip-text">
                    {registerError}
                  </p>
                )}
                {registerSuccess && <p className="lg:text-xs md:text-md text-sm  font-bold bg-gradient-to-r from-red-700 via-red-700 to-red-700 inline-block text-transparent bg-clip-text">{registerSuccess}</p>}

              </div>

              <button
                type="submit"
                className="btn bg-green-400 w-40 btn-outline lg:ml-[40%]"
              >
                Submit
              </button>
              <p className="px- text-sm text-center  dark:text-gray-600">
                {" "}
                have an account?
                <NavLink to={"/login"}>
                  {" "}
                  <strong className="text-red-500">Login</strong>
                </NavLink>
              </p>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Register;
