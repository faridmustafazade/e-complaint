import React from "react";

const SelectInput = () => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="">Şikayət etdiyiniz fəaliyyət sahəsi</label>
      <select
        defaultValue={"option"}
        onChange={(e) => {
          setType(e.target.value);
        }}
        type="text"
        className="text-sm border p-2 rounded-md"
      >
        <option value={"option"} disabled>
          Fəaliyyət sahəsi
        </option>
        {fields &&
          fields.map((field, idx) => (
            <option key={idx} value={field.value}>
              {field.title}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectInput;
