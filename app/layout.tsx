import "./globals.scss";
import { Work_Sans, Inter } from "next/font/google";
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "AboutMe",
  description: "MohammadReza Zolfaghari",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-white-100 dark:bg-black-100 ${workSans.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
