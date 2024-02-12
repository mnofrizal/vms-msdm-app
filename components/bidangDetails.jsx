import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import BidangTable from "./bidangTable";
// import BidangChart from "./bidangChart";
import Fnumber from "@/utils/fnumber";
import CountUp from "react-countup";

const BidangDetail = (data) => {
  const { data: bidang, tab: openTab, listPC } = data;
  const [totalPekerjaan, setTotalPekerjaan] = useState(1);

  // console.log(bidang);
  // console.log(listPC);

  const [listProcost, setListProcost] = useState([
    {
      no: "1",
      procost: "23-1502-PPA-OP-ADM-7A-01",
      taskName: "Honorarium",
      taskNumber: "01",
      totalPekerjaan: 18,
      budget: "500000000",
      terpakai: "35000000",
      sisa: "100000000",
    },
    {
      no: "2",
      procost: "23-1502-PPA-OP-ADM-7A-01",
      taskName: "Honorarium",
      taskNumber: "01",
      totalPekerjaan: 18,
      budget: "500000000",
      terpakai: "35000000",
      sisa: "100000000",
    },
  ]);

  useEffect(() => {
    const allPekerjaan = [];

    listPC.map((pc) => {
      allPekerjaan.push(pc.jumlahPekerjaan);
    });
    setTotalPekerjaan(allPekerjaan.reduce((a, b) => a + b, 0));
  }, []);

  return (
    <>
      {/* {console.log(totalPekerjaan)} */}
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        }}
        className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5"
      >
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-5">
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              <CountUp end={listPC.length} decimals={0} />
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Procost
            </p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              <CountUp end={totalPekerjaan} decimals={0} />
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Pekerjaan
            </p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              <CountUp
                end={Fnumber(bidang.budget).value}
                decimals={Fnumber(bidang.budget).satuan == " M" ? 1 : 0}
              />
              {Fnumber(bidang.budget).satuan}
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Budget
            </p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              <CountUp
                end={Fnumber(bidang.terpakai).value}
                decimals={Fnumber(bidang.terpakai).satuan == " M" ? 1 : 0}
              />
              {Fnumber(bidang.terpakai).satuan}
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Terpakai
            </p>
          </div>
          <div className="text-center ">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
              {" "}
              <CountUp
                end={Fnumber(bidang.sisa).value}
                decimals={Fnumber(bidang.sisa).satuan == " M" ? 1 : 0}
              />
              {Fnumber(bidang.sisa).satuan}
            </h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Sisa
            </p>
          </div>
        </div>
      </motion.div>
      <BidangTable data={listPC}></BidangTable>
      {/* chart data */}
      <div className="border border-neutral-200 w-1/3 container my-[120px]"></div>

      {/* barchart
  <div className="border border-neutral-200 w-1/3 container my-[120px]"></div>
  <ProgressChart data={bidang}></ProgressChart> */}
    </>
  );
};

export default BidangDetail;
