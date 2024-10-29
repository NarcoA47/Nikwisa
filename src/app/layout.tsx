"use client";
import { Provider } from "react-redux";
// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { store } from "../reducers/store";
// import BottomNav from "./components/BottomNav";
// import MobileSearchBar from "./components/MobileSearchBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "NiKwisa | Start your journey Here.",
//   description: "Start your journey Here",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
        >
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
