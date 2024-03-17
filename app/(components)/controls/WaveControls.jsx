"use client";

import { useState } from "react"

import { defaultWaveSettings, useWaveContext } from "../../(context)/WaveContext"


const WaveSmoothSvg = ({ className }) => {
    return (
        <svg viewBox="0 0 100 100" strokeWidth={4} xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0 25 Q25 0 50 25 T100 25" fill="none" stroke="white" />
            <path d="M0 75 Q25 50 50 75 T100 75" fill="none" stroke="white" />
        </svg>
    )
}

const WaveJaggedSvg = ({ className }) => {
    return (
        <svg viewBox="0 0 75 65" strokeWidth={3} xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0 25 L25 0 L50 25 L75 0" fill="none" stroke="white" />
            <path d="M0 60 L25 35 L50 60 L75 35" fill="none" stroke="white" />
        </svg>
    )
}

const EyeSvg = ({ className }) => {
    return (
        <svg viewBox="0 0 100 100" strokeWidth={3} xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M5 45 L25 30 L50 25 L75 30 L95 45" fill="none" stroke="white" />
            <path d="M25 30 L15 15" fill="none" stroke="white" />
            <path d="M50 25 L50 10" fill="none" stroke="white" />
            <path d="M75 30 L85 15" fill="none" stroke="white" />
            <circle cx="50" cy="40" r="15" stroke="white" strokeWidth="1" fill="none" />

        </svg>

    )
}

export function WaveShapeModifiers() {
    const [selectedButton, setSelectedButton] = useState("smooth")
    const [waveSettings, setWaveSettings] = useWaveContext();

    const buttonStyle = "mx-1 hover:backdrop-blur-sm hover:bg-white/20 grow grow-1 p-1 transition-all duration-200 active:bg-space_cadet"
    const selectedStyle = "ring-1 ring-white/20"

    const changeWaveStyle = (style) => {
        if (style == "jagged") {
            setSelectedButton("jagged")
            setWaveSettings(
                {
                    ...waveSettings,
                    stepX: 40,
                    scaleX: 0.01,
                }
            )
        } else {
            setSelectedButton("smooth")
            setWaveSettings(
                {
                    ...waveSettings,
                    stepX: defaultWaveSettings.stepX,
                    scaleX: defaultWaveSettings.scaleX,
                }
            )
        }
    }

    return (
        <div className="
            absolute w-7 h-13 bottom-20 -left-7
            border-white/20 border-l border-t border-b
            flex flex-col justify-center items-stretch gap-1
        ">
            <button className={`${buttonStyle} ${selectedButton == "smooth" ? selectedStyle : ""} mt-1`} onClick={() => changeWaveStyle("smooth")}>
                <WaveSmoothSvg></WaveSmoothSvg>
            </button>
            <button className={`${buttonStyle} ${selectedButton == "jagged" ? selectedStyle : ""} mb-1`} onClick={() => changeWaveStyle("jagged")}>
                <WaveJaggedSvg></WaveJaggedSvg>
            </button>
        </div>
    )
}



function WaveColorModifier() {
    const [currentColorIdx, setCurrentColorIdx] = useState(0)
    const [waveSettings, setWaveSettings] = useWaveContext();

    const colors = [
        [255, 255, 255],
        [255, 38, 0],
        [247, 134, 5],
        [57, 255, 18],
        [13, 255, 247],
        [13, 49, 255],
        [104, 30, 232],
        [232, 12, 155]
    ]

    const updateColor = (idx) => {
        setCurrentColorIdx(idx);

        setWaveSettings(
            {
                ...waveSettings,
                r: colors[idx][0],
                g: colors[idx][1],
                b: colors[idx][2],
            }
        )
    }

    return (
        <div className="flex flex-col w-5 h-full justify-center">
            {
                colors.map((c, idx) => {
                    return (
                        <button
                            key={idx}
                            style={{ backgroundColor: `rgba(${c[0]}, ${c[1]}, ${c[2]}, 0.3)` }}
                            className={`
                                w-3 h-3
                                flex justify-center items-center 
                                border border-solid border-white/10
                                transform rotate-45
                            `}
                            onMouseUp={() => updateColor(idx)}
                        >
                            {
                                idx == currentColorIdx ? (
                                    <div className="border border-dotted border-white/30 w-3 h-3  ">
                                    </div>
                                ) : null
                            }
                        </button>
                    )
                })
            }

        </div>
    )
}

