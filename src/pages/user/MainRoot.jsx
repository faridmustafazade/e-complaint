import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/user/Sidebar";
const MainRoot = () => {
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="absolute right-0 lg:w-[95%] md:w-[93%] <sm:w-[88%] w-[82%] ">
        <Header name={"FARİD MUSTAFAZADƏ MUSTAFA OĞLU"} />
        <Outlet />
      </div>
    </div>
  );
};

export default MainRoot;
