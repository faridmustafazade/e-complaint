import React from "react";
import Sidebar from "../../layouts/company/Sidebar";
import Header from "../../layouts/Header";
import { Outlet } from "react-router-dom";

const CompanyRoot = () => {
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="absolute right-0 lg:w-[95%] md:w-[93%] <sm:w-[88%] w-[82%] ">
        <Header name={"AZTELEKOM"} />
        <Outlet />
      </div>
    </div>
  );
};

export default CompanyRoot;
