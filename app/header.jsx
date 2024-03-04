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
                bg-opacity-15
                flex
                h-8 w-[5rem] sm:w-[6rem]
                items-center  justify-center rounded-sm font-Kanit font-semibold transition-all
                duration-300
                ${selected ?
                "bg-ultra_violet/70 text-white" :
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

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    })

    return (
        <div className="fixed top-6 sm:top-8 flex w-screen justify-center">
            <div className={`
                sm:w-120 w-[50wv] z-40 h-8 overflow-x-clip rounded-md
                shadow-sm shadow-black/20
                ring-1
                ring-ultra_violet/10 backdrop-blur-3xl
                transition-all duration-300
                hover:shadow-md hover:shadow-black/30
                ${scrolled ?
                    "dark:bg-light_coral shadow-lg ring-ultra_violet/80 backdrop-blur-lg" :
                    "z-1000 bg-white/50 dark:bg-light_coral"
                }
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
