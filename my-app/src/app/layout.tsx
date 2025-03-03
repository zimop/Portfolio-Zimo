import type { Metadata } from "next";
import '@fontsource-variable/catamaran';
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased lg:mx-[50px] md:mx-[40px] mx-[20px]`}
      >
        {children}
      </body>
    </html>
  );
}
