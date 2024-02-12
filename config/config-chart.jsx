export const CHART_DEFAULT = {
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
};
