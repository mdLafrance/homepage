import Image from "next/image";
import { useThemeContext } from "../(context)/ThemeContext";

function ExperiencePill({ path, name, link, size = 25, className }) {
    const [theme, _] = useThemeContext();

    return (
        <a
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            className={`
                size-8 flex justify-center items-center rounded-sm p-1 transition-all duration-100
                hover:ring-1
                ${theme == "dark" ? "ring-light/60 hover:bg-light/10" : "ring-space_cadet/80 hover:bg-space_cadet/5"}
            `}
        >
            <Image
                src={path}
                width={size}
                height={size}
                className={className}
            />
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
