"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import BidangTable from "@/components/bidangTable";
// import BidangChart from "@/components/bidangChart";
import Fnumber from "@/utils/fnumber";
import CountUp from "react-countup";
import { useBidangStore } from "@/store/Bidang";
import { useProcostStore } from "@/store/Procosts";
import { useParams } from "next/navigation";
import SheetLinkComponent from "@/components/sheetLink";

const BidangDetail = (data) => {
  const params = useParams();
  // console.log(params.bidang);

  const { bidang } = useBidangStore();
  const { procosts } = useProcostStore();

  const [totalPekerjaan, setTotalPekerjaan] = useState(1);
  const [listPC, setListProcost] = useState([]);
  const [bidangDetail, setBidangDetail] = useState({});
  const [allPekerjaan, setAllPekerjaan] = useState([]);

  // console.log(bidangDetail);

  useEffect(() => {
    procosts[params.bidang]?.length >= 1 &&
      procosts[params.bidang].map((pc) => {
        allPekerjaan.push(pc.jumlahPekerjaan);
      });

    bidang.length >= 1 &&
      bidang.map((bid) => {
        // console.log(bid.name == params.bidang);
        bid.name == params.bidang && setBidangDetail(bid);
      });

    setListProcost(procosts[params.bidang]);
  }, [bidang]);

  return (
    <>
      <section className="w-full container mt-[20px]" id="middle">
        {/* {console.log(totalPekerjaan)} */}
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
          <div className="grid grid-cols-2 row-gap-8 md:grid-cols-5">
            <motion.div
              initial={{
                y: 50,
                opacity: 0,
              }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.125,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="text-center md:border-r"
            >
              <span className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                <CountUp end={procosts[params.bidang]?.length} decimals={0} />
              </span>
              <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                Procost
              </p>
            </motion.div>
            <motion.div
              initial={{
                y: 50,
                opacity: 0,
              }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.25,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="text-center md:border-r"
            >
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                <CountUp
                  end={allPekerjaan.reduce((a, b) => a + b, 0)}
                  decimals={0}
                />
              </h6>
              <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                Pekerjaan
              </p>
            </motion.div>
            <motion.div
              initial={{
                y: 50,
                opacity: 0,
              }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.375,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="text-center md:border-r"
            >
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                <CountUp
                  end={Fnumber(bidangDetail.budget).value}
                  decimals={Fnumber(bidangDetail.budget).satuan == " M" ? 1 : 0}
                />
                {Fnumber(bidangDetail.budget).satuan}
              </h6>
              <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                Budget
              </p>
            </motion.div>
            <motion.div
              initial={{
                y: 50,
                opacity: 0,
              }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="text-center md:border-r"
            >
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                <CountUp
                  end={Fnumber(bidangDetail.terpakai).value}
                  decimals={
                    Fnumber(bidangDetail.terpakai).satuan == " M" ? 1 : 0
                  }
                />
                {Fnumber(bidangDetail.terpakai).satuan}
              </h6>
              <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                Terpakai
              </p>
            </motion.div>
            <motion.div
              initial={{
                y: 50,
                opacity: 0,
              }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.625,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="text-center "
            >
              <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
                {" "}
                <CountUp
                  end={Fnumber(bidangDetail.sisa).value}
                  decimals={Fnumber(bidangDetail.sisa).satuan == " M" ? 1 : 0}
                />
                {Fnumber(bidangDetail.sisa).satuan}
              </h6>
              <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                Sisa
              </p>
            </motion.div>
          </div>
        </div>

        {/* chart data */}
      </section>
      <BidangTable data={procosts} params={params}></BidangTable>
      <div className="border border-neutral-200 w-1/3 container my-[120px]"></div>

      <div className="border border-neutral-200 w-1/3 container my-[100px]"></div>

      <SheetLinkComponent
        bidang={bidang}
        params={params.bidang}
      ></SheetLinkComponent>
      <div className="border border-neutral-200 w-1/3 container my-[100px]"></div>
      {/* <div className="bg-[rgb(244,248,250)] py-[50px] text-[25px]  grid justify-center text-center">
        <div className="tracking-wide">Kelola data lebih lengkap ?</div>
        <button className="flex justify-center  bg-[#6236FF] text-white rounded-2xl py-2 px-[10px]">
          Login
        </button>
      </div> */}
      {/* barchart
  <div className="border border-neutral-200 w-1/3 container my-[120px]"></div>
  <ProgressChart data={bidang}></ProgressChart> */}
    </>
  );
};

export default BidangDetail;
