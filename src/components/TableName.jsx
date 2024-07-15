import React from "react";
import up_arrow from "../assets/images/caret-up.png";
import down_arrow from "../assets/images/caret-down.png";
const TableName = ({ name, onClick, sortOrder, sortBy, title }) => {
  return (
    <th className="py-5 border-r" scope="col" onClick={onClick}>
      <div class="flex justify-evenly items-center">
        {name}
        {sortBy === title ? (
          sortOrder === "asc" && sortBy === title ? (
            <img src={up_arrow} alt="up_arrow" className="w-3" />
          ) : (
            <img src={down_arrow} alt="down_arrow" className="w-3" />
          )
        ) : (
          <div className="flex flex-col gap-1">
            <img src={up_arrow} alt="up_arrow" className="w-3" />
            <img src={down_arrow} alt="down_arrow" className="w-3" />
          </div>
        )}
      </div>
    </th>
  );
};

export default TableName;
