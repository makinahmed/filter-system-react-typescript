import React from "react";
import { Outlet } from "react-router-dom";
import DisplayProducts from "../components/DisplayProducts";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <h1 className="my-5 d-flex justify-content-center fs-1">E-Shop</h1>
      <DisplayProducts/>
    </div>
  );
}

export default Home;
