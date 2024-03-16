"use client";

import { useState } from "react";
import { WavyBackground } from "./(components)/BackgroundWaves"
import { WaveSmoothSvg, WaveJaggedSvg, EyeSvg } from "./(components)/controls/ShapeControls";
import { defaultWaveSettings, useWaveContext } from "./(context)/WaveContext";
import { ContactSection } from "./(components)/contact/Contact"
import IntroSection from "./(components)/intro/Intro"
import Sidebar from './(components)/sidebar/Sidebar'

import Footer from "./(components)/Footer"


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

function WaveShapeModifiers() {
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


function Pane({ children, className }) {
    return (
        <div className={`${className} grow grow-1 border-1 border-solid border-white/20 backdrop-blur-sm bg-black/10 p-4`}>
            {children}
        </div>
    )
}


export default function Page() {
    return (
        <div className="h-[100vh] w-full flex justify-start bg-black ">
            <WavyBackground />
            <div className="h-full p-16 w-full relative overflow-y-auto">
                <div className={`
                    relative z-10 min-h-full rounded-sm max-w-[85rem] 
                    bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue to-black 
                    grow border border-solid border-white/20 shadow-lg shadow-white/[5%] flex
                `}>
                    <Footer />
                    <WaveShapeModifiers />
                    <div className="flex grow grow-1">
                        <div className="w-[400px] h-full">
                            <Sidebar />
                        </div>
                        <div className="w-full ">
                            <p className="text-white text-3xl">
                                asdf
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
