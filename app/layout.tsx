import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/providers/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Appscrip Task - Pritam Ghosh",
  description: "A comprehensive product listing page built using Next.js with Server Side Rendering (SSR). The page features responsive design, dynamic filtering and sorting options, and is optimized for SEO. View and interact with a curated selection of products, leveraging a mock API for data retrieval.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
