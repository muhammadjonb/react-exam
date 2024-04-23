import React from "react";
import { NavLink } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoLibraryOutline } from "react-icons/io5";
import { FaSquarePlus } from "react-icons/fa6";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="nav">
          <NavLink to="/">
            <MdHomeFilled className="nav_icon" /> Home
          </NavLink>
          <div className="search">
            <CiSearch className="nav_icon" />
            Search
          </div>
          <div className="nav_library">
            <IoLibraryOutline className="nav_icon" />
            Your Library
          </div>
          <div className="nav_create">
            <FaSquarePlus className="nav_icon" />
            Create Playlist
          </div>
          <NavLink to="/like">
            <img src="Liked Songs_S.svg" alt="like" />
            Liked Songs
          </NavLink>
        </div>
        <div className="header_kotolog">
          <ul>
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
