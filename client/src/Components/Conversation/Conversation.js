import React from "react";
import "./Conversation.scss";
import { img1 } from "../../Icons";

const Conversation = () => {
  return (
    <div className="app__conversation">
      <img src={img1} alt="" />
      <div className="conversation__content">
        <p className="username">Zenith</p>
        <p className="last__message">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, rerum?
        </p>
      </div>
    </div>
  );
};

export default Conversation;
