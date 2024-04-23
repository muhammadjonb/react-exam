import React from "react";
import Hero from "./Hero";
import Mixes from "./Mixes";
import Mode from "./Mode";
import Recentle from "./Recentle";
import Jomp from "./Jomp";
import Uniquely from "./Uniquely";

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <Mixes />
      <Mode />
      <Recentle />
      <Jomp />
      <Uniquely />
    </main>
  );
};

export default Home;
