
import { Work_Sans, Inter } from "next/font/google";

import "./globals.scss";
import Container from "@/components/share/image/container/container";
import Provider from "@/components/share/provider/provider";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${workSans.variable} ${inter.variable}`}>
        <Provider>
          <Container>{children}</Container>
        </Provider>
      </body>
    </html>
  );
}
