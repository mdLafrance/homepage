import pythonIcon from "../../public/icons/python.svg";
import bashIcon from "../../public/icons/bash.svg";
import githubActionsIcon from "../../public/icons/github_actions.svg";
import nukeIcon from "../../public/icons/nuke.svg";
import gitlabIcon from "../../public/icons/gitlab.svg";
import mayaIcon from "../../public/icons/maya.svg";
import qtIcon from "../../public/icons/qt.svg";

import Image from 'next/image';

function WorkExperienceChicklet({ icon, name, link }) {
    return (
        <a href={link} target="_blank" rell="noopener noreferrer" className="
            h-8 px-3 flex items-center space-x-1 
            ring-1 ring-ultra_violet/25 rounded-xl backdrop-blur-3xl bg-ultra_violet/5 hover:bg-white/25 transition-all
            drop-shadow-lg
        ">
            <Image src={icon} alt={name} width={23} height={23} />
            <span className="font-Kanit font-regular text-space_cadet/80">{name}</span>
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

export function MayaChicklet() {
    return (
        <WorkExperienceChicklet icon={mayaIcon} name={"Maya"} link={"https://www.autodesk.com/za/products/maya/overview-dts"} />
    )
}


export function QtChicklet() {
    return (
        <WorkExperienceChicklet icon={qtIcon} name={"Qt"} link={"https://www.qt.io/product"} />
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
            GitlabChicklet,
            QtChicklet
        ]
    },
    {
        title: "Software developer intern",
        company: "Industrial Brothers",
        date: "Summer 2019, Summer 2018",
        summary: "Developed extension plugins for our digital content creation software including Autodesk Maya, and Nuke. These plugins leveraged third party apis, and the integration of the Qt graphics library to extend the functionality of these programs to better serve artist needs. \
\
Contributed to an R&D proposal for an overhaul of the studio’s asset organization system. This system included a small DSL and graphical interface. (Note: this was developed prior to USD) \
\
Implemented a novel algorithm for testing certain characteristics of 3d mesh quality. This algorithm was faster than its predecessor by a factor of a full O(n), and took the completion time for large sets of vertices down from minutes to seconds. \
",
        skills: [
            PythonChicklet,
            MayaChicklet,
            QtChicklet,
            NukeChicklet
        ]
    },
    {
        title: "Software developer intern",
        company: "Awesometown Entertainment",
        date: "Summer 2017",
        summary: "Rewrote core studio DCC software extensions.\
Audited studio code quality using our in-house testing software. Added updates to this software to increase ease of use and reliability.\
Maintained the studio MySQL database. \
",
        skills: [
            PythonChicklet,
            MayaChicklet,
            QtChicklet
        ]
    },
    {
        title: "Junior TD",
        company: "Arc Productions",
        date: "June 2015 - January 2016",
        summary: "Worked directly with team leads to develop scripts and tools to increase artist efficiency.\
Finalized various visual effects, including physics simulations, and character turntables.\
Model retopology and uv’ing for show assets.\
",
        skills: [
            PythonChicklet,
            MayaChicklet,
            NukeChicklet
        ]
    }
]

function WorkHistoryCard({ title, company, summary, date, skills }) {
    return (
        <div className="
            group
            rounded-xl py-4 px-6
            hover:backdrop-blur-3xl hover:bg-pale_dogwood/10 transition-all
            hover:shadow-black/15 hover:shadow-md
            hover:ring-1 hover:ring-rose_quartz/50
            w-[50rem]
            z-1 hover:z-1
        ">
            {/** Left/right div **/}
            <div className="flex gap-6">
                {/** Date range side **/}
                <div className="mt-1 min-w-40 max-w-40 flex-0">
                    <p className="text-space_cadet/80 font-Kanit font-light text-lg">{date}</p>
                </div>
                {/** Experience **/}
                <div>
                    <p className="font-Kanit font-bold text-space_cadet text-2xl">{title}</p>
                    <p className="font-Kanit font-semibold text-space_cadet/80 text-xl">{company}</p>
                    <p className="text-space_cadet/70 group-hover:text-space_cadet font-Lora font-regular text-lg transition-all">{summary}</p>
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
            {/** Work history cards **/}
            <div className="flex flex-col items-center gap-4 z-10">
                {
                    work_experiences.map((e) => {
                        return <WorkHistoryCard title={e.title} company={e.company} date={e.date} summary={e.summary} skills={e.skills} />
                    })
                }
            </div>

        </main>
    )
}
