import React from "react";

const TimePopup = ({ choose, setChoose }) => {
  return (
    <div
      className={`fixed inset-0 bg-black z-[9999] flex justify-center items-center ${
        choose ? "flex bg-opacity-30" : "hidden"
      }`}
    >
      <div className="bg-white animate-zoom-in w-11/12 lg:w-4/6 overflow-hidden flex flex-col rounded-lg md:p-8 py-8">
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <p className="uppercase text-center text-2xl font-semibold text-[#595959]">
            müddətin artırılması
          </p>
          <div className="md:px-10 px-5 w-full flex flex-col gap-5">
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="">
                <span className="text-[#FF0000]">*</span> Müddətin artırılması
              </label>
              <select
                required
                defaultValue={"option"}
                type="text"
                className="text-sm border p-3 rounded-md"
              >
                <option value={"option"} disabled>
                  Seçim edin
                </option>
                <option value={1}>
                  Əlavə öyrənilmə və yoxlanılma tələb edilir (artırılan müddət:
                  15 gün - cəmi: 30 gün)
                </option>
                <option value={2}>
                  Əlavə məlumatların əldə edilməsi və ya aidiyyəti üzrə sorğu
                  göndərilməsi tələb edilir (artırılan müddət: 30 gün - cəmi: 45
                  gün)
                </option>
              </select>
            </div>
            <div className="w-full flex flex-col gap-3">
              <label htmlFor="">
                <span className="text-[#FF0000]">*</span> Qeyd
              </label>
              <textarea
                required
                rows="5"
                type="text"
                name=""
                id=""
                className="border rounded-md p-5 focus:outline-primaryColor"
              />
            </div>
            <button
              onClick={() => setChoose(false)}
              className="uppercase bg-primaryColor w-full py-2 rounded-md text-white"
            >
              müddəti artır
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimePopup;
