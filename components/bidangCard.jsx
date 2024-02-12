import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
// import AlokasiChart from "./alokasiChart";
import { Icon } from "@iconify/react";
// import "./style.css";

const BidangCard = () => {
  const [cardData] = useState([
    {
      date: 1,
      link: "https://docs.google.com/spreadsheets/d/1SlZNoU6taVHucQhV-ud3OjrQk9SbIaZcn9ADV4gtcQI/edit?usp=sharing",
    },
    {
      date: 2,
      link: "https://docs.google.com/spreadsheets/d/1eIZXLU8K03dW1B6Nlaa_8WGh_4dD7UOpnEszZCx6bgw/edit?usp=sharing",
    },
    {
      date: 3,
      link: "https://docs.google.com/spreadsheets/d/1-dTf0DlVqGJ4H6HYUUROsiKaID55_Wv-DqQ1RjeJXGQ/edit?usp=drive_link",
    },
    {
      date: 4,
      link: "https://docs.google.com/spreadsheets/d/1vFJkGQ96AxbE6hKF1hxRoAPIllRE_Dz4dMOoS_-NpAU/edit?usp=drive_link",
    },
    {
      date: 5,
      link: "https://docs.google.com/spreadsheets/d/1Rqhex2yata-RyO95zTXR1wqKoXbP0RqwtTnuW5SYJ9w/edit?usp=drive_link",
    },
    {
      date: 6,
      link: "https://docs.google.com/spreadsheets/d/1uAjyulTSz_VL8Nmq8eJUajosXbl27-k5jmpR1bckzPU/edit?usp=drive_link",
    },
    {
      date: 7,
      link: "https://docs.google.com/spreadsheets/d/19cf-oxgEY8jEqyU9REjvJcycQICYKXXhEFGEGnVOF4k/edit?usp=drive_link",
    },
    {
      date: 8,
      link: "https://docs.google.com/spreadsheets/d/1Om10q988x57vMKwRxuqPAMBrbAwx3NC8IdWvmJVB8fE/edit?usp=drive_link",
    },
    {
      date: 9,
      link: "https://docs.google.com/spreadsheets/d/1GiqwQjh7RggI7AeeI69z-GEgOU874mqnJ5zdlWdXBZg/edit?usp=drive_link",
    },
    {
      date: 10,
      link: "https://docs.google.com/spreadsheets/d/1fsR8XPGHgbUiU5hsb-ryZ5I1tCXHh0Kq27opgFABW60/edit?usp=drive_link",
    },
    {
      date: 11,
      link: "https://docs.google.com/spreadsheets/d/1k10T9lP-aRK1Pkx9wjx80xIW6NRFh1kMxBhoGZGOOyY/edit?usp=drive_link",
    },
    {
      date: 12,
      link: "https://docs.google.com/spreadsheets/d/1xO2XxnxidfxMNuwjxlKr2gHbU5sQ3ccD9B43jLmX_50/edit?usp=drive_link",
    },
    {
      date: 13,
      link: "https://docs.google.com/spreadsheets/d/1bwTxJc_KAZ_-ANpUzXU3tY__l3UVePNMjeK2Tr_QxDY/edit?usp=drive_link",
    },
    {
      date: 14,
      link: "https://docs.google.com/spreadsheets/d/1LC8dn6U5zpLx11YlGkJkRG0oqLbtEZzqHCRQ81PLRD0/edit?usp=drive_link",
    },
    {
      date: 15,
      link: "https://docs.google.com/spreadsheets/d/1bz5FF7zxbxk8nCpqxPXqITSI19dSpFOoOKyO7Vpw2fo/edit?usp=drive_link",
    },
    {
      date: 16,
      link: "https://docs.google.com/spreadsheets/d/1kO5QcoSzSLmxNpczHwZlyPd6ITxrUDrGs29RsiX3uPM/edit?usp=drive_link",
    },
    {
      date: 17,
      link: "https://docs.google.com/spreadsheets/d/1m34HuOg9qnZb7xlbaPTtAU9CbyCWsAL0uQf5JAh7YUo/edit?usp=drive_link",
    },
    {
      date: 18,
      link: "https://docs.google.com/spreadsheets/d/1EK3rC9LiI1hIL_VBmESnhYGEGyfd37ikku8AKXjRN8c/edit?usp=drive_link",
    },
    {
      date: 19,
      link: "https://docs.google.com/spreadsheets/d/1YXYrLQBamdFHCYTAUy0S1nTuhSitoJxvRmQjyfU9kUA/edit?usp=drive_link",
    },
    {
      date: 20,
      link: "https://docs.google.com/spreadsheets/d/1B7xyvXaEzgZ07Ly-WcT1U0cypKKOlWZV87VdESMtAUg/edit?usp=drive_link",
    },
    {
      date: 21,
      link: "https://docs.google.com/spreadsheets/d/1Qw_MFhAl7IlGavS8uJEaBwdSOz1F4iwuj1rbD5M8nzw/edit?usp=drive_link",
    },
    {
      date: 22,
      link: "https://docs.google.com/spreadsheets/d/1K9XyF4l7VZN73n62chOOGZnfaT8k7IKMepWz30iqUHA/edit?usp=drive_link",
    },
    {
      date: 23,
      link: "https://docs.google.com/spreadsheets/d/1hwkaPtGhtF8ZR4_QANK_HEkGbvENy0qeihLckJVuI4A/edit?usp=drive_link",
    },
    {
      date: 24,
      link: "https://docs.google.com/spreadsheets/d/1biVm1Z8qn7fFxASYO5WLDvEUft_zQq7MdgGQZrDa5Yw/edit?usp=drive_link",
    },
    {
      date: 25,
      link: "https://docs.google.com/spreadsheets/d/1YcY4GGagnmtoh8goI5ILcHA8D8_j0thRIPw6W_EwNIQ/edit?usp=drive_link",
    },
    {
      date: 26,
      link: "https://docs.google.com/spreadsheets/d/1NuNdcniNIVenlfLNU4d5qOMt7kSvhhgtrB1JnQWUGMo/edit?usp=drive_link",
    },
    {
      date: 27,
      link: "https://docs.google.com/spreadsheets/d/1bmcab06CcDoypMSFH_a_kydlvsgznAGDdJpyc7uCf-c/edit?usp=drive_link",
    },
    {
      date: 28,
      link: "https://docs.google.com/spreadsheets/d/1afVbs33-lozCb-ww3UVM74p8vFrq35cs0Tl2hsskx6o/edit?usp=drive_link",
    },
    {
      date: 29,
      link: "https://docs.google.com/spreadsheets/d/1oIdRXQ7x73Ng5twNtlngbyDiwvey_Sx2xy23QI1sQDM/edit?usp=drive_link",
    },
    {
      date: 30,
      link: "https://docs.google.com/spreadsheets/d/1WLWKM9bKBNgSjyu69FOAliOCUxKBBS3XpmmAkUUMu78/edit?usp=drive_link",
    },
    {
      date: 31,
      link: "https://docs.google.com/spreadsheets/d/1X-AjZylhAyGhE4UBJ5o27-SpQ5r7nO8_4kaaTkliFSs/edit?usp=drive_link",
    },
  ]);

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
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px] lg:gap-[40px]">
          {cardData.length !== 0
            ? cardData.map((sheet, i) => {
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
            : [...Array(4)].map((x, i) => (
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
                  className=" animate-pulse"
                  key={i}
                >
                  <div className="w-full ">
                    <div className="w-full h-64 bg-gray-300 rounded-[20px]"></div>
                    <h1 className="w-4/6 h-2 mt-4 bg-gray-200 rounded-[15px]"></h1>
                  </div>
                </motion.div>
              ))}
        </div>
        <div className="border border-neutral-200 w-1/3 container my-[120px]"></div>
        {/* <section className="flex flex-col lg:flex-row w-full ">
          <AlokasiChart data={bidang}></AlokasiChart>
        </section> */}
      </div>
    </>
  );
};

export default BidangCard;
