import React from "react";
import TrainList from "./Components/TrainList";
import Homepage from "./Pages/Homepage";
import TrainCard from "./Components/TrainCard";

import "./App.css";
import Navbar from "./Components/Navbar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getAuth } from "firebase/auth";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
