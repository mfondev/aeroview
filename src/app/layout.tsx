import type { Metadata } from "next";
// import localFont from "next/font/local";
import Provider from "./_provider";
import "./globals.css";
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
  title: "aeroview",
  description: "Fly safe and cheap",
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

export default function RootLayout({  children, modal,}: Readonly<{  children: React.ReactNode;  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <Provider>
          {children}
          {modal}
        </Provider>
      </body>
    </html>
  );
}
