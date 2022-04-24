import React from "react";
import {
  FavoriteBorderRoundedIcon,
  AddBoxOutlinedIcon,
  ExploreOutlinedIcon,
  HomeOutlinedIcon,
  logo,
  profile,
  SearchIcon,
  SendOutlinedIcon,
} from "../../Icons";
import "./Navbar.scss";

//profile
//saved
//settings
//switch accoutn
//log out

const Navbar = () => {
  return (
    <div className="app__navbar">
      <div className="app__navbar-left">
        <img src={logo} alt="" />
      </div>

      <div className="app__navbar-right">
        <div className="right_input">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <ul className="right__routes">
          <li>
            <HomeOutlinedIcon />
          </li>
          <li>
            <SendOutlinedIcon className="rotate" />
          </li>
          <li>
            <AddBoxOutlinedIcon />
          </li>
          <li>
            <ExploreOutlinedIcon />
          </li>
          <li>
            <FavoriteBorderRoundedIcon />
          </li>
          <li>
            <img src={profile} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
