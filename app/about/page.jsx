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

function AboutSection({ title, children }) {
    return (
        <div>
            <motion.h1 variants={aboutCardTransitions} className="text-5xl sm:text-7xl text-light ">
                .{title}
            </motion.h1>
            {children}
        </div>
    )

}

export default function About() {
    const aboutSections = [
        ["ME", null],
        ["PROJECTS", null],
        ["ART", null],
    ]

    return (
        <motion.div
            variants={aboutCardTransitions}
            initial="hidden"
            animate="show"
            className="w-full flex flex-col justify-start p-4 sm:p-8 gap-4"
        >
            {
                aboutSections.map(([title, children], idx) => (
                    <AboutSection key={idx} title={title}>
                        {children}
                    </AboutSection>
                ))
            }
        </motion.div>
    )
}
