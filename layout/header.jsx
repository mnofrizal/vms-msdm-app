"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
// import { TypeAnimation } from "react-type-animation";
import TextTransition, { presets } from "react-text-transition";
const { GoogleSpreadsheet } = require("google-spreadsheet");
// import { JWT } from "google-auth-library";
import Link from "next/link";

import TotalAnggaranSection from "@/sections/total-anggaran-section";

// import { io } from "socket.io-client";
// import { WS_URL } from "@/config/config-global";
// import creds from "../config/monitor-msdm.json";

// const serviceAccountAuth = new JWT({
//   // env var values here are copied from service account credentials generated by google
//   // see "Authentication" section in docs for more info
//   email: "monitor-msdm@sublime-scion-396122.iam.gserviceaccount.com",
//   key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCpdTWC8NExivI5\n6UkEnVoNTaJK85GfafthR9ik8OhQu+6xtKWc8Dx9d36p+gnF0jBmkb41udrOHJoX\nD55jfwdIyUIaQ9jPaEvXIKVoWQHrqT3ykVLRYNW+Ll/WyerfMTJbkQbZkNFzq7aG\n9KiTVe16ky4j+BJSEaomd8Axrb6sINZDBa4ycHLsu01U/JiLUV86XPvnK2pzBKg5\n5tR1ozdaKI6WX0fOGEmOuLXqRcq/GZ7a6OJ54U3KRe/YVSHeUHYDxdehp6HWBAxZ\nPBTceSp5ZAFj/8lOPfYSfPYknVl0xJDoDaKLp6z+WM3gOVYTxRaSuVuKFPA9jDHD\netphsQNBAgMBAAECggEAHYWjdHPy5gAwcgFf7LNjIGUxjIBBkvW6Szjil922g3Yy\nP/haT+yUhUE/qmo6sKGNOBlU+3QtF/Jor/LTI79aLAaQAxZl28BuUgTIfFThXkaG\nWc+Sj5KgujjHDprv1cFy5fvupxGxQ8cbDgjqo3x5WnzwsWiC/JRCQeBj9eOwj7kC\nOG1A30Q+S5PkIa/0IlbQ9Ei0bLY2wWQjR3HJw/KOuEnI8bjTF2VZ29GOjbl1SrtF\nKQcaSzOMB+VYET/NgBh3mFWJf1pnC5TUcCTt+3xY008WD3t1F1GeMxwYwXbaTPk4\nqFRuSRfrv10pISIV5QJEiRpAQ7fF0PWjm7Oodw5uyQKBgQDQblcO4mkkHaiiDQFb\nWQozdqPH5J1o9UTXDh7u7pjpsZkwE564rg9/9M3nFTU4+5L1OOF0eyedrHnJSsdG\nZrjKs5PqWs0cq+tEn63qrhV8WCKI6UbryRUD8j02V6rDHHFpLSYP6YLW4xRIznzl\neU8RNWLzaKOK53BgzNcsCIKOBQKBgQDQIdjY0ArzMp8GO65houdHI6PXf/TPZhMI\nDrtkS2zDvBP6LGOO1wTvvJ3hwtjIpdxWpLmV4F6yBgWkBdafE5ehm+7BUkp5XvhT\nBTWNIVJDQ7Vtb2YVKigdpDSWEofus6MEt6mkM0OL5Tu96bg/EliooZrxFUz+UIbS\niVmVsN0pDQKBgQC7+MbKxaXMzHKostHmcAajIvvR6nuLjKboy/NZyBRfratZkFg0\ndcXEwCJxpM669SczwHiTc/3mVQYAY1AUTc+Z/xoG4JzanrEu0lMmspjt6w46Kyeq\nvU4WoQBTYfy+uYgOMomBEDbPVTuV7aL10NFd06fJnTTgsJjIs/PZ4lLbgQKBgCGr\neBMLBNp28/bkLL+qxNNjVpwEHSx4DNge2f3NndjEUk8EY062RhwqXTgqdztuaYiy\nuTsfwvH1u2/faeruFneUbDlmAJpF3NJBY3pjS5WKHI2JmfAOk9LHv6IPeWIKOXMH\n6y+fA2xcNx/v8VhytVkCW7hog74YdNcWVSG8LOr5AoGBALMamnBNHXLx1H5puxFy\nQDmqwNJHEDO1iPNO+F1l9TL2rsiKmDppfl/psdTEp6dRQdzQw0ITqHXyDx5CCuF6\nTLg0VWjioICJ4BN/oxEBDhjajQi0VLGH3ZnMlioh5LfXmepzAYMZ2gfoUGl6aUxJ\n43zJ6ZoMjEsMJrMQfId2dkA8\n-----END PRIVATE KEY-----\n",
//   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
// });

// const doc = new GoogleSpreadsheet(
//   "1SWRXL2_CBenYoIqbLILsE-12DF8e75eIzRdfF7GPhd0",
//   serviceAccountAuth
// );

// const textVariants = {
//   initial: {
//     y: -500,
//     opacity: 0,
//   },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duratian: 202,
//       staggerChildren: 0,
//     },
//   },
// };
const sliderVariants = {
  initial: {
    x: 0,
  },
};
const TEXTS = ["Visitor", "Karyawan", "Mitra", "In-Out"];

const Header = () => {
  const [index, setIndex] = React.useState(0);

  // const handleClick = async () => {
  //   await doc.loadInfo(); // loads document properties and worksheets
  //   console.log(doc.title);
  //   const sheet = doc.sheetsByIndex[1]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
  //   console.log(sheet.title);
  //   console.log(sheet.rowCount);
  //   await sheet.loadCells("A1:M200");
  //   const g7 = sheet.getCellByA1("M3");
  // g7.value = ["Anggaran", "Pekerjaan", "Bidang", "Budget"];
  //   console.log(g7.value);
  //   console.log(JSON.parse(g7.value));
  // };
  // let socket;
  // const [socket, setSocket] = useState(undefined);
  // const [roomName, setRoomName] = useState("undefined");
  // const [message, setMessage] = useState("");

  // const socketInitializer = async () => {

  //   const socket = io(WS_URL);

  //   socket.on("connect", () => {
  //     console.log("connected");
  //   });

  //   socket.on("message", (message) => {
  //     message == "refresh" && console.log("refresh");
  //   });

  //   setSocket(socket);
  // };

  // const handleSendMessage = () => {
  //   socket.emit("refreshAction", message);
  // };

  useEffect(() => {
    // socketInitializer();

    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <section className="w-full bg-[#02B779]" style={{ zIndex: 1 }}>
        <div className="flex flex-col container">
          <div
            className="flex flex-row justify-between pt-[20px]"
            style={{ zIndex: 3 }}
          >
            <Link href="/" className="flex flex-row font-bold">
              MSDM
            </Link>
            <Link href="/" className="flex flex-row font-bold ">
              LOGIN
            </Link>
          </div>
          <div className="flex justify-center mt-[67px]">
            <div
              className="w-full justify-center text-center"
              style={{ zIndex: 3 }}
            >
              <motion.div
                initial={{
                  y: -100,
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
              >
                {" "}
                <div className="flex justify-center">
                  <p className="lg:hidden block text-[60px] lg:text-[60px] 2xl:text-[75px] leading-tight font-bold tracking-wide">
                    Monitoring Visitor
                  </p>
                  <p className="lg:block hidden text-[50px] lg:text-[60px] 2xl:text-[75px] leading-tight font-bold tracking-wide">
                    Monitoring
                  </p>
                  <span className="lg:block hidden text-start text-[50px] lg:text-[60px] 2xl:text-[75px] leading-tight font-bold tracking-wide">
                    <TextTransition
                      style={{
                        width: "350px",
                        paddingLeft: "15px",
                      }}
                      springConfig={presets.stiff}
                      inline="true"
                    >
                      {TEXTS[index % TEXTS.length]}
                    </TextTransition>
                  </span>
                </div>
                <p className="text-[17px] 2xl:text-[20px] mt-[20px]">
                  Shortlink monitoring visitor <b>bidang SDM dan Humas</b> ada
                  disini biar nyarinya gampang ya gaess
                </p>
                <div className="pt-[50px] relative text-gray-600">
                  <input
                    // onChange={(e) => {
                    //   setMessage(e.target.value);
                    // }}
                    type="text"
                    className="2xl:text-2xl text-xl border-0  py-3 2xl:py-4  w-full pr-8 pl-5 rounded-full z-0 hover:bg-gray-200  focus:ring-4  focus:ring-black"
                    placeholder="cari visitor..."
                  />
                  <button
                    type="submit"
                    className="absolute right-0 mr-5 pt-[25px] "
                  ></button>
                </div>
              </motion.div>
              <motion.div
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
              >
                <div className="inline-flex mt-[30px] lg:mt-[50px] mb-[80px] space-x-[15px] lg:space-x-[24px]">
                  <Link
                    href={"#middle"}
                    className="px-[29px] sm:px-[30px] py-[13px] sm:py-[13px]  lg:text-[20px] lg:py-[9px] lg:px-[33px] 2xl:text-[24px] 2xl:py-[11px] 2xl:px-[38px] border-gray-200 bg-black hover:shadow-lg hover:border-4 hover:border-black rounded-full text-white hover:text-black hover:font-semibold hover:bg-white"
                  >
                    Buka GSheet
                  </Link>

                  <Link
                    href={"#middle"}
                    className="px-[29px] sm:px-[30px] py-[13px] sm:py-[13px] lg:text-[20px] lg:py-[9px] lg:px-[33px] 2xl:text-[24px] 2xl:py-[11px] 2xl:px-[38px] border-4 border-black rounded-full hover:shadow-lg hover:font-semibold hover:bg-white"
                  >
                    Cari Visitor
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <TotalAnggaranSection></TotalAnggaranSection>
    </>
  );
};

export default Header;