import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import StorePage from "../pages/StorePage/StorePage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import CreatePage from "../pages/CreatePage/CreatePage";
import CardDetailsPage from "../pages/CardDetailsPage/CardDetailsPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/registration" element={<RegisterPage />} />
      <Route path="/authorization" element={<LoginPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/store/:id" element={<CardDetailsPage />} />
    </Routes>
  );
};

export default MainRoutes;
