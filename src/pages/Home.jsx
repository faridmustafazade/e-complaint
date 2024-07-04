import React, { useMemo, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { LuInfo } from "react-icons/lu";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { Link } from "react-router-dom";
import resume from "../assets/files/E-Şikayət - Abunəçi Təlimatı.pdf";
import { Complaint } from "../data/Complaint";
const Home = () => {
  const complaints = Complaint;
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const filteredComplaints = useMemo(() => {
    if (!search) return complaints;
    return complaints.filter((item) => {
      return (
        item?.complaint_number?.toString().includes(search) ||
        item?.company?.toLowerCase().includes(search?.toLowerCase()) ||
        item?.field_of_action?.toLowerCase().includes(search?.toLowerCase()) ||
        item?.subject?.toLowerCase().includes(search?.toLowerCase()) ||
        item?.subscriber_code?.toLowerCase().includes(search?.toLowerCase()) ||
        item?.status?.toLowerCase().includes(search?.toLowerCase()) ||
        item?.date?.toLowerCase().includes(search?.toLowerCase())
      );
    });
  }, [search, complaints]);

  const complaintsPerPage = 10;

  const totalPages = Math.ceil(filteredComplaints.length / complaintsPerPage);
  const paginatedComplaints = useMemo(() => {
    const start = (currentPage - 1) * complaintsPerPage;
    const end = start + complaintsPerPage;
    return filteredComplaints.slice(start, end);
  }, [currentPage, filteredComplaints]);

  return (
    <div className="px-10 py-5">
      <div className="flex items-center justify-between">
        <button className="flex items-center gap-5">
          <Link
            to={"new_complaint"}
            className="flex items-center gap-2 bg-primaryColor text-white px-5 py-1 rounded-full"
          >
            + Yeni şikayət yarat
          </Link>
          <button className="flex items-center gap-2 bg-primaryColor text-white px-5 py-1 rounded-full">
            <CiFilter className="inline" /> <span>Ətraflı axtarış</span>
          </button>
          <button className="flex items-center gap-2 bg-primaryColor text-white px-5 py-1 rounded-full">
            <a href={resume} download="E-Şikayət - Abunəçi Təlimatı">
              <LuInfo className="inline" /> <span>Təlimat</span>
            </a>
          </button>
        </button>
        <div className="flex bg-white items-center gap-2 border border-[#f4f4f4] px-3 py-1 rounded-full group focus-within:shadow-md duration-300">
          <IoSearch className="text-[#7878AB] text-2xl" />
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Axtar..."
            className="outline-none"
          />
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
        {paginatedComplaints.length > 0 ? (
          paginatedComplaints.map((complaint, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between text-center"
            >
              <p className="w-[12%] py-5">{complaint.complaint_number}</p>
              <p className="w-[16%] py-5">{complaint.field_of_action}</p>
              <p className="w-[10%] py-5">{complaint.company}</p>
              <p className="w-[13%] py-5">{complaint.subject}</p>
              <p className="w-[13%] py-5">{complaint.subscriber_code}</p>
              <p className="w-[14%] py-5">{complaint.status}</p>
              <p className="w-[10%] py-5">{complaint.date}</p>
              <Link
                to={"show_complaint"}
                className="w-[12%] py-5 flex justify-center"
              >
                <div className="bg-primaryColor px-3 py-2 rounded-lg">
                  <FaEye className="text-white" />
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="w-full flex justify-center items-center py-5">
            <p>Heç bir şikayət əlavə edilməyib...</p>
          </div>
        )}
      </div>
      <div className="select-none flex items-center justify-between mt-5">
        <p>
          Göstərilən:{" "}
          {paginatedComplaints.length > 0
            ? (currentPage - 1) * complaintsPerPage + 1
            : 0}
          -
          {currentPage * complaintsPerPage > filteredComplaints.length
            ? filteredComplaints.length
            : currentPage * complaintsPerPage}
          , cəmi {filteredComplaints.length} ({totalPages} səhifə)
        </p>
        <div className="flex items-center gap-1">
          <button
            disabled={currentPage <= 1}
            className={`p-4 leading-none text-white rounded-md ${
              currentPage > 1 ? "bg-primaryColor" : "bg-[#96AFD5]"
            }`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            <IoIosArrowBack className="text-xl" />
          </button>
          {filteredComplaints.length >= 1 && (
            <div className="select-none p-4 border leading-none border-primaryColor text-primaryColor rounded-md">
              {currentPage}
            </div>
          )}
          <button
            disabled={currentPage >= totalPages}
            className={`p-4 leading-none text-white rounded-md ${
              currentPage < totalPages ? "bg-primaryColor" : "bg-[#96AFD5]"
            }`}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            <IoIosArrowForward className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
