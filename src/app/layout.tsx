import type { Metadata } from "next";
import "./globals.css";
import { Lexend_Deca } from "next/font/google";

const lexend = Lexend_Deca({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Wayan Portofolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
