import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";
import cardsReducer from "./cards/cardsSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    users: usersReducer,
    cards: cardsReducer,
  },
});
