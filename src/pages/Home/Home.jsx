import React from "react";
import { exercises } from "../../data/data";
import Navbar from "../../components/Navbar/Navbar";
import gym__background from "../../assets/gym.avif";
import "./Home.css";

function Home() {
  return (
    <section className="home__container">
      <Navbar />
    </section>
  );
}

export default Home;
