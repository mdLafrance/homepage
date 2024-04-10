"use client"

import { motion } from "framer-motion"
import { useThemeContext } from "../(context)/ThemeContext"

const moreCardTransitions = {
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
            <motion.h1 variants={moreCardTransitions} className="text-5xl sm:text-7xl">
                .{title}
            </motion.h1>
            {children}
        </div>
    )

}

function ProjectsSection() {
    return (
        <div>
            <p className="text-2xl font-Kanit font-light pl-7">
                I usually have one or two coding projects on the go.
            </p>
        </div>
    )
}

export default function About() {
    const [theme, _] = useThemeContext();

    const moreSections = [
        ["PROJECTS", <ProjectsSection />],
        ["ART", null],
        ["???", null]
    ]

    return (
        <motion.div
            variants={moreCardTransitions}
            initial="hidden"
            animate="show"
            className={`
                w-full flex flex-col justify-start p-4 sm:p-8 gap-[6rem]
                ${theme == "dark" ? "text-light" : "text-space_cadet"}
            `}
        >
            {
                moreSections.map(([title, children], idx) => (
                    <AboutSection key={idx} title={title}>
                        {children}
                    </AboutSection>
                ))
            }
        </motion.div>
    )
}
