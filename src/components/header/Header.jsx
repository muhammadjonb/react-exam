import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoLibraryOutline } from "react-icons/io5";
import { FaPlusSquare } from "react-icons/fa";
import { usePlayStore } from "../../app/gatPlayLists";
import "./Header.scss";

const Header = () => {
  const { getPlaylistNames, mixesNames } = usePlayStore();

  useEffect(() => {
    getPlaylistNames();
  }, []);

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
            <FaPlusSquare className="nav_icon" />
            icon Create Playlist
          </div>
          <NavLink to="/like">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="32"
                height="32"
                rx="2"
                fill="url(#paint0_linear_124_3039)"
              />
              <path
                d="M16.0006 10.158C17.6448 8.56071 20.1858 8.61373 21.7699 10.3307C23.3532 12.0484 23.4078 14.784 21.9351 16.5684L15.9992 23L10.0647 16.5684C8.59191 14.784 8.64721 12.0439 10.2299 10.3307C11.8154 8.616 14.3514 8.55844 16.0006 10.158Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_124_3039"
                  x1="1"
                  y1="1"
                  x2="32"
                  y2="30.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3822EA" />
                  <stop offset="1" stopColor="#C7E9D7" />
                </linearGradient>
              </defs>
            </svg>
            Liked Songs
          </NavLink>
        </div>
        <div className="header_kotolog">
          {mixesNames.length > 0 && (
            <ul>
              {mixesNames.map((mix) => (
                <Link to={`/playlist/${mix.id}`} key={mix.id}>
                  <li>{mix.name}</li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
