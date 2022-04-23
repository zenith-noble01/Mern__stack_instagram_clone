import React from "react";
import {
  FavoriteBorderRoundedIcon,
  AddBoxOutlinedIcon,
  ExploreOutlinedIcon,
  HomeOutlinedIcon,
  logo,
  SearchIcon,
  SendOutlinedIcon,
} from "../../Icons";
import "./Navbar.scss";

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
            <img
              src="https://1.bp.blogspot.com/-W_7SWMP5Rag/YTuyV5XvtUI/AAAAAAAAuUQ/hm6bYcvlFgQqgv1uosog6K8y0dC9eglTQCLcBGAsYHQ/s880/Best-Profile-Pic-For-Boys%2B%25281%2529.jpg"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
