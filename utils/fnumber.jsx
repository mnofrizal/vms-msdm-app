import React from "react";

const Fnumber = (num, digits) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: " RB" },
    { value: 1e6, symbol: " JT" },
    { value: 1e9, symbol: " M" },
    { value: 1e12, symbol: " T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? {
        value: (num / item.value)
          .toFixed(item.symbol == " M" ? 2 : digits)
          .replace(rx, "$1"),
        satuan: item.symbol,
      }
    : {
        value: 0,
        satuan: "",
      };
};

export default Fnumber;
