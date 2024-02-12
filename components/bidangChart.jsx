import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Fcurrency from "@/utils/fcurrency";
import { CHART_DEFAULT } from "@/config/config-chart";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BidangChart = (data) => {
  // console.log(data);

  const [chartData, setChartData] = useState(CHART_DEFAULT);

  const getChartData = async () => {
    const bidang = data.data;
    // console.log(data);
    const series = { budget: [], terpakai: [], sisa: [] };
    const labels = [];

    await bidang?.map((bid) => {
      series.budget.push(parseInt(bid.budget));
      series.terpakai.push(parseInt(bid.terpakai));
      series.sisa.push(parseInt(bid.terpakai));
      labels.push(bid.procost);
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
            },
          },
          {
            breakpoint: 640,
            options: {
              chart: {
                width: 350,
                height: 350,
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
            },
          },
          {
            breakpoint: 1280,
            options: {
              chart: {
                width: 350,
                height: 350,
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
            },
          },
          {
            breakpoint: 3536,
            options: {
              chart: {
                width: 375,
                height: 375,
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
  };

  useEffect(() => {
    getChartData();
  }, [data]);

  return (
    <section className="flex flex-col lg:flex-row w-full container">
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
            className="text-center"
          />
        )}
      </motion.div>
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
          className="text-[30px] text-center lg:text-start  lg:text-[40px] xl:text-[45px] font-bold  mt-[50px] lg:mt-[0px]"
        >
          Alokasi Procost Pada Bidang {data.params.toUpperCase()}
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
          className=" text-[20px]  lg:text-[22px] lg:w-10/12 mt-[12px] text-center lg:text-start"
        >
          I've been working on this project for a while now. This is basically a
          daily course project for my leisure time so far.... - am
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
          className="inline-flex justify-center lg:justify-start xl:mt-[80px] mt-[50px] space-x-[20px]"
        >
          <button className="text-[19px] lg:text-[20px] xl:text-[20px] py-[9px] px-[30px] bg-black rounded-full text-white hover:shadow-lg ">
            Ubah
          </button>
          <button className="text-[19px] lg:text-[20px] xl:text-[20px] py-[9px] px-[30px] border-2 border-black rounded-full hover:shadow-lg hover:bg-yellow-300">
            Lihat Detail
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BidangChart;
