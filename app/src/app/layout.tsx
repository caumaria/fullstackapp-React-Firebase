"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>React + Firebase App</title>
      </head>
      <body className={inter.className}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
        </body>
    </html>
  );
}
