import React, { useEffect, useState } from "react";
import { LuUpload } from "react-icons/lu";
import { FaCheck, FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { RiFullscreenExitLine, RiFullscreenLine } from "react-icons/ri";
import { PiTrashSimpleFill } from "react-icons/pi";
import { Character, Company, Field_Of_Action } from "../data/Complaint";
import "../index.css";
import { Helmet } from "react-helmet";
const NewComplaint = () => {
  const [type, setType] = useState(null);
  const [city, setCity] = useState(null);
  const [rayon, setRayon] = useState(null);
  const [values, setValues] = useState("");
  const [open, setOpen] = useState(false);
  const [characteristic, setCharacteristic] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [choose, setChoose] = useState(false);

  //keyDown function
  const [text, setText] = useState([]);
  const onKeyDown = (e) => {
    const { key } = e;
    const ignoredKeys = [
      "Backspace",
      "Delete",
      "Alt",
      "CapsLock",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Control",
      "Tab",
      "Enter",
      "Shift",
    ];
    if (!ignoredKeys.includes(key)) {
      setText([...text, key]);
    } else if (key === "Backspace") {
      setText(text.slice(0, -1));
    }
  };

  //data
  const [fields, setFields] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [characters, setCharacters] = useState([]);
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
  useEffect(() => {
    setFields(Field_Of_Action);
    setCompanies(Company);
    setCharacters(Character);
  }, []);

  return (
    <>
      <Helmet>
        <title>Yeni şikayət</title>
        <meta name="description" content="Yeni şikayət" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <div className="px-3 py-6 lg:px-5 lg:py-10">
        <div className="rounded-t-lg overflow-hidden">
          <div className="bg-primaryColor py-5">
            <p className="text-white text-center lg:text-3xl md:text-2xl text-xl font-medium">
              Şikayət məlumatları
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div
              id="section-1"
              className="bg-white flex flex-col lg:flex-row justify-between items-start lg:p-10 p-5 gap-10 shadow-sm rounded-b-lg"
            >
              <div className="lg:w-[20%] w-full flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <label htmlFor="">Şikayət etdiyiniz fəaliyyət sahəsi</label>
                  <select
                    defaultValue={"option"}
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                    type="text"
                    className="text-sm border p-3 rounded-md"
                  >
                    <option value={"option"} disabled>
                      Fəaliyyət sahəsi
                    </option>
                    {fields &&
                      fields.map((field) => (
                        <option key={field.value} value={field.value}>
                          {field.title}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    className={`${type == null && "text-[#908080]"}`}
                    htmlFor=""
                  >
                    Şikayətçi olduğunuz şirkət
                  </label>
                  <select
                    defaultValue={"option"}
                    disabled={type === null && true}
                    type="text"
                    className="text-sm border p-3 rounded-md"
                  >
                    <option disabled value={"option"}>
                      Şikayətçi olduğunuz şirkəti seçin
                    </option>
                    {companies
                      .filter((item) => item.field === type)
                      .flatMap((company) =>
                        company.names.map((name) => (
                          <option
                            key={name.id}
                            className="text-sm"
                            value={name.id}
                          >
                            {name.name}
                          </option>
                        ))
                      )}
                  </select>
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    className={`${type == null && "text-[#908080]"}`}
                    htmlFor=""
                  >
                    Şikayətin xarakteristikası
                  </label>
                  <select
                    defaultValue={"option"}
                    disabled={type === null && true}
                    type="text"
                    className="text-sm border p-3 rounded-md"
                    onChange={(e) => {
                      setCharacteristic(e.target.value);
                    }}
                  >
                    <option disabled value={"option"}>
                      Şikayətin xarakteristikası
                    </option>
                    {characters &&
                      characters
                        .filter((item) => item.field === type)
                        .flatMap((character) =>
                          character.names.map((name) => (
                            <option
                              className="text-sm"
                              key={name.id}
                              value={name.id}
                            >
                              {name.name}
                            </option>
                          ))
                        )}
                  </select>
                </div>
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className={`${characteristic == null && "text-[#908080]"}`}
                  >
                    Şikayətin mövzusunu seçin
                  </label>
                  <select
                    defaultValue={"option"}
                    disabled={characteristic === null && true}
                    type="text"
                    className="text-sm border p-3 rounded-md"
                  >
                    <option disabled value={"option"}>
                      Şikayət mövzusu
                    </option>
                    {type === "internet" ? (
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
                      type === "telefon" && (
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
              <div className="lg:w-[40%] w-full flex flex-col gap-4">
                {type && (type === "telefon" || type === "internet") && (
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
                )}
                <div className="flex flex-col gap-3">
                  <label htmlFor="">
                    Şikayət mətni{" "}
                    <span className="text-sm">
                      (Qalan simvol sayı:{" "}
                      <span className="text-red-700">{1000 - text.length}</span>
                      )
                    </span>
                  </label>
                  <textarea
                    rows="10"
                    type="text"
                    name=""
                    id=""
                    onKeyDown={onKeyDown}
                    placeholder="Maksimum 1000 simvol"
                    className="border rounded-md p-5"
                  />
                </div>
              </div>
              <div className="lg:w-[30%] w-full flex justify-center">
                <div
                  className={`relative rounded-lg bg-[#F3F3F3] ${
                    fileContent === null ? "lg:pt-32 pt-5" : "pt-5"
                  } cursor-pointer pb-5 px-5 lg:w-[80%] border flex flex-col items-center gap-3 justify-end h-full group hover:bg-white duration-300`}
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
                              onClick={() => setChoose(true)}
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
            <div
              id="section-2"
              className="lg:p-10 p-5 bg-white  shadow-sm rounded-lg "
            >
              <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between">
                <div className="lg:w-[24%] w-full flex flex-col gap-3">
                  <label htmlFor="">*Şəhəri seçin</label>
                  <select
                    defaultValue={"option"}
                    name=""
                    id=""
                    onChange={(e) => setCity(e.target.value)}
                    className="text-sm border p-3 rounded-md"
                  >
                    <option disabled value={"option"}>
                      Şəhəri seçin
                    </option>
                    <option value="Baku">Bakı</option>
                    <option value="Lenkaran">Lənkəran</option>
                  </select>
                </div>
                <div className="lg:w-[24%] w-full flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className={`${
                      city == null
                        ? "text-[#908080]"
                        : city !== "Baku" && "text-[#908080]"
                    }`}
                  >
                    *Rayonu seçin
                  </label>
                  <select
                    defaultValue={"option"}
                    disabled={city === "Baku" ? false : true}
                    onChange={(e) => setRayon(e.target.value)}
                    className="text-sm border p-3 rounded-md"
                    name=""
                    id=""
                  >
                    <option value="option" disabled>
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
                <div className="lg:w-[24%] w-full flex flex-col gap-3">
                  <label
                    htmlFor=""
                    className={`${
                      city !== null
                        ? city === "Baku" && rayon == null && "text-[#908080]"
                        : "text-[#908080]"
                    }`}
                  >
                    *Küçəni / Kəndi seçin
                  </label>
                  <input
                    value={values}
                    onChange={(e) => setValues(e.target.value)}
                    disabled={
                      city == null
                        ? true
                        : city === "Baku"
                        ? rayon == null
                          ? true
                          : false
                        : false
                    }
                    type="text"
                    className={`border p-2 rounded-md ${
                      city !== null &&
                      (city === "Baku"
                        ? rayon !== null && "placeholder:text-gray-600"
                        : "placeholder:text-gray-600")
                    } `}
                    placeholder="Küçəni / Kəndi seçin"
                  />
                </div>
                <div className="lg:w-[24%] w-full flex flex-col gap-3 items-start">
                  <label
                    htmlFor=""
                    className={`${
                      city == null
                        ? "text-[#908080]"
                        : city === "Baku" && rayon == null && "text-[#908080]"
                    }`}
                  >
                    *Yeni küçə / kənd əlavə edin
                  </label>
                  <button
                    disabled={
                      city == null
                        ? true
                        : city === "Baku" && rayon == null && true
                    }
                    className={`flex items-center ${
                      open ? "justify-start" : "justify-start"
                    } shadow gap-2 p-3 rounded-lg transition-width duration-300 ${
                      open ? "lg:w-56 w-full" : "w-[60px]"
                    }`}
                  >
                    {open ? (
                      <FaCircleMinus
                        onClick={() => {
                          setOpen(!open);
                          setValues("");
                        }}
                        className={`text-4xl cursor-pointer`}
                      />
                    ) : (
                      <FaCirclePlus
                        onClick={() => setOpen(!open)}
                        className={`text-4xl cursor-pointer`}
                      />
                    )}

                    <input
                      onChange={(e) => setValues(e.target.value)}
                      type="text"
                      className={`w-[70%] transition-opacity duration-300 ${
                        open === false && "hidden"
                      } outline-none`}
                      placeholder="Küçəni əlavə edin..."
                    />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between lg:mt-0 mt-5">
                <div className="flex flex-col gap-3">
                  <label htmlFor="">*Bina / Ev</label>
                  <input
                    type="number"
                    min={1}
                    className=" border p-2 rounded-md"
                  />
                </div>
                <div className="lg:w-[1px] lg:block hidden bg-[#DEE2E6] rotate-30"></div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="">Mənzil</label>
                  <input
                    type="number"
                    min={1}
                    className=" border p-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="">Əlaqə nömrəsi</label>
                  <div className="lg:block flex items-center">
                    +994
                    <select
                      name=""
                      className="border p-2 rounded-md"
                      id=""
                      defaultValue={"option"}
                    >
                      <option value="option">(50)</option>
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
          <div className="w-full flex justify-end mt-5">
            <div className="flex items-center justify-center gap-3 w-full py-2 px-16 cursor-pointer bg-primaryColor text-center text-white text-xl rounded-md hover:bg-[#2d5694] duration-200">
              <FaCheck />
              Şikayət yarat
            </div>
          </div>
        </div>
      </div>

      <div
        className={` fixed inset-0 bg-opacity-45 bg-black z-[9999] flex justify-center items-center ${
          choose ? "flex" : "hidden"
        }`}
      >
        <div className="lg:w-2/5 w-5/6 overflow-hidden flex justify-center">
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
