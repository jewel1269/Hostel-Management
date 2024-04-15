import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../AuthProvider/AuthProvider";
import 'animate.css';


const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [showChangeOptions, setShowChangeOptions] = useState(false);
  const [newName, setNewName] = useState(user ? user.displayName : "");
  const [newPhotoURL, setNewPhotoURL] = useState(user ? user.photoURL : "");

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };

  const handleChangePhotoURL = (e) => {
    setNewPhotoURL(e.target.value);
  };

  const handleSaveChanges = async () => {
    try {
      await updateProfile(user, {
        displayName: newName,
        photoURL: newPhotoURL,
      });

      setShowChangeOptions(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="3000"
      className=" flex border p-5 lg:ml-[35%] lg:mt-10 lg:h-[700px] mx-auto my-4  bg-gradient-to-r from-rose-200 via-fuchsia-200 to-indigo-200 lg:mb-10 rounded-xl shadow-xl shadow-black flex-col max-w-md  "
    >
      <img
        src={user ? user.photoURL : ""}
        alt=""
        className="animate__animated animate__zoomIn   flex-shrink-0 shadow-2xl shadow-black lg:rounded-2xl object-cover h-52 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square"
      />
      <div>
        {showChangeOptions ? (
          <>
            <input
              type="text"
              value={newName}
              onChange={handleChangeName}
              placeholder="Enter new name"
              className="block w-full px-4 py-3 mt-2 border rounded-md border-gray-300 dark:border-gray-600 focus:border-violet-400 focus:ring focus:ring-violet-400 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200"
            />
            <input
              type="text"
              value={newPhotoURL}
              onChange={handleChangePhotoURL}
              placeholder="Enter new PhotoURL"
              className="block w-full px-4 py-3 mt-2 border rounded-md border-gray-300 dark:border-gray-600 focus:border-violet-400 focus:ring focus:ring-violet-400 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200"
            />
            <button
              onClick={handleSaveChanges}
              className="btn btn-sm mt-10 lg:ml-40  btn-success "
            >
              Update
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl mt-5 font-semibold">
             Name: {user ? user.displayName : ""}
            </h2>
            <span className="block pb-2 text-sm dark:text-gray-600">
              CTO of Company Inc.
            </span>
            <h2 className="text-xl">Email: {user ? user.email : ""}</h2>
            <h3 className="text-xl">Uid: {user ? user.uid : ""}</h3>
            <button
              onClick={() => setShowChangeOptions(true)}
              className="btn mt-10 btn-sm lg:ml-36  btn-success "
            >
              Update Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UpdateProfile;
