import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import TableHeader from "../../components/company/TableHeader";
import { CiFilter } from "react-icons/ci";
import { User_Complaint } from "../../data/Complaint";
import TableCols from "../../components/company/TableCols";

const Icta = () => {
  const complaints = User_Complaint;
  return (
    <div className="select-none px-5 py-10">
      <div className="flex flex-col lg:flex-row md:items-start lg:items-center sm:justify-between lg:gap-0 gap-5">
        <div className="w-full sm:w-auto flex flex-col sm:flex-row sm:items-center gap-5">
          <button className="flex items-center justify-center gap-2 bg-primaryColor text-white px-10 py-2 lg:py-1 rounded-full">
            <CiFilter className="inline" /> <span>Filter</span>
          </button>
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
  );
};

export default Icta;
