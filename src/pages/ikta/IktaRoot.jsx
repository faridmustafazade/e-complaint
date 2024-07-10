import React from "react";
import Header from "../../layouts/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../../layouts/ikta/Sidebar";

const IktaRoot = () => {
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="absolute right-0 lg:w-[95%] md:w-[93%] <sm:w-[88%] w-[82%] ">
        <Header name={"IKTA"} />
        <Outlet />
      </div>
    </div>
  );
};

export default IktaRoot;
