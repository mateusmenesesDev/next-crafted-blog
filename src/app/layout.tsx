import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Header from "~/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body
        className={` font-sans ${inter.variable} bg-base text-text dark:bg-base-dark dark:text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
