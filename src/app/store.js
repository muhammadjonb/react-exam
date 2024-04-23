import { configureStore } from "@reduxjs/toolkit";
import { playReducer } from "./play/playSlice";

const store = configureStore({
  reducer: {
    play: playReducer,
  },
});

export default store;
