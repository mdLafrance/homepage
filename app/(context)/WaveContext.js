"use client"

import { useContext, useState, createContext } from "react";

export const defaultWaveSettings = {
    scaleX: 0.002,
    scaleY: 0.01,
    amplitude: 30,
    stepX: 15,
    numWaves: 150,
    r: 255,
    g: 255,
    b: 255,
    style: "smooth",
    visible: true
}

const WaveContext = createContext(null);

export function useWaveContext() {
    const context = useContext(WaveContext);

    if (context == null) {
        throw new Error("Wave context used without provider")
    }

    return context;
}

export function WaveContextProvider({ children }) {
    const [waveSettings, setWaveSettings] = useState(defaultWaveSettings)

    return (
        <WaveContext.Provider value={[waveSettings, setWaveSettings]}>
            {children}
        </WaveContext.Provider>
    )
}
