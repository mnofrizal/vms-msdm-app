import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/layout/header";
import AnimatedCursor from "react-animated-cursor";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
// import InitialProvider from "@/components/initialProvider";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Monitoring MSDM",
  description: "Monitoring Visitor",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="snap-mandatory scroll-smooth overflow-x-hidden max-w-full bg-[#F7F7F7]"
    >
      <body className={poppins.className}>
        {/* <InitialProvider> */}
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "rgb(31,41,55)",
          }}
          outerStyle={{
            border: "3px solid rgb(31,41,55)",
          }}
        />
        <Header></Header>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        {/* </InitialProvider> */}
      </body>
    </html>
  );
}
