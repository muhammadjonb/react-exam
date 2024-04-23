import { create } from "zustand";

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

const openPlayList = async (set) => {
  try {
    const res = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("access_token"),
      },
    });
    const data = await res.json();
    set((state) => ({
      ...state,
      playlist: data.tracks.items,
    }));
  } catch (error) {}
};

const playlistStore = (set) => ({
  playlist: [],
  getToken: () => getToken(),
  openPlayList: () => openPlayList(set),
});

export const usePlaylistStore = create(playlistStore);
