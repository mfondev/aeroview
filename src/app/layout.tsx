import type { Metadata } from "next";
// import localFont from "next/font/local";
import Provider from "./_provider";
import "./globals.css";
import { Poppins } from "next/font/google";
import LenisProvider from "./_lenisProvider";

export const metadata: Metadata = {
  title: "Aeroview",
  description:
    "Experience seamless and affordable air travel with Aeroview. We prioritize safety, comfort, and budget-friendly options, ensuring you reach your destination with ease and peace of mind.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          href="/images/aeroview_logo.svg"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/images/aeroview_logo.svg"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/images/aeroview_logo.svg"
        />
      </head>
      <body className={`${poppins.className} `} >
        <LenisProvider>
          <Provider>
            {children}
            {modal}
          </Provider>
        </LenisProvider>
      </body>
    </html>
  );
}
