"use client";
import { cn } from "./cn";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

import { useWaveContext } from "../(context)/WaveContext";

export function WavyBackground({ className, children, ...props }) {
    const [waveSettings, _] = useWaveContext();

    let w, h, ctx, canvas, animationId;

    const noise = createNoise3D();
    const canvasRef = useRef(null);
    const blur = 1;

    // Track mouse position
    var mouse = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const updateMousePosition = (ev) => {
            mouse = { x: ev.clientX, y: ev.clientY }
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    const [isSafari, setIsSafari] = useState(false);

    // Check for safari
    useEffect(() => {
        setIsSafari(
            typeof window !== "undefined" &&
            navigator.userAgent.includes("Safari") &&
            !navigator.userAgent.includes("Chrome")
        );
    }, []);

    // Setup canvas
    useEffect(() => {
        canvas = canvasRef.current;
        ctx = canvas.getContext("2d");
        w = ctx.canvas.width = window.innerWidth;
        h = ctx.canvas.height = window.innerHeight;
        window.onresize = function() {
            w = ctx.canvas.width = window.innerWidth;
            h = ctx.canvas.height = window.innerHeight;
        };
        render();
    }, []);

    // Render call
    const render = () => {
        ctx.globalAlpha = 0.5;
        ctx.fillRect(0, 0, w, h);
        ctx.clearRect(0, 0, w, h)

        ctx.globalAlpha = 0.5;
        ctx.fillStyle = "white"

        // Y offset from which the first wave will be drawn 
        const dy0 = 30;

        // How far apart the waves will be
        const spacing = 11;

        const time = Math.round(performance.now()) / 10000;

        const calculateJitter = (x, y) => {
            if (mouse.x === undefined) {
                return 0
            }

            const jitterFactor = 2;
            const dist = Math.sqrt((x - mouse.x) ** 2 + (y - mouse.y) ** 2)
            return jitterFactor * (1 / (1 + 0.03 * dist))
        }

        for (let i = 0; i < waveSettings.numWaves; i++) {
            ctx.beginPath();
            ctx.lineWidth = 2.5;
            ctx.globalAlpha = 0.6

            // currentDY is the vertical offset that this wave will begin drawing from
            const currentDY = dy0 + spacing * i;
            ctx.moveTo(-20, currentDY);

            // dyProgress calculates a perrentage of the screen completed, that is used
            // for incrementing transparency
            const dyProgress = 40 + 255 * currentDY / h;
            ctx.strokeStyle = `rgba(${dyProgress}, ${dyProgress}, ${dyProgress})`
            // ctx.strokeStyle = "rgb(50, 80, 255)"

            for (let x = 0; x < w + waveSettings.stepX; x += waveSettings.stepX) {

                // Stepy adds an additional differential step downwards, which will cause
                // a downward slope
                const stepY = x * (spacing / w) * 20;

                const yPos = currentDY + stepY;

                var dy = (1 + calculateJitter(x, yPos)) * noise(x * waveSettings.scaleX, currentDY * waveSettings.scaleY, time) * waveSettings.amplitude;

                ctx.lineTo(x, yPos + dy); // adjust for height, currently at 50% of the container
            }
            ctx.stroke();
            ctx.closePath();
        }

        animationId = requestAnimationFrame(render);
    };

    return (
        <div
            className={cn(
                "fixed h-screen flex flex-col items-center justify-center z-0 blur-[1px]",
            )}
        >
            <canvas
                className="absolute inset-0 z-0"
                ref={canvasRef}
                id="canvas"
                style={{
                    ...(isSafari ? { filter: `` } : {}),
                }}
            ></canvas>
            <div className={cn("relative z-10", className)} {...props}>
                {children}
            </div>
        </div>
    );
};
