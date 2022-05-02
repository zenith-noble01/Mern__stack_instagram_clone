import React from "react";
import { profile } from "../../Icons";
import "./Story.scss";

const Story = () => {
  return (
    <div className="app__stories-container">
      <img src={profile} alt="" />
    </div>
  );
};

export default Story;
