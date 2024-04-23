import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const clientId = "6d2b896ad23f4e8b8ae01797378c0e0c"
const clientSecret = "db91ba413c2b46d09a5c8991d46c9468"



const initialState = {
  loading: false,
  playes: [],
  error: "",
};

export const fetchPlay = createAsyncThunk("play/fetchPlay", () =>
  axios
    .get("https://api.spotify.com/v1/browse/featured-playlists")
    .then((res) => res.data)
    .catch((err) => err.message)
);

const playSlice = createSlice({
  name: "play",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPlay.pending, (state) => {
      state.loading = true;
      state.playes = [];
      state.error = "";
    });
    builder.addCase(fetchPlay.fulfilled, (state, action) => {
      state.loading = false;
      state.playes = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPlay.rejected, (state, action) => {
      state.loading = false;
      state.playes = [];
      state.error = action.payload;
    });
  },
});

export const playReducer = playSlice.reducer;
export const playActions = playSlice.actions;
