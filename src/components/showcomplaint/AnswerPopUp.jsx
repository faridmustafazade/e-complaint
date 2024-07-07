import React from "react";
import Button from "./Button";

const AnswerPopUp = ({ choose, setChoose }) => {
  return (
    <div
      className={`fixed inset-0 bg-black z-[9999] flex justify-center items-center ${
        choose ? "flex bg-opacity-30" : "hidden"
      }`}
    >
      <div className="bg-white animate-zoom-in w-2/6 overflow-hidden flex flex-col rounded-lg p-8">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="w-24 h-24 border-4 border-[#FACEA8] rounded-full flex justify-center items-center">
            <span className="text-[#FACEA8]">!</span>
          </div>
          <p className="text-center text-3xl font-semibold text-[#595959]">
            Cavabınızdan əminsinizmi?
          </p>
          <span className="text-xl text-[#595959]">
            Bu prosesi geri qaytara bilməzsiniz!
          </span>
          <div className="w-full flex gap-2 items-center">
            <Button
              color={"primaryColor"}
              set={setChoose}
              get={choose}
              label={"Bəli"}
            />
            <Button
              color={"[#FF0000]"}
              set={setChoose}
              get={choose}
              label={"Xeyr"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerPopUp;
