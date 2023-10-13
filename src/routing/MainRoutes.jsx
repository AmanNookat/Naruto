import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import StorePage from "../pages/StorePage/StorePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import CreatePage from "../pages/CreatePage/CreatePage";
import CardDetailsPage from "../pages/CardDetailsPage/CardDetailsPage";
import CardEditPage from "../pages/CardEditPage/CardEditPage";
import CartPage from "../pages/CartPage/CartPage";
import QuizzesPage from "../pages/QuizzesPage/QuizzesPage";
import OneQuiz from "../components/quiz/OneQuiz";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/registration" element={<RegisterPage />} />
      <Route path="/authorization" element={<LoginPage />} />
      <Route path="/card-create" element={<CreatePage />} />
      <Route path="/store/:id" element={<CardDetailsPage />} />
      <Route path="/card-edit/:id" element={<CardEditPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/quizzes" element={<QuizzesPage />} />
      <Route path="/quizzes/:id" element={<OneQuiz />} />
      {/* <Route path="/favorites/:id" element={<FavoritesPage />} /> */}
      <Route path="/user/:id" element={<ProfilePage />} />
    </Routes>
  );
};

export default MainRoutes;
