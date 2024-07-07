import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import hand from "../assets/images/svg/hand.svg";
import { IoMenu } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbHandClick } from "react-icons/tb";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
const Sidebar = () => {
  const [click, setClick] = useState(false);
  const [choose, setChoose] = useState(false);

  return (
    <>
      <aside className="sticky top-0 h-screen bg-[#eaebed] flex flex-col justify-between border-r shadow">
        <div>
          <div
            className={`p-4 pb-2 flex  items-center ${
              click ? "justify-between" : "justify-center"
            }`}
          >
            <div
              className={`
           flex justify-between items-center
           overflow-hidden transition-all ${
             click ? "w-44 ml-3 opacity-100" : "w-0 opacity-0"
           }`}
            >
              <img src={logo} className="w-44 max-w-44" alt="" />
            </div>
            <button
              onClick={() => setClick(!click)}
              className="p-1.5 rounded-lg"
            >
              {click ? (
                <BiMenuAltRight className="text-2xl" />
              ) : (
                <IoMenu className="text-2xl" />
              )}
            </button>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <Link
              to={"/new_complaint"}
              className="cursor-pointer flex p-3 bg-white mx-3 rounded-md"
            >
              <FiPlus className="w-5 h-5 rounded-md" />
              <div
                className={`
              flex justify-between items-center
              overflow-hidden transition-all ${
                click ? "w-44 ml-3 opacity-100" : "w-0 opacity-0"
              }
          `}
              >
                <div className="leading-4">
                  <h4 className="w-44 max-w-44">Yeni şikayət yarat</h4>
                </div>
              </div>
            </Link>
            <Link
              to={"/"}
              className="cursor-pointer flex p-3 bg-white mx-3 rounded-md"
            >
              <TfiMenuAlt className="w-5 h-5 rounded-md" />
              <div
                className={`
              flex justify-between items-center
              overflow-hidden transition-all ${
                click ? "w-44 ml-3 opacity-100" : "w-0 opacity-0"
              }
          `}
              >
                <div className="leading-4">
                  <h4 className="w-44">Şikayətlər</h4>
                </div>
              </div>
            </Link>
            <div
              onClick={() => setChoose(true)}
              className="cursor-pointer flex p-3 bg-white mx-3 rounded-md"
            >
              <img src={hand} alt="hand" className="w-5 h-5 rounded-md" />
              <div
                className={`
              flex justify-between items-center
              overflow-hidden transition-all ${
                click ? "w-44 ml-3 opacity-100" : "w-0 opacity-0"
              }
          `}
              >
                <div className="leading-4">
                  <h4 className="w-44 text-sm">
                    İstehlakçı təcrübəsi sorğusu{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`p-4 pb-2 flex  items-center bg-[#e2e3e4] shadow ${
            click ? "justify-between" : "justify-center"
          }`}
        >
          <div
            className={`
           flex justify-between items-center
           overflow-hidden transition-all ${
             click ? "w-52 ml-3 opacity-100" : "w-0 opacity-0"
           }`}
          >
            <p className="w-52 max-w-52 font-semibold" alt="">
              Çıxış
            </p>
          </div>
          <button onClick={() => setClick(!click)} className="p-1.5 rounded-lg">
            <CiLogout
              className={`text-2xl duration-500 ${click && "rotate-180"}`}
            />
          </button>
        </div>
      </aside>
      <div
        className={`fixed inset-0 bg-black z-[9999] flex justify-center items-center ${
          choose ? "flex bg-opacity-80" : "hidden"
        }`}
      >
        <div className="sm:w-2/5 mx-5 h-64 overflow-hidden bg-white p-5 flex flex-col gap-10 rounded-bl-3xl rounded-tr-3xl">
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
              className="bg-primaryColor px-8 py-2 rounded-md text-white text-xl"
            >
              Davam et
            </Link>
            <button
              onClick={() => setChoose(false)}
              className="bg-primaryColor px-8 py-2 rounded-md text-white text-xl"
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
