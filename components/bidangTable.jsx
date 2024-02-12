"use client";
import Fcurrency from "@/utils/fcurrency";
import Fnumber from "@/utils/fnumber";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Tooltip } from "react-tooltip";
import TablePagination from "./tablePagination";

const BidangTable = (data) => {
  const { data: procosts, params } = data;
  console.log(data);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const [listPC, setListPC] = useState([]);
  const [filterPC, setFilterPC] = useState([]);

  const newPC = [];

  const handleSearch = (event) => {
    setCurrentPage(1);

    const res = listPC.filter((pc) =>
      pc.taskName.toLowerCase().includes(event.target.value.toLowerCase())
    );

    res.map((pc, i) => {
      newPC.push({ ...pc, number: i + 1 });
    });
    setFilterPC(newPC);

    // console.log(newPC);
  };

  // const data2 = {
  //   nodes: list.filter((item) =>
  //     item.name.toLowerCase().includes(search.toLowerCase())
  //   ),
  // };

  useEffect(() => {
    setListPC(procosts[params.bidang]);
    setFilterPC(procosts[params.bidang]);
  }, [procosts]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentPosts = filterPC?.slice(firstPostIndex, lastPostIndex);

  // console.log(procosts);

  return (
    <>
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.4,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" py-12 container"
      >
        <div
          htmlFor="search"
          className="bg-gray-800 flex rounded-t-xl pt-4 px-4 space-x-3 "
        >
          <select
            onChange={() => setPostPerPage(event.target.value)}
            className=" text-md border-2 py-2 px-2 lg:py-2 w-[25%] rounded-lg z-0"
          >
            <option value={6}>6 items</option>
            <option value={10}>10 items</option>
            <option value={15}>15 items</option>
            <option value={20}>20 items</option>
            <option value={30}>30 items</option>
          </select>
          <input
            placeholder="Cari task name"
            id="search"
            type="text"
            onChange={handleSearch}
            className="w-full text-lg border-2 py-2 lg:py-2  pr-8 pl-3 rounded-lg z-0 hover:bg-gray-200 "
          />
        </div>
        <div className="overflow-x-auto w-full">
          <table className=" mx-auto w-full whitespace-nowrap rounded-b-xl bg-[#FDFDFE]  overflow-hidden">
            <thead className="bg-gray-800">
              <tr className="text-white text-left">
                <th className="font-semibold text-md uppercase px-3 py-4 text-center">
                  No
                </th>
                <th className="font-semibold text-md uppercase px-3 py-4">
                  Procost
                </th>
                <th className="font-semibold text-md uppercase px-6 py-4">
                  Pekerjaan
                </th>
                <th className="font-semibold text-md uppercase px-6 py-4 text-center">
                  Budget
                </th>
                <th className="font-semibold text-md uppercase px-6 py-4 text-center">
                  Terbayarkan
                </th>
                <th className="font-semibold text-md uppercase px-6 py-4 text-center">
                  Persentase
                </th>
                <th className="font-semibold text-md uppercase px-6 py-4 text-center">
                  Sisa
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 ">
              {currentPosts !== undefined
                ? currentPosts?.map((data, i) => {
                    return (
                      <tr
                        key={i}
                        // className={`${i % 2 == 0 ? "bg-gray-50" : ""} hover:bg-blue-50`}
                        className="hover:bg-gray-100 cursor-pointer"
                      >
                        <td className="px-3 py-5 text-center">
                          <p className="text-xl font-bold lg:text-2xl xl:text-4xl text-cyan-700">
                            {data.number ?? i + 1}
                          </p>
                        </td>
                        <td className="px-3 py-5">
                          <p className="">
                            {" "}
                            {data.taskNumber + " - " + data.taskName}{" "}
                          </p>
                          <p className="text-[#1B93AA] text-sm font-semibold tracking-wide">
                            {data.procost}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <div className="inline-flex w-10 h-10">
                              <h6 className="text-xl font-bold lg:text-2xl xl:text-4xl text-cyan-700">
                                {data.jumlahPekerjaan}
                              </h6>
                            </div>
                            <div>
                              <p className="text-sm tracking-wide"> Judul </p>
                              <p className="text-sm  tracking-wide">
                                Pekerjaan
                              </p>
                            </div>
                          </div>
                        </td>

                        <td
                          data-tooltip-id="budget-tooltip"
                          data-tooltip-content={Fcurrency(data.budget)}
                          data-tooltip-place="top"
                          className="px-6 py-4 text-center"
                        >
                          {/* <Tooltip
                      id="budget-tooltip"
                      style={{ borderRadius: "6px" }}
                    /> */}
                          <span className="bg-green-100 text-green-600  font-bold me-2 px-4 py-0.5 rounded">
                            {Fnumber(data.budget).value +
                              Fnumber(data.budget).satuan}
                          </span>
                        </td>
                        <td
                          data-tooltip-id="budget-tooltip"
                          data-tooltip-content={Fcurrency(data.terbayarkan)}
                          data-tooltip-place="top"
                          className="px-6 py-4 text-center"
                        >
                          {/* <Tooltip
                      id="budget-tooltip"
                      style={{ borderRadius: "6px" }}
                    /> */}
                          <span className="bg-red-100 text-red-600  font-bold me-2 px-4 py-0.5 rounded">
                            {Fnumber(data.terbayarkan).value +
                              Fnumber(data.terbayarkan).satuan}
                          </span>
                        </td>

                        <td className="px-6 py-4 text-center w-1/4">
                          <div
                            className={`w-full ${
                              (data.terbayarkan / data.budget) * 100 >= 80
                                ? "bg-green-100"
                                : (data.terbayarkan / data.budget) * 100 >= 60
                                ? "bg-sky-100"
                                : (data.terbayarkan / data.budget) * 100 >= 40
                                ? "bg-violet-100"
                                : (data.terbayarkan / data.budget) * 100 >= 20
                                ? "bg-orange-100"
                                : "bg-[#fff2f2]"
                            } rounded-full`}
                          >
                            <motion.div
                              initial={{ width: 0 }}
                              viewport={{ once: true }}
                              whileInView={{
                                width: `${
                                  data.budget != 0
                                    ? (data.terbayarkan / data.budget) * 100
                                    : 0
                                }%`,
                              }}
                              transition={{ duration: 2, delay: 0 }}
                              className={`${
                                (data.terbayarkan / data.budget) * 100 >= 80
                                  ? "bg-green-400"
                                  : (data.terbayarkan / data.budget) * 100 >= 60
                                  ? "bg-sky-400"
                                  : (data.terbayarkan / data.budget) * 100 >= 40
                                  ? "bg-violet-400"
                                  : (data.terbayarkan / data.budget) * 100 >= 20
                                  ? "bg-orange-400"
                                  : "bg-[#ff6363]"
                              } text-xs font-medium text-white text-center p-0.5 leading-none rounded-full`}
                            >
                              <CountUp
                                end={(data.terbayarkan / data.budget) * 100}
                                decimals={0}
                              />
                              %
                            </motion.div>
                          </div>
                        </td>
                        <td
                          className="px-6 py-4 text-center"
                          data-tooltip-id="budget-tooltip"
                          data-tooltip-content={Fcurrency(data.sisa)}
                          data-tooltip-place="top"
                        >
                          {/* <Tooltip
                      id="budget-tooltip"
                      style={{ borderRadius: "6px" }}
                    /> */}
                          <span className=" text-sky-700   me-2 px-4 py-0.5  text-xl font-bold lg:text-2xl xl:text-3xl">
                            <CountUp
                              end={Fnumber(data.sisa).value}
                              decimals={
                                Fnumber(data.sisa).satuan == " M" ? 1 : 0
                              }
                            />
                            {Fnumber(data.sisa).satuan}
                          </span>
                        </td>
                      </tr>
                    );
                  })
                : [...Array(3)].map((x, i) => (
                    <tr
                      key={i}
                      // className={`${i % 2 == 0 ? "bg-gray-50" : ""} hover:bg-blue-50`}
                      className="hover:bg-gray-100 cursor-pointer  animate-pulse"
                    >
                      {[...Array(7)].map((x, i) => (
                        <td className="px-3 py-5" key={i}>
                          <div
                            style={{
                              width: Math.floor(Math.random() * 51) + 50 + "%",
                            }}
                            className=" h-2 bg-gray-300 rounded-full  mb-2.5"
                          ></div>
                        </td>
                      ))}
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      <TablePagination
        totalPosts={filterPC?.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></TablePagination>
    </>
  );
};

export default BidangTable;
