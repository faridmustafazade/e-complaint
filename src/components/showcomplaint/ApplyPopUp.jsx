import React, { useRef, useState } from "react";
import { BiUpload } from "react-icons/bi";
import Button from "./Button";

const ApplyPopUp = ({ success, setSuccess }) => {
  const [chooseFile, setChooseFile] = useState();
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className={`fixed inset-0 bg-black z-[9999] flex justify-center items-center ${
        success ? "flex bg-opacity-30" : "hidden"
      }`}
    >
      <div className="w-11/12 lg:w-3/6 animate-zoom-in overflow-hidden flex flex-col rounded-lg bg-white">
        <div className="py-10 flex flex-col gap-10">
          <div className="flex flex-col items-center px-5 gap-3">
            <p className="cursor-pointer" onClick={handleClick}>
              Fayl əlavə et:
            </p>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => setChooseFile(e.target.files[0].name)}
            />
            <div
              className="cursor-pointer w-full flex justify-center bg-primaryColor py-4 rounded-md"
              onClick={handleClick}
            >
              {chooseFile ? (
                <p className="text-white">{chooseFile}</p>
              ) : (
                <BiUpload className="text-white text-2xl" />
              )}
            </div>
          </div>
          <div className="w-full">
            <textarea
              type="text"
              className="border w-full outline-blue-300 p-5 outline-8"
              maxLength="300"
              placeholder="Mətni daxil edin..."
              name=""
              rows={5}
              id=""
            />
          </div>
          <div className="w-full flex gap-2 items-center px-5">
            <Button
              color={"primaryColor"}
              set={setSuccess}
              get={success}
              label={"Bəli"}
            />
            <Button
              color={"[#FF0000]"}
              set={setSuccess}
              get={success}
              label={"Xeyr"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyPopUp;
