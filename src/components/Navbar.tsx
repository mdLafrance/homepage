import useScrolledStore from "@/lib/scrollState";
import { css } from "@emotion/css"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export function Navbar() {
    const location = useLocation();
    const [currentSection, setCurrentSection] = useState("about");

    useEffect(() => {
        setCurrentSection(location.hash.slice(1))
    }, [location.hash])

    const sections = [
        "about",
        "work",
        "projects",
    ]

    const style = css`
        ul {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-sm);
        }
    `

    return (
        <nav>
            <ul className={style}>
                {sections.map((section, _) => (
                    <NavbarItem
                        name={section}
                        key={`navbar-item-${section}`}
                        active={section === currentSection}
                    />
                ))}
            </ul>
        </nav>
    )
}

export function NavbarItem({ name, active }: { name: string, active?: boolean }) {
    const handleClick = () => {
        console.log("Scrolling to", `section-${name.toLowerCase()}`)
        document.getElementById(`section-${name.toLowerCase()}`)?.scrollIntoView()
    }

    const leftArrowElement = `
        &::before {
            content: ">";
            font-weight: bold;
            position: absolute;
            left: -10px;
            top: 50%;
            transform: translate(0, -50%);
            color: var(--primary);
        }
    `

    const style = css`
        position: relative;

        cursor: pointer;

        font-size: var(--font-md);
        font-weight: bold;
        text-transform: capitalize;

        &:not(:hover) {
            ${!active && "opacity: 0.5;"}
        }

        ${active ? leftArrowElement : null}

        &:hover {
            &::after {
                content: "<";
                position: absolute;
                right: -10px;
                top: 50%;
                transform: translate(0, -50%);
                font-weight: bold;

                ${active && "color: var(--primary);"}
            }
        }
    `
    return (
        <li>
            <button className={style} onClick={handleClick}>
                {name}
            </button>
        </li>
    )
}
