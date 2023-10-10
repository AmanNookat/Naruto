import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    users: usersReducer,
  },
});
