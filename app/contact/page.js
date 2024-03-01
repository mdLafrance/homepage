"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { Boxes } from "../(components)/background-boxes";

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
            transition: { delay: delay, duration: 0.4, ease: "easeOut" } // Use 'tween' type and 'linear' ease
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
            <Boxes />
        </div>
    )
}
