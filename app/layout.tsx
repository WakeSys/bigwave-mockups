import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "wakesys Vertical Demos | Booking System Mockups",
  description: "Explore wakesys booking system integrations across different verticals - aqua parks, trampoline parks, ropes courses, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
