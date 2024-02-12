import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BidangCard from "@/components/bidangCard";
import BidangDetail from "@/components/bidangDetails";

const Tabs = ({ color, data }) => {
  const [openTab, setOpenTab] = useState(1);
  const [charData, setChartData] = useState({});

  const listBidang = [
    { fullName: "Fasilitas dan Sarana" },
    { fullName: "SDM dan Kepegawaian" },
    { fullName: "Humas" },
    { fullName: "Sekretariat" },
    { fullName: "Keamanan" },
  ];

  const { data: bidang, listPC } = data;

  // console.log(listPC);
  // console.log(bidang);

  const getChartData = () => {
    const series = { budget: [], terpakai: [], sisa: [], labels: [], pb: [] };
    const labels = [];
    bidang.map((bid) => {
      series.budget.push(bid.budget);
      series.terpakai.push(bid.terpakai);
      series.sisa.push(bid.sisa);
      series.labels.push(bid.name);
      series.pb.push({ name: bid.name, data: bid.sisa });
      labels.push(bid.name);
    });
    setChartData({ series: series, labels: labels });
    // console.log(charData);
  };

  useEffect(() => {
    getChartData();
  }, []);
  return (
    <>
      {/* <div>{JSON.stringify(charData)}</div> */}
      <motion.p
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="text-[50px] font-medium text-center"
      >
        Monitoring Per Bidang
      </motion.p>
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="flex flex-wrap"
      >
        <div className="w-full">
          <div className="space-x-[24px] mt-[20px] mb-[40px] text-[20px] text-neutral-500 text-center">
            <a
              className={
                "inline-block px-3 py-2  rounded-xl hover:text-gray-900 hover:bg-gray-100 " +
                (openTab === 1
                  ? "text-gray-900 bg-[#f3f4f626] font-bold  "
                  : "text-" + color + "-600 ")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              All works
            </a>
            {listBidang.map((bid, i) => {
              return (
                <a
                  key={i}
                  className={
                    "inline-block px-3 py-2 rounded-xl hover:text-gray-900 hover:bg-gray-100 " +
                    (openTab === i + 2
                      ? "text-gray-900 bg-[#F3F4F6] font-bold  "
                      : "text-" + color + "-600 ")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(i + 2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  {bid.fullName}
                </a>
              );
            })}
          </div>

          <BidangCard
            data={bidang}
            tab={openTab}
            onTabChange={() => setOpenTab(openTab)}
          ></BidangCard>
          {bidang.map((bid, i) => {
            return openTab === i + 2 ? (
              <div key={i}>
                <BidangDetail
                  data={bid}
                  listPC={listPC[bid.name]}
                ></BidangDetail>
              </div>
            ) : null;
          })}
        </div>
      </motion.div>
    </>
  );
};

export default function MonitorBidangSection(data) {
  return (
    <>
      <Tabs color="zinc" data={data} />
    </>
  );
}
