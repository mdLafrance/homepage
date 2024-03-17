"use client"

import { WaveContextProvider } from "./(context)/WaveContext";
import { ThemeContextProvider } from "./(context)/ThemeContext"

export default function Providers({ children }) {
    return (
        <ThemeContextProvider>
            <WaveContextProvider>
                {children}
            </WaveContextProvider>
        </ThemeContextProvider>
    )
}
