import React, { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoIosArrowDown, IoMdArrowRoundDown } from "react-icons/io";
import AnswerPopUp from "../../components/showcomplaint/AnswerPopUp";
import ApplyPopUp from "../../components/showcomplaint/ApplyPopUp";
import { Helmet } from "react-helmet";

const ShowComplaint = () => {
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [choose, setChoose] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };
  const complaintText =
    "Salam. Bir müddət öncə internet çəkilməsi ilə bağlı müraciət etdim, gəlib baxdıqları zaman qutularda yer olmadığı söylədilər. Ama yenədə baxacaqlarını dedilər. Hələki xəbər yoxdur. Sizdən internet çəkilməsi ilə bağlı mənə kömək etməyinizi xahiş edirəm.";
  return (
    <>
      <Helmet>
        <title>Şikayət məlumatları</title>
        <meta name="description" content="Şikayət məlumatları" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div className="px-3 py-6 lg:px-5 lg:py-10 flex flex-col gap-7">
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
                  <p className="text-sm lg:text-base">
                    <span className="font-bold">Fin:</span> 7NHAMN5
                  </p>
                  <p className="text-sm lg:text-base">
                    <span className="font-bold">Ad, soyad, ata adı:</span> FARİD
                    MUSTAFAZADƏ MUSTAFA OĞLU
                  </p>
                  <p className="text-sm lg:text-base">
                    <span className="font-bold">Abunəçi kodu:</span> Yoxdur
                  </p>
                  <p className="text-sm lg:text-base">
                    <span className="font-bold">
                      Müraciət olunan provayder:
                    </span>{" "}
                    CİTYNET
                  </p>
                  <p className="text-sm lg:text-base">
                    <span className="font-bold">
                      Müraciət xarakteristikası:
                    </span>{" "}
                    Xidmətin qoşulması ilə bağlı şikayət (abunə əməliyyatları)
                  </p>
                  <p className="text-sm lg:text-base">
                    <span className="font-bold">Müraciət müvzusu:</span> Qoşulma
                    gecikir
                  </p>
                  <p className="text-sm lg:text-base">
                    <span className="font-bold">
                      Müraciət tarixi (gün, ay, il / saat):
                    </span>{" "}
                    18.05.2024 / 16:01
                  </p>
                </div>
                <div className="w-full lg:w-[49%] flex flex-col gap-5">
                  <p className="text-sm lg:text-base">
                    <span className="font-bold">Ünvan:</span> LƏNKƏRAN ŞƏHƏRİ,
                    Mirzə Fətəli Axundov, bina/ev No 18,
                  </p>
                  <div className="flex flex-col lg:flex-row gap-5 lg:gap-24 lg:items-center">
                    <p className="text-sm lg:text-base">
                      <span className="font-bold">Əlaqə nömrəsi:</span>{" "}
                      +994(70)523-58-02
                    </p>
                    <p className="text-sm lg:text-base">
                      <span className="font-bold">Stasionar telefon:</span>{" "}
                      +994(12)544-44-44
                    </p>
                  </div>
                  <p className="text-sm lg:text-base">
                    <span className="font-[700]">E-poçt:</span>{" "}
                    mustafafarid554@gmail.com
                  </p>
                </div>
              </div>
              <div className="overflow-hidden select-none mt-5 px-2 lg:px-0">
                <div className="flex flex-col gap-5 w-full">
                  <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-10">
                    <p className="w-full lg:text-lg text-base lg:w-[15%] font-semibold">
                      Şikayətin mövzusu:
                    </p>
                    <span className="w-full lg:text-base text-sm lg:w-[85%]">
                      Qoşulma gecikir
                    </span>
                  </div>
                  <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-10">
                    <p className="w-full lg:text-lg text-base lg:w-[15%] font-semibold">
                      Şikayətin mətni:
                    </p>
                    <span className="w-full lg:w-[85%] lg:text-lg text-sm  bg-[#e4e9f7] italic px-2 rounded-lg">
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
                    <p className="w-[15%] font-semibold lg:text-lg text-baseg">
                      Fayl:
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow overflow-hidden">
          <div
            onClick={() => setOpen2(!open2)}
            className="relative cursor-pointer bg-primaryColor py-4 flex items-center justify-center"
          >
            <p className="lg:w-auto w-52 select-none text-white text-center text-sm lg:text-lg font-semibold">
              ŞİKAYƏTƏ İSP TƏRƏFİNDƏN BAXIŞIN NƏTİCƏSİ
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
                    <span className="lg:text-base text-sm">18.05.2024</span>
                    <span className="lg:text-base text-sm">29.05.2024</span>
                  </div>
                  <div className="relative w-2 bg-[#d9d9d9]">
                    <div className="absolute top-1 lg:top-6 left-1/2 transform -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[#9D9B9B]"></div>
                    <div className="absolute bottom-1 lg:bottom-6 left-1/2 transform -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[#3C6CB4]"></div>
                  </div>
                  <div className="flex flex-col justify-between gap-12">
                    <p className="text-[#9D9B9B] lg:text-base text-sm">
                      Şikayət yaradıldı{" "}
                      <span className="text-sm text-[#9D9B9B] font-normal">
                        (Abunəçi)
                      </span>
                    </p>
                    <p className="text-[#3C6CB4] font-semibold lg:text-base text-sm">
                      Cavablandırıldı{" "}
                      <span className="text-sm text-[#9D9B9B] font-normal">
                        (İSP)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-7">
                  <div className="flex flex-col lg:flex-row items-start gap-5 lg:gap-16">
                    <div className="flex flex-col lg:flex-row lg:items-center items-start gap-2">
                      <p className="font-bold text-sm lg:text-lg">
                        Şikayətin yaranma səbəbi:
                      </p>
                      <span className="lg:text-base text-sm">
                        Xidmətin qoşulması ilə bağlı şikayət (ab)
                      </span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center items-start gap-2">
                      <p className="font-bold text-sm lg:text-lg">STATUS:</p>
                      <span className="lg:text-base text-sm">Həll olunub</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-sm lg:text-lg">Edoc/Adoc:</p>
                    <span className="lg:text-base text-sm">
                      275-1300191391-7NHAMN5.adoc
                    </span>
                    <div className="bg-primaryColor p-1 rounded-full cursor-pointer group">
                      <IoMdArrowRoundDown className="text-white text-2xl group-hover:rotate-180 ease-in-out duration-500" />
                    </div>
                  </div>
                </div>
                <div className="border border-[#DEE2E6] rounded-md p-3">
                  <p className="lg:text-base text-sm">
                    Abunəçi ilə əlaqə saxlanıldı. Abunəçi çağrı mərkəzinə
                    müraciət etməyib, ərazidə olan ustalardan soruşub. İzah
                    olundu ki, rəsmi qaydada çağrı mərkəzinə zəng etsin və yeni
                    qoşulma üçün sorğu açdırsın.
                  </p>
                </div>
                <div className="lg:text-end text-center text-sm lg:text-base">
                  İcraçı: CAVİD MÜRSƏLOV İLQAR OĞLU
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-baseline items-end justify-end gap-5 lg:gap-10">
          <button
            onClick={() => setChoose(true)}
            className="text-xl w-full lg:w-auto flex justify-center lg:justify-normal items-center gap-3 bg-primaryColor lg:px-5 lg:py-3 py-2 text-white rounded-lg"
          >
            <AiOutlineLike />
            Cavab məni qane edir
          </button>
          <button
            onClick={() => setSuccess(true)}
            className="text-xl w-full lg:w-auto flex justify-center lg:justify-normal items-center gap-3 bg-[#FF0000] lg:px-5 lg:py-3 py-2 text-white rounded-lg"
          >
            <AiOutlineDislike />
            İKTA-ya müraciət et
          </button>
        </div>
      </div>

      <AnswerPopUp choose={choose} setChoose={setChoose} />
      <ApplyPopUp success={success} setSuccess={setSuccess} />
    </>
  );
};

export default ShowComplaint;
