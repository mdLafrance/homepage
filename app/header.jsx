import { fontKanit } from "@/lib/font"
import Link from "next/link"


/** Compontne HeaderItem provides a button which is part of the navigation bar,
* which can be used to navigate to other site sections.
*/
function HeaderItem({ name, link, selected = false }) {
    return (
        <div className={`
            rounded-2xl px-2 py-1 w-24 bg-red-100 flex justify-center backdrop-blur-md bg-opacity-15
            ${selected ? "drop-shadow-2xl ring-2 ring-white ring-opacity-25" : "drop-shadow-sm text-black backdrop-blur-none"}
        `}>
            <Link href={link} className={`
                text-kanit-medium ${fontKanit.className}
                text-white
                transition-all
                ${selected ? "text-white" : "text-opacity-70"}
            `}>{name}</Link>
        </div>
    )
}

/** Component Header provides an interactive navbar.
*/
export default function Header() {
    return (
        <div className="absolute top-8 flex flex-row justify-center items-center w-screen">
            <ul className="flex justify-center text-l space-x-6">
                <li>
                    <HeaderItem name={"Home"} link={"/"} selected={true} />
                </li>
                <li>
                    <HeaderItem name={"About"} link={"/about"} selected={false} />
                </li>
                <li>
                    <HeaderItem name={"Work"} link={"/work"} />
                </li>
                <li>
                    <HeaderItem name={"Contact"} link={"/contact"} />
                </li>
            </ul>
        </div>
    )
}
