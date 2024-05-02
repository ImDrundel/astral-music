import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import Leftbar from "./moduls/leftbar/leftbar";
import Rightbar from "./moduls/rightbar/rightbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

export const metadata: Metadata = {
  title: "Astral music",
  description: "Astral music web player",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <div className="mainGridContainer">
          <Leftbar />
          <div className="children">{children}</div>
          <Rightbar />
        </div>
      </body>
    </html>
  );
}
