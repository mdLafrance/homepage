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
                flex gap-1 items-end pt-1 px-2 justify-start
                hover:ring-1 hover:ring-white/30 hover:bg-white/10
                active:bg-white/20
                transition-all duration-[80ms]
                ${className}
                `}

            href={link}
            rel="noopener noreferrer"
            target="_blank"
        >
            <span className="text-white">{name}</span>
            <div className="grow grow-1 ">
                <div className="border-b border-dotted -translate-y-2 border-white/40">
                </div>
            </div>
            <span style={{ color: formattedColor }} className="">{footerText}</span>
            <LinkSvg color={formattedColor} weight={6} className="w-3 h-3 -translate-y-[2px] self-center" />
        </a>
    )
}

export function ContactSection() {
    return (
        <div>
            <div className="border-b border-solid border-white/20">
                <p className="text-white text-3xl translate-y-1 translate-x-1">Contact</p>
            </div>
            <div className="flex flex-col justify-start gap-1 p-1 ">
                <ContactItem name={'github'} footerText={"github.com/mdLafrance"} link={"https://github.com/mdLafrance"} />
                <ContactItem name={'linkedin'} footerText={"linkedin.com/in/max-lafrance"} link={"https://linkedin.com/in/max-lafrance"} />
                <ContactItem name={'email'} footerText={"maxlafrance97@gmail.com"} link={"mailto: maxlafrance97@gmail.com"} />
            </div>
        </div>
    )
}
