import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const TableCols = ({
  number,
  abonent,
  company,
  field_of_action,
  subject,
  abonent_number,
  status,
  date,
  url,
}) => {
  return (
    <div className="cursor-pointer text-[#212529] flex items-center justify-between text-center">
      <p className="w-[6%] lg:text-sm text-xs  break-words py-3">{number}</p>
      <p className="w-[14%] lg:text-sm text-xs break-words py-3">{abonent}</p>
      <p className="w-[14%] lg:text-sm text-xs break-words py-3">{company}</p>
      <p className="w-[14%] lg:text-sm text-xs break-words py-3">
        {field_of_action}
      </p>
      <p className="w-[13%] lg:text-sm text-xs break-words py-3">{subject}</p>
      <p className="w-[13%] lg:text-sm text-xs break-words py-3">
        {abonent_number}
      </p>
      <p className="w-[9%] lg:text-sm text-xs break-words py-3">{status}</p>
      <p className="w-[9%] lg:text-sm text-xs break-words py-3">{date}</p>
      <Link to={url} className="w-[8%] py-3 flex gap-3 justify-end pr-10">
        <div className="bg-primaryColor px-3 py-2 rounded-lg">
          <FaEye className="text-white" />
        </div>
      </Link>
    </div>
  );
};

export default TableCols;
