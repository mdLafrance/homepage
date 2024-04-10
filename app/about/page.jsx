"use client"

import { motion } from "framer-motion"

const aboutCardTransitions = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.10
        }
    }
}

export default function About() {
    return (
        <motion.div
            variants={aboutCardTransitions}
            initial="hidden"
            animate="show"
            className="w-full flex flex-col justify-start text-7xl text-light p-8 gap-4"
        >
            <motion.h1 variants={aboutCardTransitions}>
                .ME
            </motion.h1>
            <motion.h1 variants={aboutCardTransitions}>
                .PROJECTS
            </motion.h1>
            <motion.h1 variants={aboutCardTransitions}>
                .ART
            </motion.h1>
        </motion.div>
    )
}
