import React, { useMemo, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { LuInfo } from "react-icons/lu";
import { Link } from "react-router-dom";
import resume from "../../assets/files/E-Şikayət - Abunəçi Təlimatı.pdf";
import { Complaint } from "../../data/Complaint";
import TableName from "../../components/TableName";
import TableData from "../../components/TableData";
import { Helmet } from "react-helmet";

const Home = () => {
  const complaints = Complaint;
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

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

  const sortedComplaints = useMemo(() => {
    let sortedData = [...filteredComplaints];
    if (sortBy && sortOrder) {
      sortedData.sort((a, b) => {
        const first = a[sortBy];
        const second = b[sortBy];
        if (sortOrder === "asc") {
          if (first < second) return -1;
          if (first > second) return 1;
          return 0;
        } else {
          if (first > second) return -1;
          if (first < second) return 1;
          return 0;
        }
      });
    }
    return sortedData;
  }, [filteredComplaints, sortBy, sortOrder]);

  const complaintsPerPage = 10;
  const totalPages = Math.ceil(sortedComplaints.length / complaintsPerPage);

  const paginatedComplaints = useMemo(() => {
    const start = (currentPage - 1) * complaintsPerPage;
    const end = start + complaintsPerPage;
    return sortedComplaints.slice(start, end);
  }, [currentPage, sortedComplaints]);

  return (
    <>
      <Helmet>
        <title>Şikayətlərim</title>
        <meta name="description" content="Şikayətlərim" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div className="select-none px-5 py-10">
        <div className="flex flex-col lg:flex-row md:items-start lg:items-center sm:justify-between lg:gap-0 gap-5">
          <div className="w-full sm:w-auto flex flex-col sm:flex-row sm:items-center gap-5">
            <Link
              to={"new_complaint"}
              className="flex items-center justify-center gap-2 bg-primaryColor text-white px-5 py-2 rounded-full"
            >
              + Yeni şikayət yarat
            </Link>
            <button className="flex items-center justify-center gap-2 bg-primaryColor text-white px-5 py-2 rounded-full">
              <CiFilter className="inline" /> <span>Ətraflı axtarış</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-primaryColor text-white px-5 py-2 rounded-full">
              <a href={resume} download="E-Şikayət - Abunəçi Təlimatı">
                <LuInfo className="inline" /> <span>Təlimat</span>
              </a>
            </button>
          </div>
          <div className="sm:w-auto w-full flex bg-white items-center gap-2 border border-primaryColor px-3 py-2 rounded-full group focus-within:shadow-md duration-300">
            <IoSearch className="text-[#7878AB] md:text-2xl text-lg w-[20%]" />
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Axtar..."
              className="w-[80%] outline-none"
            />
          </div>
        </div>
        <div className="overflow-x-auto mt-10 rounded-md shadow overflow-hidden">
          <table className="bg-white lg:min-w-[100%] min-w-[1400px] lg:max-w-[100%] max-w-[2000px]">
            <thead className="cursor-pointer bg-primaryColor text-white ">
              <tr>
                <TableName
                  name={"Şikayət nömrəsi"}
                  onClick={() => handleSort("complaint_number")}
                  title={"complaint_number"}
                  sortOrder={sortOrder}
                  sortBy={sortBy}
                />
                <TableName
                  name={"Fəaliyyət sahəsi"}
                  onClick={() => handleSort("field_of_action")}
                  title={"field_of_action"}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                />
                <TableName
                  name={"Şirkət"}
                  onClick={() => handleSort("company")}
                  title={"company"}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                />
                <TableName
                  name={"Mövzu"}
                  onClick={() => handleSort("subject")}
                  title={"subject"}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                />
                <TableName
                  name={"Abunəçi kodu"}
                  onClick={() => handleSort("subscriber_code")}
                  title={"subscriber_code"}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                />
                <TableName
                  name={"Status"}
                  onClick={() => handleSort("status")}
                  title={"status"}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                />
                <TableName
                  name={"Tarix"}
                  onClick={() => handleSort("date")}
                  title={"date"}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                />
                <th className="py-5 " scope="col">
                  Əməliyyat
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedComplaints.length > 0 ? (
                paginatedComplaints.map((item, idx) => (
                  <TableData
                    complaint_number={item.complaint_number}
                    field_of_action={item.field_of_action}
                    company={item.company}
                    subject={item.subject}
                    subscriber_code={item.subscriber_code}
                    status={item.status}
                    date={item.date}
                    url={"show_complaint"}
                  />
                ))
              ) : (
                <div className="w-full flex justify-center items-center py-5">
                  <p>Heç bir şikayət əlavə edilməyib...</p>
                </div>
              )}
            </tbody>
          </table>
        </div>

        <div className="select-none flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between mt-5">
          <p>
            Göstərilən:{" "}
            {paginatedComplaints.length > 0
              ? (currentPage - 1) * complaintsPerPage + 1
              : 0}
            -
            {currentPage * complaintsPerPage > sortedComplaints.length
              ? sortedComplaints.length
              : currentPage * complaintsPerPage}
            , cəmi {sortedComplaints.length} ({totalPages} səhifə)
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
            {sortedComplaints.length >= 1 && (
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
    </>
  );
};

export default Home;
