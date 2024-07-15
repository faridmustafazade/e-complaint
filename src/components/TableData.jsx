import React from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import rotation from "../assets/images/svg/3drotation.svg";
// import drotation from "../assets/images/svg/2drotation.svg";
const TableData = ({
  watch,
  complaint_number,
  field_of_action,
  company,
  subject,
  subscriber_code,
  status,
  date,
  icra,
  url,
}) => {
  const navigate = useNavigate();
  return (
    // <div
    //   className={`cursor-pointer text-[#212529] flex items-center justify-between text-center ${
    //     status === "Gecikir" && "bg-[#FFBDBD]"
    //   } ${watch && "font-bold"} `}
    // >
    //   <p className="w-[12%] lg:text-sm text-xs  break-words py-3">
    //     {complaint_number}
    //   </p>
    //   <p className="w-[16%] lg:text-sm text-xs break-words py-3">
    //     {field_of_action}
    //   </p>
    //   <p className="w-[10%] lg:text-sm text-xs break-words py-3">{company}</p>
    //   <p className="w-[13%] lg:text-sm text-xs break-words py-3">{subject}</p>
    //   <p className="w-[13%] lg:text-sm text-xs break-words py-3">
    //     {subscriber_code}
    //   </p>
    //   <p className="w-[14%] lg:text-sm text-xs break-words py-3">{status}</p>
    //   <p className="w-[10%] lg:text-sm text-xs break-words py-3">{date}</p>
    //   <Link to={url} className="w-[12%] py-3 flex gap-3 justify-end pr-10">
    //     {icra === "təkrar şikayət" ? (
    //       <img src={rotation} alt="rotation" />
    //     ) : icra === "birgə baxış" ? (
    //       <img src={drotation} alt="rotation" />
    //     ) : (
    //       ""
    //     )}
    //     <div className="bg-primaryColor px-3 py-2 rounded-lg">
    //       <FaEye className="text-white" />
    //     </div>
    //   </Link>
    // </div>
    <tr className="text-center">
      <td className="py-5">{complaint_number}</td>
      <td className="py-5">{field_of_action}</td>
      <td className="py-5">{company}</td>
      <td className="py-5">{subject}</td>
      <td className="py-5">{subscriber_code}</td>
      <td className="py-5">{status}</td>
      <td className="py-5">{date}</td>
      <td
        className="py-5 flex justify-center cursor-pointer"
        onClick={() => navigate(url)}
      >
        <div className="bg-primaryColor px-3 py-2 rounded-lg">
          <FaEye className="text-white" />
        </div>
      </td>
    </tr>
  );
};

export default TableData;
