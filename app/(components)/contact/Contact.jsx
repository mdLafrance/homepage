"use client";

import { useEffect, useState } from "react";
import { useWaveContext } from "../../(context)/WaveContext"
import LinkSvg from "../controls/Link"


export function ContactItem({ name, footerText, link, className }) {
    const [waveSettings, _] = useWaveContext();
    const [formattedColor, setFormattedColor] = useState("rgb(255, 255, 255)");

    useEffect(() => {
        const lerpColor = (c) => {
            const factor = 0.6;
            return factor * 255 + (1 - factor) * c
        }

        setFormattedColor(`rgba(${lerpColor(waveSettings.r)}, ${lerpColor(waveSettings.g)}, ${lerpColor(waveSettings.b)}, 0.8)`)
    }, [waveSettings])

    return (
        <a
            className={`
                flex gap-1 items-end pt-1 justify-start
                px-2
                opacity-95 hover:opacity-100
                hover:ring-1 hover:ring-white/30 hover:bg-white/10
                active:bg-white/20
                transition-all duration-[100ms]
                ${className}
            `}

            href={link}
            rel="noopener noreferrer"
            target="_blank"
        >
            <span style={{ color: formattedColor }} className="">{footerText}</span>
            <figure className="grow grow-1 border-b border-dotted -translate-y-2 border-white/40" />
            <LinkSvg color={formattedColor} weight={6} className="w-3 h-3 -translate-y-[2px] self-center" />
        </a>
    )
}

export function ContactSection() {
    return (
        <section className="opacity-85 hover:opacity-100 transition-opacity duration-[400ms] p-4">
            <div className="flex flex-row w-full gap-2 px-2">
                <h2 className="text-white text-2xl ">Contact</h2>
                <figure className="grow grow-1 -translate-y-2.5  border-b border-white/30 border-solid" />
            </div>
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
