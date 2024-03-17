"use client"

import { useState } from "react"
import { ContactSection } from "./contact/Contact"
import Link from "next/link"

function PageSelectionItem({ name, linkTarget, isSelected, onClick }) {

    const selectedStyle = "bg-light/75 text-dark opacity-100 "
    const unselectedStyle = "text-light/90 hover:bg-light/15 "

    return (
        <Link href={linkTarget} onClick={onClick} className={`
            px-4 pt-2 pb-1
            flex w-full gap-2
            opacity-80 hover:opacity-100 transition-all duration-200
            border-solid border-b border-light/15
            ${isSelected ? selectedStyle : unselectedStyle}
        `}>
            <span className={`
                text-3xl py-1 underline underline-offset-[5px] translate-y-0
                decoration-1 ${isSelected ? "decoration-black/50" : "decoration-black/0"}
            `}>
                {name}
            </span>
        </Link>
    )
}

export default function Sidebar() {
    const pageNames = [
        ["About", "/"],
        ["Work", "/work"],
        ["More", "/more"],
    ]

    const [currentPageName, setCurrentPageName] = useState(pageNames[0][0])

    return (
        <aside className={`
            fixed top-0 left-0
            flex flex-col h-full w-[350px] justify-start bg-black/20 backdrop-blur-sm
            border-r border-solid border-white/10
        `}>
            <nav className="flex flex-col">
                <ul>
                    {
                        pageNames.map(([name, route], idx) => (
                            <li key={idx}>
                                <PageSelectionItem
                                    name={name}
                                    isSelected={currentPageName == name}
                                    linkTarget={route}
                                    onClick={() => setCurrentPageName(name)}
                                />
                            </li>
                        ))
                    }
                </ul>
            </nav>

            {/** Spacer **/}
            <div className="grow grow-1" />

            <ContactSection />
        </aside>
    )
}
