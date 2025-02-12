import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import bluehand from "../../assets/images/svg/blue-hand.svg";
import { IoMenu } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link, NavLink } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
const Sidebar = () => {
  const [click, setClick] = useState(false);
  const [choose, setChoose] = useState(false);

  return (
    <>
      <aside
        className={`${
          click ? "md:w-[290px] w-full" : "w-[70px]"
        } fixed top-0 h-screen z-[999] bg-[#eaebed] flex flex-col transition-all duration-1000  border-r shadow`}
      >
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
            <NavLink
              to={"/new_complaint"}
              className={({ isActive }) =>
                isActive
                  ? "has-tooltip bg-primaryColor relative cursor-pointer group text-white flex p-3  mx-3 rounded-md"
                  : "has-tooltip relative cursor-pointer flex p-3 group bg-white mx-3 rounded-md hover:bg-primaryColor  transition-all ease-linear duration-300"
              }
              onClick={() => setClick(false)}
            >
              <div className="has-tooltip flex">
                {!click && (
                  <span className="md:block hidden px-4 py-2 shadow tooltip w-48 text-sm text-center top-[4px] text-black translate-x-12 rounded p-1 bg-white">
                    Yeni şikayət yarat
                  </span>
                )}
                <FiPlus className="w-5 h-5 rounded-md group-hover:text-white transition-all" />
                <div
                  className={`
              flex justify-between items-center
              overflow-hidden group-hover:text-white transition-all ${
                click ? "w-52 ml-3 opacity-100" : "w-0 opacity-0"
              }
          `}
                >
                  <div className="leading-4">
                    <h4 className="w-44 max-w-44 text-sm">
                      Yeni şikayət yarat
                    </h4>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "has-tooltip relative cursor-pointer text-white group bg-primaryColor flex p-3  mx-3 rounded-md"
                  : "has-tooltip relative cursor-pointer flex p-3 bg-white mx-3 rounded-md group hover:bg-primaryColor transition-all ease-linear duration-300"
              }
              onClick={() => setClick(false)}
            >
              <div className=" flex">
                {!click && (
                  <span className="md:block hidden px-4 py-2 shadow tooltip w-32 text-sm text-center top-[4px] translate-x-12 rounded p-1 bg-white text-black">
                    Şikayətlər
                  </span>
                )}
                <TfiMenuAlt className="w-5 h-5 rounded-md group-hover:text-white transition-all" />
                <div
                  className={`
              flex justify-between items-center
              overflow-hidden group-hover:text-white transition-all ${
                click ? "w-52 ml-3 opacity-100" : "w-0 opacity-0"
              }
          `}
                >
                  <div className="leading-4">
                    <h4 className="w-44 text-sm">Şikayətlər</h4>
                  </div>
                </div>
              </div>
            </NavLink>
            <div
              onClick={() => {
                setChoose(true);
                setClick(false);
              }}
              className="has-tooltip relative cursor-pointer flex p-3 bg-white mx-3 rounded-md group hover:bg-primaryColor transition-all ease-linear duration-300"
            >
              <div className="has-tooltip flex">
                {!click && (
                  <span className="md:block hidden px-4 py-2 shadow tooltip w-64 text-sm text-center top-[4px] translate-x-12 rounded p-1 bg-white">
                    İstehlakçı təcrübəsi sorğusu
                  </span>
                )}
                <svg
                  id=""
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 83.62 122.88"
                  width="40px"
                  height="40px"
                  class="w-5 h-5 rounded-md fill-current text-black group-hover:text-white transition-all"
                >
                  <path d="M40.59,14.63a3.36,3.36,0,0,1-1,2.39l0,0a3.39,3.39,0,0,1-4.77,0,3.42,3.42,0,0,1-1-2.4V3.39A3.4,3.4,0,0,1,37.2,0a3.34,3.34,0,0,1,2.39,1,3.39,3.39,0,0,1,1,2.4V14.63Zm25,76.65a1.89,1.89,0,0,1,3.77,0V99.9a1.89,1.89,0,1,1-3.77,0V91.28ZM54.46,87.47a1.89,1.89,0,0,1,3.77,0V99.9a1.89,1.89,0,1,1-3.77,0V87.47Zm-28-7.63a1.92,1.92,0,0,1-.35-.23q-5.24-4.24-10.44-8.53a8.36,8.36,0,0,0-3.57-1.79,3.54,3.54,0,0,0-2,.09A2,2,0,0,0,9,70.49a6.9,6.9,0,0,0-.4,3.24,12.47,12.47,0,0,0,1.11,4,26.49,26.49,0,0,0,2.92,4.94l17.68,26.74a2.37,2.37,0,0,1,.36,1,15.28,15.28,0,0,0,1.87,6.4,2.89,2.89,0,0,0,2.57,1.46c9,0,18.62-.34,27.53,0a8.33,8.33,0,0,0,4.69-1.51,15,15,0,0,0,4.29-5l.34-.57c3.4-5.87,6.71-11.57,7-18.33L78.85,85l0-.33,0-1.84c.06-5.74.16-14.54-4.62-15.4H71.14c.09,2.46,0,5-.18,7.3-.08,1.36-.15,2.63-.15,3.79a2.31,2.31,0,1,1-4.62,0c0-1.1.08-2.52.17-4,.32-5.73.75-13.38-3.24-14.14h-3a2.2,2.2,0,0,1-.58-.07,69.07,69.07,0,0,1-.13,8.29c-.07,1.36-.15,2.63-.15,3.79a2.31,2.31,0,1,1-4.61,0c0-1.1.08-2.52.16-4,.33-5.73.76-13.38-3.24-14.14h-3a2,2,0,0,1-.6-.08V66a2.31,2.31,0,1,1-4.61,0V42c0-4-1.64-6.55-3.73-7.61a5.32,5.32,0,0,0-4.71-.06l-.1.06c-2.07,1-3.69,3.59-3.69,7.7v42a2.31,2.31,0,1,1-4.62,0V79.84Zm44.14-17a2.49,2.49,0,0,1,.61-.08h3.19a2.33,2.33,0,0,1,.53.06c8.73,1.4,8.61,12.65,8.52,20,0,3.4.14,6.78.18,10.17-.39,7.91-4,14.1-7.67,20.47l-.32.55A19.49,19.49,0,0,1,70,120.55a12.88,12.88,0,0,1-7.29,2.32H35.17a7.23,7.23,0,0,1-6.44-3.5,19,19,0,0,1-2.56-7.88L8.94,85.42A31,31,0,0,1,5.5,79.58,16.88,16.88,0,0,1,4,74a11.42,11.42,0,0,1,.8-5.42,6.54,6.54,0,0,1,3.55-3.49A8.05,8.05,0,0,1,13,64.76a13.19,13.19,0,0,1,5.61,2.77L26.45,74V42.09c0-6.1,2.73-10,6.22-11.82l.15-.06a9.81,9.81,0,0,1,4.33-1,10,10,0,0,1,4.49,1.07C45.16,32.06,47.91,36,47.91,42v7.6a2.41,2.41,0,0,1,.6-.08H51.7a2.33,2.33,0,0,1,.53.06c3.82.61,5.73,3.16,6.63,6.47a2.25,2.25,0,0,1,1.23-.36h3.18a2.26,2.26,0,0,1,.53.06c4.07.65,6,3.49,6.79,7.11ZM14.63,37A3.33,3.33,0,0,1,17,38a3.39,3.39,0,0,1-2.39,5.79H3.39a3.36,3.36,0,0,1-2.39-1A3.4,3.4,0,0,1,3.39,37ZM23,20.55a3.39,3.39,0,0,1-2.4,5.79,3.4,3.4,0,0,1-2.4-1l-7.91-7.94a3.42,3.42,0,0,1-1-2.4,3.39,3.39,0,0,1,5.79-2.4L23,20.55ZM59.2,43.81a3.41,3.41,0,0,1-3.4-3.4A3.41,3.41,0,0,1,59.2,37H70.43a3.35,3.35,0,0,1,2.4,1,3.4,3.4,0,0,1-2.4,5.79ZM55.62,24.74a3.39,3.39,0,0,1-4.8-4.8l7.91-8a3.39,3.39,0,0,1,4.8,4.8l-7.91,8Z"></path>
                </svg>
                <div
                  className={`
              flex justify-between items-center
              overflow-hidden group-hover:text-white transition-all ${
                click ? "w-52 ml-3 opacity-100" : "w-0 opacity-0"
              }
          `}
                >
                  <div className="leading-4">
                    <h4 className="w-44 text-xs">
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
        className={`fixed bottom-0 left-0 z-[1009] p-4 pb-2 flex  items-center bg-[#e2e3e4] shadow transition-all ease-in-out duration-700 ${
          click ? "justify-between md:w-[290px] w-full" : "w-[70px]"
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
