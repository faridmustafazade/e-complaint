import React, { useState } from "react";
import { IoIosArrowDown, IoMdArrowRoundDown } from "react-icons/io";
import AnswerPopUp from "../../components/showcomplaint/AnswerPopUp";
import { Helmet } from "react-helmet";
import { LuUpload } from "react-icons/lu";
import { PiTrashSimpleFill } from "react-icons/pi";
import { RiFullscreenExitLine, RiFullscreenLine } from "react-icons/ri";
import PopUp from "../../components/company/PopUp";
import TimePopup from "../../components/company/TimePopup";

const ShowComplaint = () => {
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);
  const [choose, setChoose] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const [fileContent, setFileContent] = useState(null);
  const [fullScreen, setFullScreen] = useState(false);
  const [timePopUp, setTimePopUp] = useState(false);
  const [answer, setAnswer] = useState(false);
  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };
  const complaintText =
    "İki gündür ödəniş etməyimə baxmayaraq telefon işləmir.";

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
      <Helmet>
        <title>Şikayət məlumatları</title>
        <meta name="description" content="Şikayət məlumatları" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div className="px-3 py-6 lg:px-5 lg:py-10 flex flex-col gap-10">
        <div className="rounded-lg shadow overflow-hidden">
          <div
            onClick={() => setOpen(!open)}
            className="relative cursor-pointer bg-primaryColor py-4 flex items-center justify-center"
          >
            <p className="select-none text-white text-center text-sm lg:text-lg font-semibold">
              ŞİKAYƏT MƏLUMATLARI
            </p>
            <IoIosArrowDown
              className={`${
                open ? "rotate-180" : "rotate-0"
              } transition-all duration-300 absolute right-5 lg:right-10 top-1/2 transform -translate-y-1/2 text-white text-3xl`}
            />
          </div>

          <div
            className={`grid  overflow-hidden transition-all duration-300 ease-in-out ${
              open
                ? "grid-rows-[1fr] lg:p-5 py-5 px-2"
                : "grid-rows-[0fr] lg:px-5 px-2"
            }  bg-white`}
          >
            <div className="overflow-hidden">
              <div className="overflow-hidden select-none border border-[#d7d7d7] flex flex-col lg:flex-row gap-5 lg:gap-0 items-start p-5 rounded-md">
                <div className="w-full lg:w-[49%] flex flex-col gap-5">
                  <p>
                    <span className="font-bold">Şikayət nömrəsi: </span> 10234
                  </p>
                  <p>
                    <span className="font-bold">
                      Şikayət etdiyiniz fəaliyyət sahəsi:{" "}
                    </span>
                    Telefon rabitəsi
                  </p>
                  <p>
                    <span className="font-bold">
                      Şikayətin xarakteristikası:{" "}
                    </span>{" "}
                    Telefon xəttində yaranmış nasazlıq
                  </p>
                  <p>
                    <span className="font-bold">Abunəçi kodu:</span> 999887888
                  </p>
                </div>
                <div className="w-full lg:w-[49%] flex flex-col gap-5">
                  <p>
                    <span className="font-bold">Abunəçi: </span> Məmmədov Vüsal
                    Vaqif
                  </p>
                  <div className="flex flex-col lg:flex-row gap-5 lg:gap-24 lg:items-center">
                    <p>
                      <span className="font-bold">Şəhər: </span>Bakı
                    </p>
                    <p>
                      <span className="font-bold">Rayon: </span>Yasamal
                    </p>
                    <p>
                      <span className="font-bold">Küçə: </span>Şərifzadə
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-5 lg:gap-24 lg:items-center">
                    <p>
                      <span className="font-bold">Bina: </span>15
                    </p>
                    <p>
                      <span className="font-bold">Mənzil:</span>12
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-5 lg:gap-24 lg:items-center">
                    <p>
                      <span className="font-bold">Əlaqə nömrəsi:</span>{" "}
                      +994(70)523-58-02
                    </p>
                    <p>
                      <span className="font-bold">Stasionar telefon:</span>{" "}
                      +994125444444
                    </p>
                  </div>
                  <p>
                    <span className="font-bold">E-poçt:</span> test.mail@icta.az
                  </p>
                </div>
              </div>
              <div className="overflow-hidden select-none mt-5 px-2 lg:px-0">
                <div className="flex flex-col gap-5 w-full">
                  <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-10">
                    <p className="w-full lg:w-[15%] font-semibold">
                      Şikayətin mövzusu:
                    </p>
                    <span className="w-full lg:w-[85%]">Telefon işləmir</span>
                  </div>
                  <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-10">
                    <p className="w-full lg:w-[15%] font-semibold">
                      Şikayətin mətni:
                    </p>
                    <span className="w-full lg:w-[85%] lg:text-lg  bg-[#e4e9f7] italic px-2 rounded-lg">
                      {showFullText
                        ? complaintText
                        : `${complaintText.slice(0, 150)}`}
                      <button
                        className="text-blue-500 italic"
                        onClick={toggleFullText}
                      >
                        {showFullText ? "Daha az" : "...Daha çox"}
                      </button>
                    </span>
                  </div>
                  <div className="flex items-start gap-10">
                    <p className="w-[15%] font-semibold">Fayl:</p>
                    <span className="text-lg w-[85%]"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => setChoose(true)}
            className="bg-primaryColor px-8 py-1 rounded-full text-white"
          >
            Birgə baxış yarat
          </button>
        </div>
        <div className="rounded-lg shadow overflow-hidden">
          <div
            onClick={() => setOpen2(!open2)}
            className="relative cursor-pointer bg-primaryColor py-4 flex items-center justify-center"
          >
            <p className="lg:w-auto w-52 select-none text-white text-center text-sm lg:text-lg font-semibold">
              ŞİKAYƏTƏ BAXILMANIN NƏTİCƏSİ
            </p>
            <IoIosArrowDown
              className={`${
                open2 ? "rotate-180" : "rotate-0"
              } transition-all duration-300 absolute right-5 lg:right-10 top-1/2 transform -translate-y-1/2 text-white text-3xl`}
            />
          </div>
          <div
            className={`select-none grid overflow-hidden transition-all duration-300 ease-in-out ${
              open2 ? "grid-rows-[1fr] px-5 pt-10 pb-5" : "grid-rows-[0fr] px-5"
            }  bg-white`}
          >
            <div className="overflow-hidden flex flex-col lg:flex-row items-start gap-10">
              <div>
                <div className="flex gap-5 lg:px-10 lg:border-r border-[#DEE2E6]">
                  <div className="flex flex-col justify-around gap-12">
                    <div className="flex flex-col items-end">
                      <span>01.09.2023</span>
                      <span>14:25</span>
                    </div>
                    <div className="invisible flex flex-col items-end">
                      <span>29.05.2024</span>
                      <span>14:25</span>
                    </div>
                  </div>
                  <div className="relative w-2 bg-[#d9d9d9]">
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[#3C6CB4]"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[#9D9B9B]"></div>
                  </div>
                  <div className="flex flex-col justify-around gap-12">
                    <div className="flex flex-col">
                      <p className="text-[#3C6CB4] font-semibold">Baxılır</p>
                      <span className="text-sm text-[#9D9B9B] font-normal">
                        (Abunəçi)
                      </span>
                    </div>
                    <p className="text-[#9D9B9B]">Cavablandırıldı </p>
                  </div>
                </div>
              </div>
              <div className="invisible flex flex-col gap-5">
                <div className="flex flex-col gap-7">
                  <div className="flex flex-col lg:flex-row items-start gap-5 lg:gap-16">
                    <div className="flex flex-col lg:flex-row items-start gap-2">
                      <p className="font-[600] text-lg">
                        Şikayətin yaranma səbəbi:
                      </p>
                      <span>Xidmətin qoşulması ilə bağlı şikayət (ab)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <p className="text-lg font-[600]">STATUS:</p>
                      <span>Həll olunub</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-[600] text-lg">Edoc/Adoc:</p>
                    <span>275-1300191391-7NHAMN5.adoc</span>
                    <div className="bg-primaryColor p-1 rounded-full cursor-pointer group">
                      <IoMdArrowRoundDown className="text-white text-2xl group-hover:rotate-180 ease-in-out duration-500" />
                    </div>
                  </div>
                </div>
                <div className="hidden border border-[#DEE2E6] rounded-md p-3">
                  <p>
                    Abunəçi ilə əlaqə saxlanıldı. Abunəçi çağrı mərkəzinə
                    müraciət etməyib, ərazidə olan ustalardan soruşub. İzah
                    olundu ki, rəsmi qaydada çağrı mərkəzinə zəng etsin və yeni
                    qoşulma üçün sorğu açdırsın.
                  </p>
                </div>
                <div className="text-end text-sm lg:text-base">
                  İcraçı: CAVİD MÜRSƏLOV İLQAR OĞLU
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow">
          <div
            className={`select-none flex flex-col md:flex-row items-start md:items-center gap-5 lg:gap-0 justify-between transition-all duration-300 ease-in-out px-5 p-5`}
          >
            <p className="font-semibold">
              Şikayət tarixi: <span className="font-normal"> 19.09.2023</span>
            </p>
            <p className="font-semibold">
              Tamamlanmalı tarix:
              <span className="font-normal"> 04.10.2023</span>
            </p>
            <p className="font-semibold">
              Qalan müddət:
              <span className="font-normal"> 6 gün</span>
            </p>
            <p className="font-semibold">
              Təyin olunan müddət:
              <span className="font-normal"> 15 gün</span>
            </p>
            <button
              onClick={() => setTimePopUp(true)}
              className="rounded-full text-white bg-primaryColor px-10 py-1"
            >
              + Müddət artır
            </button>
          </div>
        </div>
        <div className="rounded-lg shadow overflow-hidden">
          <div
            onClick={() => setOpen3(!open3)}
            className="relative cursor-pointer bg-primaryColor py-4 flex items-center justify-center"
          >
            <p className="lg:w-auto w-52 select-none text-white text-center text-sm lg:text-lg font-semibold">
              CAVABLANDIRILMA
            </p>
            <IoIosArrowDown
              className={`${
                open3 ? "rotate-180" : "rotate-0"
              } transition-all duration-300 absolute right-5 lg:right-10 top-1/2 transform -translate-y-1/2 text-white text-3xl`}
            />
          </div>
          <div
            className={`select-none grid overflow-hidden transition-all duration-300 ease-in-out ${
              open3 ? "grid-rows-[1fr] px-5 p-5" : "grid-rows-[0fr] px-5"
            }  bg-white`}
          >
            <div className="overflow-hidden flex flex-col lg:flex-row lg:justify-between items-start gap-10">
              <div className="md:w-[25%] w-full flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-black">
                    <span className="text-[#FF0000]">* </span>
                    Alt status (abunəçi görmür)
                  </label>
                  <select
                    className="text-sm border p-3 rounded-md"
                    defaultValue={"option"}
                    name=""
                    id=""
                  >
                    <option disabled value="option">
                      Seçim edin
                    </option>
                    <option value="">Həll olunub</option>
                    <option value="">Qismən təmin edilib</option>
                    <option value="">Müvafiq izahat verilib</option>
                    <option value="">Rədd edilib (əsassız sayılıb)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-black">
                    <span className="text-[#FF0000]">*</span> Şikayətin yaranma
                    səbəbi
                  </label>
                  <select
                    className="text-sm border p-3 rounded-md"
                    defaultValue={"option"}
                    name=""
                    id=""
                  >
                    <option disabled value="option">
                      Seçim edin
                    </option>
                    <option value="">Həll olunub</option>
                    <option value="">Qismən təmin edilib</option>
                    <option value="">Müvafiq izahat verilib</option>
                    <option value="">Rədd edilib (əsassız sayılıb)</option>
                  </select>
                </div>
              </div>
              <div className="md:w-[50%] w-full flex flex-col gap-2 items-start">
                <label htmlFor="" className="text-black">
                  <span className="text-[#FF0000]">* </span>
                  Cavablandırılma mətni
                </label>
                <textarea
                  rows="8"
                  type="text"
                  name=""
                  id=""
                  className="border w-full rounded-md p-5"
                />
              </div>
              <div className="md:w-[25%] w-full">
                <div
                  className={`relative rounded-lg bg-[#F3F3F3] ${
                    fileContent === null ? "lg:pt-20 pt-5" : "pt-5"
                  } cursor-pointer pb-5 px-5 lg:w-full border flex flex-col items-center gap-3 justify-end group hover:bg-white duration-300`}
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
                        className="absolute inset-0 w-full opacity-0 cursor-pointer"
                      />
                    </>
                  ) : (
                    <>
                      {fileContent.includes("image") ? (
                        <div className="relative">
                          <div className="absolute inset-0 justify-center items-center gap-5 hidden group-hover:flex transition duration-300">
                            <PiTrashSimpleFill
                              onClick={() => {
                                setFileContent(null);
                              }}
                              className="text-primaryColor text-4xl"
                            />
                            <RiFullscreenLine
                              className="text-primaryColor text-4xl"
                              onClick={() => setFullScreen(true)}
                            />
                          </div>
                          <img src={fileContent} alt="" />
                        </div>
                      ) : (
                        <div className="relative">
                          <div className="absolute inset-0 justify-center items-center gap-5 hidden group-hover:flex transition duration-300">
                            <PiTrashSimpleFill
                              onClick={() => {
                                setFileContent(null);
                              }}
                              className="text-primaryColor text-4xl"
                            />
                          </div>
                          <p>{fileContent}</p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-baseline items-end justify-end gap-5 lg:gap-10">
          <button
            onClick={() => setAnswer(true)}
            className="text-xl flex items-center gap-3 bg-primaryColor px-5 py-3 text-white rounded-lg"
          >
            Abunəçiyə cavab göndər
          </button>
        </div>
      </div>

      <AnswerPopUp choose={answer} setChoose={setAnswer} />
      <PopUp choose={choose} setChoose={setChoose} />
      <TimePopup choose={timePopUp} setChoose={setTimePopUp} />

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

export default ShowComplaint;
