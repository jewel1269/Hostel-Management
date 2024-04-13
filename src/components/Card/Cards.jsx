import { NavLink } from "react-router-dom";

const Cards = ({ item }) => {
 const {segment_name, estate_title,image,description,price,area,location, id} = item;

  return (
    
      <div className="flex mt-10 border sha flex-col max-w-lg p-6 bg-slate-100 space-y-6 overflow-hidden rounded-lg shadow-2xl  transition duration-500 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 ">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center space-x-2">
            
            <div className="-space-y-1">
              <h2 className="text-2xl font-semibold leading-none">
                {estate_title}
              </h2>
              <span className="inline-block text-xs leading-none font-semibold dark:text-gray-600">
                {location}
              </span>
            </div>
          </div>
          
        </div>
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full h-72  dark:bg-gray-500"
        />
        <div className="lg:flex lg:flex-col  font-semibold text-xl">
        <h4 className="text-red-500">Price: {price}</h4>
        <h4>Area: {area}</h4>
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
          <div className="flex flex-wrap items-center pt-3 pb-1">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full  dark:bg-gray-500 border-gray-800 dark:border-gray-100"
                  src="https://source.unsplash.com/40x40/?portrait?1"
                />
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full  dark:bg-gray-500 border-gray-800 dark:border-gray-100"
                  src="https://source.unsplash.com/40x40/?portrait?2"
                />
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full  dark:bg-gray-500 border-gray-800 dark:border-gray-100"
                  src="https://source.unsplash.com/40x40/?portrait?3"
                />
              </div>
              <span className="text-sm">
                Liked by
                <span className="font-semibold">Mamba UI</span>and
                <span className="font-semibold">86 others</span>
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm">
              <span className="text-base font-semibold">leroy_jenkins72</span>
              Nemo ea quasi debitis impedit!
            </p>
            <NavLink to={`/details/${item.id}`}><button className="btn btn-success w-full btn-sm">View Property</button></NavLink>
          </div>
        </div>
      </div>

  );
};

export default Cards;
