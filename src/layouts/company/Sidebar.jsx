import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
// import hand from "../../assets/images/svg/hand.svg";
// import bluehand from "../../assets/images/svg/blue-hand.svg";
import { IoMenu } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
// import { FiPlus } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
// import { CiLogout } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { TbMessageCirclePin } from "react-icons/tb";
const Sidebar = () => {
  const [click, setClick] = useState(false);
//   const [choose, setChoose] = useState(false);

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
              to={"/company"}
              className="relative cursor-pointer flex p-3 bg-white mx-3 rounded-md"
            >
              <div className="has-tooltip flex">
                {!click && (
                  <span className="px-4 py-2 shadow tooltip w-44 text-sm text-center top-[4px]  translate-x-12 rounded p-1 bg-white">
                    Abunəçi şikayətləri
                  </span>
                )}
                <FaUsers className="w-5 h-5 rounded-md" />
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
                      Abunəçi şikayətləri
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              to={"isp"}
              className="relative cursor-pointer flex p-3 bg-white mx-3 rounded-md"
            >
              <div className="has-tooltip flex">
                {!click && (
                  <span className="px-4 py-2 shadow tooltip w-48 text-sm text-center top-[4px] translate-x-12 rounded p-1 bg-white">
                    ISP-lərdən daxil olanlar
                  </span>
                )}
                <TbMessageCirclePin className="w-5 h-5 rounded-md" />
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
            </Link>
            <Link
              to={"icta"}
              className="relative cursor-pointer flex p-3 bg-white mx-3 rounded-md"
            >
              <div className="has-tooltip flex">
                {!click && (
                  <span className="px-4 py-2 shadow tooltip w-48 text-sm text-center top-[4px] translate-x-12 rounded p-1 bg-white">
                    İKTA-dan daxil olanlar
                  </span>
                )}
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
                    <h4 className="w-44 max-w-44 text-sm">
                      İKTA-dan daxil olanlar
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
