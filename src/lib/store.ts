import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./features/userSlice/userSlice";

const store = configureStore({
  reducer: {
    userInfo: userSliceReducer,
  },
});

export default store;
