import pythonIcon from "../../public/python.svg";
import bashIcon from "../../public/bash.svg";
import githubActionsIcon from "../../public/github_actions.svg";
import nukeIcon from "../../public/nuke.svg";
import gitlabIcon from "../../public/gitlab.svg";

import Image from 'next/image';

function WorkExperienceChicklet({ icon, name, link }) {
    return (
        <a href={link} target="_blank" rell="noopener noreferrer" className="
            h-8 px-3 flex items-center space-x-1 
            ring-1 ring-white/25 rounded-xl backdrop-blur-3xl bg-white/10 hover:bg-white/25 transition-all
        ">
            <Image src={icon} alt={name} width={23} height={23} />
            <span className="font-Kanit font-regular text-white/80">{name}</span>
        </a>
    )
}

export function PythonChicklet() {
    return (
        <WorkExperienceChicklet icon={pythonIcon} name={"python"} link={"https://www.python.org/"} />
    )
}

export function BashChicklet() {
    return (
        <WorkExperienceChicklet icon={bashIcon} name={"bash"} link={"https://opensource.com/resources/what-bash"} />
    )
}

export function ActionsChicklet() {
    return (
        <WorkExperienceChicklet icon={githubActionsIcon} name={"CI/CD"} link={"https://about.gitlab.com/solutions/continuous-integration/"} />
    )
}

export function NukeChicklet() {
    return (
        <WorkExperienceChicklet icon={nukeIcon} name={"Nuke"} link={"https://www.foundry.com/products/nuke-family/nuke"} />
    )
}

export function GitlabChicklet() {
    return (
        <WorkExperienceChicklet icon={gitlabIcon} name={"Gitlab"} link={"https://about.gitlab.com/"} />
    )
}


const work_experiences = [
    {

        title: "Junior Pipeline Engineer",
        company: "BeloFX",
        date: "April 2022 - Present",
        summary: "Contributed to the architecture and design of core systems as an early developer at a VFX startup. Product owner and maintainer of our data ingestion system used daily by an international data ops team of 15+ users. Met often with stakeholders and team leads from other departments to discuss requirements and product direction. \
\
\
Often acted as primary technical liaison within the company when onboarding new clients, in order to consult on unique product requirements they may have had. \
\
Advocated for and implemented better observability and maintainability patterns within the codebase, including implementing and maintaining CI / CD pipelines for linting, testing, and automatic documentation generation.\
",
        skills: [
            PythonChicklet,
            BashChicklet,
            ActionsChicklet,
            NukeChicklet,
            GitlabChicklet
        ]
    }
]

function WorkHistoryCard({ title, company, summary, date, skills }) {
    return (
        <div className="
            group
            rounded-xl py-4 px-6
            hover:backdrop-blur-3xl hover:bg-white/10 transition-all
            hover:shadow-black/5 hover:shadow-md
            w-[40rem]
        ">
            {/** Left/right div **/}
            <div className="flex gap-6">
                {/** Date range side **/}
                <div className="mt-1 w-24">
                    <p className="text-white/80 font-Kanit font-light text-lg">{date}</p>
                </div>
                {/** Experience **/}
                <div>
                    <p className="font-Kanit font-bold text-white text-2xl">{title}</p>
                    <p className="font-Kanit font-semibold text-white/80 text-xl">{company}</p>
                    <p className="text-white/70 group-hover:text-white font-Lora font-regular text-lg transition-all">{summary}</p>
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

export default function Work() {
    return (
        <main>
            {/** Intro **/}
            <div>
            </div>

            {/** Work history cards **/}
            <div className="flex flex-col">
                {
                    work_experiences.map((e) => {
                        return <WorkHistoryCard title={e.title} company={e.company} date={e.date} summary={e.summary} skills={e.skills} />
                    })
                }
            </div>

        </main>
    )
}
