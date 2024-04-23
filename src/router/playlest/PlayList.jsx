import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import "./PlayList.scss";

const PlayList = () => {
  // const { playlist, getToken, openPlayList } = usePlaylistStore();
  const [music, setMusic] = useState([]);
  const { id } = useParams();

  const clientId = "6d2b896ad23f4e8b8ae01797378c0e0c";
  const clientSecret = "db91ba413c2b46d09a5c8991d46c9468";

  const getToken = async () => {
    try {
      const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
        },
        body: "grant_type=client_credentials",
      });
      const data = await res.json();
      localStorage.setItem(
        "access_token",
        `${data.token_type} ${data.access_token}`
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const openPlayList = async () => {
    try {
      const res = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      });
      const data = await res.json();
      setMusic(data.tracks.items);
    } catch (error) {}
  };

  useEffect(() => {
    getToken();
    openPlayList();
  }, []);

  return (
    <div className="main">
      <Table variant="dark" hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th></th>
            <th>Album</th>
            <th>Data added</th>
            <th>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2216_1439)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23 14C23 18.9706 18.9706 23 14 23C9.02944 23 5 18.9706 5 14C5 9.02944 9.02944 5 14 5C18.9706 5 23 9.02944 23 14ZM25 14C25 20.0751 20.0751 25 14 25C7.92487 25 3 20.0751 3 14C3 7.92487 7.92487 3 14 3C20.0751 3 25 7.92487 25 14ZM14.5 8.5H12.5V15.5H18V13.5H14.5V8.5Z"
                    fill="#B3B3B3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2216_1439">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {music.map((list, i) => (
            <tr key={list.track.id}>
              <td>{i + 1}</td>
              <td>
                <img src={list.track.album.images[0].url} alt="" width={52} />
              </td>
              <td>
                {list.track.name.length < 20
                  ? list.track.name
                  : list.track.name.slice(0, 20) + "..."}
              </td>
              <td>
                {list.track.album.name.length < 25
                  ? list.track.album.name
                  : list.track.album.name.slice(0, 25) + "..."}
              </td>
              <td></td>
              <td>
                {"0" +
                  Math.floor(list.track.duration_ms / 60000) +
                  ":" +
                  ((list.track.duration_ms % 60000) / 1000).toFixed(0)}
              </td>
              <td>
                <input
                  type="checkbox"
                  className="table_lek"
                  id={list.track.name + list.track.id}
                />
                <label htmlFor={list.track.name + list.track.id}>
                  <FaRegHeart className="dislike" />
                  <FaHeart className="liked" />
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PlayList;
