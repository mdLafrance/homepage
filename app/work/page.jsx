"use client"

import { motion } from "framer-motion"

import { Bash, Gitlab, Maya, MySQL, Nuke, Python, Qt } from "./Experience.jsx"

const work_experiences = [
    {

        title: "Junior Pipeline Engineer",
        company: "BeloFX",
        date: "April 2022 - Present",
        summary: `Oversaw the development of the vendor outsource and ingest pipeline, meeting frequently with stakeholders and team leads to discuss product requirements and direction.

Acted as an internal technical consultant when onboarding new clients, in order to design and implement unique requirements.

Advocated for and created better observability and maintainability patterns within the codebase, including implementing and maintaining CI/CD pipelines for linting, testing, and automatic documentation generation.
`,
        technologies: [
            <Python key={1} />,
            <Bash key={2} />,
            <Qt key={3} />,
            <Gitlab key={4} />,
            <Nuke key={5} />
        ]
    },

    {
        title: "Software developer intern",
        company: "Industrial Brothers",
        date: "Summer 2019, Summer 2018",
        summary: `Developed extension plugins for our digital content creation software including Autodesk Maya, and Nuke. These plugins leveraged third party apis, and the integration of the Qt graphics library to extend the functionality of these programs to better serve artist needs. 

Contributed to an R&D proposal for an overhaul of the studio’s asset organization system. This system included a graphical interface and maya extension.

Created a standalone Qt desktop application for production staff to view and download media from Shotgrid.
`,
        technologies: [
            <Python key={1} />,
            <Maya key={2} />,
            <Qt key={3} />,
            <Nuke key={4} />
        ]

    },
    {
        title: "Software developer intern",
        company: "Awesometown Entertainment",
        date: "Summer 2017",
        summary: `Audited studio tool quality using in-house auditing software. Added updates to this software to increase ease of use and reliability.

Wrote DCC tools for artists with Qt.

Extended and mainted studio MySQL database and associated wrapper library.
`,

        technologies: [
            <Python key={1} />,
            <Maya key={2} />,
            <Qt key={3} />,
            <MySQL key={4} />,
        ]

    },
    {
        title: "Software developer intern",
        company: "Arc Productions",
        date: "June 2015 - January 2016",
        summary: `Worked with artists and team leads to develop maya tools to increase artist efficiency.

Model retopology, UV unwrapping, and character turntables.
`,
        technologies: [
            <Python key={1} />,
            <Maya key={2} />,
            <Nuke key={3} />,
        ]
    }
]

function WorkHistoryCard({ title, company, summary, date, technologies }) {
    return (
        <div className="grayscale-[30%] dark:text-light text-space_cadet">
            {/** Horizontal card **/}
            <div className={`hidden lg:flex max-w-[85rem] gap-4`}>
                {/** Title section **/}
                <div className={`
                w-2/5 pr-4 
                flex flex-col items-end 
                text-right
                border-r border-solid dark:border-light/70 border-space_cadet/80
            `}>
                    <h1 className="text-5xl">{company}</h1>
                    <h2 className="text-3xl font-Kanit font-light">{title}</h2>
                    <p className="text-xl font-Kanit font-light">{date}</p>
                    <div className="flex items-center gap-1 py-2">
                        {technologies}
                    </div>
                </div>
                <section className="w-3/5">
                    <pre className="font-Kanit font-light text-2xl text-wrap">
                        {summary}
                    </pre>
                </section>
            </div>
            {/** Vertical card **/}
            <div className={`
                block lg:hidden rounded-sm p-4
            `}>
                <p className="text-4xl md:text-5xl">{company}</p>
                <p className="text-2xl md:text-3xl font-Kanit font-light">{title}</p>
                <p className="text-xl md:text-2xl font-Kanit font-light">{date}</p>
                <div className="flex items-center z-5 p-1 gap-2">
                    {technologies}
                </div>
                <figure className={`
                    my-2 w-full 
                    border-b border-dotted 
                    dark:border-light/70 border-space_cadet/80
                `} />
                <pre className="font-Kanit font-light text-lg md:text-2xl whitespace-pre-wrap">
                    {summary}
                </pre>
            </div>
        </div>
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
        <main className="z-1 flex flex-col justify-center">
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
                                    <WorkHistoryCard
                                        key={idx}
                                        title={e.title}
                                        company={e.company}
                                        date={e.date}
                                        summary={e.summary}
                                        technologies={e.technologies}
                                    />
                                </motion.li>
                            )

                        })
                    }
                </motion.ul>
            </div>

        </main>
    )
}
