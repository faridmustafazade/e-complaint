import React, { useState } from "react";

const ShowComplaint = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };
  const complaintText =
    "Salam. Bir müddət öncə internet çəkilməsi ilə bağlı müraciət etdim, gəlib baxdıqları zaman qutularda yer olmadığı söylədilər. Ama yenədə baxacaqlarını dedilər. Hələki xəbər yoxdur. Sizdən internet çəkilməsi ilə bağlı mənə kömək etməyinizi xahiş edirəm.";
  return (
    <div className="p-10">
      <div className="rounded-lg shadow overflow-hidden">
        <div className="bg-primaryColor py-5">
          <p className="text-white text-center text-xl font-semibold">
            Şikayət məlumatları
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
                <span className="font-bold">Ünvan:</span> LƏNKƏRAN ŞƏHƏRİ, Mirzə
                Fətəli Axundov, bina/ev No 18,
              </p>
              <div className="flex gap-24 items-center">
                <p>
                  <span className="font-bold">Əlaqə nömrəsi:</span>{" "}
                  +994(70)523-58-02
                </p>
                <p>
                  <span className="font-bold">Stasionar telefon:</span>
                </p>
              </div>
              <p>
                <span className="font-bold">E-poçt:</span>{" "}
                mustafafarid554@gmail.com
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col gap-5 w-[20%]">
              <span className="font-bold">Şikayətin mövzusu:</span>
              <span className="font-bold">Şikayətin mətni:</span>{" "}
            </div>
            <div className="flex flex-col gap-5 w-[80%]">
              <span>Qoşulma gecikir</span>
              <span className="bg-blue-200 p-2 rounded-md italic text-lg">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowComplaint;
