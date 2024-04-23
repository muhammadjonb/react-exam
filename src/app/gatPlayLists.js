import { create } from 'zustand';

const clientId = "6d2b896ad23f4e8b8ae01797378c0e0c";
const clientSecret = "db91ba413c2b46d09a5c8991d46c9468";

const getToken = async () => {
  const credentials = btoa(`${clientId}:${clientSecret}`);
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${credentials}`,
      },
      body: "grant_type=client_credentials",
    });
    if (!response.ok) {
      throw new Error('Failed to fetch the access token.');
    }
    const data = await response.json();
    localStorage.setItem("access_token", `${data.token_type} ${data.access_token}`);
  } catch (error) {
    console.error('getToken error:', error.message);
  }
};

const getPlaylists = async (set) => {
  set((state) => ({ ...state, loading: true, error: "" }));
  try {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      throw new Error('Access token is missing.');
    }
    const response = await fetch("https://api.spotify.com/v1/browse/featured-playlists?limit=6", {
      method: "GET",
      headers: {
        Authorization: accessToken,
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch playlists.');
    }
    const data = await response.json();
    set((state) => ({
      ...state,
      mixes: data.playlists.items,
      loading: false,
    }));
  } catch (error) {
    set((state) => ({
      ...state,
      loading: false,
      error: error.message,
    }));
    console.error('getPlaylists error:', error.message);
  }
};

const getPlaylistNames = async (set) => {
  set((state) => ({
    ...state,
    loading: true,
  }));
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/browse/featured-playlists?limit=13",
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      }
    );
    const data = await res.json();
    set((state) => ({
      ...state,
      mixesNames: data.playlists.items,
      loading: false,
    }));
  } catch (error) {
    console.log(error.message);
  }
};

const yourTopMixes = async (set) => {
  set((state) => ({
    ...state,
    loading: true,
  }));
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/browse/categories/toplists/playlists?limit=4",
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      }
    );
    const data = await res.json();
    set((state) => ({
      ...state,
      topMixes: data.playlists.items,
      loading: false,
    }));
  } catch (error) {
    console.log(error.message);
  }
};


const madeForYou = async (set) => {
  set((state) => ({
    ...state,
    loading: true,
  }));
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists?limit=4",
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      }
    );
    const data = await res.json();
    set((state) => ({
      ...state,
      madeforyou: data.playlists.items,
      loading: false,
    }));
  } catch (error) {
    console.log(error.message);
  }
};

const recentlyPlayed = async (set) => {
  set((state) => ({
    ...state,
    loading: true,
  }));
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists?limit=4",
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      }
    );
    const data = await res.json();
    set((state) => ({
      ...state,
      recentlyplayed: data.playlists.items,
      loading: false,
    }));
  } catch (error) {
    console.log(error.message);
  }
};

const jumpBackIn = async (set) => {
  set((state) => ({
    ...state,
    loading: true,
  }));
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists?limit=4",
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      }
    );
    const data = await res.json();
    set((state) => ({
      ...state,
      jumpbackin: data.playlists.items,
      loading: false,
    }));
  } catch (error) {
    console.log(error.message);
  }
};

const uniquelyYours = async (set) => {
  set((state) => ({
    ...state,
    loading: true,
  }));
  try {
    const res = await fetch(
      "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists?limit=4",
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
      }
    );
    const data = await res.json();
    set((state) => ({
      ...state,
      uniquelyyours: data.playlists.items,
      loading: false,
    }));
  } catch (error) {
    console.log(error.message);
  }
};



const playStore = (set) => ({
  loading: false,
  mixes: [],
  topMixes: [],
  mixesNames: [],
  madeforyou: [],
  recentlyplayed: [],
  jumpbackin: [],
  uniquelyyours: [],
  error: "",
  getToken: () => getToken(),
  yourTopMixes: () => yourTopMixes(set),
  getPlaylists: () => getPlaylists(set),
  getPlaylistNames: () => getPlaylistNames(set),
  madeForYou: () => madeForYou(set),
  recentlyPlayed: () => recentlyPlayed(set),
  jumpBackIn: () => jumpBackIn(set),
  uniquelyYours: () => uniquelyYours(set)
});

export const usePlayStore = create(playStore);
