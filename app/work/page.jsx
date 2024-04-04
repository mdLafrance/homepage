"use client"

import { useThemeContext } from "../(context)/ThemeContext";
import { work_experiences } from "../(data)/work"

import { motion } from "framer-motion"

function WorkHistoryCard_OLD({ title, company, summary, date, skills }) {
    return (
        <div className="
            z-10
            group
            rounded-sm py-4 px-6
            backdrop-blur-md ring-1 ring-black/10
            hover:backdrop-blur-3xl hover:bg-light/10 transition-all duration-100
            hover:shadow-black/15 hover:shadow-md
            hover:ring-1 hover:ring-grey/40
            sm:w-[45rem] w-[80vw]
        ">
            {/** Left/right div **/}
            <div className="flex sm:gap-6">
                {/** Date range side **/}
                <div className="mt-1 w-0 invisible sm:visible sm:min-w-40 sm:max-w-40 flex-0">
                    <p className="text-space_cadet/80 font-Kanit font-light text-lg">{date}</p>
                </div>
                {/** Experience **/}
                <div>
                    <p className="font-Kanit font-bold text-space_cadet text-2xl">{title}</p>
                    <p className="font-Kanit font-semibold text-space_cadet/80 text-xl">{company}</p>
                    <p className="text-space_cadet/80 group-hover:text-space_cadet font-Kanit font-light text-lg transition-all">{summary}</p>
                    {/** Work experience chicklets **/}
                    <div className="flex flex-wrap gap-2 mt-2">
                        {
                            skills.map((S, idx) => {
                                return (
                                    <div className="grow-0">
                                        <S key={idx} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

function WorkHistoryCard({ title, company, summary, date, skills }) {
    const [theme, _] = useThemeContext();

    const darkTheme = "text-light"
    const lightTheme = "text-space_cadet"

    return (
        <div className={`w-[100rem] flex gap-4 ${theme == "dark" ? darkTheme : lightTheme}`}>
            {/** Title section **/}
            <div className={`
                w-2/5 pr-4 
                flex flex-col items-end 
                border-r border-solid ${theme == "dark" ? "border-light/70" : "border-space_cadet/80"}
            `}>
                <p className="text-5xl">.{company}</p>
                <p className="text-3xl font-Kanit font-light">{title}</p>
                <p className="text-xl font-Kanit font-light opacity-80">{date}</p>
            </div>
            <div className="w-3/5">
                <p className="font-Kanit font-light text-2xl">{summary}</p>
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
        <main className="">
            {/** Work history cards **/}
            <div className={`
                flex flex-col items-center p-12 m-8
            `}>
                <motion.ul
                    className="flex flex-col gap-[4rem]"
                    variants={workCardTransitions}
                    initial="hidden"
                    animate="show"
                >
                    {
                        work_experiences.map((e, idx) => {
                            return (
                                <motion.li key={idx} variants={workCardTransitions}>
                                    <WorkHistoryCard key={idx} title={e.title} company={e.company} date={e.date} summary={e.summary} skills={e.skills} />
                                </motion.li>
                            )

                        })
                    }
                </motion.ul>
            </div>

        </main>
    )
}