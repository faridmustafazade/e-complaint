import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { IoMenu } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbHandClick } from "react-icons/tb";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [click, setClick] = useState(false);
  const [choose, setChoose] = useState(false);
  function handleClick() {
    setClick(!click);
  }
  return (
    <>
      <div
        className={`sidebar fixed left-0 h-[100vh] z-[999] pt-5 bg-[#eaebed] ${
          click ? "w-[16%]" : "w-[5%]"
        } shadow`}
      >
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center gap-5">
            <img
              className={`w-40 ${click ? "inline" : "hidden"}`}
              src={logo}
              alt=""
            />
            <IoMenu
              onClick={handleClick}
              className={`cursor-pointer text-2xl ${
                click ? "hidden" : "block"
              }`}
            />
            <BiMenuAltRight
              onClick={handleClick}
              className={`cursor-pointer text-2xl ${
                click ? "block" : "hidden"
              }`}
            />
          </div>
          <div className="mt-10 flex flex-col gap-3">
            <Link
              to={"/new_complaint"}
              className={`bg-white shadow-lg rounded-md p-3 hover:bg-[#E2E3E4] duration-300 ${
                click ? "flex items-center gap-2" : "flex items-center"
              }`}
            >
              <FiPlus className="text-xl" />
              <p
                className={`${
                  click
                    ? "opacity-1 duration-300"
                    : "opacity-0 hidden duration-300"
                }`}
              >
                Yeni şikayət yarat
              </p>
            </Link>
            <Link
              to={""}
              className={`bg-white shadow-lg rounded-md p-3 hover:bg-[#E2E3E4] duration-300 ${
                click ? "flex items-center gap-2" : "inline"
              }`}
            >
              <TfiMenuAlt className="text-xl" />
              <p className={`${click ? "block" : "hidden"}`}>Şikayətlər</p>
            </Link>
            <div
              onClick={() => setChoose(true)}
              className={`cursor-pointer bg-white shadow-lg rounded-md p-3 hover:bg-[#E2E3E4] duration-300 ${
                click ? "flex items-center gap-2" : "inline"
              }`}
            >
              <TbHandClick className="text-2xl" />
              <p className={`${click ? "block" : "hidden"} text-sm`}>
                İstehlakçı təcrübəsi sorğusu
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black z-[9999] flex justify-center items-center ${
          choose ? "flex bg-opacity-80" : "hidden"
        }`}
      >
        <div className="w-2/5 h-64 overflow-hidden bg-white p-5 flex flex-col gap-10 rounded-bl-3xl rounded-tr-3xl">
          <div className="flex items-center gap-5">
            <TbHandClick className="text-3xl text-primaryColor" />
            <p className="text-primaryColor text-4xl font-semibold">Sorğu</p>
          </div>
          <div>
            <p className="text-center text-xl">
              İnternet xidmətləri üzrə istehlakçı təcrübəsi sorğusu
            </p>
          </div>
          <div className="flex items-center justify-evenly">
            <Link
              to={
                "https://docs.google.com/forms/d/e/1FAIpQLSc-1AMXNpayyZXs-iGtaHXnyiLsbTc9hwFpBwbrXVxvqwx8AA/viewform"
              }
              target="_blank"
              className="bg-primaryColor px-8 py-2 rounded-2xl text-white text-xl"
            >
              Davam et
            </Link>
            <button
              onClick={() => setChoose(false)}
              className="bg-primaryColor px-8 py-2 rounded-2xl text-white text-xl"
            >
              Imtina et
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
