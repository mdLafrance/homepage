import { PythonChicklet } from "@/lib/skills";

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
        ]
    }
]

function WorkHistoryCard({ title, company, summary, date }) {
    return (
        <div className="
            rounded-xl py-4 px-6
            hover:backdrop-blur-3xl hover:bg-white/10 transition-all duration-100
            hover:shadow-black/20 hover:shadow-sm
            w-[40rem]
        ">
            {/** Left/right div **/}
            <div className="flex gap-6">
                {/** Date range side **/}
                <div className="mt-1 w-24">
                    <p className="text-white/80 font-Kanit font-light text-lg">{date}</p>
                </div>
                {/** Experience **/}
                <div className="">
                    <p className="font-Kanit font-bold text-white text-2xl">{title}</p>
                    <p className="font-Kanit font-semibold text-white/80 text-xl">{company}</p>
                    <p className="text-white/70 font-Lora font-regular text-lg">{summary}</p>
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

            {/** Work history cards 
            <div className="flex flex-col">
                {
                    work_experiences.map((e) => {
                        return <WorkHistoryCard title={e.title} company={e.company} date={e.date} summary={e.summary} />
                    })
                }
            </div>
            **/}
            <PythonChicklet />
        </main>
    )
}
