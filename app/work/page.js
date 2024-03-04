"use client"

import { work_experiences } from "../(data)/work"

import Reveal from "../(components)/Reveal"

import { motion } from "framer-motion"

function WorkHistoryCard({ title, company, summary, date, skills }) {

    return (
        <div className="
            group
            rounded-md py-4 px-6
            hover:backdrop-blur-3xl hover:bg-pale_dogwood/10 transition-all duration-100
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
            <div className="flex flex-col items-center mt-4">
                <motion.ul
                    className="space-y-3"
                    variants={workCardTransitions}
                    initial="hidden"
                    animate="show"
                >
                    {
                        work_experiences.map((e, idx) => {
                            return (
                                <motion.li key={idx} variants={workCardTransitions}>
                                    <WorkHistoryCard title={e.title} company={e.company} date={e.date} summary={e.summary} skills={e.skills} />
                                </motion.li>
                            )

                        })
                    }
                </motion.ul>
            </div>

        </main>
    )
}
