"use client";

import { motion } from "framer-motion";

export default function Reveal({ children, delay, duration, dy }) {
    if (duration === undefined) {
        duration = 0.3;
    }

    if (dy === undefined) {
        dy = 8
    }

    const reveal_states = {
        hidden: {
            opacity: 0,
            y: dy,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {delay: delay, duration: duration,  ease: "easeOut" } // Use 'tween' type and 'linear' ease
        },

    }

    return (
        <motion.div variants={reveal_states} initial="hidden" animate="show" >
            {children}
        </motion.div>
    )
}
