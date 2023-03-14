import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DisplayProducts from "./components/DisplayProducts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Favourite from "./Pages/Favourite";
import Products from "./components/Products";
import Main from "./components/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/favourite", element: <Favourite /> },
        {
          path: "/products",
          element: <DisplayProducts />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
