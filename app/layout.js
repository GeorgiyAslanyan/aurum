import { Geist, Geist_Mono, Manrope, Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AURUM",
  description: "AURUM — Locked. Listed. Liquid.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${unbounded.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
