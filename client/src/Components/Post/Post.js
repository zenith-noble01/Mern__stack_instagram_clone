import React from "react";
import {
  FavoriteBorderRoundedIcon,
  SendOutlinedIcon,
  profile,
  ForumOutlinedIcon,
  BookmarkBorderOutlinedIcon,
  SentimentSatisfiedAltOutlinedIcon,
} from "../../Icons";
import "./Post.scss";

const Post = () => {
  return (
    <div className="app__post">
      <div className="app__post-top">
        <div className="top__container">
          <div className="top__container-user">
            <div className="posts__status">
              <img src={profile} alt="" />
            </div>
            <p>Zenith</p>
          </div>
          <div className="top__container-options">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="post__img-container">
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="post__footer">
        <div className="footer__top">
          <div className="footer__top-left">
            <FavoriteBorderRoundedIcon />
            <ForumOutlinedIcon />
            <SendOutlinedIcon />
          </div>
          <BookmarkBorderOutlinedIcon />
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom-top">
            <span>104 likes</span>
            <p>Zenith and the friends are here with the youtube family</p>
            <div className="view__app">View all comments</div>
            <p className="time">1 HOUR AGO</p>
          </div>
          <div className="footer__bottom-bottom">
            <SentimentSatisfiedAltOutlinedIcon />
            <input type="text" placeholder="Add a comment" />
            <button>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
