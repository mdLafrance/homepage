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
        <div className={`${className} grow grow-1 backdrop-blur-sm border border-solid border-white/20`}>
            {children}
        </div>
    )
}


export default function Page() {
    return (
        <div className="h-[100vh] w-full flex justify-start bg-black ">
            <div className="h-full p-16 w-full relative overflow-y-auto">
                <div className={`
                    relative z-10 min-h-full rounded-sm max-w-[85rem] 
                    bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue to-black 
                    grow border border-solid border-white/20 shadow-lg shadow-white/[5%] flex
                `}>
                    <Reveal dy={0} delay={1} duration={1.5}>
                        <WaveShapeModifiers></WaveShapeModifiers>
                    </Reveal>
                    <div className="flex flex-col grow grow-1">
                        <div className="h-2/5 flex">
                            {/** Top left section **/}
                            <Pane className="w-3/5">
                                <p className="text-4xl text-light font-Apercu font-thin border-b border-white/15 ">Hi, my name is</p>
                                <p className="text-8xl font-Apercu text-light -translate-x-1">Max Lafrance</p>
                            </Pane>
                            {/** Top right section **/}
                            <div className="w-2/5 flex flex-col">
                                {/** Contact **/}
                                <Pane className="h-3/5 ">
                                    <p className="text-white text-3xl">Contact</p>
                                    <div className="flex gap-1 items-end">
                                        <span className="text-white">Email</span>
                                        <div className="grow grow-1  border-b border-dotted border-white/40"></div>
                                        <span>???</span>
                                    </div>
                                </Pane>
                                {/** Mini section **/}
                                <div className="h-2/5 flex">
                                    {/** Unknown **/}
                                    <div className="w-2/5 bg-green-200">
                                    </div>
                                    {/** Controls **/}
                                    <div className="w-3/5 bg-blue-200">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Pane className="h-3/5">
                            <p className=" text-white h-full">asdf</p>
                        </Pane>
                    </div>

                </div>
            </div>


            <WavyBackground />

        </div>
    )
}
