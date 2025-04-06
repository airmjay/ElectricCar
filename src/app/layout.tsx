import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import "./global.css";
export const metadata: Metadata = {
  title: "EVCHARGING",
  description: `Solutions for EV Charging Stations Our residential, commercial, and fast charging stations are highly compatible, built on open standards, and designed for accessibility for all.
  Help us minimize your carbon footprint, one charge at a time!`,
  icons: {
    icon: '/maxwell.png', 
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-[100%] overflow-x-hidden overflow-y-scroll box-border">
        <MantineProvider theme={{}}>{children}</MantineProvider>
      </body>
    </html>
  );
}
