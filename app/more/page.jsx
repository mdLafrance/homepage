"use client"

import { motion } from "framer-motion"
import { useThemeContext } from "../(context)/ThemeContext"
import { useEffect, useState } from "react"

import axios from "axios"
import Image from "next/image"

import LinkSvg from "../(components)/controls/Link"

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

    const darkTheme = "hover:ring-white/30 hover:bg-white/10 active:bg-white/20 text-light"
    const lightTheme = "hover:ring-space_cadet/30 hover:bg-space_cadet/5 active:bg-space_cadet/10 text-space_cadet"

    return (
        <a
            className={`
                rounded-sm
                flex justify-start items-center gap-1 pl-2 pr-3 py-1 hover:ring-1
                ${theme == "dark" ? darkTheme : lightTheme}
            `}

            href={link}
            rel="noopener noreferrer"
            target="_blank"
        >
            <Image
                src={`icons/${language.toLowerCase()}.svg`}
                width={23}
                height={23}
                className="grayscale-[20%] rounded-md"
                alt={language}
            />
            <span className="font-Kanit font-extralight text-2xl ml-1">{name}</span>
            <figure
                className={`
                    translate-y-2
                    grow grow-1 border-b border-dotted 
                    ${theme == "dark" ? "border-white/40" : "border-space_cadet/40"
                }`}
            />
            <LinkSvg
                weight={4}
                className={`
                    w-3 h-3 translate-y-0.5 
                    self-center 
                    ${theme == "dark" ? "stroke-light" : "stroke-space_cadet"
                }`}
            />
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
            className="isolate sm:max-w-[80dvw] lg:w-[70rem] flex"
            variants={moreCardTransitions}
        >
            <figure className="text-5xl lg:text-8xl">.</figure>
            <div className="block w-full pr-2">
                <div className="w-full flex justify-start gap-1">
                    <h1 className="text-5xl lg:text-8xl">
                        {title}
                    </h1>
                    <figure className="
                    grow grow-1
                    border-b border-light/40 border-dotted 
                    -translate-y-1 lg:-translate-y-2
                "/>
                </div>
                <div className="sm:text-2xl font-light pt-1 sm:pt-4 sm:ml-1">
                    {children}
                </div>
            </div>
        </motion.div>
    )
}

export default function More() {
    const [gitProjects, setGitProjects] = useState([]);

    useEffect(() => {
        axios.get("https://api.github.com/users/mdlafrance/repos")
            .then(res => {
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
                flex flex-col justify-center items-center gap-8 sm:gap-[4rem]
                dark:text-light text-space_cadet
            `}
        >
            <MoreSection title={"projects"}>
                <p>
                    I always have one or two coding projects on the go.
                    <br />
                    Check out some of my finished ones here:
                </p>

                <div className="flex flex-col flex-wrap gap-2 py-2">
                    {
                        gitProjects
                            // Ignore git projects with no defined language
                            .filter(x => x.language != undefined)
                            // Ignore dotfiles and landing page project
                            .filter(x => !["dotfiles", "mdLafrance"].includes(x.name))
                            .sort((a, b) => a.language > b.language ? 1 : -1)
                            .map((x, idx) => (
                                <GitProject key={idx} name={x.name} language={x.language} link={x.html_url} />
                            ))
                    }
                </div>
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
                    Some of my life drawing work is available on my artstation
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
                    using Maya and Substance Painter.
                    <br />
                    You can watch a flythrough of the
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
