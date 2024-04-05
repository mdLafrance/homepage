"use client"

import { useEffect, useState } from "react";
import { useThemeContext } from "../(context)/ThemeContext";
import ControlBar from "./controls/ControlBar"
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

function NavItem({ name, linkTarget, isSelected, onClick, className }) {
    return (
        <Link href={linkTarget} onClick={onClick} className={`
            font-NeueMachina text-2xl 
            opacity-85 hover:opacity-100 
            transition-all
            p-1 rounded-sm
            translate-y-1
            ${className}
        `}>
            <span className={`${isSelected ? "underline decoration-1 underline-offset-[3px] decoration-dotted" : null}`}>{name}</span>
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
        ["ABOUT", "/about"]
    ]

    const [currentPageName, setCurrentPageName] = useState("not_a_page")

    const pathName = usePathname();

    useEffect(() => {
        const pageName = pageNames.find(([_, p]) => {
            return p == pathName
        })[0]

        setCurrentPageName(pageName);

        console.log("Path name is:", pageName)
    }, [pathName])

    return (
        <nav className={`
            sticky top-0 p-4
            z-100
            flex justify-start items-center gap-8
            h-[3rem]
            shadow-sm
            bg-opacity-50 backdrop-blur-lg
            ${theme == "dark" ? "bg-black shadow-light/10" : "bg-white"}
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
            <div className="grow-1 w-screen" />
            <ControlBar />
        </nav>
    )
}
