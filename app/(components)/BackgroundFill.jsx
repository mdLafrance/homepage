"use client"

import { useThemeContext } from "../(context)/ThemeContext"

export default function BackgroundFill() {

    const [theme, _] = useThemeContext();

    return (
        <div className={`
            fixed w-screen h-screen top-0 left-0
            ${theme === "light" ? "bg-white" : "bg-black"}
        `}>
        </div>
    )
}
