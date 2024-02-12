"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
// import AlokasiChart from "./alokasiChart";
import { Icon } from "@iconify/react";
// import "./style.css";

const BidangCard = () => {
  const [cardData, setCardData] = useState([]);

  const excelLink = [];
  const openSheet = (link) => {
    window.open(
      link,
      "_blank" // <- This is what makes it open in a new window.
    );
    // console.log(link);
  };

  // console.log(data);
  return (
    <>
      <section className="w-full container mt-[20px]" id="middle">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px] lg:gap-[40px]">
          {cardData.length !== 0
            ? excelLink.map((sheet, i) => {
                return (
                  <div
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   setOpenTab(i + 2);
                    // }}
                    className="cursor-pointer"
                    key={i}
                  >
                    {/* {console.log(bid)} */}
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.1 },
                      }}
                    >
                      <motion.div
                        initial={{
                          y: 100,
                          opacity: 0,
                        }}
                        viewport={{ once: true }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: i / 8,
                          y: { type: "spring", stiffness: 60 },
                          opacity: { duration: 0.2 },
                          ease: "easeIn",
                          duration: 1,
                        }}
                        className={`rounded-[23px] p-4  bg-[#F4FBF3] overflow-hidden  hover:shadow-xl outline outline-offset-0 outline-[9px] outline-white shadow-lg`}
                      >
                        <p className="lg:text-[20px] 2xl:text-[25px]  uppercase font-bold mb-4 text-zinc-800">
                          {i + 1} Januari
                        </p>
                        <p className="text-[12px] 2xl:text-[15px] text-gray-500">
                          Statistik Visitor:
                        </p>
                        <p className="flex  items-center gap-2 text-[25px] lg:text-[20px] 2xl:text-[25px] font-bold text-green-800">
                          <Icon icon="mdi:people-add-outline" /> -- IN
                        </p>
                        <p className="flex  items-center gap-2 text-[25px] lg:text-[20px] 2xl:text-[25px] font-bold text-red-800">
                          <Icon icon="mdi:people-minus-outline" />
                          -- OUT
                        </p>
                        <div className="mt-1">
                          <p className="text-gray-600 text-[12px] 2xl:text-[15px]">
                            Persentase keluar - masuk
                          </p>
                          <div className="bg-gray-400 w-full h-3 rounded-lg mt-2 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{
                                width: `${1 * 100}%`,
                              }}
                              transition={{ duration: 2, delay: 0 }}
                              className={`${
                                1 * 100 >= 80
                                  ? "bg-green-400"
                                  : (1 / 1) * 100 >= 60
                                  ? "bg-sky-400"
                                  : (1 / 1) * 100 >= 40
                                  ? "bg-violet-400"
                                  : (1 / 1) * 100 >= 20
                                  ? "bg-orange-400"
                                  : "bg-red-400"
                              } h-full rounded-lg shadow-md`}
                            ></motion.div>
                          </div>
                        </div>
                        <button
                          onClick={() => openSheet(sheet.link)}
                          className=" flex items-center gap-2 bg-orange-400 py-2 2xl:py-3 px-4 2xl:px-8 mt-4 rounded-[12px] lg:text-[11px] 2xl:text-[14px] font-semibold hover:bg-opacity-75"
                        >
                          <Icon icon="teenyicons:ms-excel-outline" />
                          Buka Sheet
                        </button>
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })
            : [...Array(1)].map((x, i) => (
                <motion.div
                  initial={{
                    y: 100,
                    opacity: 0,
                  }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: i / 8,
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.2 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  key={i}
                >
                  <div className="w-full ">
                    <div className="w-full h-64 bg-gray-200 rounded-[20px] p-4">
                      Data belum tersedia
                    </div>
                  </div>
                </motion.div>
              ))}
        </div>
        <div className="border border-neutral-200 w-1/3 container my-[120px]"></div>
        {/* <section className="flex flex-col lg:flex-row w-full ">
          <AlokasiChart data={bidang}></AlokasiChart>
        </section> */}
      </section>
    </>
  );
};

export default BidangCard;
