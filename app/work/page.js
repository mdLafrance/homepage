import { work_experiences } from "../(data)/work"

function WorkHistoryCard({ title, company, summary, date, skills }) {
    return (
        <div className="
            group
            rounded-xl py-4 px-6
            hover:backdrop-blur-3xl hover:bg-pale_dogwood/10 transition-all
            hover:shadow-black/15 hover:shadow-md
            hover:ring-1 hover:ring-rose_quartz/50
            w-[45rem]
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

export default function Work() {
    return (
        <main>
            {/** About section **/}
            <div>
                <p>
        
                </p>
            </div>

            {/** Work history cards **/}
            <div className="flex flex-col items-center z-10">
                <ul className="space-y-3">
                    {
                        work_experiences.map((e, idx) => {
                            return (
                                <li key={idx}>
                                    <WorkHistoryCard title={e.title} company={e.company} date={e.date} summary={e.summary} skills={e.skills} />
                                </li>
                            )

                        })
                    }
                </ul>
            </div>

        </main>
    )
}
