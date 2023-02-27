import "./globals.scss";
import { Work_Sans, Inter } from "next/font/google";
import Container from "@/components/share/image/container/container";
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
    <html lang="en" className="dark">
      <body className={`${workSans.variable} ${inter.variable}`}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
