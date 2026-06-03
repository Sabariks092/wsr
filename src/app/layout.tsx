import type { Metadata } from "next";
import { Rye, Poppins } from "next/font/google";
import "./globals.css";

const rye = Rye({
  weight: "400",
  variable: "--font-rye",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wild South Raiders",
  description: "A premium Western adventure game portal and design playground built for Wild South Raiders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rye.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0D0D0D] text-[#E7D2AE]">{children}</body>
    </html>
  );
}

