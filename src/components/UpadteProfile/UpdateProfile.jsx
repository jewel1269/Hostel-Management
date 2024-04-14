import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
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
        <h2 className="text-xl font-semibold"> {user.displayName}</h2>
        <span className="block pb-2 text-sm  dark:text-gray-600">
          CTO of Company Inc.
        </span>
        <h2>Email: {user.email}</h2> 
        <h3>Uid: {user.uid}</h3>
      </div>
    </div>
  );
};

export default UpdateProfile;
