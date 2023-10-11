import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";
import cardsReducer from "./cards/cardsSlice";
import cartReducer from "./cart/cartSlice";
import commentsReducer from "./comments/commentsSlice";
import quizzesReducer from "./quizzes/quizzesSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    users: usersReducer,
    cards: cardsReducer,
    cart: cartReducer,
    comments: commentsReducer,
    quizzes: quizzesReducer,
  },
});
