import Fnumber from "@/utils/fnumber";
import React from "react";
import CountUp from "react-countup";
// import { Tooltip } from "flowbite-react";
import { Tooltip } from "react-tooltip";

const TotalAnggaranSection = () => {
  return (
    <section className=" bg-gray-50 py-[80px]" style={{ zIndex: 2000 }}>
      <div className="w-full container ">
        <div className="grid row-cols-3 lg:grid-cols-3 just gap-[60px] lg:gap-[0px]">
          {/* <Tooltip content={numberFormat(totalAnggaran.budget)}> */}
          <div className="bg-gray-50  border-black-200 lg:border-r-2 ">
            <div className="font-medium text-[45px] md:text-[45px] lg:text-[45px] 2xl:text-[55px] text-center hover:text-amber-500  hover:text-[65px] hover:transition-all ">
              {<CountUp end={999} decimals={0} /> ?? 0}
            </div>
            {/* <Tooltip id="budget-tooltip" style={{ borderRadius: "6px" }} /> */}
            <div className="text-[20px] md:text-[17px]  lg:text-[14px] 2xl:text-[18px] text-gray-500 text-center tracking-wide">
              Visitor Terdaftar <br></br> selama tahun 2024
            </div>
          </div>
          {/* </Tooltip> */}
          {/* <Tooltip content={numberFormat(totalAnggaran.terpakai)}> */}
          <div className="bg-gray-50   border-black ">
            {/* <div className="text-[25px] text-gray-500 text-center">Used</div> */}
            <div className="font-medium text-[45px] md:text-[45px] lg:text-[45px] 2xl:text-[55px] text-center hover:text-amber-500  hover:text-[65px] hover:transition-all ">
              <CountUp end={999} decimals={0} />
            </div>
            <Tooltip id="terpakai-tooltip" style={{ borderRadius: "6px" }} />
            <div className="text-[20px] md:text-[17px] lg:text-[14px] 2xl:text-[18px] text-gray-500 text-center tracking-wide">
              Visitor yang masuk <br></br>bulan Januari 2024
            </div>
          </div>
          {/* </Tooltip> */}
          {/* <Tooltip content={numberFormat(totalAnggaran.sisa)}> */}
          <div className="bg-gray-50  border-black-200 lg:border-l-2 md:pl-3">
            {/* <div className="text-[25px] text-gray-500 text-center">Sisa</div> */}
            <div className="font-medium text-[45px] md:text-[45px] lg:text-[45px] 2xl:text-[55px] text-center  hover:text-amber-500 hover:text-[65px] hover:transition-all ">
              <CountUp end={999} />
            </div>
            <Tooltip id="sisa-tooltip" style={{ borderRadius: "6px" }} />
            <div className="text-[20px] md:text-[17px] lg:text-[14px] 2xl:text-[18px] text-gray-500 text-center tracking-wide">
              Visitor yang keluar<br></br>bulan Januari 2024
            </div>
          </div>
          {/* </Tooltip> */}
        </div>
      </div>
    </section>
  );
};

export default TotalAnggaranSection;
