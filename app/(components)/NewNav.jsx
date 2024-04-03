"use client"

import { useState } from "react";
import { useThemeContext } from "../(context)/ThemeContext";
import ControlBar from "./controls/ControlBar"
import Link from "next/link";

function NavItem({ name, linkTarget, isSelected, onClick }) {
    return (
        <Link href={linkTarget} onClick={onClick} className="
            font-NeueMachina text-2xl 
            opacity-85 hover:opacity-100 
            transition-all
        ">
            {name}
        </Link>
    )
}

export default function NewNav() {
    const [theme, _] = useThemeContext();

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
                />
            ))
        }
            <div className="grow-1 w-screen" />
            <ControlBar />
        </nav>
    )
}
