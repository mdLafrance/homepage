import { css } from "@emotion/css";
import React, { useState } from "react";
import { Reveal } from "../Reveal";

export function Work() {
    const style = css`
        text-wrap: balance; 
    `

    return (
        <div className={style}>
            <Reveal delay={1.3}>
                <WorkplaceContainer workplaces={["BeloFX", "Industrial Brothers", "Awesometown Entertainment", "Arc Productions"]}>
                    <Workplace position="Software Engineer" company="BeloFX" duration="April 2022 - Present">
                        <WorkBullet>
                            <p>
                                As one of the first three developers on our Canadian team, took part in the design and implementation of core systems
                            </p>
                        </WorkBullet>
                        <WorkBullet>
                            <p>
                                Developed a <strong>React</strong> web application allowing our teams to seamlessly browse our distributed file systems,
                                backups, and archives. Uses an <strong>Express</strong> and <strong>TRPC</strong> sidecar API to serve results in real-time
                            </p>
                        </WorkBullet>
                        <WorkBullet>
                            <p>
                                Established and maintained <strong>CI/CD</strong> pipelines to automate linting, testing, documentation generation,
                                and deployments of <strong>Python</strong> and <strong>Typescript</strong> package
                            </p>
                        </WorkBullet>
                        <WorkBullet>
                            <p>
                                Served as an internal <strong>technical consultant</strong> for client-facing projects, collaborating with department
                                managers and team leads to analyze requirements and implement custom solutions
                            </p>
                        </WorkBullet>
                        <WorkBullet>
                            <p>
                                Acted as a primary <strong>point of contact</strong> when <strong>triaging support</strong> tickets and feature requests
                            </p>
                        </WorkBullet>
                    </Workplace>
                    <Workplace position="Developer Intern" company="Industrial Brothers" duration="Summer 2018, Summer 2019">
                        <WorkBullet>
                            <p>
                                Created a <strong>desktop PyQT application</strong> for production staff to view and download media from our production
                                tracking software, <strong>Shotgrid</strong>. This application leveraged <strong>multiprocessing</strong> to seamlessly handle dozens of
                                concurrent downloads, and could save users upwards of five minutes every time they needed to
                                assemble media for reviews
                            </p>
                        </WorkBullet>
                        <WorkBullet>
                            <p>
                                Redesigned the asset "preflight" tool used by artists to verify asset quality before check-in. This
                                included a <strong>PyQT Maya GUI</strong>, as well as a <strong>Python library</strong> utilizing a decorator system to mark and dynamically
                                load validator functions
                            </p>
                        </WorkBullet>
                        <WorkBullet>
                            <p>
                                Implemented a novel algorithm for testing certain characteristics of 3d mesh quality which was multiple orgers of magnitude faster than the existing solution, and allowed processing of assets that were previously too large. This could save immense time for artist staff, who needed their assets to pass validation before publishing multiple times per day
                            </p>
                        </WorkBullet>
                    </Workplace>
                    <Workplace position="Developer Intern" company="Awesometown Entertainment" duration="Summer 2017">
                        <WorkBullet>
                            <p>
                                Created an <strong>extensible</strong> and modifiable <strong>PyQT</strong> toolshelf plugin for Autodesk Maya, which provided access to a
                                variety of in-house and third party tools, <strong>used daily</strong> by artist staff
                            </p>
                        </WorkBullet>
                        <WorkBullet>
                            <p>
                                Maintained our <strong>MySQL</strong> database and wrapper library, used for persisting user data, show configuration,
                                and even <strong>QML</strong> mockup data
                            </p>
                        </WorkBullet>
                        <WorkBullet>
                            <p>
                                Maintained and audited studio code quality using in-house testing software, and added updates to this software to increase ease of use and reliability
                            </p>
                        </WorkBullet>
                    </Workplace>
                    <Workplace position="Developer Intern" company="Arc Productions" duration="June 2015 - January 2016">
                        <WorkBullet>
                            <p>
                                Worked directly with artist teams and CG supervisors to develop <strong>scripts</strong> to increase artist efficiency
                            </p>
                        </WorkBullet>
                        <WorkBullet>
                            <p>
                                <strong>Model retopology</strong> and <strong>UV wrapping</strong> of show assets
                            </p>
                        </WorkBullet>
                        <WorkBullet>
                            <p>
                                <strong>QA</strong> for various visual effects like physics simulations and asset turntables
                            </p>
                        </WorkBullet>
                    </Workplace>
                </WorkplaceContainer>
            </Reveal>
        </div>
    )
}

function WorkplaceContainer({ workplaces, children }: { workplaces: string[], children: React.ReactNode }) {
    const [index, setIndex] = useState(0);

    const style = css`
        display: flex;
        gap: var(--spacing-md);
        height: 25rem;
    `

    const selectorContainerStyle = css`
        display: flex;
        flex-direction: column;
        padding: var(--spacing-sm);
        padding-left: 0;
    `

    return (
        <div className={style}>
            <ul className={selectorContainerStyle}>
                {workplaces.map((workplace, idk) => (
                    <WorkplaceSelector
                        key={`workplaceselector-${workplace}`}
                        company={workplace}
                        onClick={() => setIndex(idk)}
                        selected={index === idk}
                    />
                ))}
            </ul>

            {React.Children.toArray(children)[index]}
        </div>
    )
}

function WorkplaceSelector({ company, onClick, selected }: { company: string, onClick: () => void, selected: boolean }) {
    const style = css`
        border: 2px solid ${selected ? "var(--primary)" : "var(--dark)"};
        box-sizing: border-box;
        width:  1rem;
        aspect-ratio: 1;
        border-radius: 100%;

        ${selected && "background-color: var(--primary);"}
    `

    const outerStyle = css`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        &:not(:last-child)::after {
            content: ""; 
            display: inline-block;
            width: 2.2px;
            height: 22px;
            background-color: var(--dark);
        }
    `

    return (
        <li className={outerStyle}>
            <button className={style} onClick={onClick} />
        </li>
    )
}

function Workplace({ position, company, duration, children }: { position: string, company: string, duration: string, children: React.ReactNode }) {
    const style = css`
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
        padding-left: var(--spacing-sm);

        pre {
            text-wrap: pretty;
            font-size: var(--font-sm);
        }

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
            font-weight: bold;
        }

    `

    return (
        <Reveal noSlide>
            <article className={style}>
                <h4>
                    <span className="position-text">{position}</span>
                    <span className="company-text">{` @ ${company}`}</span>
                </h4>
                <h5 className="duration-text">{duration}</h5>
                {children}
            </article>
        </Reveal>
    )
}

function WorkBullet({ children }: { children: React.ReactNode }) {
    const style = css`
        font-size: var(--font-sm);
        
        display: flex;
        gap: var(--spacing-sm);

        strong {
            color: var(--dark);
            font-size: var(--font-sm);
        }

        .bullet {
            color: var(--primary);
            line-height: 1rem;
            font-size: var(--font-lg);
        }
    `

    return (
        <li className={style}><span className="bullet">{"• "}</span>{children}</li>
    )
}
