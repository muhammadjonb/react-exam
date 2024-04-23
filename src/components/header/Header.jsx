import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
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
            <img src="Liked Songs_S.svg" alt="liked songs" />
            Liked Songs
          </NavLink>
        </div>
        <div className="header_kotolog">
          {mixesNames.length > 0 && (
            <ul>
              {mixesNames.map((mix) => (
                <li key={mix.id}>{mix.name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
