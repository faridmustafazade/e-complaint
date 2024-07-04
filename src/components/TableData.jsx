import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const TableData = ({complaint_number,field_of_action,company,subject,subscriber_code,status,date}) => {
  return (
    <div
      className="cursor-pointer text-[#212529] flex items-center justify-between text-center"
    >
      <p className="w-[12%] text-sm break-words py-5">
        {complaint_number}
      </p>
      <p className="w-[16%] text-sm break-words py-5">
        {field_of_action}
      </p>
      <p className="w-[10%] text-sm break-words py-5">{company}</p>
      <p className="w-[13%] text-sm break-words py-5">{subject}</p>
      <p className="w-[13%] text-sm break-words py-5">
        {subscriber_code}
      </p>
      <p className="w-[14%] text-sm break-words py-5">{status}</p>
      <p className="w-[10%] text-sm break-words py-5">{date}</p>
      <Link to={"show_complaint"} className="w-[12%] py-5 flex justify-center">
        <div className="bg-primaryColor px-3 py-2 rounded-lg">
          <FaEye className="text-white" />
        </div>
      </Link>
    </div>
  );
};

export default TableData;
