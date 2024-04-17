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

function MoreSection({ title, children }) {
    return (
        <motion.div
            className="lg:w-[85rem]"
            variants={moreCardTransitions}>
            <div className="w-full flex justify-start gap-1">
                <h1 className="text-5xl lg:text-8xl">
                    .{title}
                </h1>
                <figure className="
                    grow grow-1
                    border-b border-light/40 border-dotted 
                    -translate-y-3 lg:-translate-y-5 
                "/>
            </div>
            <div className="max-w-[60rem] sm:text-3xl font-light ml-[36px]">
                {children}
            </div>
        </motion.div>
    )

}

export default function More() {
    const [theme, _] = useThemeContext();

    const moreSections = [
        ["PROJECTS", null],
        ["ART", null],
        ["???", null]
    ]

    return (
        <motion.div
            variants={moreCardTransitions}
            initial="hidden"
            animate="show"
            className={`
                w-full sm:mt-4 p-4 sm:p-2
                flex flex-col justify-center items-center gap-[4rem]
                ${theme == "dark" ? "text-light" : "text-space_cadet"}
            `}
        >
            <MoreSection title={"projects"}>
                <p className="text-wrap max-w-[50rem]">
                    I always have one or two coding projects on the go, check out
                    some of my published ones here:
                </p>
            </MoreSection>

            <MoreSection title={"website"}>
                <p>
                    This website was built using React NextJS and Tailwind,
                    running on AWS Amplify with Porkbun as a domain registrar.
                    <br />
                    <br />
                    Source code on my github.
                </p>
            </MoreSection>

            <MoreSection title={"art"}>
                <p>Before I got into software development, </p>
                <p>Some of my life drawaing work is on my artstation here.</p>
                <br />
                <p>In university, I participated in an environemntal art competition</p>
                <p>for Ubisoft where I created a diorama </p>
            </MoreSection>

            <MoreSection title={"self"}>
                <p>
                    asdf
                </p>
            </MoreSection>
        </motion.div>
    )
}
