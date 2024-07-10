import React from "react";
import up_arrow from "../assets/images/caret-up.png";
import down_arrow from "../assets/images/caret-down.png";
const TableName = ({ name, width, onClick, sortOrder, sortBy, title }) => {
  return (
    <div
      onClick={onClick}
      className={`max-w-[${width}%] w-[${width}%] text-sm lg:text-base flex items-center justify-between border-r pl-5 py-5 pr-2`}
    >
      <p>{name}</p>
      {sortBy === title ? (
        sortOrder === "asc" && sortBy === title ? (
          <div className="flex flex-col gap-1">
            <img src={up_arrow} alt="up_arrow" className="w-3" />
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <img src={down_arrow} alt="down_arrow" className="w-3" />
          </div>
        )
      ) : (
        <div className="flex flex-col gap-1">
          <img src={up_arrow} alt="up_arrow" className="w-3" />
          <img src={down_arrow} alt="down_arrow" className="w-3" />
        </div>
      )}
    </div>
  );
};

export default TableName;
