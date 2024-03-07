"use client";

import { useState } from "react";
import { WavyBackground } from "./(components)/background-waves"
import { WaveSmoothSvg, WaveJaggedSvg, EyeSvg } from "./(components)/controls/ShapeControls";
import { defaultWaveSettings, useWaveContext } from "./(context)/WaveContext";
import Reveal from "./(components)/Reveal"

function RightAngle({ className, delta = 15 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" className={`${className} scale-[15%] z-20`}>
            <line x1="0" y1="0" x2="100" y2="0" stroke="black" stroke-width="8" />
            <line x1="100" y1="0" x2="100" y2="100" stroke="black" stroke-width="8" />
            <line x1={delta} y1={delta} x2={100 - delta} y2={delta} stroke="black" stroke-width="3" />
            <line x1={100 - delta} y1={delta} x2={100 - delta} y2={100 - delta} stroke="black" stroke-width="3" />
        </svg>
    )
}

function Pane({ children }) {
    return (

        <div className={`relative z-10 min-h-full rounded-sm max-w-[85rem] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue to-black  grow border border-solid border-white/20 shadow-lg shadow-white/[5%] flex`}>
            {children}
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


export default function Test() {
    return (
        <div className="h-[100vh] w-full flex justify-start bg-black ">
            <div className="h-full p-16 w-full relative overflow-y-auto">
                <Pane>
                    <Reveal dy={0} delay={1} duration={1.5}>
                        <WaveShapeModifiers></WaveShapeModifiers>
                    </Reveal>
                    <div className="flex grow ">
                        <div className="w-3/5 grow grow-1 backdrop-blur-sm ">
                            <p className="text-4xl text-light font-Apercu font-thin border-b border-white/15 pt-1 pl-1">Hi, my name is</p>
                            <p className="text-8xl font-Apercu text-light">Max Lafrance</p>
                        </div>
                        <div className="w-2/5 flex flex-col grow grow-1">
                            <div className="h-2/5 border border-solid border-white/20 flex justify-center items-center">
                                <p className="
                                    text-white/70 hover:text-white text-3xl rounded-sm border border-dotted border-white/40 py-2 px-4 bg-white/5 backdrop-blur-sm
                                    transition-all duration-100
                                ">
                                    Contact <span className="hover:text-blue-200">+</span>
                                </p>
                            </div>
                            <div className="h-3/5 bg-blue-200">
                            </div>
                        </div>
                    </div>
                    );

                </Pane>
            </div>


            <WavyBackground />

        </div>
    )
}
