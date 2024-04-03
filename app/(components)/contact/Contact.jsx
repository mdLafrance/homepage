"use client";

import { useEffect, useState } from "react";
import { useWaveContext } from "../../(context)/WaveContext"
import LinkSvg from "../controls/Link"
import { useThemeContext } from "../../(context)/ThemeContext";


export function ContactItem({ name, footerText, link, className }) {
    const [theme, _] = useThemeContext();

    const darkTheme = "hover:ring-white/30 hover:bg-white/10 active:bg-white/20 text-light"
    const lightTheme = "hover:ring-space_cadet/30 hover:bg-space_cadet/5 active:bg-space_cadet/10 text-space_cadet"

    return (
        <a
            className={`
                flex gap-1 items-end pt-1 justify-start
                px-2
                opacity-95 hover:opacity-100
                hover:ring-1 
                transition-all duration-[100ms]
                ${className}
                ${theme == "dark" ? darkTheme : lightTheme}
            `}

            href={link}
            rel="noopener noreferrer"
            target="_blank"
        >
            <span>{name}</span>
            <figure className={`grow grow-1 border-b border-dotted -translate-y-2 ${theme == "dark" ? "border-white/40" : "border-space_cadet/40"}`} />
            <span style={{ }} className="">{footerText}</span>
            <LinkSvg  weight={6} className="w-3 h-3 -translate-y-[1px] self-center" />
        </a>
    )
}

export function ContactSection({className}) {
    return (
        <section className={`
            opacity-85 hover:opacity-100 transition-opacity duration-[400ms]
            ${className}
        `}>
            <address>
                <ul className="flex flex-col justify-start  gap-1 not-italic">
                    <li>
                        <ContactItem name={'email'} footerText={"maxlafrance97@gmail.com"} link={"mailto: maxlafrance97@gmail.com"} />
                    </li>
                    <li>
                        <ContactItem name={'linkedin'} footerText={"linkedin.com/in/max-lafrance"} link={"https://linkedin.com/in/max-lafrance"} />
                    </li>
                    <li>
                        <ContactItem name={'github'} footerText={"github.com/mdLafrance"} link={"https://github.com/mdLafrance"} />
                    </li>
                </ul>
            </address>
        </section>
    )
}
