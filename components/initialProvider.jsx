"use client";
import React, { useEffect, useState } from "react";
import { SHEET_API_URL, WS_URL } from "@/config/config-global";
import { camelCase, mapKeys } from "lodash";
import { useBidangStore } from "@/store/Bidang";
import { useProcostStore } from "@/store/Procosts";
import { useTotalAnggaranStore } from "@/store/TotalAnggaran";
import { io } from "socket.io-client";

const InitialProvider = ({ children }) => {
  const { addBidang } = useBidangStore();
  const { addProcost } = useProcostStore();
  const { totalAnggaran, addAnggaran } = useTotalAnggaranStore();

  const [bidang, setBidang] = useState([]);

  const [dataPC, setDataPC] = useState({
    humas: [
      {
        no: "1",
        procost: "23-1502-PPA-OP-ADM-7A-01",
        task: { number: "01", name: "Honorarium" },
        totalPekerjaan: "18",
        budget: "500000000",
        terbayarkan: "35000000",
        sisa: "100000000",
      },
      {
        no: "2",
        procost: "23-1502-PPA-OP-ADM-7A-02",
        task: { number: "02", name: "Air dan gas" },
        totalPekerjaan: "8",
        budget: "300000000",
        terbayarkan: "105000000",
        sisa: "90000000",
      },
    ],
    fasau: [
      {
        no: "1",
        procost: "23-1502-PPA-OP-ADM-7A-01",
        task: { number: "01", name: "Honorarium" },
        totalPekerjaan: "18",
        budget: "500000000",
        terbayarkan: "35000000",
        sisa: "100000000",
      },
      {
        no: "2",
        procost: "23-1502-PPA-OP-ADM-7A-02",
        task: { number: "02", name: "Air dan gas" },
        totalPekerjaan: "8",
        budget: "300000000",
        terbayarkan: "105000000",
        sisa: "90000000",
      },
    ],
  });

  const sumData = (array, property) => {
    const total = array.reduce((accumulator, object) => {
      return accumulator + object[property];
    }, 0);

    return total;
  };

  const getData = async () => {
    const sheetUrl = SHEET_API_URL;
    const fasau = [];
    const sdm = [];
    const humas = [];
    const sekre = [];
    const kam = [];
    const any = [];
    const any2 = {};

    const allBudget = [];
    const allTerpakai = [];
    const allSisa = [];

    const res = await fetch(sheetUrl, {
      method: "GET",
    });
    const result = await res.json();

    // console.log(result);

    const output = result.data.map((el) =>
      mapKeys(el, (val, key) => camelCase(key))
    );

    const parse = output.map((exc) => {
      exc.color = JSON.parse(exc.color);

      exc.name == "humas"
        ? humas.push(exc)
        : exc.name == "fasau"
        ? fasau.push(exc)
        : exc.name == "sdm"
        ? sdm.push(exc)
        : exc.name == "sekre"
        ? sekre.push(exc)
        : exc.name == "kam"
        ? kam.push(exc)
        : any.push(exc);

      allBudget.push(exc.budget);
      allTerpakai.push(exc.terpakai);
      allSisa.push(exc.sisa);
    });

    any.push([fasau], [sdm], [humas], [sekre], [kam]);
    setDataPC({ fasau, sdm, humas, sekre, kam });
    addProcost({ fasau, sdm, humas, sekre, kam });

    const totalBudget = allBudget.reduce((a, b) => a + b, 0);
    const totalTerpakai = allTerpakai.reduce((a, b) => a + b, 0);
    const totalSisa = allSisa.reduce((a, b) => a + b, 0);

    addAnggaran({
      budget: totalBudget,
      terpakai: totalTerpakai,
      sisa: totalSisa,
    });

    const combine = [];

    // console.log(any);
    any.map((pc) => {
      pc.map((bid) => {
        combine.push({
          name: bid[0]?.name ?? "FASAU",
          fullName: bid[0]?.fullName ?? "Fasilitas dan Sarana",
          budget: sumData(bid, "budget"),
          terpakai: sumData(bid, "terpakai"),
          sisa: sumData(bid, "sisa"),
          color: bid[0]?.color ?? {
            name: "bg-sky-100",
            rgb: "rgb(224,242,254)",
          },
          link: bid[0]?.link,
          procost: [bid.procost],
        });
      });
    });

    // console.log(combine);

    setBidang(combine);
    addBidang(combine);
  };

  // let socket;
  const [socket, setSocket] = useState(undefined);

  const socketInitializer = () => {
    const socket = io(WS_URL);

    socket.on("connect", () => {
      console.log("WS Connected");
    });

    socket.on("disconnect", () => {
      console.warn("Socket disconnected!");
    });

    socket.on("refreshAction", (code) => {
      // console.log(code);
      code == "refresh" && getData();
    });

    setSocket(socket);
  };

  useEffect(() => {
    socketInitializer();
    getData();
  }, []);
  return <section>{children}</section>;
};

export default InitialProvider;
