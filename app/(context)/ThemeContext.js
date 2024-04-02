"use client"

import { useContext, useState, createContext } from "react";

const ThemeContext = createContext(null);

export function useThemeContext() {
    const context = useContext(ThemeContext);

    if (context == null) {
        throw new Error("Theme context used without provider")
    }

    return context;
}

export function ThemeContextProvider({ children }) {
    const [themeSettings, setThemeSettings] = useState("light")

    return (
        <ThemeContext.Provider value={[themeSettings, setThemeSettings]}>
            {children}
        </ThemeContext.Provider>
    )
}
