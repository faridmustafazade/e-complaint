import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
// import { IoSearch } from "react-icons/io5";
// import { LuInfo } from "react-icons/lu";
import TableName from "../../components/TableName";
import TableData from "../../components/TableData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { Link } from "react-router-dom";
import { User_Complaint } from "../../data/Complaint";

const UserComplaints = () => {
  const complaints = User_Complaint;
  // const [currentPage, setCurrentPage] = useState(1);
  // const [search, setSearch] = useState("");
  // const [sortOrder, setSortOrder] = useState("");
  const [sortBy, setSortBy] = useState("");
  console.log(setSortBy);
  // const handleSort = (column) => {
  //   if (column === sortBy) {
  //     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  //   } else {
  //     setSortBy(column);
  //     setSortOrder("asc");
  //   }
  // };

  // const filteredComplaints = useMemo(() => {
  //   if (!search) return complaints;
  //   return complaints.filter((item) => {
  //     return (
  //       item?.complaint_number?.toString().includes(search) ||
  //       item?.company?.toLowerCase().includes(search?.toLowerCase()) ||
  //       item?.field_of_action?.toLowerCase().includes(search?.toLowerCase()) ||
  //       item?.subject?.toLowerCase().includes(search?.toLowerCase()) ||
  //       item?.subscriber_code?.toLowerCase().includes(search?.toLowerCase()) ||
  //       item?.status?.toLowerCase().includes(search?.toLowerCase()) ||
  //       item?.date?.toLowerCase().includes(search?.toLowerCase())
  //     );
  //   });
  // }, [search, complaints]);

  // const sortedComplaints = useMemo(() => {
  //   let sortedData = [...filteredComplaints];
  //   if (sortBy && sortOrder) {
  //     sortedData.sort((a, b) => {
  //       const first = a[sortBy];
  //       const second = b[sortBy];
  //       if (sortOrder === "asc") {
  //         if (first < second) return -1;
  //         if (first > second) return 1;
  //         return 0;
  //       } else {
  //         if (first > second) return -1;
  //         if (first < second) return 1;
  //         return 0;
  //       }
  //     });
  //   }
  //   return sortedData;
  // }, [filteredComplaints, sortBy, sortOrder]);

  // const complaintsPerPage = 10;
  // const totalPages = Math.ceil(sortedComplaints.length / complaintsPerPage);

  // const paginatedComplaints = useMemo(() => {
  //   const start = (currentPage - 1) * complaintsPerPage;
  //   const end = start + complaintsPerPage;
  //   return sortedComplaints.slice(start, end);
  // }, [currentPage, sortedComplaints]);

  return (
    <>
      {/* <Helmet>
        <title>Şikayətlərim</title>
        <meta name="description" content="Şikayətlərim" />
        <meta name="theme-color" content="#ccc" />
      </Helmet> */}
      <div className="select-none px-5 py-10">
        <div className="flex flex-col lg:flex-row md:items-start lg:items-center sm:justify-between lg:gap-0 gap-5">
          <div className="w-full sm:w-auto flex flex-col sm:flex-row sm:items-center gap-5">
            <button className="flex items-center justify-center gap-2 bg-primaryColor text-white px-10 py-2 lg:py-1 rounded-full">
              <CiFilter className="inline" /> <span>Filter</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md mt-10 lg:overflow-hidden overflow-x-scroll">
          <div className="cursor-pointer flex items-center justify-between bg-primaryColor text-white lg:min-w-[100%] min-w-[1400px] lg:max-w-[100%] max-w-[2000px]">
            <TableName
              name={"№"}
              width={12}
              // onClick={() => handleSort("complaint_number")}
              // title={"complaint_number"}
              // sortOrder={sortOrder}
              sortBy={sortBy}
            />
            <TableName
              name={"Abunəçi"}
              width={16}
              // onClick={() => handleSort("field_of_action")}
              // title={"field_of_action"}
              sortBy={sortBy}
              // sortOrder={sortOrder}
            />
            <TableName
              name={"Abunəçi kodu"}
              width={10}
              // onClick={() => handleSort("company")}
              // title={"company"}
              sortBy={sortBy}
              // sortOrder={sortOrder}
            />
            <TableName
              name={"Xarakteristika"}
              width={13}
              // onClick={() => handleSort("subject")}
              // title={"subject"}
              sortBy={sortBy}
              // sortOrder={sortOrder}
            />
            <TableName
              name={"Tarix"}
              width={13}
              // onClick={() => handleSort("subscriber_code")}
              // title={"subscriber_code"}
              sortBy={sortBy}
              // sortOrder={sortOrder}
            />
            <TableName
              name={"İcra üçün müddət"}
              width={14}
              // onClick={() => handleSort("status")}
              // title={"status"}
              sortBy={sortBy}
              // sortOrder={sortOrder}
            />
            <TableName
              name={"Status"}
              width={10}
              // onClick={() => handleSort("date")}
              // title={"date"}
              sortBy={sortBy}
              // sortOrder={sortOrder}
            />
            <div className="max-w-[12%] w-[12%] flex items-center justify-center py-5">
              <p>Əməliyyatlar</p>
            </div>
          </div>
          <div className=" lg:min-w-[100%] min-w-[1400px] lg:max-w-[100%] max-w-[2000px]">
            {complaints.length > 0 ? (
              complaints.map((complaint, idx) => (
                <TableData
                  watch={complaint.watch}
                  key={idx}
                  complaint_number={complaint.number}
                  field_of_action={complaint.abonent}
                  company={complaint.abuneci_kodu}
                  subject={complaint.xarakteristika}
                  subscriber_code={complaint.tarix}
                  status={complaint.icra_üçün_müddət}
                  date={complaint.status}
                  icra={complaint.icra}
                  url={"show_complaint"}
                />
              ))
            ) : (
              <div className="w-full flex justify-center items-center py-5">
                <p>Heç bir şikayət əlavə edilməyib...</p>
              </div>
            )}
          </div>
        </div>
        <div className="select-none flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between mt-5">
          <p>
            Göstərilən:{" "}
            {/* {paginatedComplaints.length > 0
              ? (currentPage - 1) * complaintsPerPage + 1
              : 0}
            -
            {currentPage * complaintsPerPage > sortedComplaints.length
              ? sortedComplaints.length
              : currentPage * complaintsPerPage}
            , cəmi {sortedComplaints.length} ({totalPages} səhifə) */}
          </p>
          <div className="flex items-center gap-1">
            <button
              // disabled={currentPage <= 1}
              className={`p-4 leading-none text-white rounded-md 
              `}
              // ${
              //   currentPage > 1 ? "bg-primaryColor" : "bg-[#96AFD5]"
              // }
              // onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              <IoIosArrowBack className="text-xl" />
            </button>
            {/* {sortedComplaints.length >= 1 && (
              <div className="select-none p-4 border leading-none border-primaryColor text-primaryColor rounded-md">
                {currentPage}
              </div>
            )} */}
            <button
              // disabled={currentPage >= totalPages}
              className={`p-4 leading-none text-white rounded-md 
              `}
              // ${
              //   currentPage < totalPages ? "bg-primaryColor" : "bg-[#96AFD5]"
              // }
              // onClick={() =>
              //   setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              // }
            >
              <IoIosArrowForward className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserComplaints;
