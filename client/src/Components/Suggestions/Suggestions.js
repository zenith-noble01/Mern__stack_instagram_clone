import React from "react";
import { profile } from "../../Icons";
import "./Suggestions.scss";

const Suggestions = () => {
  return (
    <div className="app__suggestions">
      <div className="suggestions__container">
        <div className="user__suggestion">
          <div className="use__suggestion-container">
            <img src={profile} alt="" />
            <div className="user__info-wrapper">
              <span>Zenithnoble</span>
              <p>Zenith noble</p>
            </div>
          </div>
          <button>Switch</button>
        </div>
        <div className="suggestion__title">
          <p>Suggestion for you</p>
          <span>See all</span>
        </div>

        <div className="suggestions__content">
          <div className="user__content">
            <div className="user__container">
              <img src={profile} alt="" />
              <div className="container__content">
                <span>username</span>
                <span>follows you</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="user__content">
            <div className="user__container">
              <img src={profile} alt="" />
              <div className="container__content">
                <span>username</span>
                <span>follows you</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="user__content">
            <div className="user__container">
              <img src={profile} alt="" />
              <div className="container__content">
                <span>username</span>
                <span>follows you</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="user__content">
            <div className="user__container">
              <img src={profile} alt="" />
              <div className="container__content">
                <span>username</span>
                <span>follows you</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
