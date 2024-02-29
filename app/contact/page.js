"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react";

const dropIn = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        },
    }
};

const squareVariants = {
    hidden: {
        opacity: 0
    },
    show: { opacity: 1 }
};

function TestButton() {
    return (
        <button className="ring-2 ring-blue-300 bg-slate-100 text-3xl px-2 opacity-30">Test</button>
    )
}

function Reveal({ children, delay }) {

    const reveal_states = {
        hidden: {
            opacity: 0,
            y: 10,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {delay: delay, duration: 0.4,  ease: "easeOut" } // Use 'tween' type and 'linear' ease
        },

    }

    return (
        <motion.div variants={reveal_states} initial="hidden" animate="show" >
            {children}
        </motion.div>
    )
}

export default function Contact() {

    return (
        <div>
            <div className="flex flex-col gap-10 overflow-x-hidden">
                <motion.section variants={dropIn} initial="hidden" animate="show" className="grid grid-cols-3 p-10 gap-10">
                    <motion.div variants={squareVariants} className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10" ></motion.div>
                    <motion.div variants={squareVariants} className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10" ></motion.div>
                    <motion.div variants={squareVariants} className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10" ></motion.div>
                    <motion.div variants={squareVariants} className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10" ></motion.div>

                </motion.section>
            </div>

            <Reveal delay={0.2}>
                <TestButton />
            </Reveal>
            <Reveal delay={1}>
                <TestButton />
            </Reveal>
        </div>
    )
}
