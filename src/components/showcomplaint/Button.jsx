import React from "react";

const Button = ({ color, set, get, label }) => {
  return (
    <button
      onClick={() => set(!get)}
      className={`w-1/2 bg-${color} py-3 text-white rounded-md font-semibold text-xl`}
    >
      {label}
    </button>
  );
};

export default Button;
