import { NavLink } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const Cards = ({ item }) => {
  const {
    segment_name,
    estate_title,
    image,
    description,
    price,
    area,
    location,
    id,
  } = item;

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="3000"
      className="flex mt-10 border sha flex-col max-w-lg p-6 bg-slate-100 overflow-hidden rounded-3xl shadow-3xl  transition duration-500 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 "
    >
      <h3 className="text-2xl font-bold mb-3">* {segment_name}</h3>
      <img
        src={image}
        alt=""
        className="object-cover rounded-xl shadow-xl shadow-black object-center w-full h-72  dark:bg-gray-500"
      />
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          <div>
            <h2 className="text-2xl mt-3 font-semibold leading-none">
              {estate_title}
            </h2>
            <span className="flex items-center gap-1 text-sm leading-none font-semibold dark:text-gray-600">
            <CiLocationOn className="h-8 w-6" />
              {location}
            </span>
          </div>
        </div>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <p>{description}</p>
          <button
            type="button"
            title="Bookmark post"
            className="flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
            </svg>
          </button>
        </div>
        <div className="lg:flex  lg:justify-between mt-4  font-semibold text-xl">
          <h4 className="text-red-500">Price: {price}</h4>
          <h4>Area: {area}</h4>
        </div>
        <NavLink to={`/details/${item.id}`}>
          <button className="btn btn-success lg:mt-5 w-full btn-sm">
            View Property
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Cards;
