import type { Metadata } from "next";
import { Poppins, Montserrat, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Complete Building Maintenance | 801-687-3000 | Commercial & Residential Cleaning",
  description:
    "Complete Building Maintenance provides expert carpet cleaning, office cleaning, residential cleaning, day porter services, deep disinfection, and multi-family turnovers. Contact: 801-687-3000 | cbmorem@hotmail.com.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-slate-800 bg-white">
        <SmoothScroll>
          {children}
          <ThemeSwitcher />
        </SmoothScroll>
      </body>
    </html>
  );
}
