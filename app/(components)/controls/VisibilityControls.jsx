"use client";

import { useEffect, useState } from 'react'
import { useWaveContext } from '../../(context)/WaveContext';

const eyeOpenSVGPath = (
    <path d="M4 12C4 12 5.6 7 12 7M12 7C18.4 7 20 12 20 12M12 7V4M18 5L16 7.5M6 5L8 7.5M15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13Z" />
)

const eyeClosedSVGPath = (
    <path d="M4 12C4 12 5.6 7 12 7M12 7C18.4 7 20 12 20 12M12 7V4M18 5L16 7.5M6 5L8 7.5M15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13Z M4 22 L20 2" />
)


export default function VisibilityToggle() {
    const [waveSettings, setWaveSettings] = useWaveContext();

    useEffect(() => {
        console.log("Wave visible?", waveSettings.visible)
    }, [waveSettings])

    const toggleVisibility = () => {
        setWaveSettings(
            {
                ...waveSettings,
                visible: !waveSettings.visible
            }
        )
    }

    return (
        <button
            className="w-7 h-7 transition-all duration-70 hover:bg-white/10 active:bg-white/20"
            onClick={toggleVisibility}
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="white"
                className="scale-110"
            >
                {
                    waveSettings.visible ? eyeOpenSVGPath : eyeClosedSVGPath
                }
            </svg>
        </button>
    )
}


