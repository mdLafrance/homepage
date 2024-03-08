import { useEffect, useState } from "react";
import { useWaveContext } from "../../(context)/WaveContext"
import LinkSvg from "../controls/Link"
import LinkSVG from "../controls/Link"

function ContactItem({ name, footerText }) {
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
        <button className="flex gap-1 items-end">
            <span className="text-white">{name}</span>
            <div className="grow grow-1 ">
                <div className="border-b border-dotted -translate-y-2 border-white/40">
                </div>
            </div>
            <span style={{ color: formattedColor }} className="">{footerText}</span>
            <LinkSvg color={formattedColor} weight={6} className="w-3 h-3 -translate-y-[0.5px] self-center" />
        </button>
    )
}

export function ContactSection() {
    return (
        <div>
            <div className="border-b border-solid border-white/20">
                <p className="text-white text-3xl translate-y-1 translate-x-1">Contact</p>
            </div>
            <div className="flex flex-col justify-start gap-1 m-1">
                <ContactItem name={'Email'} footerText={"maxlafrance97@gmail.com"} />
                <ContactItem name={'Linkedin'} footerText={"linkedin.com/in/max-lafrance"} />
                <ContactItem name={'Github'} footerText={"github.com/mdLafrance"} />
            </div>
        </div>
    )
}
