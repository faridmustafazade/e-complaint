import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { HiUser } from "react-icons/hi";
import { RxExit } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = ({ click, name }) => {
  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(!active);
  }
  return (
    <div className="relative ">
      <div
        className={`flex ${
          click ? "justify-end" : "justify-between"
        } items-center p-5 border-b`}
      >
        {!click && (
          <Link to={"https://icta.az/"} target="_blank">
            <img src={logo} className="w-44 md:w-64" alt="icta" />
          </Link>
        )}
        <div
          onClick={handleClick}
          className="flex items-center gap-5 cursor-pointer"
        >
          <p className="uppercase hidden md:block">
            {name}
          </p>
          <div className="border border-[#BDBDBD] rounded-full p-1">
            <HiUser className="text-[#BDBDBD] text-4xl" />
          </div>
        </div>
      </div>
      <div
        className={`w-full absolute right-4 z-[999] justify-end  ${
          active ? "flex" : "hidden"
        }`}
      >
        <div className="pl-3 pr-10 py-4 shadow-md bg-white flex flex-col gap-5 rounded-lg">
          <p className="text-xs sm:text-base uppercase text-[#705EDF] font-medium">
            {name}
          </p>
          <div className="flex items-center gap-4">
            <RxExit />
            <button>Çıxış</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
