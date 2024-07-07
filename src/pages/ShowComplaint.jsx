import React, { useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoIosArrowDown, IoMdArrowRoundDown } from "react-icons/io";
import AnswerPopUp from "../components/showcomplaint/AnswerPopUp";
import ApplyPopUp from "../components/showcomplaint/ApplyPopUp";

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
      <div className="px-5 py-10 flex flex-col gap-10">
        <div className="rounded-lg shadow overflow-hidden">
          <div
            onClick={() => setOpen(!open)}
            className="relative cursor-pointer bg-primaryColor py-4 flex items-center justify-center"
          >
            <p className="select-none text-white text-center text-lg font-semibold">
              ŞİKAYƏT MƏLUMATLARI
            </p>
            <IoIosArrowDown
              className={`${
                open ? "rotate-180" : "rotate-0"
              } transition-all duration-300 absolute right-10 top-1/2 transform -translate-y-1/2 text-white text-3xl`}
            />
          </div>

          <div
            className={`grid  overflow-hidden transition-all duration-300 ease-in-out ${
              open ? "grid-rows-[1fr] p-5" : "grid-rows-[0fr] px-5"
            }  bg-white`}
          >
            <div className="overflow-hidden">
              <div className="overflow-hidden select-none border border-[#d7d7d7] flex items-start p-5 rounded-md">
                <div className="w-[49%] flex flex-col gap-5">
                  <p>
                    <span className="font-bold">Fin:</span> 7NHAMN5
                  </p>
                  <p>
                    <span className="font-bold">Ad, soyad, ata adı:</span> FARİD
                    MUSTAFAZADƏ MUSTAFA OĞLU
                  </p>
                  <p>
                    <span className="font-bold">Abunəçi kodu:</span> Yoxdur
                  </p>
                  <p>
                    <span className="font-bold">
                      Müraciət olunan provayder:
                    </span>{" "}
                    CİTYNET
                  </p>
                  <p>
                    <span className="font-bold">
                      Müraciət xarakteristikası:
                    </span>{" "}
                    Xidmətin qoşulması ilə bağlı şikayət (abunə əməliyyatları)
                  </p>
                  <p>
                    <span className="font-bold">Müraciət müvzusu:</span> Qoşulma
                    gecikir
                  </p>
                  <p>
                    <span className="font-bold">
                      Müraciət tarixi (gün, ay, il / saat):
                    </span>{" "}
                    18.05.2024 / 16:01
                  </p>
                </div>
                <div className="w-[49%] flex flex-col gap-5">
                  <p>
                    <span className="font-bold">Ünvan:</span> LƏNKƏRAN ŞƏHƏRİ,
                    Mirzə Fətəli Axundov, bina/ev No 18,
                  </p>
                  <div className="flex gap-24 items-center">
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
              <div className="overflow-hidden select-none mt-5">
                <div className="flex flex-col gap-5 w-full">
                  <div className="flex items-start gap-10">
                    <p className="w-[15%] font-semibold">Şikayətin mövzusu:</p>
                    <span className="w-[85%]">Qoşulma gecikir</span>
                  </div>
                  <div className="flex items-start gap-10">
                    <p className="w-[15%] font-semibold">Şikayətin mətni:</p>
                    <span className="text-lg w-[85%] bg-[#e4e9f7] italic px-2 rounded-lg">
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
        <div className="rounded-lg shadow overflow-hidden">
          <div
            onClick={() => setOpen2(!open2)}
            className="relative cursor-pointer bg-primaryColor py-4 flex items-center justify-center"
          >
            <p className="select-none text-white text-center text-lg font-semibold">
              ŞİKAYƏTƏ İSP TƏRƏFİNDƏN BAXIŞIN NƏTİCƏSİ
            </p>
            <IoIosArrowDown
              className={`${
                open2 ? "rotate-180" : "rotate-0"
              } transition-all duration-300 absolute right-10 top-1/2 transform -translate-y-1/2 text-white text-3xl`}
            />
          </div>
          <div
            className={`select-none grid overflow-hidden transition-all duration-300 ease-in-out ${
              open2 ? "grid-rows-[1fr] px-5 pt-10 pb-5" : "grid-rows-[0fr] px-5"
            }  bg-white`}
          >
            <div className="overflow-hidden flex items-start gap-10">
              <div>
                <div className="flex gap-5 px-10 border-r border-[#DEE2E6]">
                  <div className="flex flex-col justify-around gap-12">
                    <span>18.05.2024</span>
                    <span>29.05.2024</span>
                  </div>
                  <div className="relative w-2 bg-[#d9d9d9]">
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[#9D9B9B]"></div>
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[#3C6CB4]"></div>
                  </div>
                  <div className="flex flex-col justify-between gap-12">
                    <p className="text-[#9D9B9B]">
                      Şikayət yaradıldı{" "}
                      <span className="text-sm text-[#9D9B9B] font-normal">
                        (Abunəçi)
                      </span>
                    </p>
                    <p className="text-[#3C6CB4] font-semibold">
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
                  <div className="flex items-start gap-16">
                    <div className="flex items-start gap-2">
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
                <div className="border border-[#DEE2E6] rounded-md p-3">
                  <p>
                    Abunəçi ilə əlaqə saxlanıldı. Abunəçi çağrı mərkəzinə
                    müraciət etməyib, ərazidə olan ustalardan soruşub. İzah
                    olundu ki, rəsmi qaydada çağrı mərkəzinə zəng etsin və yeni
                    qoşulma üçün sorğu açdırsın.
                  </p>
                </div>
                <div className="text-end">
                  İcraçı: CAVİD MÜRSƏLOV İLQAR OĞLU
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-10">
          <button
            onClick={() => setChoose(true)}
            className="text-xl flex items-center gap-3 bg-primaryColor px-5 py-3 text-white rounded-lg"
          >
            <AiOutlineLike />
            Cavab məni qane edir
          </button>
          <button
            onClick={() => setSuccess(true)}
            className="text-xl flex items-center gap-3 bg-[#FF0000] px-5 py-3 text-white rounded-lg"
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
