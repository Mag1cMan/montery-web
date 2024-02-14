import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Layout from "@/components/layout";


const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700", "900"], display: "swap",});
export const metadata: Metadata = { title: "Monterya", description: "MMORPG P2E", };

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode; }>) {
  return (

    <html lang="en" >
        <body className={roboto.className}>
          <Layout>
                {children}
          </Layout>
        </body>
    </html>
  );
}



