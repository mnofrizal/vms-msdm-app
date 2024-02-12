import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const ChartMonitor = (data) => {
  const [chartData, setChartData] = useState({ series: [] });
  const [state, setState] = useState({
    colors: ["#E0F2FE", "#EDE9FE", "#FEF3C7", "#FCE7F3", "#F0FDF4"],
    series: [],
    options: {
      chart: {
        width: 500,
        type: "donut",
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
              height: 300,
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
  // const setChart = () => {
  //   setState({
  //     options: {
  //       labels: chartData.labels,
  //     },
  //   });
  //   console.log(state.options.labels);
  // };

  useEffect(() => {
    // const {series, labels} = data.data
    setChartData(data.data);
    setState({
      options: {
        labels: chartData?.labels ? chartData?.labels : [],
      },
    });

    // console.log(chartData);
  }, [chartData]);
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
        className="w-full lg:w-1/2 "
      >
        <Chart
          options={state.options}
          colors={state.colors}
          series={chartData?.series?.budget ? chartData.series.budget : []}
          type={"donut"}
          width={500}
          height={500}
          className="items-center"
        />
      </motion.div>
      <div className="flex flex-col w-full lg:w-1/2 ">
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
          className="text-[50px] font-bold"
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
          className="text-[24px] w-10/12 mt-[12px]"
        >
          I've been working on this project for a while now. It's basically a
          diary-style course project of my career so far....
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
          className="inline-flex items-center mt-[100px] space-x-[24px]"
        >
          <button className="text-[24px] py-[12px] px-[40px] bg-black rounded-full text-white hover:shadow-lg">
            Ubah
          </button>
          <button className="text-[24px] py-[12px] px-[40px] border-2 border-black rounded-full hover:shadow-lg">
            Lihat Details
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default ChartMonitor;
