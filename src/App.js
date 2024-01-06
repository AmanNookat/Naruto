import React, { useState } from "react";
import MainRoutes from "./routing/MainRoutes";
import Navbar from "./components/ui/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const App = () => {
  // test comment
  const [a, setState] = useState(0);

  return (
    <>
      <Navbar />
      <MainRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
