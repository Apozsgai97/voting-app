import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./navbar";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Voting App",
  description: "An app for elections and voting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
