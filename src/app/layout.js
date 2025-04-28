import { Analytics } from "@vercel/analytics/react";
import "./styles/globals.css";
import { Poppins, Bebas_Neue } from "next/font/google";
import ThemeInitializer from "./components/ThemeInitializer";
import Navbar from "./components/Navbar";
import BackToTopBtn from "./components/BackToTopBtn";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});
export const metadata = {
  title: "Zarha Selene | Portfolio",
  description:
    "Stockholm-based full-stack developer passionate about accessible digital experiences. With expertise in React, Next.js, and design fundamentals, I transform ideas into intuitive applications where form meets function and frontend magic happens.",
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bebasNeue.variable} ${poppins.variable} antialiased`}>
        <Navbar />
        <ThemeInitializer />
        {children}
        <BackToTopBtn />
        <Analytics />
      </body>
    </html>
  );
}
