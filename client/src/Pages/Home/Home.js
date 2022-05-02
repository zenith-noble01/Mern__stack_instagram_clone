import React from "react";
import { Stories, Posts, Suggestions } from "../../Components";
import "./Home.scss";

const Home = () => {
  return (
    <div className="app__home">
      <Stories />
      <div className="app__home-container">
        <Posts />
        <Suggestions />
      </div>
    </div>
  );
};

export default Home;
