import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { CHART_DEFAULT } from "@/config/config-chart";
import Fcurrency from "@/utils/fcurrency";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AlokasiChart = (data) => {
  // console.log(data);
  const [chartData, setChartData] = useState(CHART_DEFAULT);

  const getChartData = async () => {
    const bidang = data.data;
    const series = { budget: [], terpakai: [], sisa: [] };
    const labels = [];

    await bidang.map((bid) => {
      series.budget.push(bid.budget);
      series.terpakai.push(bid.terpakai);
      series.sisa.push(bid.sisa);
      labels.push(bid.name);
    });
    // setChartData({ series: series, labels: labels });

    setChartData({
      colors: ["#E0F2FE", "#EDE9FE", "#FEF3C7", "#FCE7F3", "#F0FDF4"],
      series: series.budget,
      options: {
        chart: {
          width: 500,
          type: "donut",
        },
        labels: labels,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 350,
                height: 350,
              },
              legend: {
                position: "bottom",
              },
            },
          },
          {
            breakpoint: 640,
            options: {
              chart: {
                width: 350,
                height: 350,
              },
              legend: {
                position: "bottom",
              },
            },
          },
          {
            breakpoint: 1024,
            options: {
              chart: {
                width: 350,
                height: 350,
              },
              legend: {
                position: "bottom",
              },
            },
          },
          {
            breakpoint: 1280,
            options: {
              chart: {
                width: 350,
                height: 350,
              },
              legend: {
                position: "bottom",
              },
            },
          },
          {
            breakpoint: 1536,
            options: {
              chart: {
                width: 350,
                height: 350,
              },
              legend: {
                position: "bottom",
              },
            },
          },
          {
            breakpoint: 3536,
            options: {
              chart: {
                width: 375,
                height: 375,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
        legend: {
          show: false,
        },
        noData: {
          text: "Loading...",
        },
        grid: {
          padding: {
            left: 0,
            right: 0,
          },
        },
        yaxis: {
          labels: {
            formatter: (value) => {
              return `${Fcurrency(parseInt(value))}`;
            },
          },
          title: {
            text: "Expenses per month",
          },
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "20px",
            fontFamily: "Poppins, Arial, sans-serif",
            fontWeight: "bold",
          },
        },
        fill: {
          colors: ["#008FFB", "#775DD0", "#FEB019", "#FF4560", "#00E396"],
        },
      },
    });

    // console.log(labels);
  };

  useEffect(() => {
    getChartData();
  }, [data]);
  return (
    <>
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
        className="w-full lg:w-1/2 flex justify-center"
      >
        {data.data?.length >= 1 && (
          <Chart
            options={chartData.options}
            colors={chartData.colors}
            series={chartData.series}
            type={"donut"}
            width={500}
            height={500}
            className=""
          />
        )}
      </motion.div>
      <div className="flex flex-col w-full lg:w-1/2 justify-center">
        <motion.p
          initial={{
            x: 100,
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
          className="text-[35px] text-center lg:text-start  lg:text-[45px] xl:text-[45px] font-bold "
        >
          ALOKASI ANGGARAN
        </motion.p>
        <motion.p
          initial={{
            x: 100,
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
          className="text-[20px]  lg:text-[24px] lg:w-10/12 mt-[12px] text-center lg:text-start"
        >
          I've been working on this project for a while now. This is basically a
          daily course project for my leisure time so far.... - am
        </motion.p>
        <motion.div
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
          className="inline-flex justify-center lg:justify-start xl:mt-[100px] mt-[70px] space-x-[24px]"
        >
          <button className="text-[19px] lg:text-[20px] xl:text-[24px] py-[12px] px-[40px] bg-black rounded-full text-white hover:shadow-lg">
            Ubah
          </button>
          <button className="text-[19px] lg:text-[20px] xl:text-[24px] py-[12px] px-[40px] border-2 border-black rounded-full hover:shadow-lg">
            Lihat Details
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default AlokasiChart;
