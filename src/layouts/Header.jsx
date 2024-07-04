import React, { useState } from "react";

import logo from "../assets/images/logo.png";
import { HiUser } from "react-icons/hi";
import { RxExit } from "react-icons/rx";

const Header = () => {
  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(!active);
  }
  return (
    <div className="relative">
      <div className="flex justify-between items-center py-5 px-10 border-b ">
        <img src={logo} className="w-64" alt="icta" />
        <div
          onClick={handleClick}
          className="flex items-center gap-5 cursor-pointer"
        >
          <p className="uppercase">FARİD MUSTAFAZADƏ MUSTAFA OĞLU</p>
          <div className="border border-[#BDBDBD] rounded-full p-1">
            <HiUser className="text-[#BDBDBD] text-4xl" />
          </div>
        </div>
      </div>
      <div
        className={`w-full absolute z-[999] justify-end px-16 ${
          active ? "flex" : "hidden"
        }`}
      >
        <div className="pl-3 pr-10 py-4 shadow-md bg-white flex flex-col gap-5 rounded-lg">
          <p className="uppercase text-[#705EDF] font-medium">
            FARİD MUSTAFAZADƏ MUSTAFA OĞLU
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
