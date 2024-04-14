import React from "react";

const Top = ({data}) => {
    const {segment_name,
        estate_title,
        image,
        description,
        price,
        area,
        location,
        status,
        facilities
        } = data;
  return (
    <div data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000" className="card rounded-2xl mt-5 w-96 bg-base-100 shadow-2xl shadow-black">

        
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
         {estate_title}
          <div className="badge badge-secondary"></div>
        </h2>
        <p>{description}</p>
        <div className="card-actions ">
          <div className="badge text-red-500 ">Price: {price}</div>
          <div className="badge text-green-500">Area: {area}</div>
        </div>
        <h2>#{status}</h2>
        <div>
        {
              facilities.map((item, index) => (
                <button className="btn bg-gradient-to-r from-indigo-500 mt-3 via-purple-500 to-pink-500 btn-sm text-start" key={index}>
                  {item}
                </button>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Top;
