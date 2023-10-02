import React from "react";
import logo from "../../assets/weightlifting.png";
import avatar from "../../assets/avatar.png";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <section className="nav__container">
      <section className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="application logo" className="logo__image" />
          <p className="logo__text">FitBit</p>
        </div>
        <div className="nav__links">
          <ul>
            <li>Workouts</li>
            <li>Gallery</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="user__info">
          <p className="user__name">Me</p>
          <img src={avatar} alt="avatar" className="user__image" />
        </div>
      </section>
    </section>
  );
}

export default Navbar;
