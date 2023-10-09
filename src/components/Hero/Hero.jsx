import React from "react";
import { Link } from "react-router-dom";
import heroIamge from "../../assets/images/hero.jpg";


const Hero = () => {
  return (
    <div
      className="hero h-[550px]"
      style={{
        backgroundImage: `url(${heroIamge})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Educational and Training Events
          </h1>
          <p className="mb-5">
            Learn Online and grow up you career. Every Skill you will learned
            online
          </p>
          <div className="">
            <button className=" mr-5 btn btn-secondary">
              <Link to="/register">Register Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
