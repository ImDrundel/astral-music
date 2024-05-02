import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Leftbar from "./moduls/leftbar/leftbar";
import Rightbar from "./moduls/rightbar/rightbar";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
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
