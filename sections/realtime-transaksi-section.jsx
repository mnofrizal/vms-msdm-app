import Fnumber from "@/utils/fnumber";
import React from "react";

export default function RealtimeTransaksiTabel() {
  const tableHead = [
    { name: "BIDANG" },
    { name: "PROCOST" },
    { name: "URAIAN" },
    { name: "TERPAKAI" },
    { name: "TERBAYAR" },
    { name: "SISA" },
    { name: "" },
  ];
  const transactionData = [
    {
      bidang: "KAM",
      color: { bg: "bg-green-100", text: "text-green-700" },
      procost: "23-1502-PPA-OP-PEG-4AA-01",
      uraian: "Pengawalan Presiden",
      terpakai: 234000000,
      terbayar: 190000000,
      sisa: 12300000,
    },
    {
      bidang: "SDM",
      color: { bg: "bg-yellow-100", text: "text-yellow-700" },
      procost: "23-1502-PPA-OP-PEG-4AA-01",
      uraian: "Diklat ke Luar Negeri",
      terpakai: 134000000,
      terbayar: 90000000,
      sisa: 18300000,
    },
    {
      bidang: "SEKRE",
      color: { bg: "bg-violet-100", text: "text-violet-700" },
      procost: "23-1502-PPA-OP-PEG-4AA-01",
      uraian: "Diklat ke Luar Negeri",
      terpakai: 134000000,
      terbayar: 90000000,
      sisa: 18300000,
    },
    {
      bidang: "HUMAS",
      color: { bg: "bg-pink-100", text: "text-pink-700" },
      procost: "23-1502-PPA-OP-PEG-4AA-01",
      uraian: "Diklat ke Luar Negeri",
      terpakai: 134000000,
      terbayar: 90000000,
      sisa: 18300000,
    },
    {
      bidang: "FASAU",
      color: { bg: "bg-sky-100", text: "text-sky-700" },
      procost: "23-1502-PPA-OP-PEG-4AA-01",
      uraian: "Pengadaan Meja Kursi",
      terpakai: 134000000,
      terbayar: 90000000,
      sisa: 18300000,
    },
  ];
  return (
    <div>
      <p className="text-[50px]">Realtime Transaksi Terakhir</p>
      <p className="text-[24px] mb-[40px]">
        Data masih dummy, kalau ada waktu selow lagi baru diupdate untuk fitur{" "}
        <br></br> data realtime transaksi terkahir
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="justify-between">
            <tr className="bg-gray-800">
              {/* {tableHead.map((list, i) => {
              return;
              <th className="px-16 py-6">
                <span className="text-gray-300 text-xl" key={i}>
                  {list.name}
                </span>
              </th>;
            })} */}
              <th className="px-5 py-6">
                <span className="text-gray-300 text-xl">BIDANG</span>
              </th>
              <th className="px-16 py-2">
                <span className="text-gray-300 text-xl">PROCOST</span>
              </th>
              <th className="px-20 py-2">
                <span className="text-gray-300 text-xl">URAIAN</span>
              </th>
              <th className="">
                <span className="text-gray-300 text-xl">TERPAKAI</span>
              </th>
              <th className="">
                <span className="text-gray-300 text-xl">TERBAYAR</span>
              </th>

              <th className="px-5 py-2">
                <span className="text-gray-300 text-xl">SISA</span>
              </th>
              <th className="px-5 py-2">
                <span className="text-gray-300 text-xl"></span>
              </th>
            </tr>
          </thead>

          <tbody className="bg-gray-200">
            {transactionData.map((data, i) => {
              return (
                <tr className="bg-white border-4 border-gray-200" key={i}>
                  <td className="px-5 py-6 ">
                    <span
                      className={`${data.color.bg} ${data.color.text}  font-medium me-2 px-4 py-0.5 rounded-full`}
                    >
                      {data.bidang}
                    </span>
                  </td>
                  <td>
                    <span className=" text-center font-semibold">
                      {data.procost}
                    </span>
                  </td>
                  <td>
                    <span className="font-semibold">{data.uraian}</span>
                  </td>
                  <td className=" py-2">
                    <span>
                      {Fnumber(data.terpakai).value +
                        Fnumber(data.terpakai).satuan}
                    </span>
                  </td>
                  <td className=" py-2">
                    <span>
                      {Fnumber(data.terbayar).value +
                        Fnumber(data.terbayar).satuan}
                    </span>
                  </td>

                  <td className=" py-2">
                    <span className="text-center  font-semibold">
                      {Fnumber(data.sisa).value + Fnumber(data.sisa).satuan}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <button className="bg-green-600 text-green-100 hover:bg-green-800 font-medium me-2 px-2.5 py-0.5 rounded hover:shadow-xl">
                      Details
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-[50px]">
        <button className="text-[24px] py-[12px] px-[40px] bg-black rounded-full text-white hover:shadow-lg">
          Lihat Keseluruhan
        </button>
      </div>
    </div>
  );
}
