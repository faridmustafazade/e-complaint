import React, { useMemo, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { LuInfo } from "react-icons/lu";
import { Link } from "react-router-dom";
import resume from "../assets/files/E-Şikayət - Abunəçi Təlimatı.pdf";
import { Complaint } from "../data/Complaint";
import TableName from "../components/TableName";
import TableData from "../components/TableData";
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
    <div className="py-10 px-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
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
        </div>
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
      <div className="bg-white rounded-lg shadow-md mt-10 overflow-hidden">
        <div className="flex items-center justify-between bg-primaryColor text-white">
          <TableName name={"Şikayət nömrəsi"} width={12} />
          <TableName name={"Fəaliyyət sahəsi"} width={16} />
          <TableName name={"Şirkət"} width={10} />
          <TableName name={"Mövzu"} width={13} />
          <TableName name={"Abunəçi kodu"} width={13} />
          <TableName name={"Status"} width={14} />
          <TableName name={"Tarix"} width={10} />
          <TableName name={"Əməliyyatlar"} width={12} />
        </div>
        {paginatedComplaints.length > 0 ? (
          paginatedComplaints.map((complaint, idx) => (
            <TableData
              key={idx}
              complaint_number={complaint.complaint_number}
              field_of_action={complaint.field_of_action}
              company={complaint.company}
              subject={complaint.subject}
              subscriber_code={complaint.subscriber_code}
              status={complaint.status}
              date={complaint.date}
            />
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
