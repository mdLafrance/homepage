"use client";

import { cn } from './cn'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { createNoise3D } from 'simplex-noise';

const numRows = 100;
const numColumns = 100;

const rows = new Array(numRows).fill(1);
const cols = new Array(numColumns).fill(1);
let colors = [
    "--sky-300",
    "--pink-300",
    "--green-300",
    "--yellow-300",
    "--red-300",
    "--purple-300",
    "--blue-300",
    "--indigo-300",
    "--violet-300",
];
const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};

const noise = createNoise3D();

function createArray(x, y) {
    const array = new Array(x);
    for (let i = 0; i < y; i++) {
        array[i] = new Array(y).fill(0); // You can initialize with any default value
    }
    return array;
}

function normalizeNoise(n) {
    return Math.round(100 * (n * 0.5 + 0.5));
}

function createNoiseSample(x, y, t) {
    var arr = createArray(x, y);

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            arr[i][j] = normalizeNoise(noise(i, j, t));
        }
    }

    return arr
}

export default function NoisyPixels() {

    const [opacityMap, setOpacityMap] = useState(createArray(numRows, numColumns))

    useEffect(() => {
        setOpacityMap(createNoiseSample(numRows, numColumns, 0));
    }, [])


    return (
        <div className='fixed w-screen h-screen'>
            <div
                className={cn(
                    "flex w-full h-full z-0  "
                )}
            >
                {rows.map((_, i) => (
                    <motion.div
                        key={`row` + i}
                        className="w-[1vw] h-[1vw] relative"
                    >
                        {cols.map((_, j) => (
                            <motion.div
                                key={`col` + j}
                                className={`w-[1vw] h-[1vw] bg-red-300 opacity-[${opacityMap[i][j]}%] relative z-0`}
                            >
                            </motion.div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
