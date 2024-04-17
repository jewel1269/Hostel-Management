import React from "react";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Banner></Banner>
      <Card></Card>
    </div>
  );
};

export default Home;
