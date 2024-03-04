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
    blur = 0,
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
        // drawWave(5);

        const blockSize = 20;

        const time = Math.round(performance.now()) / 8000;

        var imageData = ctx.createImageData(w, h);

        // Manipulate the pixel data in the ImageData object
        for (var i = 0; i < imageData.data.length; i += 4) {
            const sample = noise((0.2* i) % w, (0.2 * i) / h, 0);
            // Set pixel color to red
            imageData.data[i] = 255;    // red
            imageData.data[i + 1] = 50;  // green
            imageData.data[i + 2] = 0;  // blue
            imageData.data[i + 3] = 100 * sample;// alpha
        }

        // Use putImageData() to draw the modified image data onto the canvas
        ctx.putImageData(imageData, 0, 0);

        // for (let i = 0; i < w / blockSize ; i++) {
        //     for (let j = 0; j < h / (2 *blockSize); j++) {
        //         const noiseSample = noise(i,j,time)*0.5 + 0.5;
        //         if (true) {
        //             ctx.fillStyle = `rgb(0 0 0 / ${100 * noiseSample}%`
        //             ctx.fillRect(i * blockSize,h/2 +  j * blockSize, blockSize, blockSize)
        //         }
        //     }
        // }



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

