import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import hand from "../assets/images/svg/hand.svg";
import bluehand from "../assets/images/svg/blue-hand.svg";
import { IoMenu } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
const Sidebar = () => {
  const [click, setClick] = useState(false);
  const [choose, setChoose] = useState(false);

  return (
    <>
      <aside className="fixed top-0 h-screen z-[999] bg-[#eaebed] flex flex-col  border-r shadow">
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
             click ? "w-52 ml-3 opacity-100" : "w-0 opacity-0"
           }`}
            >
              <img src={logo} className="w-52 max-w-52" alt="" />
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

          <div className="mt-10 flex flex-col gap-3">
            <Link
              to={"/new_complaint"}
              className="relative cursor-pointer flex p-3 bg-white mx-3 rounded-md"
            >
              <div class="has-tooltip flex">
                <span class="px-4 py-2 shadow tooltip w-36 text-sm text-center top-[4px]  translate-x-12 rounded p-1 bg-white">
                  Yeni şikayət yarat
                </span>
                <FiPlus className="w-5 h-5 rounded-md" />
                <div
                  className={`
              flex justify-between items-center
              overflow-hidden transition-all ${
                click ? "w-52 ml-3 opacity-100" : "w-0 opacity-0"
              }
          `}
                >
                  <div className="leading-4">
                    <h4 className="w-44 max-w-44">Yeni şikayət yarat</h4>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={"/"}
              className="relative cursor-pointer flex p-3 bg-white mx-3 rounded-md"
            >
              <div class="has-tooltip flex">
                <span class="px-4 py-2 shadow tooltip w-32 text-sm text-center top-[4px] translate-x-12 rounded p-1 bg-white">
                  Şikayətlər
                </span>
                <TfiMenuAlt className="w-5 h-5 rounded-md" />
                <div
                  className={`
              flex justify-between items-center
              overflow-hidden transition-all ${
                click ? "w-52 ml-3 opacity-100" : "w-0 opacity-0"
              }
          `}
                >
                  <div className="leading-4">
                    <h4 className="w-44">Şikayətlər</h4>
                  </div>
                </div>
              </div>
            </Link>
            <div
              onClick={() => setChoose(true)}
              className="relative cursor-pointer flex p-3 bg-white mx-3 rounded-md"
            >
              <div class="has-tooltip flex">
                <span class="px-4 py-2 shadow tooltip w-52 text-sm text-center top-[4px] translate-x-12 rounded p-1 bg-white">
                  İstehlakçı təcrübəsi sorğusu
                </span>
                <img src={hand} alt="hand" className="w-5 h-5 rounded-md" />
                <div
                  className={`
              flex justify-between items-center
              overflow-hidden transition-all ${
                click ? "w-52 ml-3 opacity-100" : "w-0 opacity-0"
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
        </div>
      </aside>
      <div
        className={`fixed inset-0 bg-black z-[9999] flex justify-center items-center ${
          choose ? "flex bg-opacity-80" : "hidden"
        }`}
      >
        <div className="w-11/12 lg:w-2/5 mx-5 h-64 overflow-hidden bg-white p-5 flex flex-col gap-10 rounded-bl-3xl rounded-tr-3xl">
          <div className="flex items-center gap-5">
            <img src={bluehand} alt="hand" className="text-3xl" />
            <p className="text-primaryColor text-4xl font-semibold">Sorğu</p>
          </div>

          <div>
            <p className="text-center text-xl">
              İnternet xidmətləri üzrə istehlakçı təcrübəsi sorğusu
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Link
              to={
                "https://docs.google.com/forms/d/e/1FAIpQLSc-1AMXNpayyZXs-iGtaHXnyiLsbTc9hwFpBwbrXVxvqwx8AA/viewform"
              }
              target="_blank"
              className="bg-primaryColor w-1/2 text-center px-8 py-2 rounded-md text-white"
            >
              Davam et
            </Link>
            <button
              onClick={() => setChoose(false)}
              className="bg-[#FF0000] w-1/2 px-8 py-2 rounded-md text-white"
            >
              Imtina et
            </button>
          </div>
        </div>
      </div>
      <Link
        to={"https://icta.az/"}
        className={`fixed bottom-0 left-0 z-[1009] p-4 pb-2 flex  items-center bg-[#e2e3e4] shadow ${
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
        <button className="p-1.5 rounded-lg">
          <CiLogout
            className={`text-2xl duration-500 ${click && "rotate-180"}`}
          />
        </button>
      </Link>
    </>
  );
};

export default Sidebar;
