"use client";

import { useEffect, useState } from "react"

import { defaultWaveSettings, useWaveContext } from "../../(context)/WaveContext"
import { useThemeContext } from "../../(context)/ThemeContext";


export const WaveSmoothSvg = ({ className }) => {
    return (
        <svg viewBox="0 0 100 100" strokeWidth={5} xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0 25 Q25 0 50 25 T100 25" fill="none" />
            <path d="M0 75 Q25 50 50 75 T100 75" fill="none" />
        </svg>
    )
}

export const WaveJaggedSvg = ({ className }) => {
    return (
        <svg viewBox="0 0 75 65" strokeWidth={4} xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0 25 L25 0 L50 25 L75 0" fill="none" />
            <path d="M0 60 L25 35 L50 60 L75 35" fill="none" />
        </svg>
    )
}


function WaveShapeBase({ ShapeSvg, setTo }) {
    const [waveSettings, setWaveSettings] = useWaveContext();
    const [theme, _] = useThemeContext();

    const changeWaveStyle = (style) => {
        if (style == "jagged") {
            setWaveSettings(
                {
                    ...waveSettings,
                    style: "jagged",
                    stepX: 40,
                    scaleX: 0.01,
                }
            )
        } else {
            setWaveSettings(
                {
                    ...waveSettings,
                    style: "smooth",
                    stepX: defaultWaveSettings.stepX,
                    scaleX: defaultWaveSettings.scaleX,
                }
            )
        }
    }

    const computeRingColor = () => {
        if (waveSettings.style != setTo) {
            return ""
        } else {
            if (theme == "light") {
                return "ring-1 ring-black/30"
            } else {
                return "ring-1 ring-white/20"
            }
        }
    }

    return (
        <button
            className={computeRingColor()}
            onClick={() => changeWaveStyle(setTo)}
        >
            <ShapeSvg className={`${theme == "light" ? "stroke-black" : "stroke-light"} w-7 h-7 p-1`} />
        </button>
    )
}

export function WaveSmoothButton() {
    return (
        <WaveShapeBase ShapeSvg={WaveSmoothSvg} setTo={"smooth"} />
    )
}

export function WaveJaggedButton() {
    return (
        <WaveShapeBase ShapeSvg={WaveJaggedSvg} setTo={"jagged"} />
    )
}
