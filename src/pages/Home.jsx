import React from "react";
import { CiFilter } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { LuInfo } from "react-icons/lu";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Link } from "react-router-dom";
import resume from "../assets/files/E-Şikayət - Abunəçi Təlimatı.pdf";
const Home = () => {
  const arr = [1];
  return (
    <div className="px-10 py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link
            to={"new_complaint"}
            className="flex items-center gap-2 bg-primaryColor text-white px-5 py-1 rounded-full"
          >
            + Yeni şikayət yarat
          </Link>
          <div className="flex items-center gap-2 bg-primaryColor text-white px-5 py-1 rounded-full">
            <CiFilter className="inline" /> <span>Ətraflı axtarış</span>
          </div>
          <div className="flex items-center gap-2 bg-primaryColor text-white px-5 py-1 rounded-full">
            <a href={resume} download="E-Şikayət - Abunəçi Təlimatı">
              <LuInfo className="inline" /> <span>Təlimat</span>
            </a>
          </div>
        </div>
        <div className="flex bg-white items-center gap-2 border border-[#f4f4f4] px-3 py-1 rounded-full group focus-within:shadow-md duration-300">
          <IoSearch className="text-[#7878AB] text-2xl" />
          <input type="text" placeholder="Axtar..." className="outline-none" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md mt-5 overflow-hidden">
        <div className="flex items-center justify-between bg-primaryColor text-white">
          <div className="w-[12%] flex items-center justify-between border-r p-5">
            <p>Şikayət nömrəsi</p>
            <div>
              <TiArrowSortedUp />
              <TiArrowSortedDown />
            </div>
          </div>
          <div className="w-[16%] flex items-center justify-between border-r p-5">
            <p>Fəaliyyət sahəsi</p>
            <div>
              <TiArrowSortedUp />
              <TiArrowSortedDown />
            </div>
          </div>
          <div className="w-[10%] flex items-center justify-between border-r p-5">
            <p>Şirkət</p>
            <div>
              <TiArrowSortedUp />
              <TiArrowSortedDown />
            </div>
          </div>
          <div className="w-[13%] flex items-center justify-between border-r p-5">
            <p>Mövzu</p>
            <div>
              <TiArrowSortedUp />
              <TiArrowSortedDown />
            </div>
          </div>
          <div className="w-[13%] flex items-center justify-between border-r p-5">
            <p>Abunəçi kodu</p>
            <div>
              <TiArrowSortedUp />
              <TiArrowSortedDown />
            </div>
          </div>
          <div className="w-[14%] flex items-center justify-between border-r p-5">
            <p>Status</p>
            <div>
              <TiArrowSortedUp />
              <TiArrowSortedDown />
            </div>
          </div>
          <div className="w-[10%] flex items-center justify-between border-r p-5">
            <p>Tarix</p>
            <div>
              <TiArrowSortedUp />
              <TiArrowSortedDown />
            </div>
          </div>
          <div className="w-[12%] flex items-center justify-between p-5">
            <p>Əməliyyatlar</p>
            <div>
              <TiArrowSortedUp />
              <TiArrowSortedDown />
            </div>
          </div>
        </div>
        {arr && arr.length > 0 ? (
          <>
            <div className="flex items-center justify-between text-center">
              <p className="w-[12%] py-5">275</p>
              <p className="w-[16%] py-5">İnternet(GPON, ADSL və s.)</p>
              <p className="w-[10%] py-5">CİTYNET</p>
              <p className="w-[13%] py-5">Qoşulma gecikir</p>
              <p className="w-[13%] py-5">Yoxdur</p>
              <p className="w-[14%] py-5">Cavablandırıldı</p>
              <p className="w-[10%] py-5">18/05/2024 - 16:01</p>
              <Link
                to={"show_complaint"}
                className="w-[12%] py-5 flex justify-center"
              >
                <div className="bg-primaryColor px-3 py-2 rounded-lg">
                  <FaEye className="text-white" />
                </div>
              </Link>
            </div>
            <div className="flex items-center justify-between text-center">
              <p className="w-[12%] py-5">275</p>
              <p className="w-[16%] py-5">İnternet(GPON, ADSL və s.)</p>
              <p className="w-[10%] py-5">CİTYNET</p>
              <p className="w-[13%] py-5">Qoşulma gecikir</p>
              <p className="w-[13%] py-5">Yoxdur</p>
              <p className="w-[14%] py-5">Cavablandırıldı</p>
              <p className="w-[10%] py-5">18/05/2024 - 16:01</p>
              <div className="w-[12%] py-5 flex justify-center">
                <div className="bg-primaryColor px-3 py-2 rounded-lg">
                  <FaEye className="text-white" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-center">
              <p className="w-[12%] py-5">275</p>
              <p className="w-[16%] py-5">İnternet(GPON, ADSL və s.)</p>
              <p className="w-[10%] py-5">CİTYNET</p>
              <p className="w-[13%] py-5">Qoşulma gecikir</p>
              <p className="w-[13%] py-5">Yoxdur</p>
              <p className="w-[14%] py-5">Cavablandırıldı</p>
              <p className="w-[10%] py-5">18/05/2024 - 16:01</p>
              <div className="w-[12%] py-5 flex justify-center">
                <div className="bg-primaryColor px-3 py-2 rounded-lg">
                  <FaEye className="text-white" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-center">
              <p className="w-[12%] py-5">275</p>
              <p className="w-[16%] py-5">İnternet(GPON, ADSL və s.)</p>
              <p className="w-[10%] py-5">CİTYNET</p>
              <p className="w-[13%] py-5">Qoşulma gecikir</p>
              <p className="w-[13%] py-5">Yoxdur</p>
              <p className="w-[14%] py-5">Cavablandırıldı</p>
              <p className="w-[10%] py-5">18/05/2024 - 16:01</p>
              <div className="w-[12%] py-5 flex justify-center">
                <div className="bg-primaryColor px-3 py-2 rounded-lg">
                  <FaEye className="text-white" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-center">
              <p className="w-[12%] py-5">275</p>
              <p className="w-[16%] py-5">İnternet(GPON, ADSL və s.)</p>
              <p className="w-[10%] py-5">CİTYNET</p>
              <p className="w-[13%] py-5">Qoşulma gecikir</p>
              <p className="w-[13%] py-5">Yoxdur</p>
              <p className="w-[14%] py-5">Cavablandırıldı</p>
              <p className="w-[10%] py-5">18/05/2024 - 16:01</p>
              <div className="w-[12%] py-5 flex justify-center">
                <div className="bg-primaryColor px-3 py-2 rounded-lg">
                  <FaEye className="text-white" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-center">
              <p className="w-[12%] py-5">275</p>
              <p className="w-[16%] py-5">İnternet(GPON, ADSL və s.)</p>
              <p className="w-[10%] py-5">CİTYNET</p>
              <p className="w-[13%] py-5">Qoşulma gecikir</p>
              <p className="w-[13%] py-5">Yoxdur</p>
              <p className="w-[14%] py-5">Cavablandırıldı</p>
              <p className="w-[10%] py-5">18/05/2024 - 16:01</p>
              <div className="w-[12%] py-5 flex justify-center">
                <div className="bg-primaryColor px-3 py-2 rounded-lg">
                  <FaEye className="text-white" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-center">
              <p className="w-[12%] py-5">275</p>
              <p className="w-[16%] py-5">İnternet(GPON, ADSL və s.)</p>
              <p className="w-[10%] py-5">CİTYNET</p>
              <p className="w-[13%] py-5">Qoşulma gecikir</p>
              <p className="w-[13%] py-5">Yoxdur</p>
              <p className="w-[14%] py-5">Cavablandırıldı</p>
              <p className="w-[10%] py-5">18/05/2024 - 16:01</p>
              <div className="w-[12%] py-5 flex justify-center">
                <div className="bg-primaryColor px-3 py-2 rounded-lg">
                  <FaEye className="text-white" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-center">
              <p className="w-[12%] py-5">275</p>
              <p className="w-[16%] py-5">İnternet(GPON, ADSL və s.)</p>
              <p className="w-[10%] py-5">CİTYNET</p>
              <p className="w-[13%] py-5">Qoşulma gecikir</p>
              <p className="w-[13%] py-5">Yoxdur</p>
              <p className="w-[14%] py-5">Cavablandırıldı</p>
              <p className="w-[10%] py-5">18/05/2024 - 16:01</p>
              <div className="w-[12%] py-5 flex justify-center">
                <div className="bg-primaryColor px-3 py-2 rounded-lg">
                  <FaEye className="text-white" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-center">
              <p className="w-[12%] py-5">275</p>
              <p className="w-[16%] py-5">İnternet(GPON, ADSL və s.)</p>
              <p className="w-[10%] py-5">CİTYNET</p>
              <p className="w-[13%] py-5">Qoşulma gecikir</p>
              <p className="w-[13%] py-5">Yoxdur</p>
              <p className="w-[14%] py-5">Cavablandırıldı</p>
              <p className="w-[10%] py-5">18/05/2024 - 16:01</p>
              <div className="w-[12%] py-5 flex justify-center">
                <div className="bg-primaryColor px-3 py-2 rounded-lg">
                  <FaEye className="text-white" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full flex justify-center items-center py-5">
            <p>Heç bir şikayət əlavə edilməyib...</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between mt-5">
        <p>Göstərilən: 1-10, cəmi 1 (1 səhifə)</p>
        <div className="flex items-center gap-1">
          <div className="p-4 leading-none bg-primaryColor text-white rounded-md">
            <IoIosArrowBack className="text-xl" />
          </div>
          <div className="p-4 border leading-none border-primaryColor text-primaryColor rounded-md">
            1
          </div>
          <div className="p-4 leading-none bg-primaryColor text-white rounded-md">
            <IoIosArrowForward className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
