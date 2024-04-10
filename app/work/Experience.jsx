import Image from "next/image";
import { useThemeContext } from "../(context)/ThemeContext";

function ExperiencePill({ path, name, link, size = 25, className }) {
    return (
        <a
            href={link}
            rel="noopener noreferrer"
            target="_blank"
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

export function Python() {
    return (
        <ExperiencePill name="python" link="https://www.python.org" path={"icons/python.svg"} />
    )
}

export function Bash() {
    return (
        <ExperiencePill name="bash" link="https://www.gnu.org/software/bash/" path={"icons/bash.svg"} />
    )
}

export function Qt() {
    return (
        <ExperiencePill name="Qt" link="https://www.qt.io/product/framework" path={"icons/qt.svg"} />
    )
}

export function Maya() {
    return (
        <ExperiencePill name="Maya" link="https://www.autodesk.com/ca-en/products/maya/" path={"icons/maya.svg"} />
    )
}

export function Gitlab() {
    return (
        <ExperiencePill name="Gitlab" link="https://www.mysql.com/" path={"icons/gitlab.svg"} />
    )
}

export function Nuke() {
    const [theme, _] = useThemeContext();

    return (
        <ExperiencePill 
            name="Nuke" 
            link="https://www.foundry.com/products/nuke-family/nuke" 
            path={theme == "dark" ? "icons/nuke_dark.svg" : "icons/nuke_light.svg"} className="stroke-blue" 
        />
    )
}

export function MySQL() {
    return (
        <ExperiencePill name="mysql" link="https://www.python.org" path={"icons/mysql.svg"} />
    )
}
