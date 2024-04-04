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
            p-1 rounded-sm
            ${className}
        `}>
            <span className={`${isSelected ? "underline decoration-1 underline-offset-[3px] decoration-dotted" : null}`}>{name}</span>
        </Link>
    )
}

export default function NewNav() {
    const darkInteractionTheme = "text-light"
    const lightInteractionTheme = "text-space_cadet"

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
            flex justify-start items-center gap-8
            h-[3rem]
            shadow-sm
            bg-opacity-50 backdrop-blur-lg
            ${theme == "dark" ? "bg-black" : "bg-white"}
        `}>
            {
                pageNames.map(([name, route], idx) => (
                    <NavItem
                        key={idx}
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
