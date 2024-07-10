import React, { useState } from "react";
import { LuUpload } from "react-icons/lu";
import { PiTrashSimpleFill } from "react-icons/pi";
import { RiFullscreenExitLine, RiFullscreenLine } from "react-icons/ri";

const PopUp = ({ setChoose, choose }) => {
  const [fileContent, setFileContent] = useState(null);
  const [fullScreen, setFullScreen] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile.type.includes("image")) {
      const reader = new FileReader();
      reader.onload = () => {
        setFileContent(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
    setFileContent(selectedFile.name);
  };
  return (
    <>
      <div
        className={`fixed inset-0 bg-black z-[9999] flex justify-center items-center ${
          choose ? "flex bg-opacity-30" : "hidden"
        }`}
      >
        <div className="bg-white animate-zoom-in w-11/12 lg:w-4/6 overflow-hidden flex flex-col rounded-lg p-8">
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <p className="text-center text-2xl font-semibold text-[#595959]">
              BİRGƏ BAXIŞIN YARADILMASI
            </p>
            <div className="px-10 w-full flex flex-col gap-5">
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="">
                  <span className="text-[#FF0000]">*</span>Şirkət
                </label>
                <select
                  required
                  defaultValue={"option"}
                  type="text"
                  className="text-sm border p-3 rounded-md"
                >
                  <option value={"option"} disabled>
                    Fəaliyyət sahəsi
                  </option>
                  <option value={1}>ENGINET (BIRLINK)</option>
                </select>
              </div>
              <div className="flex items-end justify-between gap-5">
                <div className="w-full flex flex-col gap-3">
                  <label htmlFor="">
                    <span className="text-[#FF0000]">*</span>Qeyd
                  </label>
                  <textarea
                    required
                    rows="10"
                    type="text"
                    name=""
                    id=""
                    placeholder="Maksimum 1000 simvol"
                    className="border rounded-md p-5"
                  />
                </div>
                <div
                  className={`relative rounded-lg bg-[#F3F3F3] ${
                    fileContent === null ? "lg:pt-20 pt-5" : "pt-5 h-full"
                  } cursor-pointer pb-5 px-5 lg:w-[60%] border flex flex-col items-center gap-3 justify-end h-full group hover:bg-white duration-300`}
                >
                  {fileContent === null ? (
                    <>
                      <LuUpload className="text-3xl group-hover:text-[#878787] duration-300" />
                      <p className="text-2xl group-hover:text-[#878787] duration-300">
                        Fayl əlavə et
                      </p>
                      <span className="text-[#878787]">
                        Faylları buraya əlavə edin. Faylın ölçüsü maksimum 10 MB
                        həcmində, png, txt, jpeg, jpg, pdf formatında fayl əlavə
                        edə bilərsiniz.
                      </span>
                      <input
                        type="file"
                        accept=".png,.txt,.jpeg,.jpg,.pdf"
                        onChange={(e) => {
                          handleFileChange(e);
                        }}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </>
                  ) : (
                    <>
                      {fileContent.includes("image") ? (
                        <section class="mx-auto w-fit">
                          <div class=" h-fit group">
                            <div class="relative overflow-hidden rounded-md">
                              <img src={fileContent} alt="" />

                              <div class="absolute h-full w-full bg-black/70 flex gap-10 items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <PiTrashSimpleFill
                                  onClick={() => {
                                    setFileContent(null);
                                  }}
                                  className="text-white text-4xl"
                                />
                                <RiFullscreenLine
                                  className="text-white text-4xl"
                                  onClick={() => setFullScreen(true)}
                                />
                              </div>
                            </div>
                          </div>
                        </section>
                      ) : (
                        <section class="mx-auto w-fit">
                          <div class=" h-fit group">
                            <div class="relative overflow-hidden rounded-md">
                              <p className="text-center px-2 py-10">
                                {fileContent}
                              </p>
                              <div class="absolute h-full w-full bg-black/50 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <PiTrashSimpleFill
                                  onClick={() => {
                                    setFileContent(null);
                                  }}
                                  className="text-white text-4xl"
                                />
                              </div>
                            </div>
                          </div>
                        </section>
                      )}
                    </>
                  )}
                </div>
              </div>
              <button
                onClick={() => setChoose(false)}
                className="uppercase bg-primaryColor w-full py-2 rounded-md text-white"
              >
                birgə baxış yarat
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={` fixed inset-0 bg-opacity-45 bg-black z-[9999] flex justify-center items-center ${
          fullScreen ? "flex" : "hidden"
        }`}
      >
        <div className="lg:w-2/5 w-5/6 overflow-hidden flex justify-center">
          <img src={fileContent} className="" alt="" />
        </div>
        <RiFullscreenExitLine
          onClick={() => setFullScreen(false)}
          className="cursor-pointer text-white text-4xl absolute top-10 right-10 hover:scale-125 duration-300"
        />
      </div>
    </>
  );
};

export default PopUp;
