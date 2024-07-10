import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { IoMenu } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import { TbMessageCirclePin } from "react-icons/tb";
const Sidebar = () => {
  const [click, setClick] = useState(false);

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
              to={"isp"}
              className={({ isActive }) =>
                isActive
                  ? "has-tooltip relative cursor-pointer text-white group bg-primaryColor flex p-3  mx-3 rounded-md"
                  : "has-tooltip relative cursor-pointer flex p-3 bg-white mx-3 rounded-md group hover:bg-primaryColor transition-all ease-linear duration-300"
              }
              onClick={() => setClick(false)}
            >
              <div className="has-tooltip flex">
                {!click && (
                  <span className="md:block hidden px-4 py-2 shadow tooltip w-52 text-sm text-center top-[4px] translate-x-12 rounded p-1 bg-white text-black">
                    ISP-lərdən daxil olanlar
                  </span>
                )}
                <TbMessageCirclePin className="w-5 h-5 rounded-md group-hover:text-white transition-all" />
                <div
                  className={`
              flex justify-between items-center
              overflow-hidden transition-all ${
                click ? "w-52 ml-3 opacity-100" : "w-0 opacity-0"
              }
          `}
                >
                  <div className="leading-4">
                    <h4 className="w-44 max-w-44 text-sm">
                      ISP-lərdən daxil olanlar
                    </h4>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink
              to={"icta"}
              className={({ isActive }) =>
                isActive
                  ? "has-tooltip relative cursor-pointer text-white group bg-primaryColor flex p-3  mx-3 rounded-md"
                  : "has-tooltip relative cursor-pointer flex p-3 bg-white mx-3 rounded-md group hover:bg-primaryColor transition-all ease-linear duration-300"
              }
            >
              <div className="has-tooltip flex">
                {!click && (
                  <span className="md:block hidden px-4 py-2 shadow tooltip w-52 text-sm text-center top-[4px] translate-x-12 rounded p-1 bg-white text-black">
                    İKTA-dan daxil olanlar
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
                    <h4 className="w-44 max-w-44 text-sm">
                      İKTA-dan daxil olanlar
                    </h4>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
