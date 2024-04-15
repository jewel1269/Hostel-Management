import { useEffect, useState } from "react";
import Cards from "./Cards";
import Top from "../Top/Top";
import { IoArrowDownSharp } from "react-icons/io5";
import 'animate.css';

const Card = () => {
  const [infoCard, setInfoCard] = useState([]);

  const [tops, setTops] = useState([]);

  useEffect(() => {
    fetch("/card.json")
      .then((res) => res.json())
      .then((data) => setInfoCard(data));
  }, []);

  useEffect(() => {
    fetch("/Top.json")
      .then((res) => res.json())
      .then((data) => setTops(data));
  }, []);
  // console.log(tops);

  return (
    <div className="animate__animated animate__fadeInLeft   mt-5 p-5 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100">
      <h1 className=" font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-green-600 text-center mb-5 text-5xl">
        Our Management
      </h1>
      <div
        data-aos-duration="8000"
        className="lg:grid lg:grid-cols-3 md:grid-cols-2 md:grid gap-10 lg:ml-28 lg:mr-28 "
      >
        {infoCard &&
          infoCard.map((item) => <Cards key={item.id} item={item}></Cards>)}
      </div>

      <div className="flex  items-center justify-center ">
         
        <h1 id="topFeatureSection" className="   font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-green-600 text-center mb-5 text-5xl">
        Top Features
        </h1>
        <span> <IoArrowDownSharp className="animate-bounce w-12 mt-10 h-16"/></span>
      </div>
      <div className="lg:flex gap-10 justify-center">
        {tops.map((data) => (
          <Top key={data.id} data={data}></Top>
        ))}
      </div>
    </div>
  );
};

export default Card;
