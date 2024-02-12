import Fnumber from "@/utils/fnumber";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const ProgressChart = (data) => {
  const [chartData, setChartData] = useState([]);
  const [state, setState] = useState({
    series: [
      {
        name: "USED",
        data: [44, 55, 41, 67, 22, 43],
      },
      {
        name: "SISA",
        data: [13, 23, 20, 8, 13, 27],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
        },
      },
      xaxis: {
        type: "datetime",
        categories: [
          "01/01/2011 GMT",
          "01/02/2011 GMT",
          "01/03/2011 GMT",
          "01/04/2011 GMT",
          "01/05/2011 GMT",
          "01/06/2011 GMT",
        ],
      },

      fill: {
        opacity: 1,
      },
    },
  });
  useEffect(() => {
    async function getData() {
      const bidang = await data.data;
      //   console.log(bidang);

      const series = { terpakai: [], sisa: [] };

      bidang.map((bid) => {
        series.terpakai.push(Fnumber(bid.terpakai).value);
        series.sisa.push(Fnumber(bid.sisa).value);
      });

      setChartData([
        { name: "used", data: series.terpakai },
        { name: "sisa", data: series.sisa },
      ]);
    }

    getData();
  }, []);
  // console.log(chartData);
  // console.log(state.series);
  return (
    <div>
      <div className=" ">
        <Chart
          options={state.options}
          series={chartData}
          type="bar"
          height={350}
          className="items-center"
        />
      </div>
    </div>
  );
};

export default ProgressChart;
