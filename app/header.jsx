"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";

import { useMotionValueEvent, useScroll } from "framer-motion";


/** Compontne HeaderItem provides a button which is part of the navigation bar,
* which can be used to navigate to other site sections.
*/
function HeaderItem({ name, link, selected = false }) {
    return (
        <Link href={link} className={`
                font-Kanit
                font-semibold
                transition-all duration-300
                w-[6rem]  flex justify-center bg-opacity-15 items-center h-8
                rounded-3xl
                ${selected ?
                "text-white bg-ultra_violet/70" :
                "text-ultra_violet"
            }
            `}>
            {name}
        </Link>
    )
}

/** Component Header provides an interactive navbar.
*/
export default function Header() {
    // NOTE: This is not a flexible way to get the current path.
    // However, since this website will only ever have 4 static
    // pages, this simple solution just works.
    const current_path = usePathname().slice(1);

    const [scrolled, setScrolled] = useState(false);

    const {scrollY} = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Scroll!!!");
        setScrolled(latest > 0);
    })
    
    return (
        <div className="w-screen fixed top-8 flex justify-center">
            <div className={`
            w-120 h-8 overflow-x-clip rounded-3xl z-40
            backdrop-blur-3xl
            shadow-black/20 shadow-sm
            hover:shadow-md hover:shadow-black/30
            transition-all duration-300
            ring-1 ring-ultra_violet/10
            ${scrolled ? "bg-white/80 ring-ultra_violet/40 shadow-lg backdrop-blur-lg" : "bg-white/50 z-1000"}
        `}>
                <ul className="flex justify-center">
                    <li>
                        <HeaderItem name={"Home"} link={"/"} selected={current_path === ""} />
                    </li>
                    <li>
                        <HeaderItem name={"Work"} link={"/work"} selected={current_path === "work"} />
                    </li>
                    <li>
                        <HeaderItem name={"About"} link={"/about"} selected={current_path === "about"} />
                    </li>
                    <li>
                        <HeaderItem name={"Contact"} link={"/contact"} selected={current_path === "contact"} />
                    </li>
                </ul>
            </div>
        </div>
    )
}
