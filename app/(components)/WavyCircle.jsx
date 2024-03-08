"use client";

import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useWaveContext } from "../(context)/WaveContext";


export default function WavyCircle() {
    // Listen for component size
    const ref = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
        if (ref.current) {
            setSize({
                width: ref.current.offsetWidth,
                height: ref.current.offsetHeight
            });
            console.log("Updated size to: ", ref.current.offsetWidth)
        }
    }, []);

    // Listen for wave context upates
    const [waveContext, _] = useWaveContext();

    const waveSettings = useRef({current: {rgb: {x: 0, y: 0, z: 0}}})

    useEffect(() => {
        waveSettings.current = waveContext;
    }, [waveContext])

    // Check for safari
    const [isSafari, setIsSafari] = useState(false);

    useEffect(() => {
        setIsSafari(
            typeof window !== "undefined" &&
            navigator.userAgent.includes("Safari") &&
            !navigator.userAgent.includes("Chrome")
        );
    }, []);

    // Setup canvas
    const canvasRef = useRef(null);

    // useEffect(() => {
    //     canvas = canvasRef.current;
    //     ctx = canvas.getContext("2d");
    //     w = ctx.canvas.width = window.innerWidth;
    //     h = ctx.canvas.height = window.innerHeight;
    //     window.onresize = function() {
    //         w = ctx.canvas.width = window.innerWidth;
    //         h = ctx.canvas.height = window.innerHeight;
    //     };
    //     render();
    // }, []);

    return (
        <div 
            ref={ref} 
            style={{ backgroundColor: `rgba(${waveContext.current.rgb.x}, ${waveContext.current.rgb.y}, ${waveContext.current.rgb.z}, 0.3)` }}>
        </div>
    )

}
