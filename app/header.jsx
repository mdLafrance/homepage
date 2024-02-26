"use client";

import { fontKanit } from "@/lib/font"
import Link from "next/link"
import { usePathname } from "next/navigation"


/** Compontne HeaderItem provides a button which is part of the navigation bar,
* which can be used to navigate to other site sections.
*/
function HeaderItem({ name, link, selected = false }) {
    return (
        <Link href={link} className={`
                ${fontKanit.className}
                text-white
                transition-all
                w-[6rem]  flex justify-center bg-opacity-15 items-center h-8
                rounded-md
                ${selected ? "bg-white bg-opacity-20" : "text-opacity-80"}
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

    return (
        <div className="
            fixed top-8 flex flex-row justify-center items-center w-120 h-8 overflow-x-clip rounded-3xl z-10
            backdrop-blur-lg bg-white bg-opacity-5
            drop-shadow-2xl
        ">
            <ul className="flex justify-center">
                <li>
                    <HeaderItem name={"Home"} link={"/"} selected={current_path === ""} />
                </li>
                <li>
                    <HeaderItem name={"About"} link={"/about"} selected={current_path === "about"} />
                </li>
                <li>
                    <HeaderItem name={"Work"} link={"/work"} selected={current_path === "work"} />
                </li>
                <li>
                    <HeaderItem name={"Contact"} link={"/contact"} selected={current_path === "contact"} />
                </li>
            </ul>
        </div>
    )
}
