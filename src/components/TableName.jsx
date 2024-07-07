import React from "react";
import up_arrow from "../assets/images/caret-up.png";
import down_arrow from "../assets/images/caret-down.png";
const TableName = ({ name, width, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`max-w-[${width}%] w-[${width}%] flex items-center justify-between border-r pl-5 py-5 pr-2`}
    >
      <p>{name}</p>
      <div className="flex flex-col gap-1">
        <img src={up_arrow} alt="up_arrow" className="w-3" />
        <img src={down_arrow} alt="down_arrow" className="w-3" />
      </div>
    </div>
  );
};

export default TableName;
