import React from "react";

const SelectInput = ({ data, label, option, choose, setChoose }) => {
  return (
    <div className="flex flex-col gap-3">
      <label className={`${choose == null && "text-[#908080]"}`} htmlFor="">
        {label}
      </label>
      <select
        defaultValue={"option"}
        disabled={choose === null && true}
        type="text"
        className="text-sm border p-3 rounded-md"
        onClick={(e) => {
          if (setChoose !== undefined) {
            setChoose(e.target.value);
          }
        }}
      >
        <option disabled value={"option"}>
          {option}
        </option>
        {data
          .filter((item) => item.field === choose)
          .map((value) => (
            <>
              {value.names.map((name, idx) => (
                <option key={idx + 1} className="text-sm" value="internet">
                  {name}
                </option>
              ))}
            </>
          ))}
      </select>
    </div>
  );
};

export default SelectInput;
