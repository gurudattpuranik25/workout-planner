import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import right_arraw from "../../assets/right-arrow.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <section className="home__container">
      <section className="home">
        <Navbar />
        <section className="hero__section">
          <h1 className="hero__title">IT'S ALL ABOUT WHAT YOU CAN ACHIEVE</h1>
          <section className="hero__info">
            <h1>
              Tailored Workouts for Your Fitness Level and Targeted Gains:
              Sculpt Your Body, Your Way!
            </h1>
            <img
              src={right_arraw}
              alt="right-arrow"
              onClick={() => navigate("/exercises")}
            />
          </section>
        </section>
      </section>
    </section>
  );
}

export default Home;
