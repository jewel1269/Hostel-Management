import { useEffect, useState } from "react";
import Cards from "./Cards";

const Card = () => {
  const [infoCard, setInfoCard] = useState([]);

  useEffect(() => {
    fetch("/card.json")
    .then(res => res.json())
    .then(data => setInfoCard(data))

  }, []);

  return (
    <div className="mt-5 p-5 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100">
      <h1 className="text-center font-bold mt-10 mb-5 text-5xl">This is main section</h1>
      <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 md:grid gap-10 lg:ml-28 lg:mr-28 ">
      {
        infoCard && infoCard.map((item)=><Cards key={item.id} item={item}></Cards>)
      }
      </div>
    </div>
  );
};

export default Card;
