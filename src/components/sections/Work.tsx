import { css } from "@emotion/css";
import { TechnologyCarousel } from "../TechnologyCarousel";
import React, { useState } from "react";

interface WorkplaceDetails {
    company: string,
    position: string,
    duration: string,
}

const workplaces: WorkplaceDetails[] = [
    {
        company: "BeloFX",
        position: "Software Engineer",
        duration: "April 2022 - Present"
    },
    {
        company: "Industrial Brothers",
        position: "Software Engineering Intern",
        duration: "Summer 2028, Summer 2019"
    },
    {
        company: "Awesometown Entertainment",
        position: "Software Engineering Intern",
        duration: "Summer 2017"
    },
    {
        company: "Arc Productions",
        position: "Software Engineering Intern",
        duration: "June 2015 - January 2016"
    },
]

export function Work() {
    const style = css`
        text-wrap: balance; 
    `

    return (
        <div className={style}>
            {/**
            <p>
                At work I do a bit of everything, using technologies like <TechnologyCarousel /><br />
                to make sure everything is running smoothly.
            </p>
            <br />
            <p>
                The teams I've worked on have always been skeleton crews - where developers of all
                levels have had to step up to the plate and lead development of entire systems while
                learning new technologies and interfacing with stakeholders. Juggling two or three
                solo initiatives, while acting as support for existing products is commonplace.
            </p>
            **/}

            <Workplaces workplaces={workplaces} />
        </div>
    )
}

function Workplaces({ workplaces }: { workplaces: WorkplaceDetails[] }) {
    const [index, setIndex] = useState(0);

    const style = css`
        display: flex;
        padding: var(--spacing-lg) 0;
    `

    const selectorContainerStyle = css`
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
        max-width: 8rem;
        border-left: 2px solid var(--gray);
    `

    return (
        <div className={style}>
            <ul className={selectorContainerStyle}>
                {workplaces.map((workplace) => (
                    <WorkplaceSelector key={`workplaceselector-${workplace.company}`} company={workplace.company} />
                ))}
            </ul>

            <Workplace details={workplaces[index]} />
        </div>
    )
}

function WorkplaceSelector({ company }: { company: string }) {
    const style = css`
        font-weight: bold;
        font-size: var(--font-sm);
        text-align: start;
        padding-bottom: var(--spacing-md);
    `

    return (
        <li>
            <button className={style}>{company}</button>
        </li>
    )
}

function Workplace({ details }: { details: WorkplaceDetails }) {
    const style = css`
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);

        .position-text {
            font-size: var(--font-lg);
            font-weight: bold;
        }

        .company-text {
            font-weight: bold;
            font-size: var(--font-lg);

            color: var(--primary);
        }

        .duration-text {
            color: var(--gray);
        }

    `

    return (
        <article className={style}>
            <h3>
                <span className="position-text">{details.position}</span>
                <span className="company-text">{` @ ${details.company}`}</span>
            </h3>
            <h5 className="duration-text">{details.duration}</h5>
        </article>
    )
}
