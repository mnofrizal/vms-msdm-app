"use client";

// import RealtimeTransaksiTabel from "@/sections/realtime-transaksi-section";

// import { useBidangStore } from "@/store/Bidang";

import BidangCard from "@/components/bidangCard";

export default function Home() {
  // const { bidang, addBidang } = useBidangStore();

  return (
    <main>
      <section className="w-full container mt-[50px]" id="middle">
        {/* <MonitorBidangSection
          data={bidang}
          listPC={dataPC}
        ></MonitorBidangSection> */}
        <BidangCard></BidangCard>
        {/* <div className="border border-neutral-200 w-1/3 container my-[100px]"></div> */}
      </section>
      {/* <section className="text-center container ">
        <RealtimeTransaksiTabel></RealtimeTransaksiTabel>
      </section> */}
    </main>
  );
}
