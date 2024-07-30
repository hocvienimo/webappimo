import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./containers/Header";
import Footer from "./containers/Footer";

const nunito = Nunito({ 
  subsets: ["latin-ext"],
  weight: ["300","400","600","700","800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JobMela - Job Board HTML Template",
  description: "JobMela",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.variable}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
