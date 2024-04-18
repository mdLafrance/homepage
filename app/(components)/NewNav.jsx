"use client"

import { useEffect, useState } from "react";
import ControlBar from "./controls/ControlBar"
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavItem({ name, linkTarget, isSelected, onClick }) {
    return (
        <Link href={linkTarget} onClick={onClick} className={`
            font-Kanit font-light text-2xl 
            opacity-85 hover:opacity-100 ${isSelected ? "opacity-100" : "opacity-75"}
            transition-all
            rounded-sm
            w-[95px]
            text-center
            text-space_cadet
            dark:text-light
        `}>
            <span className={` 
                ${isSelected ?
                    "underline decoration-1 underline-offset-[3px] decoration-dotted" :
                    null}
                `}>
                {name}
            </span>
        </Link>
    )
}

export default function NewNav() {
    // Path context
    const pageNames = [
        ["HOME", "/"],
        ["WORK", "/work"],
        ["MORE", "/more"],
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
            z-50
            flex justify-center items-center gap-2 sm:px-3 sm:gap-6
            shadow-sm
            bg-opacity-50 backdrop-blur-lg
            border-b sm:border-0 border-solid border-light/30

            bg-white sm:shadow-space_cadet/15
            dark:bg-black dark:sm:shadow-light/20
        `}>
            {
                pageNames.map(([name, route], idx) => (
                    <NavItem
                        key={idx}
                        name={name}
                        isSelected={currentPageName == name}
                        linkTarget={route}
                        onClick={() => setCurrentPageName(name)}
                    />
                ))
            }
            <div className="hidden sm:block grow-1 w-screen" />
            <ControlBar className="hidden sm:flex" />
        </nav>
    )
}
