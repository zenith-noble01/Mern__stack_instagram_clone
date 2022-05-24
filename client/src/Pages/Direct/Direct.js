import React, { useState } from "react";
import "./Direct.scss";
import { Conversation } from "../../Components";
import {
  noConversation,
  img1,
  SentimentSatisfiedAltOutlinedIcon,
  SendOutlinedIcon,
} from "../../Icons";

const Direct = () => {
  const [currentChat, setCurrentChat] = useState(false);
  const own = true;
  return (
    <div className="app__direct">
      <div className="direct__sidebar">
        <div className="sidebar__header">
          <p>Zenith</p>
        </div>
        <div className="sidebar__conversations">
          <div onClick={() => setCurrentChat(true)}>
            <Conversation />
          </div>
          <div onClick={() => setCurrentChat(true)}>
            <Conversation />
          </div>
          <div onClick={() => setCurrentChat(true)}>
            <Conversation />
          </div>
          <div onClick={() => setCurrentChat(true)}>
            <Conversation />
          </div>
          <div onClick={() => setCurrentChat(true)}>
            <Conversation />
          </div>
          <div onClick={() => setCurrentChat(true)}>
            <Conversation />
          </div>
        </div>
      </div>
      <div className="direct__content">
        {currentChat ? (
          <div className="current__chat">
            <div className="chat__header">
              <img src={img1} alt="" />
              <p>Zenith</p>
            </div>
            <div className="chat__content">
              <div className={own ? "chat__message own" : "chat__message"}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  vitae vel dolore, rerum architecto quam cumque autem nisi
                  ipsum totam soluta neque quae qui quos et a, tempora
                  consectetur? Animi.
                </p>
              </div>
              <div className="chat__message">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  vitae vel dolore, rerum architecto quam cumque autem nisi
                  ipsum totam soluta neque quae qui quos et a, tempora
                  consectetur? Animi.
                </p>
              </div>
              <div className={own ? "chat__message own" : "chat__message"}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  vitae vel dolore, rerum architecto quam cumque autem nisi
                  ipsum totam soluta neque quae qui quos et a, tempora
                  consectetur? Animi.
                </p>
              </div>
              <div className="chat__message">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  vitae vel dolore, rerum architecto quam cumque autem nisi
                  ipsum totam soluta neque quae qui quos et a, tempora
                  consectetur? Animi.
                </p>
              </div>
            </div>
            <div className="chat__sender">
              <div className="chat__send">
                <SentimentSatisfiedAltOutlinedIcon />
                <input type="text" placeholder="Write something ..." />
                <SendOutlinedIcon />
              </div>
            </div>
          </div>
        ) : (
          <div className="no__chat">
            <img src={noConversation} alt="" />
            <p>Your Messages</p>
            <span>Send Private photos and messages to friends and groups</span>
            <button>Send Message</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Direct;
