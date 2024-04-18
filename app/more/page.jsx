import axios from "axios"
import Image from "next/image"

import LinkSvg from "../(components)/controls/Link"
import Reveal from "../(components)/Reveal"
import { Amplify, NextJS, React, Tailwind } from "../work/Experience"

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
    return (
        <a
            className={`
                rounded-sm
                flex justify-start items-center gap-1 pl-2 pr-3 py-1 hover:ring-1

                hover:ring-space_cadet/30 hover:bg-space_cadet/5 active:bg-space_cadet/10 text-space_cadet
                dark:hover:ring-white/30 dark:hover:bg-white/10 dark:active:bg-white/20 dark:text-light
            `}

            href={link}
            rel="noopener noreferrer"
            target="_blank"
        >
            <Image
                src={`icons/${language.toLowerCase()}.svg`}
                width={23}
                height={23}
                className="grayscale-[30%] rounded-md"
                alt={language}
            />
            <span className="font-Kanit font-extralight text-2xl ml-1">{name}</span>
            <figure
                className={`
                    translate-y-2
                    grow grow-1 border-b border-dotted 
                    dark:border-white/40 border-space_cadet
                `}
            />
            <LinkSvg
                weight={4}
                className={`
                    w-3 h-3 translate-y-0.5 
                    self-center 
                    dark:stroke-light stroke-space_cadet
                `}
            />
        </a>
    )
}

function CodeComment({ message }) {
    return (
        <p className="opacity-65">
            {`// ${message}`}
        </p>
    )
}

function TechnologyLink({ name, iconPath, link }) {
    return (
        <a
            className="flex gap-2"
            href={link}
            rel="noopener noreferrer"
            target="_blank"
        >
            <Image
                src={iconPath}
                alt={name}
                width={24}
                height={24}
            >
            </Image>
            <span>{name}</span>
        </a>
    )
}

function MoreSection({ title, children }) {
    return (
        <div
            className="isolate max-w-[85dvw] w-[70rem] flex"
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
                        border-b border-dotted 
                        dark:border-white/40 border-space_cadet
                        -translate-y-1 lg:-translate-y-2
                    "/>
                </div>
                <div className="sm:text-2xl font-light pt-1 sm:pt-4 sm:ml-1">
                    {children}
                </div>
            </div>
        </div>
    )
}

async function getGithubProjects() {
    try {
        const response = await axios.get(
            "https://api.github.com/users/mdLafrance/repos"
        )

        return response.data;

    } catch {
        console.log("Error getting projects for mdLafrance")
        return []
    }
}

export default async function More() {
    const githubProjects = await getGithubProjects();

    return (
        <div
            variants={moreCardTransitions}
            initial="hidden"
            animate="show"
            className={`
                w-full sm:mt-8 mb-[1rem] sm:mb-[5rem] p-4 sm:p-2
                flex flex-col justify-center items-center gap-8 sm:gap-[4rem]
                dark:text-light text-space_cadet
            `}
        >
            <Reveal>
                <MoreSection title={"projects"}>
                    <p>
                        I always have one or two coding projects on the go.
                        <br />
                        Check out some of my finished ones here:
                    </p>

                    <div className="flex flex-col flex-wrap gap-2 py-2">
                        {
                            githubProjects
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
            </Reveal>

            <Reveal delay={0.1}>
                <MoreSection title={"website"}>
                    <div className="flex flex-wrap sm:flex-row align-middle">
                        <span className="pr-2 align-top">This website was made with</span>
                        <React showName={true} />
                        <span className="pr-1">,</span>
                        <Tailwind />
                        <span className="pr-1">,</span>
                        <NextJS />
                        <span className="px-1">, and</span>
                        <Amplify />
                        .
                    </div>
                    <br />
                    <p>Source code available on my Github.</p>

                </MoreSection>
            </Reveal>

            <Reveal delay={0.2}>
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
            </Reveal>
        </div>
    )
}
