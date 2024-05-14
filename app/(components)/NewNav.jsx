"use client"

import { useEffect, useState } from "react";
import ControlBar from "./controls/ControlBar"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll } from "framer-motion";

function NavItem({ name, linkTarget, isSelected, onClick }) {
    return (
        <Link href={linkTarget} onClick={onClick} className={`
            group
            font-Kanit font-light text-2xl 
            transition-all
            rounded-sm
            w-[95px]
            text-center
            text-space_cadet
            dark:text-light
            px-2
            ${isSelected ?
                "ring-1 dark:ring-light/30 dark:bg-black ring-black/30 bg-light shadow-md" : null
            }
        `}>
            <span className="opacity-85 group-hover:opacity-100">
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

    // Listen for scroll
    const [windowScrolled, setWindowScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setWindowScrolled(window.scrollY > 30)
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`
            sticky top-0 sm:p-4 px-4 py-3
            z-50
            flex justify-center items-center gap-2 sm:gap-4
            transition-all duration-200
            border-b border-solid border-green-500/0
            ${windowScrolled ?
                "dark:bg-black bg-light shadow-md border-dark/20 dark:border-light/25" :
                null
            }

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
