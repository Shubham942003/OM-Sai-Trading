import React from "react";
import { Link } from "react-router-dom";
import "./Style-CardSlider.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
  AOS.init();
  return (
    <div
      className="mt-2 mb-4 card-container px-4"
      data-aos="flip-left"
      data-aos-duration="1000"
    >
      <div className="card-bg">
        <div>
          <img src={props.image} className="img-fluid border" alt="" />
        </div>
        <div className="d-flex justify-content-center mt-2">
          <p className="lead">
            <strong>{props.title}</strong>
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="lead">
            <strong>{props.price}</strong>
          </p>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <Link to="/categories">
            <button className="btn px-5 py-2 mb-3 card-btn text-white">
              <strong>See More</strong>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
