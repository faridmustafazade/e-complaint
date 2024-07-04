import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import image from "../assets/images/svg/group-76.svg";

const ShowComplaint = () => {
  const [choose, setChoose] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const navigate = useNavigate();
  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };
  const complaintText =
    "Salam. Bir müddət öncə internet çəkilməsi ilə bağlı müraciət etdim, gəlib baxdıqları zaman qutularda yer olmadığı söylədilər. Ama yenədə baxacaqlarını dedilər. Hələki xəbər yoxdur. Sizdən internet çəkilməsi ilə bağlı mənə kömək etməyinizi xahiş edirəm.";
  return (
    <>
      <div className="px-5 py-10 flex flex-col gap-10">
        <div className="rounded-lg shadow overflow-hidden">
          <div className="bg-primaryColor py-5">
            <p className="text-white text-center text-lg font-semibold">
              ŞİKAYƏT MƏLUMATLARI
            </p>
          </div>
          <div className="p-5  bg-white">
            <div className="border border-[#d7d7d7] flex items-start p-5 rounded-md">
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
                  <span className="font-bold">Müraciət olunan provayder:</span>{" "}
                  CİTYNET
                </p>
                <p>
                  <span className="font-bold">Müraciət xarakteristikası:</span>{" "}
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
            <div className="flex mt-5">
              <div className="flex flex-col gap-5 w-full">
                <div className="flex items-start gap-10">
                  <p className="w-[15%] font-semibold">Şikayətin mövzusu:</p>
                  <spa className="w-[85%]">Qoşulma gecikir</spa>
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
        <div className="rounded-lg shadow overflow-hidden">
          <div className="bg-primaryColor py-5">
            <p className="text-white text-center text-lg font-semibold">
              ŞİKAYƏTƏ İSP TƏRƏFİNDƏN BAXIŞIN NƏTİCƏSİ
            </p>
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
            onClick={() => setChoose(true)}
            className="text-xl flex items-center gap-3 bg-[#BC3340] px-5 py-3 text-white rounded-lg"
          >
            <AiOutlineDislike />
            İKTA-ya müraciət et
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black z-[9999] flex justify-center items-center ${
          choose ? "flex bg-opacity-80" : "hidden"
        }`}
      >
        <div className="w-2/5 overflow-hidden flex flex-col rounded-lg">
          <div className=" bg-primaryColor py-4">
            <p className="text-white text-center font-semibold">
              ŞİKAYƏTİN LƏĞV EDİLMƏSİ
            </p>
          </div>
          <div className="bg-white py-10">
            <div className="px-16 flex flex-col items-start gap-10">
              <p className="text-lg">Şikayəti ləğv etmək səbəbiniz nədir?</p>
              <textarea
                name=""
                id=""
                rows={"5"}
                className="p-5 border w-full rounded-lg"
              ></textarea>
              <button
                onClick={() => {
                  setChoose(false);
                  setSuccess(true);
                }}
                className="bg-primaryColor w-full py-2 text-white rounded-lg"
              >
                ŞİKAYƏTİ LƏĞV ET
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black z-[9999] flex justify-center items-center ${
          success ? "flex bg-opacity-80" : "hidden"
        }`}
      >
        <div className="w-2/5 h-96 overflow-hidden flex flex-col rounded-lg bg-white">
          <div className="w-full h-full flex flex-col items-center justify-center gap-10">
            <img src={image} alt="" />
            <p className="text-lg">ŞİKAYƏTİNİZ LƏĞV EDİLDİ</p>
            <button
              onClick={() => {
                setSuccess(false);
                navigate("/");
              }}
              className="bg-primaryColor px-28 py-2 text-white rounded-lg"
            >
              BAĞLA
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowComplaint;
