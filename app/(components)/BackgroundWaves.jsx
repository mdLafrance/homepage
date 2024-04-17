"use client";

import { cn } from "./cn";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

import { useWaveContext } from "../(context)/WaveContext";

export function WavyBackground({ className, children, ...props }) {
    const [inboundWaveSettings, _] = useWaveContext();
    const [isSafari, setIsSafari] = useState(false);

    var waveSettings = useRef({})

    // Rendering variables
    const noise = createNoise3D();
    const canvasRef = useRef(null);
    let w, h, ctx, canvas, drawCanvas, drawCtx, animationId;

    // Track mouse position
    var mouse = useRef({ x: 0, y: 0 })

    useEffect(
        () => {
            waveSettings.current = inboundWaveSettings;
        },
        [inboundWaveSettings]
    )

    useEffect(() => {
        const updateMousePosition = (ev) => {
            mouse = { x: ev.clientX, y: ev.clientY }
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

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
        // Render canvas
        canvas = canvasRef.current;
        ctx = canvas.getContext("2d");

        // Double buffer canvas
        drawCanvas = document.createElement("canvas");
        drawCtx = drawCanvas.getContext("2d");

        drawCtx.lineWidth = 50;
        drawCtx.globalAlpha = 0.6

        drawCtx.fillStyle = "white"

        w = ctx.canvas.width = window.innerWidth;
        h = ctx.canvas.height = window.innerHeight;

        window.onresize = function() {
            w = ctx.canvas.width = drawCtx.canvas.width = window.innerWidth;
            h = ctx.canvas.height = drawCtx.canvas.height = window.innerHeight;
        };

        window.onresize(); // Call this once to fill the appropriate w/h values

        render();
    }, []);

    const calculateMouseDistance = (x, y) => {
        return Math.sqrt((x - mouse.x) ** 2 + (y - mouse.y) ** 2)
    }

    // CalcaulteJitter calculates some ajdustment factor based on the given distance 
    // to the mouse. This is used to drive wave displacement.
    const calculateJitter = (dist) => {
        if (mouse.x === undefined) {
            return 0
        }

        const jitterFactor = 1.5;
        return (jitterFactor * (1 / (1 + 0.007 * dist))) ** 2
    }


    // Render call
    const render = () => {
        const s = waveSettings.current;

        drawCtx.clearRect(0, 0, w, h)

        // Y offset from which the first wave will be drawn 
        const dy0 = 50;

        // How far apart the waves will be
        const spacing = h * 0.6 / s.numWaves;

        // Incrementing time value to drive z coordinate of noise sample
        const time = Math.round(performance.now()) / 15000;

        // Draw each wave to back buffer
        for (let i = 0; i < s.numWaves; i++) {
            // currentDY is the vertical offset that this wave will begin drawing from
            const currentDY = dy0 + spacing * i;
            drawCtx.moveTo(-20, currentDY);

            drawCtx.beginPath();

            // dyProgress calculates a percentage of the screen completed, that is used
            // for incrementing transparency
            const dyProgress = 0.15 + currentDY / h;

            // NOTE: This is not the best way to calc incrementing opacity, however it 
            // accidentally created a cool style in light mode that I'm keeping.
            drawCtx.strokeStyle = `rgba(${s.r * dyProgress}, ${s.g * dyProgress}, ${s.b * dyProgress})`

            // Walk across the screen drawing wave points
            for (let x = 0; x < w + s.stepX; x += s.stepX) {
                // stepY adds an additional differential step downwards, which will cause
                // a gradual downward slope
                const stepY = x * 0.15;

                const yPos = currentDY + stepY;

                const mouseDistance = calculateMouseDistance(x, yPos);

                var dy = (1 + calculateJitter(mouseDistance)) * 
                    noise(x * s.scaleX, currentDY * s.scaleY, time) * 
                    s.amplitude;

                drawCtx.lineTo(x, yPos + dy);
            }
            drawCtx.stroke();
            drawCtx.closePath();
        }

        // Draw to front buffer
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(drawCanvas, 0, 0);

        animationId = requestAnimationFrame(render);
    };

    return (
        <div
            className={cn(`
                fixed h-screen flex flex-col items-center justify-center z-0 blur-[1px] pointer-events-none
                transition-opacity duration-200
                ${inboundWaveSettings.visible ? "opacity-30" : "opacity-0"}
            `)}
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
