import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { User_Complaint } from "../../data/Complaint";
import TableHeader from "../../components/company/TableHeader";
import TableCols from "../../components/company/TableCols";

const UserComplaints = () => {
  const complaints = User_Complaint;
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="select-none px-5 py-10">
        <div className="flex flex-col lg:flex-row md:items-start lg:items-center sm:justify-between lg:gap-0 gap-5">
          <div className="w-full sm:w-auto flex flex-col sm:flex-row sm:items-center gap-5">
            <button
              onClick={() => setClick(!click)}
              className="flex items-center justify-center gap-2 bg-primaryColor text-white px-10 py-2 lg:py-1 rounded-full"
            >
              <CiFilter className="inline" /> <span>Filter</span>
            </button>
          </div>
        </div>
        <div
          className={`grid  overflow-hidden transition-all duration-300 border  my-5 rounded-lg border-[#d7d7d7] ease-in-out  ${
            click
              ? "grid-rows-[1fr] lg:p-5 opacity-100"
              : "grid-rows-[0fr] lg:px-5 px-2 opacity-0"
          }  bg-white
        `}
        >
          <div className="overflow-hidden  bg-white ">
            <div className="overflow-hidden flex items-start justify-between">
              <div className="flex flex-col w-[24%] gap-1">
                <label htmlFor="">Müraciət nömrəsi</label>
                <input
                  className="border outline-none border-[#d7d7d7] rounded-lg px-5 py-1"
                  type="number"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col w-[24%] gap-1">
                <label htmlFor="">Müraciətin tarixi</label>
                <div className="flex items-center gap-3">
                  <input
                    className="w-[49%] outline-none border border-[#d7d7d7] rounded-lg px-5 py-1"
                    type="number"
                    name=""
                    id=""
                    placeholder="Başlanğıc"
                  />
                  <div>-</div>
                  <input
                    className="w-[49%] outline-none border border-[#d7d7d7] rounded-lg px-5 py-1"
                    type="number"
                    name=""
                    id=""
                    placeholder="Son"
                  />
                </div>
              </div>
              <div className="flex flex-col w-[24%] gap-1">
                <label htmlFor="">Müraciətin statusu</label>
                <select
                  className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                  name=""
                  id=""
                  defaultValue={"option-1"}
                >
                  <option disabled value="option-1">
                    Seçim edin
                  </option>
                  <option value="">Həll olunub</option>
                  <option value="">Qismən təmin edilib</option>
                  <option value="">Müvafiq izahat verilib</option>
                  <option value="">Rədd edilib (əsassız sayılıb)</option>
                </select>
              </div>
              <div className="flex flex-col w-[24%] gap-1">
                <label htmlFor="">Təkrar şikayət</label>
                <select
                  className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                  name=""
                  id=""
                  defaultValue={"option-1"}
                >
                  <option disabled value="option-1">
                    Seçim edin
                  </option>
                  <option value="">Həll olunub</option>
                  <option value="">Qismən təmin edilib</option>
                  <option value="">Müvafiq izahat verilib</option>
                  <option value="">Rədd edilib (əsassız sayılıb)</option>
                </select>
              </div>
            </div>
            <div className="bg-[#d7d7d7] h-[1px] w-full my-10"></div>
            <div className="flex flex-col gap-5">
              <div className="flex items-start justify-between">
                <div className="flex flex-col w-[24%] gap-1">
                  <label htmlFor="">Abunəçinin FİN-i</label>
                  <input
                    className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col w-[24%] gap-1">
                  <label htmlFor="">Abunəçinin adı</label>
                  <input
                    className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col w-[24%] gap-1">
                  <label htmlFor="">Abunəçinin soyadı</label>
                  <input
                    className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col w-[24%] gap-1">
                  <label htmlFor="">Abunəçinin ata adı</label>
                  <input
                    className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div className="flex flex-col w-[24%] gap-1">
                  <label htmlFor="">Şəhər</label>
                  <select
                    className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                    name=""
                    id=""
                    defaultValue={"option-1"}
                  >
                    <option disabled value="option-1">
                      Seçim edin
                    </option>
                    <option value="">Bakı</option>
                    <option value="">Lənkəran</option>
                  </select>
                </div>
                <div className="flex flex-col w-[24%] gap-1">
                  <label htmlFor="">Rayon</label>
                  <select
                    className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                    name=""
                    id=""
                    defaultValue={"option-1"}
                  >
                    <option disabled value="option-1">
                      Seçim edin
                    </option>
                    <option value="">Bakı</option>
                    <option value="">Lənkəran</option>
                  </select>
                </div>
                <div className="flex flex-col w-[24%] gap-1">
                  <label htmlFor="">Küçə</label>
                  <select
                    className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                    name=""
                    id=""
                    defaultValue={"option-1"}
                  >
                    <option disabled value="option-1">
                      Seçim edin
                    </option>
                    <option value="">Bakı</option>
                    <option value="">Lənkəran</option>
                  </select>
                </div>
                <div className="flex w-[24%] justify-between">
                  <div className=" flex flex-col gap-1 w-[45%]">
                    <label htmlFor="">Bina</label>
                    <input
                      className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className=" flex flex-col gap-1 w-[45%]">
                    <label htmlFor="">Mənzil</label>
                    <input
                      className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-5 justify-start">
                <div className="flex flex-col w-[24%] gap-1">
                  <label htmlFor="">Əlaqə nömrəsi</label>
                  <input
                    className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col w-[24%] gap-1">
                  <label htmlFor="">Stasionar telefon</label>
                  <input
                    className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col w-[24%] gap-1">
                  <label htmlFor="">E-poçt</label>
                  <input
                    className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                    type="email"
                    name=""
                    id=""
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#d7d7d7] h-[1px] w-full my-10"></div>
            <div className="flex flex-col gap-5">
              <div className="flex items-start justify-between">
                <div className="flex flex-col w-[24%] gap-1">
                  <label htmlFor="">Şikayət edilən fəaliyyət sahəsi</label>
                  <select
                    className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                    name=""
                    id=""
                    defaultValue={"option-1"}
                  >
                    <option disabled value="option-1">
                      Seçim edin
                    </option>
                    <option value="">Bakı</option>
                    <option value="">Lənkəran</option>
                  </select>
                </div>
                <div className="flex flex-col w-[24%] gap-1">
                  <label htmlFor="">Şikayətçi olan şirkət</label>
                  <select
                    className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                    name=""
                    id=""
                    defaultValue={"option-1"}
                  >
                    <option disabled value="option-1">
                      Seçim edin
                    </option>
                    <option value="">Bakı</option>
                    <option value="">Lənkəran</option>
                  </select>
                </div>
                <div className="flex flex-col w-[24%] gap-1">
                  <label htmlFor="">Şikayətin xarakteristikası</label>
                  <select
                    className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                    name=""
                    id=""
                    defaultValue={"option-1"}
                  >
                    <option disabled value="option-1">
                      Seçim edin
                    </option>
                    <option value="">Bakı</option>
                    <option value="">Lənkəran</option>
                  </select>
                </div>
                <div className="flex flex-col w-[24%] gap-1">
                  <label htmlFor="">Şikayətin mövzusu</label>
                  <select
                    className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                    name=""
                    id=""
                    defaultValue={"option-1"}
                  >
                    <option disabled value="option-1">
                      Seçim edin
                    </option>
                    <option value="">Bakı</option>
                    <option value="">Lənkəran</option>
                  </select>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div className="flex flex-col w-[24%] gap-1">
                  <label htmlFor="">Abunəçi kodu</label>
                  <input
                    className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col w-[24%] gap-1">
                  <label htmlFor="">Faylın mövcudluğu</label>
                  <select
                    className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                    name=""
                    id=""
                    defaultValue={"option-1"}
                  >
                    <option disabled value="option-1">
                      Seçim edin
                    </option>
                    <option value="">Bakı</option>
                    <option value="">Lənkəran</option>
                  </select>
                </div>
                <div className="flex flex-col w-[24%] gap-1">
                  <label htmlFor="">Birgə baxılmanın mövcudluğu</label>
                  <select
                    className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                    name=""
                    id=""
                    defaultValue={"option-1"}
                  >
                    <option disabled value="option-1">
                      Seçim edin
                    </option>
                    <option value="">Bakı</option>
                    <option value="">Lənkəran</option>
                  </select>
                </div>
                <div className="flex flex-col w-[24%] gap-1">
                  <label htmlFor="">Birgə baxan şirkət</label>
                  <select
                    className="border outline-none text-[#a39898] border-[#d7d7d7] rounded-lg px-5 py-1"
                    name=""
                    id=""
                    defaultValue={"option-1"}
                  >
                    <option disabled value="option-1">
                      Seçim edin
                    </option>
                    <option value="">Bakı</option>
                    <option value="">Lənkəran</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md mt-10 lg:overflow-hidden overflow-x-scroll">
          <div className="cursor-pointer flex items-center justify-between bg-primaryColor text-white    lg:min-w-[100%] min-w-[1400px] lg:max-w-[100%] max-w-[2000px]">
            <TableHeader name={"№"} width={"w-[7%]"} />
            <TableHeader name={"Abunəçi"} width={"w-[20%]"} />
            <TableHeader name={"Abunəçi kodu"} width={"w-[13%]"} />
            <TableHeader name={"Xarakteristika"} width={"w-[15%]"} />
            <TableHeader name={"Tarix"} width={"w-[9%]"} />
            <TableHeader name={"İcra üçün müddət"} width={"w-[15%]"} />
            <TableHeader name={"Status"} width={"w-[9%]"} />
            <div className="max-w-[12%] w-[12%] flex items-center justify-center py-5">
              <p>Əməliyyatlar</p>
            </div>
          </div>
          <div className="lg:min-w-[100%] min-w-[1400px] lg:max-w-[100%] max-w-[2000px]">
            {complaints.length > 0 ? (
              complaints.map((complaint, idx) => (
                <TableCols
                  watch={complaint.watch}
                  key={idx}
                  number={complaint.number}
                  abonent={complaint.abonent}
                  abuneci_kodu={complaint.abuneci_kodu}
                  xarakteristika={complaint.xarakteristika}
                  tarix={complaint.tarix}
                  icra_ucun_muddet={complaint.icra_üçün_müddət}
                  status={complaint.status}
                  icra={complaint.icra}
                  url={"/company/show_complaint"}
                />
              ))
            ) : (
              <div className="w-full flex justify-center items-center py-5">
                <p>Heç bir şikayət əlavə edilməyib...</p>
              </div>
            )}
          </div>
        </div>
        <div className="select-none flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between mt-5">
          <p>Göstərilən: 0-0 , cəmi 0 (0 səhifə)</p>
          <div className="flex items-center gap-1">
            <button
              className={`p-4 leading-none text-white rounded-md bg-primaryColor`}
            >
              <IoIosArrowBack className="text-xl" />
            </button>
            <div className="select-none p-4 border leading-none border-primaryColor text-primaryColor rounded-md">
              1
            </div>
            <button
              className={`p-4 leading-none text-white rounded-md bg-primaryColor`}
            >
              <IoIosArrowForward className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      {/* <FilterPopUp open={open} setOpen={setOpen} /> */}
    </>
  );
};

export default UserComplaints;
