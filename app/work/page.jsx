"use client"

import { useThemeContext } from "../(context)/ThemeContext";
import { motion } from "framer-motion"

const work_experiences = [
    {

        title: "Junior Pipeline Engineer",
        company: "BeloFX",
        date: "April 2022 - Present",
        summary: `Contributed to the architecture and design of core systems as an early developer at a VFX startup. Product owner and maintainer of our data ingestion system used daily by an international data ops team of 15+ users. Met often with stakeholders and team leads from other departments to discuss requirements and product direction. 

Often acted as primary technical liaison within the company when onboarding new clients, in order to consult on unique product requirements they may have had. 

Advocated for and implemented better observability and maintainability patterns within the codebase, including implementing and maintaining CI / CD pipelines for linting, testing, and automatic documentation generation.\
`,
    },

    {
        title: "Software developer intern",
        company: "Industrial Brothers",
        date: "Summer 2019, Summer 2018",
        summary: `Developed extension plugins for our digital content creation software including Autodesk Maya, and Nuke. These plugins leveraged third party apis, and the integration of the Qt graphics library to extend the functionality of these programs to better serve artist needs. 

Contributed to an R&D proposal for an overhaul of the studio’s asset organization system. This system included a small DSL and graphical interface. (Note: this was developed prior to USD)
 
Implemented a novel algorithm for testing certain characteristics of 3d mesh quality. This algorithm was faster than its predecessor by a factor of a full O(n), and took the completion time for large sets of vertices down from minutes to seconds.
`,

    },
    {
        title: "Software developer intern",
        company: "Awesometown Entertainment",
        date: "Summer 2017",
        summary: `Rewrote core studio DCC software extensions.

Audited studio code quality using our in-house testing software. Added updates to this software to increase ease of use and reliability.

Maintained the studio MySQL database. 
`,

    },
    {
        title: "Junior TD",
        company: "Arc Productions",
        date: "June 2015 - January 2016",
        summary: `Worked directly with team leads to develop scripts and tools to increase artist efficiency.

Finalized various visual effects, including physics simulations, and character turntables.

Model retopology and uv’ing for show assets.
`,

    }
]

function WorkHistoryCard({ title, company, summary, date }) {
    const [theme, _] = useThemeContext();

    const darkTheme = "text-light"
    const lightTheme = "text-space_cadet"

    return (
        <>
            {/** Horizontal card **/}
            <div className={`hidden lg:flex max-w-[85rem] gap-4 ${theme == "dark" ? darkTheme : lightTheme}`}>
                {/** Title section **/}
                <div className={`
                w-2/5 pr-4 
                flex flex-col items-end 
                text-right
                border-r border-solid ${theme == "dark" ? "border-light/70" : "border-space_cadet/80"}
            `}>
                    <p className="text-5xl">{company}</p>
                    <p className="text-3xl font-Kanit font-light">{title}</p>
                    <p className="text-xl font-Kanit font-light">{date}</p>
                </div>
                <div className="w-3/5 ">
                    <pre className="font-Kanit font-light text-2xl text-wrap">
                        {summary}
                    </pre>
                </div>
            </div>
            {/** Vertical card **/}
            <div className={`
                block lg:hidden rounded-sm p-4
                ${theme == "dark" ? darkTheme : lightTheme}
            `}>
                <p className="text-4xl md:text-5xl">{company}</p>
                <p className="text-2xl md:text-3xl font-Kanit font-light">{title}</p>
                <p className="text-xl md:text-2xl font-Kanit font-light">{date}</p>
                <figure className={`my-2 w-full border-b border-dotted ${theme == "dark" ? "border-light/70" : "border-space_cadet/80"}`} />
                <pre className="font-Kanit font-light text-lg md:text-2xl whitespace-pre-wrap">
                    {summary}
                </pre>
            </div>
        </>
    )
}

const workCardTransitions = {
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

export default function Work() {
    return (
        <main className="flex flex-col justify-center">
            {/** Work history cards **/}
            <div className={`
                flex flex-col items-center p-2 sm:p-12
            `}>
                <motion.ul
                    className="flex flex-col gap-8 sm:gap-[4rem]"
                    variants={workCardTransitions}
                    initial="hidden"
                    animate="show"
                >
                    {
                        work_experiences.map((e, idx) => {
                            return (
                                <motion.li key={idx} variants={workCardTransitions}>
                                    <WorkHistoryCard key={idx} title={e.title} company={e.company} date={e.date} summary={e.summary} />
                                </motion.li>
                            )

                        })
                    }
                </motion.ul>
            </div>

        </main>
    )
}
