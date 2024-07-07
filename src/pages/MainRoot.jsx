import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
const MainRoot = () => {
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="lg:w-full md:w-[91%] <sm:w-[88%] w-[82%]">
        <Header />
        <Outlet/>
      </div>
    </div>
  );
};

export default MainRoot;
