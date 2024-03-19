"use client"

import VisibilityToggle from "./VisibilityControls"
import { WaveJaggedButton, WaveSmoothButton } from "./WaveControls"
import ThemeSwitcher from "./ThemeControl"
import { useThemeContext } from "../../(context)/ThemeContext"
import { useEffect, useState } from "react"


function ControlBarItem({ children }) {

    const darkInteractionTheme =  "stroke-white hover:bg-light/10 active:bg-light/20"
    const lightInteractionTheme = "stroke-black hover:bg-black/10 active:bg-black/20"

    const [theme, _] = useThemeContext();
    const [interactionTheme, setInteractionTheme] = useState("")

    useEffect(() => {
        if (theme == "light") {
            setInteractionTheme(lightInteractionTheme)
        } else {
            setInteractionTheme(darkInteractionTheme)
        }
    }, [theme])

    return (
        <li className={`
            h-7 w-7 rounded-sm
            transition-all duration-[80ms]
            ${interactionTheme}
        `}>
            {children}
        </li>
    )
}

export default function ControlBar() {
    return (
        <ul className="fixed top-2 right-2 h-7 flex gap-2 justify-end align-center">
            <ControlBarItem>
                <WaveSmoothButton />
            </ControlBarItem>
            <ControlBarItem>
                <WaveJaggedButton />
            </ControlBarItem>
            <ControlBarItem>
                <VisibilityToggle />
            </ControlBarItem>
            <ControlBarItem>
                <ThemeSwitcher />
            </ControlBarItem>
        </ul>
    )
}
