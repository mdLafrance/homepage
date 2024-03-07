"use client"

import { ThemeProvider } from "next-themes";

import { WaveContextProvider } from "./(context)/WaveContext";

export default function Providers({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system">
            <WaveContextProvider>
                {children}
            </WaveContextProvider>
        </ThemeProvider>
    )
}
