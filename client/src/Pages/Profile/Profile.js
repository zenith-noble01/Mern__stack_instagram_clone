import React, { useState } from "react";
import { img1, profile, SettingsIcon } from "../../Icons";
import { Link } from "react-router-dom";
import "./Profile.scss";

const Profile = () => {
  const [active, setActive] = useState(1);
  const postId = 22;
  return (
    <div className="app__profile">
      <div className="profile__container">
        <div className="profile__img-container">
          <img src={profile} alt="" />
        </div>
        <div className="user__profile__content">
          <div className="username">
            <p>zenithnoble</p>
            <button>Edit Profile</button>
            <Link to="/settings">
              <SettingsIcon />
            </Link>
          </div>
          <div className="followers">
            <p>
              <span>30</span> posts
            </p>
            <p>
              <span>1000</span> followers
            </p>
            <p>
              <span>200</span> followings
            </p>
          </div>
          <div className="bio">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              vel!
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="profile__tags">
        <ul className="tags__header">
          <li
            className={active === 1 ? "tag__elm active" : "tag__elm"}
            onClick={() => setActive(1)}
          >
            POST
          </li>
          <li
            className={active === 2 ? "tag__elm active" : "tag__elm"}
            onClick={() => setActive(2)}
          >
            TAGGED
          </li>
        </ul>
        <div className="user__posts">
          <div className="user__post">
            <Link to={`/explore/${postId}`}>
              <img src={img1} alt="" />
              <div className="user__post__content"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
