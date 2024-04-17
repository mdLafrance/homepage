"use client"

import { useEffect, useState } from "react";
import { useThemeContext } from "../(context)/ThemeContext";
import ControlBar from "./controls/ControlBar"
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavItem({ name, linkTarget, isSelected, onClick, className }) {
    return (
        <Link href={linkTarget} onClick={onClick} className={`
            font-Kanit text-2xl 
            opacity-85 hover:opacity-100 
            transition-all
            rounded-sm
            w-[95px]
            text-center
            ${className}
        `}>
            <span className={` ${isSelected ? "underline decoration-1 underline-offset-[3px] decoration-dotted" : null}`}>{name}</span>
        </Link>
    )
}

export default function NewNav() {
    // Theme context
    const [theme, _] = useThemeContext();
    const [interactionTheme, setInteractionTheme] = useState("")

    const darkInteractionTheme = "text-light"
    const lightInteractionTheme = "text-space_cadet"

    useEffect(() => {
        if (theme == "light") {
            setInteractionTheme(lightInteractionTheme)
        } else {
            setInteractionTheme(darkInteractionTheme)
        }
    }, [theme])

    // Path context
    const pageNames = [
        ["HOME", "/"],
        ["WORK", "/work"],
    ]

    const [currentPageName, setCurrentPageName] = useState("not_a_page")

    const pathName = usePathname();

    useEffect(() => {
        const pageName = pageNames.find(([_, p]) => {
            return p == pathName
        })[0]

        setCurrentPageName(pageName);
    }, [pathName])

    return (
        <nav className={`
            sticky top-0 p-2
            z-100
            flex justify-center items-center gap-2 sm:px-3 sm:gap-4
            shadow-sm
            bg-opacity-50 backdrop-blur-lg
            border-b sm:border-0 border-solid border-light/30
            ${theme == "dark" ? "bg-black sm:shadow-light/20" : "bg-white sm:shadow-space_cadet/15"}
        `}>
            {
                pageNames.map(([name, route], idx) => (
                    <NavItem
                        key={idx}
                        name={name}
                        isSelected={currentPageName == name}
                        linkTarget={route}
                        onClick={() => setCurrentPageName(name)}
                        className={interactionTheme}
                    />
                ))
            }
            <div className="hidden sm:block grow-1 w-screen" />
            <ControlBar className="hidden sm:flex" />
        </nav>
    )
}
