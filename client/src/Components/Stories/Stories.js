import React from "react";
import { Story } from "../";
import "./Stories.scss";

const Stories = () => {
  return (
    <div className="app__stories">
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
};

export default Stories;
