"use client"

import Image from "next/image";
import { useThemeContext } from "../(context)/ThemeContext";

function ExperiencePill({ path, name, link, size = 25, showName = false, className }) {
    const [theme, _] = useThemeContext();

    return (
        <a
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            className={`
                h-5 sm:h-8 flex gap-1 justify-center items-center rounded-sm translate-y-0.5 sm:translate-y-0 sm:p-1 transition-all duration-100
                hover:ring-1
                text-center font-Kanit
                ${theme == "dark" ? "ring-light/60 hover:bg-light/10" : "ring-space_cadet/80 hover:bg-space_cadet/5"}
            `}
        >
            <Image
                src={path}
                width={size}
                height={size}
                className={`${showName == true ? "w-4 h-4 sm:w-6 sm:h-6" : null} ${className}`}
                alt={name}
            />
            {
                showName ? <span className="">{name}</span> : null
            }
        </a>
    )

}

export function Python({ size = 25 }) {
    return (
        <ExperiencePill size={size} name="python" link="https://www.python.org" path={"icons/python.svg"} />
    )
}

export function Bash({ size = 25 }) {
    return (
        <ExperiencePill size={size} name="bash" link="https://www.gnu.org/software/bash/" path={"icons/bash.svg"} />
    )
}

export function Qt({ size = 25 }) {
    return (
        <ExperiencePill size={size} name="Qt" link="https://www.qt.io/product/framework" path={"icons/qt.svg"} />
    )
}

export function Maya({ size = 25 }) {
    return (
        <ExperiencePill size={size} name="Maya" link="https://www.autodesk.com/ca-en/products/maya/" path={"icons/maya.svg"} />
    )
}

export function Gitlab({ size = 25 }) {
    return (
        <ExperiencePill size={size} name="Gitlab" link="https://www.mysql.com/" path={"icons/gitlab.svg"} />
    )
}

export function Nuke({ size = 25 }) {
    const [theme, _] = useThemeContext();

    return (
        <ExperiencePill
            size={size}
            name="Nuke"
            link="https://www.foundry.com/products/nuke-family/nuke"
            path={theme == "dark" ? "icons/nuke_dark.svg" : "icons/nuke_light.svg"} className="stroke-blue"
        />
    )
}

export function MySQL({ size = 25 }) {
    const [theme, _] = useThemeContext();

    return (
        <ExperiencePill
            size={size}
            name="mysql"
            link="https://www.python.org"
            path={theme == "dark" ? "icons/mysql_dark.svg" : "icons/mysql_light.svg"}
        />
    )
}

export function React() {
    return (
        <ExperiencePill
            showName={true}
            name={"React"}
            link={"https://react.dev/"}
            path={"icons/react.svg"}
        />
    )
}

export function Tailwind() {
    return (
        <ExperiencePill
            showName={true}
            name={"Tailwind"}
            link={"https://tailwindcss.com/"}
            path={"icons/tailwind.svg"}
        />
    )
}

export function NextJS() {
    const [theme, _] = useThemeContext();

    return (
        <ExperiencePill
            showName={true}
            name={"NextJS"}
            link={"https://nextjs.org/"}
            path={theme == "dark" ? "icons/next_dark.svg" : "icons/next_light.svg"}
        />
    )
}

export function Amplify() {
    return (
        <ExperiencePill
            showName={true}
            name={"AWS"}
            link={"https://aws.amazon.com/amplify/"}
            path={"/images/amplify.png"}
            className="sm:translate-y-0.5"
        />
    )
}
