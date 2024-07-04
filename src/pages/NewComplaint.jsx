import React, { useState } from "react";
import { LuUpload } from "react-icons/lu";
import { FaCheck, FaCirclePlus } from "react-icons/fa6";
import { RiFullscreenExitLine, RiFullscreenLine } from "react-icons/ri";
import { IoTrashBinSharp } from "react-icons/io5";

const NewComplaint = () => {
  const [type, setType] = useState(null);
  const [city, setCity] = useState(null);
  const [characteristic, setCharacteristic] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [choose, setChoose] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFileContent(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };
  return (
    <>
      <div className="px-10 py-16">
        <div className="rounded-lg overflow-hidden">
          <div className="bg-primaryColor py-5">
            <p className="text-white text-center text-3xl font-semibold">
              Şikayət məlumatları
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div
              id="section-1"
              className="bg-white flex justify-between items-start p-10 gap-10 shadow-sm rounded-b-lg"
            >
              <div className="w-[20%] flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <label htmlFor="">Şikayət etdiyiniz fəaliyyət sahəsi</label>
                  <select
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                    type="text"
                    className=" border p-2 rounded-md"
                  >
                    <option disabled selected>
                      Fəaliyyət sahəsi
                    </option>
                    <option value="internet">İnternet(GPON, ADSL və s.)</option>
                    <option value="telefon">Telefon rabitəsi</option>
                    <option value="mobil-internet">Mobil internet</option>
                    <option value="mobil-rabite">Mobil rabitə</option>
                    <option value="uni-poct">
                      Universal poçt rabitəsi xidmətləri
                    </option>
                    <option value="suret-poct">
                      Sürətli poçt rabitəsi xidməti
                    </option>
                  </select>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="">Şikayətçi olduğunuz şirkət</label>
                  <select
                    disabled={type === null && true}
                    type="text"
                    className=" border p-2 rounded-md"
                  >
                    <option disabled selected>
                      Şikayətçi olduğunuz şirkəti seçin
                    </option>
                    <option value="internet">İnternet(GPON, ADSL və s.)</option>
                    <option value="telefon">Telefon rabitəsi</option>
                    <option value="mobil-internet">Mobil internet</option>
                    <option value="mobil-rabite">Mobil rabitə</option>
                    <option value="uni-poct">
                      Universal poçt rabitəsi xidmətləri
                    </option>
                    <option value="suret-poct">
                      Sürətli poçt rabitəsi xidməti
                    </option>
                  </select>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="">Şikayətin xarakteristikası</label>
                  <select
                    disabled={type === null && true}
                    type="text"
                    className=" border p-2 rounded-md"
                    onChange={(e) => {
                      setCharacteristic(e.target.value);
                    }}
                  >
                    <option disabled selected>
                      Şikayətin xarakteristikası
                    </option>
                    <option value="internet">
                      Əlavə servis xidmətləri ilə bağlı şikayət (əlavə dəyər
                      xidmətləri, o cümlədən OTT)
                    </option>
                    <option value="telefon">
                      Əməkdaşlardan və ya xidmətdən narazılıq
                    </option>
                    <option value="mobil-internet">
                      İnfrastrukturla əlaqədar şikayətlər
                    </option>
                    <option value="mobil-rabite">
                      Xidmətin işləməməsi ilə bağlı şikayət
                    </option>
                    <option value="uni-poct">
                      Xidmətin keyfiyyəti ilə bağlı şikayət
                    </option>
                    <option value="suret-poct">
                      Xidmətin qoşulması ilə bağlı şikayət (abunə əməliyyatları)
                    </option>
                    <option value="suret-poct">
                      Xitam (xidmətin dayandırılması)
                    </option>
                  </select>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="">Şikayətin mövzusunu seçin</label>
                  <select
                    disabled={characteristic === null && true}
                    type="text"
                    className=" border p-2 rounded-md"
                  >
                    <option disabled selected>
                      Şikayət mövzusu
                    </option>
                    {characteristic === "internet" ? (
                      <>
                        <option value="">
                          Çağrı mərkəzi, texniki xidmət mərkəzinə zənglər
                          cavablandırılması uzun zaman alır
                        </option>
                        <option value="">
                          Şikayətin aradan qaldırılması üçün müraciətin icrası
                          həddən artıq gecikdirilir
                        </option>
                      </>
                    ) : (
                      characteristic === "telefon" && (
                        <>
                          <option value="">
                            Əlavə servis xidmətləri ilə bağlı şikayət (əlavə
                            dəyər xidmətləri, o cümlədən OTT)
                          </option>
                          <option value="">
                            Əməkdaşlardan və ya xidmətdən narazılıq
                          </option>
                          <option value="">
                            İnfrastrukturla əlaqədar şikayətlər
                          </option>
                          <option value="">
                            Xidmətin işləməməsi ilə bağlı şikayət
                          </option>
                          <option value="">
                            Xidmətin keyfiyyəti ilə bağlı şikayət
                          </option>
                          <option value="">
                            Xidmətin qoşulması ilə bağlı şikayət (abunə
                            əməliyyatları)
                          </option>
                          <option value="">
                            Xitam (xidmətin dayandırılması)
                          </option>
                        </>
                      )
                    )}
                  </select>
                </div>
              </div>
              <div className="w-[40%] flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <label htmlFor="">Abunəçi kodu</label>
                  <input
                    className=" border p-2 rounded-md"
                    type="text"
                    name=""
                    id=""
                    placeholder="Abunəçi kodunu daxil edin..."
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="">
                    Şikayət mətni (Qalan simvol sayı: 1000)
                  </label>
                  <textarea
                    rows="10"
                    type="text"
                    name=""
                    id=""
                    placeholder="Maksimum 1000 simvol"
                    className="border rounded-md"
                  />
                </div>
              </div>
              <div className="w-[30%] flex justify-center">
                <div
                  className={`relative rounded-lg bg-[#F3F3F3] 
    ${fileContent === null ? "pt-32" : "pt-5"}
    cursor-pointer pb-5 px-5 w-[80%] border flex flex-col items-center gap-3 justify-end h-full group hover:bg-white duration-300`}
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
                        accept="image/*"
                        onChange={(e) => {
                          handleFileChange(e);
                        }}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </>
                  ) : (
                    <div className="relative">
                      <div className="absolute inset-0 bg-black bg-opacity-40 justify-center items-center gap-5 hidden group-hover:flex transition duration-300">
                        <IoTrashBinSharp
                          onClick={() => {
                            setFileContent(null);
                          }}
                          className="text-white text-4xl"
                        />
                        <RiFullscreenLine
                          className="text-white text-4xl"
                          onClick={() => setChoose(true)}
                        />
                      </div>
                      <img src={fileContent} alt="" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              id="section-2"
              className="p-10 bg-white  shadow-sm rounded-lg "
            >
              <div className="flex justify-between">
                <div className="w-[24%] flex flex-col gap-3">
                  <label htmlFor="">*Şəhəri seçin</label>
                  <select
                    name=""
                    id=""
                    onChange={(e) => setCity(e.target.value)}
                    className="border p-2 rounded-md"
                  >
                    <option value="" disabled selected>
                      Şəhəri seçin
                    </option>
                    <option value="Baku">Bakı</option>
                    <option value="Lenkaran">Lənkəran</option>
                  </select>
                </div>
                <div className="w-[24%] flex flex-col gap-3">
                  <label htmlFor="">*Rayonu seçin</label>
                  <select
                    disabled={city === "Baku" ? false : true}
                    className="border p-2 rounded-md"
                    name=""
                    id=""
                  >
                    <option value="" selected disabled>
                      Rayonu seçin
                    </option>
                    {city === "Baku" && (
                      <>
                        <option value="bineqedi">Binəqədi</option>
                        <option value="nizami">Nizami</option>
                      </>
                    )}
                  </select>
                </div>
                <div className="w-[24%] flex flex-col gap-3">
                  <label htmlFor="">*Küçəni / Kəndi seçin</label>
                  <input
                    type="text"
                    className=" border p-2 rounded-md"
                    placeholder="Küçəni / Kəndi seçin"
                  />
                </div>
                <div className="w-[24%] flex flex-col gap-3 items-start">
                  <label htmlFor="">*Yeni küçə / kənd əlavə edin</label>
                  <div className="shadow p-3 rounded-lg">
                    <FaCirclePlus className="text-4xl" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-3">
                  <label htmlFor="">*Bina / Ev</label>
                  <input type="text" className=" border p-2 rounded-md" />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="">Mənzil</label>
                  <input type="text" className=" border p-2 rounded-md" />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="">Əlaqə nömrəsi</label>
                  <div>
                    +994
                    <select name="" className="border p-2 rounded-md" id="">
                      <option value="" defaultChecked>
                        (50)
                      </option>
                      <option value="">(51)</option>
                      <option value="">(10)</option>
                      <option value="">(55)</option>
                      <option value="">(60)</option>
                      <option value="">(99)</option>
                      <option value="">(70)</option>
                      <option value="">(77)</option>
                    </select>
                    <input type="text" className=" border p-2 rounded-md" />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="">Stasionar telefon</label>
                  <input type="text" className=" border p-2 rounded-md" />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="">E-poçt</label>
                  <input
                    type="text"
                    className="border p-2 rounded-md"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-3 bg-primaryColor flex justify-center items-center gap-2 text-white text-2xl rounded-lg hover:bg-[#2d5694] duration-200">
            <FaCheck />
            Şikayət yarat
          </div>
        </div>
      </div>

      <div
        className={` fixed inset-0 bg-opacity-45 bg-black z-50 flex justify-center items-center ${
          choose ? "flex" : "hidden"
        }`}
      >
        <div className="w-2/5 overflow-hidden">
          <img src={fileContent} className="" alt="" />
        </div>
        <RiFullscreenExitLine
          onClick={() => setChoose(false)}
          className="cursor-pointer text-white text-4xl absolute top-10 right-10 hover:scale-125 duration-300"
        />
      </div>
    </>
  );
};

export default NewComplaint;
