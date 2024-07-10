import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import rotation from "../../assets/images/svg/3drotation.svg";
import drotation from "../../assets/images/svg/2drotation.svg";
const TableCols = ({
  watch,
  number,
  abonent,
  abuneci_kodu,
  xarakteristika,
  tarix,
  icra_ucun_muddet,
  status,
  icra,
  url,
}) => {
  return (
    <div
      className={`cursor-pointer text-[#212529] flex items-center justify-between text-center ${
        icra_ucun_muddet === "Gecikir" && "bg-[#FFBDBD]"
      } ${watch && "font-bold"} `}
    >
      <p className="w-[7%] lg:text-sm text-xs  break-words py-3">
        {number}
      </p>
      <p className="w-[20%] lg:text-sm text-xs break-words py-3">
        {abonent}
      </p>
      <p className="w-[13%] lg:text-sm text-xs break-words py-3">{abuneci_kodu}</p>
      <p className="w-[15%] lg:text-sm text-xs break-words py-3">{xarakteristika}</p>
      <p className="w-[9%] lg:text-sm text-xs break-words py-3">
        {tarix}
      </p>
      <p className="w-[15%] lg:text-sm text-xs break-words py-3">{icra_ucun_muddet}</p>
      <p className="w-[9%] lg:text-sm text-xs break-words py-3">{status}</p>
      <Link to={url} className="w-[12%] py-3 flex gap-3 justify-end pr-10">
        {icra === "təkrar şikayət" ? (
          <img src={rotation} alt="rotation" />
        ) : icra === "birgə baxış" ? (
          <img src={drotation} alt="rotation" />
        ) : (
          ""
        )}
        <div className="bg-primaryColor px-3 py-2 rounded-lg">
          <FaEye className="text-white" />
        </div>
      </Link>
    </div>
  );
};

export default TableCols;
