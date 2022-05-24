import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import profile from "./profile.jpg";
import logo from "./logo.png";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";

import img1 from "./1.jpg";
import noConversation from "./noConverImg.png";

export {
  FavoriteBorderRoundedIcon,
  AddBoxOutlinedIcon,
  ExploreOutlinedIcon,
  HomeOutlinedIcon,
  logo,
  profile,
  SearchIcon,
  AccountCircleOutlinedIcon,
  BookmarkBorderOutlinedIcon,
  CachedOutlinedIcon,
  SendOutlinedIcon,
  SettingsIcon,
  ArrowBackIcon,
  ImageOutlinedIcon,
  SentimentSatisfiedAltOutlinedIcon,
  ForumOutlinedIcon,
  img1,
  noConversation,
};

export const PenIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  );
};

export const ChatOption = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
