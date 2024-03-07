"use client";
import { cn } from "./cn";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
    children,
    className,
    containerClassName,
    colors,
    waveWidth,
    backgroundFill,
    blur = 1,
    speed = "fast",
    waveOpacity = 0.5,
    ...props
}) => {
    const noise = createNoise3D();
    let w,
        h,
        nt,
        i,
        x,
        ctx,
        canvas,
        mouse
    const canvasRef = useRef(null);
    const getSpeed = () => {
        switch (speed) {
            case "slow":
                return 0.001;
            case "fast":
                return 0.002;
            default:
                return 0.001;
        }
    };

    useEffect(() => {
        const updateMousePosition = (ev) => {
            mouse = { x: ev.clientX, y: ev.clientY }
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);
    mouse = useRef({ x: 0, y: 0 })

    const init = () => {
        canvas = canvasRef.current;
        ctx = canvas.getContext("2d");
        w = ctx.canvas.width = window.innerWidth;
        h = ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
        nt = 0;
        window.onresize = function() {
            w = ctx.canvas.width = window.innerWidth;
            h = ctx.canvas.height = window.innerHeight;
            ctx.filter = `blur(${blur}px)`;
        };
        render();
    };

    let animationId;
    const render = () => {
        ctx.fillStyle = backgroundFill || "white";
        ctx.globalAlpha = waveOpacity || 0.5;
        ctx.fillRect(0, 0, w, h);
        ctx.clearRect(0, 0, w, h)

        ctx.globalAlpha = 0.5;
        ctx.fillStyle = "white"

        const scaleX = 0.0017;
        const scaleY = 0.01;
        const amplitude = 30;
        const stepX = 15;

        // Y offset from which the first wave will be drawn 
        const dy0 = 30;

        // How far apart the waves will be
        const spacing = 11;

        const numWaves = 70;

        const time = Math.round(performance.now()) / 10000;

        const calculateJitter = (x, y) => {
            if (mouse.x === undefined) {
                return 0
            }

            const jitterFactor = 2;
            const dist = Math.sqrt((x - mouse.x) ** 2 + (y - mouse.y) ** 2)
            return jitterFactor * (1 / (1 + 0.01 *dist))
        }

        for (i = 0; i < numWaves; i++) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.globalAlpha = 0.6

            // currentDY is the vertical offset that this wave will begin drawing from
            const currentDY = dy0 + spacing * i;
            ctx.moveTo(-20, currentDY);

            // dyProgress calculates a perrentage of the screen completed, that is used
            // for incrementing transparency
            const dyProgress = 40 + 255 * currentDY / h;
            ctx.strokeStyle = `rgba(${dyProgress}, ${dyProgress}, ${dyProgress})`
            // ctx.strokeStyle = "rgb(50, 80, 255)"

            for (x = 0; x < w + stepX; x += stepX) {

                // Stepy adds an additional differential step downwards, which will cause
                // a downward slope
                const stepY = x * (spacing / w) * 20;

                const yPos = currentDY + stepY;

                var dy = (1 +  calculateJitter(x, yPos)) * noise(x * scaleX, currentDY * scaleY, time) * amplitude;

                ctx.lineTo(x, yPos + dy); // adjust for height, currently at 50% of the container
            }
            ctx.stroke();
            ctx.closePath();
        }


        animationId = requestAnimationFrame(render);
    };

    useEffect(() => {
        init();
        return () => {
            cancelAnimationFrame(animationId);
        };
    }, []);

    const [isSafari, setIsSafari] = useState(false);


    useEffect(() => {
        // I'm sorry but i have got to support it on safari.
        setIsSafari(
            typeof window !== "undefined" &&
            navigator.userAgent.includes("Safari") &&
            !navigator.userAgent.includes("Chrome")
        );
    }, []);

    return (
        <div
            className={cn(
                "fixed h-screen flex flex-col items-center justify-center z-0",
                containerClassName
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

