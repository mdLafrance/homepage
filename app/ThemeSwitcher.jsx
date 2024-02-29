"use client";

import { useTheme } from "next-themes";

import Image from "next/image";

import sunIcon from "../public/icons/sun.svg";
import moonIcon from "../public/icons/moon.svg";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    var icon;

    if (theme == "light") {
        icon = moonIcon;
    } else {
        icon = sunIcon;
    }

    const switchTheme = () => {
        console.log("Switch theme!");
        if (theme == "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return (
        <div className="fixed top-2 right-5 p-4">
            <button className="rounded-md ring-blue-400 ring-2 p-2" onClick={switchTheme}>
                <Image src={icon} width={40} height={"auto"} alt={"Switch theme"} />
            </button>
        </div>
    )
}
