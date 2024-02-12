import { motion } from "framer-motion";
import React, { useState } from "react";

const SheetLinkComponent = (data) => {
  let url = "";

  const filter = data.bidang.map((bid) => {
    bid.name == data.params && (url = bid.link);
  });
  // console.log(url);

  return (
    <section className=" rounded-xl w-full flex justify-center container ">
      <div className="lg:flex ">
        <div className="flex flex-col w-full lg:w-1/2 justify-center">
          <motion.p
            initial={{
              x: -100,
              opacity: 0,
            }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-emerald-900 text-[30px] text-center lg:text-start  lg:text-[40px] xl:text-[45px] font-bold "
          >
            Integrasi Worksheet untuk Semua
          </motion.p>
          <motion.p
            initial={{
              x: -100,
              opacity: 0,
            }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-emerald-900 text-[20px]  lg:text-[22px] lg:w-10/12 mt-[12px] text-center lg:text-start"
          >
            Ngedit data monitoring pakai <b>Google Sheet</b> bikin jadi lebih
            fleksibel, data yang dimasukan bisa langsung terbaharui dan
            terangkum dalam satu file
          </motion.p>
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="inline-flex justify-center lg:justify-start xl:mt-[50px] mt-[50px] space-x-[15px]"
          >
            <button
              onClick={() => {
                window.open(
                  "https://docs.google.com/spreadsheets/d/1SWRXL2_CBenYoIqbLILsE-12DF8e75eIzRdfF7GPhd0/edit#gid=1120634312",
                  "_blank"
                );
              }}
              className="text-[19px] lg:text-[18px] xl:text-[20px] py-[9px] px-[30px] bg-emerald-600 rounded-full text-white hover:shadow-lg hover:bg-emerald-700"
            >
              Sheet Master
            </button>
            <button
              onClick={() => {
                window.open(url, "_blank");
              }}
              className="text-[19px] text-emerald-900 lg:text-[18px] xl:text-[20px] py-[9px] px-[30px] border-2 border-emerald-700 rounded-full hover:shadow-lg hover:bg-emerald-700 hover:text-white"
            >
              Sheet Bidang
            </button>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 flex lg:justify-end justify-center mt-[100px] lg:mt-[50px]">
          <motion.img
            initial={{
              x: 100,
              opacity: 0,
            }}
            viewport={{ once: true }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1,
            }}
            src="https://sheetsu.com/lp-assets/image/sheetsu_api-without-methods.svg"
            alt="excel"
          />
        </div>
      </div>
    </section>
  );
};

export default SheetLinkComponent;
