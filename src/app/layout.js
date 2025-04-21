import { Analytics } from "@vercel/analytics/react";
import "./styles/globals.css";
import { Poppins, Bebas_Neue } from "next/font/google";

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
  title: "Zarha | Portfolio",
  description:
    " I am Stockholm-based web developer specializing in frontend magic. Transforming ideas into digital wonders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${poppins.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
