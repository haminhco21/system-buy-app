import React from "react";
import { RiProductHuntLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png"



const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo">
          <RiProductHuntLine size={35} />
        </div>
        <ul className="home-links">         
            <li>
              <Link to="/register">Register</Link>
            </li>         
            <li>
              <button className="--btn --btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>        
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
      <div className="hero-text">
        <h2>Love Manage</h2>
        <p>Web nay lam ra chi de lam mau  </p>
        <div className="hero-bottons">
          <button className="--btn --btn-secondary">
            <Link to="/dashboard">Make Love</Link>
          </button>
        </div>
        <div className="--flex-start">
          <NumberText num="0" text="Loved"/>
          <NumberText num="500+" text="Alone"/>
          <NumberText num="1" text=""/>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Inventory" />
      </div>
      </section>
    </div>
  );
};

const NumberText = ({num, text}) => {
  return(
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>

    </div>
  )
}
export default Home;