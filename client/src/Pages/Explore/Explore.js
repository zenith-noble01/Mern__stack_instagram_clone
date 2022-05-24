import React from "react";
import "./Explore.scss";
import { images } from "../../Icons/dummydata";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="app__explore">
      <div className="explore__container">
        {images.map((image, index) => (
          <Link to={`/explore/${image.id}`} key={index}>
            <div className="explore">
              <img src={image.imgSrc} alt="" />
              <div className="explore__content">
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Explore;
