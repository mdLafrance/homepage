"use client"

import { useTheme } from "next-themes"

export default function BackgroundFill() {
    const { theme, setTheme } = useTheme()

    console.log("Theme is:", theme)

    return (
        <div className={`
            fixed w-screen h-screen top-0 left-0
            ${theme === "light" ? "bg-white" : "bg-black"}
        `}>
        <p className="text-white text-9xl">Theme is : {theme}</p>
        </div>
    )
}
