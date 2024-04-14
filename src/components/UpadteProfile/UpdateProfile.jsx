import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth"; // Import the updateProfile method from Firebase
import { AuthContext } from "../AuthProvider/AuthProvider";

const UpdateProfile = () => {
    const {user} = useContext(AuthContext)
  const [showChangeOptions, setShowChangeOptions] = useState(false);
  const [newName, setNewName] = useState(user.displayName);
  const [newEmail, setNewEmail] = useState(user.email);

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setNewEmail(e.target.value);
  };

  const handleSaveChanges = async () => {
    try {
      // Update the user's profile using Firebase Authentication
      await updateProfile(user, { displayName: newName, email: newEmail });
      // After successfully updating the profile, hide the change options
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
      className="flex border lg:ml-[35%] lg:mt-10 lg:mb-10 rounded-xl shadow-xl shadow-black flex-col max-w-md p-6 "
    >
      <img
        src={user.photoURL}
        alt=""
        className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square"
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
              type="email"
              value={newEmail}
              onChange={handleChangeEmail}
              placeholder="Enter new email"
              className="block w-full px-4 py-3 mt-2 border rounded-md border-gray-300 dark:border-gray-600 focus:border-violet-400 focus:ring focus:ring-violet-400 focus:ring-opacity-50 dark:bg-gray-700 dark:text-gray-200"
            />
            <button
              onClick={handleSaveChanges}
              className="btn btn-outline btn-success mt-2"
            >
              Save Changes
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold">{user.displayName}</h2>
            <span className="block pb-2 text-sm dark:text-gray-600">
              CTO of Company Inc.
            </span>
            <h2>Email: {user.email}</h2>
            <h3>Uid: {user.uid}</h3>
            <button
              onClick={() => setShowChangeOptions(true)}
              className="btn btn-outline btn-success mt-2"
            >
              Change Info
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UpdateProfile;
