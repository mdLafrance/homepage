"use client"

import { useEffect, useState } from "react";
import { useThemeContext } from "../(context)/ThemeContext";
import ControlBar from "./controls/ControlBar"
import Link from "next/link";

function NavItem({ name, linkTarget, isSelected, onClick, className }) {
    return (
        <Link href={linkTarget} onClick={onClick} className={`
            font-NeueMachina text-2xl 
            opacity-85 hover:opacity-100 
            transition-all
            ${className}
        `}>
            {name}
        </Link>
    )
}

export default function NewNav() {
    const darkInteractionTheme =  "text-light hover:bg-light/10 active:bg-light/20"
    const lightInteractionTheme = "text-space_cadet hover:bg-space_cadet/10 active:bg-black/20"

    const [theme, _] = useThemeContext();
    const [interactionTheme, setInteractionTheme] = useState("")

    useEffect(() => {
        if (theme == "light") {
            setInteractionTheme(lightInteractionTheme)
        } else {
            setInteractionTheme(darkInteractionTheme)
        }
    }, [theme])

    const pageNames = [
        ["ABOUT", "/"],
        ["WORK", "/work"],
        ["MORE", "/more"],
    ]

    const [currentPageName, setCurrentPageName] = useState(pageNames[0][0])

    return (
        <nav className={`
            sticky top-0 p-4
            z-100
            flex justify-start items-center gap-4
            h-[3rem]
        `}>
        {
            pageNames.map(([name, route], idx) => (
                <NavItem
                    name={name}
                    isSelected={currentPageName === name}
                    linkTarget={route}
                    onClick={() => setCurrentPageName(name)}
                    className={interactionTheme}
                />
            ))
        }
            <div className="grow-1 w-screen" />
            <ControlBar />
        </nav>
    )
}
