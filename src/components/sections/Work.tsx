import { css } from "@emotion/css";
import { TechnologyCarousel } from "../TechnologyCarousel";
import React, { useState } from "react";

const technologies = [
    "Python",
    "Typescript",
    "Javascript",
    "React",
    "Bash",
    "Tailwind",
    "EmotionCss",
    "Qt",
    "Vite",
    "Poetry",
    "Pybuilder",
    "Make",
    "html",
    "css",
    "git",
    "Express",
    "Elasticsearch",
    "AWS",
    "GCP",
    "Gitlab CI",
    "Docker",
    "Docker Compose",
    "Nextjs",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Maya",
    "Nuke",
    "RV",
    "Shotgrid",
    "ZBrush",
    "Unity",
    "Substance Painter",
    "Rust",
    "C++",
    "C#",
    "GLSL",
    "OpenGL",
    "ImGUI"
]

export function Work() {
    const style = css`
        text-wrap: balance; 
    `

    const technologyStyle = css`
        padding: var(--spacing-lg);
        display: flex;
        flex-wrap: wrap;
        gap: 1.3rem;
        justify-content: center;

        span {
            font-size: var(--font-md);
            font-weight: bold;
            color: var(--primary);
            border: 2px solid var(--primary);
            border-radius: var(--rounded-md);
            padding: var(--spacing-sm) var(--spacing-md);
        }
    `

    return (
        <div className={style}>
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

            <WorkplaceContainer workplaces={["BeloFX", "Industrial Brothers", "Awesometown Entertainment"]}>
                <Workplace title="BeloFX">
                    <p>Belofx</p>
                </Workplace>
                <Workplace title="Industrial Brothers">
                    <p>Belofx</p>
                </Workplace>
                <Workplace title="Awesometown Entertainment">
                    <p>Belofx</p>
                </Workplace>
                <Workplace title="Arc Productions">
                    <p>Belofx</p>
                </Workplace>
            </WorkplaceContainer>

            <div className={technologyStyle}>
                {technologies.map((technology) => (
                    <span key={technology} >{technology}</span>
                ))}
            </div>
        </div>
    )
}

function WorkplaceContainer({ workplaces, children }: { workplaces: string[], children: React.ReactNode }) {
    const [index, setIndex] = useState(0);

    const style = css`
        display: flex;
    `

    const selectorStyle = css`
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
    `

    return (
        <div className={style}>
            <div className={selectorStyle}>
                {workplaces.map((workplace) => (
                    <button key={workplace}>{workplace}</button>
                ))}
            </div>

            {React.Children.toArray(children)[index]}
        </div>
    )
}

function Workplace({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div>
            <h3>{title}</h3>
            {children}
        </div>
    )
}