import React from "react";

const FilterPopUp = ({ open, setOpen }) => {
  return (
    <div
      className={`fixed inset-0 bg-black z-[9999] flex justify-center items-center ${
        open ? "flex bg-opacity-30" : "hidden"
      }`}
    >
      <div className="w-11/12 lg:w-3/6 animate-zoom-in overflow-hidden flex flex-col rounded-lg bg-white"></div>
    </div>
  );
};

export default FilterPopUp;
