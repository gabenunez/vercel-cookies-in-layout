import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import Heading from "@/components/heading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme")?.value || "light";

  return (
    <html lang="en" data-theme={theme} style={{ colorScheme: theme }}>
      <head>
        <meta name="theme" content={cookieStore.get("theme")?.value} />
      </head>
      <body className={inter.className}>
        <Heading title={theme} />
        {children}
      </body>
    </html>
  );
}
