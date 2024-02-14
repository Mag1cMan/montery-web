"use client";

import React from "react";
import {ThemeProvider } from "@material-tailwind/react";
import NextTopLoader from 'nextjs-toploader';
import Provider from "@/stores/NextAuthProvider";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AuthProvider from "@/stores/auth";
import { SessionProvider } from "next-auth/react";
// Set the main layout here to set each of ther user accordingly
export function Layout({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>
            <NextTopLoader showSpinner={false} color="#5165AE" />
                <SessionProvider >
                    <Navbar/>
                        {children}
                    <Footer/>
                </SessionProvider>
        </ThemeProvider>;
}

export default Layout;
