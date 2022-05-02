import React from "react";
import "./Posts.scss";
import { Post } from "../";

const Posts = () => {
  return (
    <div className="app__posts">
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
