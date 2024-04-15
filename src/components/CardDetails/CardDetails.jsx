import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import 'animate.css';


const CardDetails = () => {
  const [property, setProperty] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`/card.json`);
        if (!response.ok) {
          throw new Error("Failed to fetch property");
        }
        const data = await response.json();
        const selectedProperty = data.find((item) => item.id === Number(id));
        if (!selectedProperty) {
          throw new Error("Property not found");
        }
        setProperty(selectedProperty);
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    };

    fetchProperty();
  }, [id]);

  return (
    <div className="animate__animated animate__lightSpeedInLeft animate hero  min-h-screen  bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-100">
      <div className="hero-content border border-black rounded-3xl shadow-2xl bg-slate-100 shadow-black flex-col gap-10 lg:flex-row">
        <img
          src={property.image}
          className=" lg:h-[600px] lg:w-[600px] rounded-lg shadow-2xl"
          alt={property.segment_name}
        />
        <div>
          <h3 className=" text-2xl font-semibold">{property.segment_name}</h3>

          <h1 className="text-3xl font-bold">Name: {property.estate_title}</h1>
          <h4 className="flex items-center gap-1">
            <span className="font-bold">Location:</span>{" "}
            <span className="flex items-center">
              <CiLocationOn className="h-8 w-6" />
              {property.location}
            </span>
          </h4>
          <p className="text-lg">{property.description}</p>
          <div className="lg:flex lg:gap-16 text-xl  items-center">
            <p className="text-red-500 font-bold">
              <span className="text-black">Price:</span> {property.price}
            </p>
            <p className="text-red-500 font-bold">
              <span className="text-black">Area:</span> {property.area}
            </p>
          </div>
          <h4 className="font-extrabold">#{property.status}</h4>
          <div className="my-5">
          <h2 className="text-xl font-semibold" >Facilities: </h2>
          <div className="lg:grid  lg:grid-cols-2 inline-block">
            {property.facilities &&
              property.facilities.map((item, index) => (
                <button className="btn bg-gradient-to-r from-indigo-500 mt-3 via-purple-500 to-pink-500 btn-sm text-start" key={index}>
                  {item}
                </button>
              ))}
          </div>
          <button className="btn btn-success btn-sm lg:mt-12 lg:ml-64 btn-outline text-black">Booking</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
