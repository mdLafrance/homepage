"use client"

import { motion } from "framer-motion"
import { useThemeContext } from "../(context)/ThemeContext"
import { useEffect, useState } from "react"

import axios from "axios"
import Image from "next/image"

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

function GitProject({ name, language, link }) {
    const [theme, _] = useThemeContext();

    return (
        <a
            className="flex items-center gap-2"
            href={link}
            rel="noopener noreferrer"
            target="_blank"
        >
            <Image
                width={30}
                height={30}
                src={`icons/${language.toLowerCase()}.svg`}
                alt={language}
            />
            <span className={`
                ${theme == "dark" ? "text-light" : "text-space_cadet"}
            `}
            >
                {name}
            </span>
        </a>
    )
}

function CodeComment({ message }) {
    return (
        <p className="opacity-65">
        // {message}
        </p>
    )
}

function MoreSection({ title, children }) {
    return (
        <motion.div
            className="lg:w-[80rem] flex"
            variants={moreCardTransitions}
        >
            <figure className="text-5xl lg:text-8xl">.</figure>
            <div className="block w-full">
                <div className="w-full flex justify-start gap-1">
                    <h1 className="text-5xl lg:text-8xl">
                        {title}
                    </h1>
                    <figure className="
                    grow grow-1
                    border-b border-light/40 border-dotted 
                    -translate-y-3 lg:-translate-y-5 
                "/>
                </div>
                <div className="sm:text-3xl font-light pt-1 sm:ml-1">
                    {children}
                </div>
            </div>
        </motion.div>
    )
}

export default function More() {
    const [theme, _] = useThemeContext();

    const [gitProjects, setGitProjects] = useState(["a"]);

    const moreSections = [
        ["PROJECTS", null],
        ["ART", null],
        ["???", null]
    ]

    useEffect(() => {
        axios.get("https://api.github.com/users/mdlafrance/repos")
            .then(res => {
                console.log("Setting projects:", res.data)
                setGitProjects(res.data)
            })
            .catch(e => {
                console.log("Error fetching git repos:")
                console.log(e)
            })
    }, [])

    return (
        <motion.div
            variants={moreCardTransitions}
            initial="hidden"
            animate="show"
            className={`
                w-full sm:my-12 p-4 sm:p-2
                flex flex-col justify-center items-center gap-8 sm:gap-[6rem]
                ${theme == "dark" ? "text-light" : "text-space_cadet"}
            `}
        >
            <MoreSection title={"projects"}>
                <p>
                    I always have one or two coding projects on the go, check out
                    some of my finished ones here:
                </p>

                {
                    gitProjects
                        .filter(x => x.language != undefined)
                        .sort((a, b) => a.language > b.language ? 1 : -1)
                        .map((x, idx) => (
                            <GitProject key={idx} name={x.name} language={x.language} link={x.html_url} />
                        ))
                }
                <br />
                <CodeComment
                    message={"Currently, I'm reworking an old C++ raycaster I wrote in university."}
                />
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
                <p>
                    Some of my life drawing work is on my artstation
                    <a
                        href={""}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="underline text-blue-500 ml-2"
                    >
                        here
                    </a>
                    .

                </p>
                <br />
                <p>
                    In university, I participated in an environment modelling competition
                    for Ubisoft where I created a diorama from a short story prompt
                    using Maya and Substance Painter. You can watch a flythrough of the
                    scene
                    <a
                        href={"https://www.youtube.com/watch?v=9I4dntZ5OhE"}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="underline text-blue-500 ml-2"
                    >
                        here
                    </a>
                    .
                    <br />
                </p>
                <CodeComment message={"FIXME: Texel density is really uneven"} />
            </MoreSection>
        </motion.div>
    )
}
