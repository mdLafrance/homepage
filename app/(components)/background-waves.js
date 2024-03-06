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
        canvas
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

    const waveColors = colors ?? [
        "#38bdf8",
        "#818cf8",
        "#c084fc",
        "#e879f9",
        "#22d3ee",
    ];
    const drawWave = (n) => {
        nt += getSpeed();
        for (i = 0; i < n; i++) {
            ctx.beginPath();
            ctx.lineWidth = waveWidth || 50;
            ctx.strokeStyle = waveColors[i % waveColors.length];
            for (x = 0; x < w; x += 5) {
                var y = noise(x / 800, 0.3 * i, nt) * 100;
                ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
            }
            ctx.stroke();
            ctx.closePath();
        }
    };

    let animationId;
    const render = () => {
        ctx.fillStyle = backgroundFill || "white";
        ctx.globalAlpha = waveOpacity || 0.5;
        ctx.fillRect(0, 0, w, h);
        ctx.clearRect(0, 0, w, h)

        ctx.globalAlpha = 0.5;
        ctx.fillStyle = "white"
        ctx.strokeStyle = "rgb(255, 255, 255)"

        // const blockSize = 20;

        // const time = Math.round(performance.now()) / 8000;

        // var imageData = ctx.createImageData(w, h);

        // for (let i = 0; i < w / blockSize; i++) {
        //     for (let j = 0; j < h / blockSize; j++) {
        //     }
        // }

        const lineWidth = 2;
        const lineSpacing = 10;
        const numLines = 20;

        // Manipulate the pixel data in the ImageData object
        // for (var i = 0; i < imageData.data.length; i += 4) {
        //     // const sample = noise((0.2* i) % w, (0.2 * i) / h, 0);
        //     // // Set pixel color to red
        //     imageData.data[i] = 255;    // red
        //     imageData.data[i + 1] = 50;  // green
        //     imageData.data[i + 2] = 0;  // blue
        //     imageData.data[i + 3] = 100;// alpha
        // }

        // Use putImageData() to draw the modified image data onto the canvas
        // ctx.putImageData(imageData, 0, 0);

        // for (let i = 0; i < w / blockSize ; i++) {
        //     for (let j = 0; j < h / (2 *blockSize); j++) {
        //         const noiseSample = noise(i,j,time)*0.5 + 0.5;
        //         if (true) {
        //             ctx.fillStyle = `rgb(0 0 0 / ${100 * noiseSample}%`
        //             ctx.fillRect(i * blockSize,h/2 +  j * blockSize, blockSize, blockSize)
        //         }
        //     }
        // }

        // Quadratic Bézier curve
        //

        // const time = Math.round(performance.now()) / 50;
        // //const time = 0;


        // const k = 10;


        // for (let i = 0; i < 90; i++) {
        //     const offset = (time + (k * i)) % h;

        //     ctx.beginPath();
        //     ctx.moveTo(0, k * i);
        //     ctx.quadraticCurveTo(w / 2, h / 2, w, offset);
        //     ctx.stroke();
        // }
        //

        const scaleX = 0.0017;
        const scaleY = 0.01;
        const amplitude = 30;

        // Y offset from which the first wave will be drawn 
        const dy0 = 30;

        // How far apart the waves will be
        const spacing = 12;

        const numWaves = 70;

        const time = Math.round(performance.now()) / 10000;

        var yTotal = dy0;

        for (i = 0; i < numWaves; i++) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.globalAlpha = 0.4

            const currentDY = dy0 + spacing * i;
            ctx.moveTo(-2, currentDY);

            const dyProgress = 40 +  255 * currentDY / h;

            ctx.strokeStyle = `rgba(${dyProgress}, ${dyProgress}, ${dyProgress})`

            console.log("Style:", ctx.strokeStyle)

            for (x = 0; x < w; x += 5) {
                const stepY = x * (spacing / w) * 20;

                var dy = noise(x * scaleX, currentDY * scaleY, time) * amplitude;

                ctx.lineTo(x - 5, currentDY + dy + stepY); // adjust for height, currently at 50% of the container
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
                "fixed h-screen flex flex-col items-center justify-center pointer-events-none z-0",
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

