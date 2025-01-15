import { css } from "@emotion/css";
import { TechnologyCarousel } from "../TechnologyCarousel";
import React, { useState } from "react";
import { Reveal } from "../Reveal";

interface WorkExperience {
    company: string,
    position: string,
    duration: string,
    description: string,
}

export function Work() {
    const style = css`
        text-wrap: balance; 
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

            <Reveal delay={1.3}>
                <WorkplaceContainer workplaces={["BeloFX", "Industrial Brothers", "Awesometown Entertainment", "Arc Productions"]}>
                    <Workplace position="Software Engineer" company="BeloFX" duration="April 2022 - Present">
                        <WorkBullet>
                            <p>
                                Developed a <strong>React</strong> web application allowing our teams to seamlessly browse our distributed file systems,
                                backups, and archives. This app integrates with <strong>Elasticsearch</strong> to serve results in real-time, and includes
                                an <strong>Express</strong> and <strong>TRPC</strong> sidecar API.
                            </p>
                        </WorkBullet>
                        <WorkBullet>
                            <p>
                                Established and maintained <strong>CI/CD</strong> pipelines to automate linting, testing, documentation generation,
                                and deployments of <strong>Python</strong> and <strong>Typescript</strong> packages, resulting in lower TCO and maximizing team velocity.
                            </p>
                        </WorkBullet>
                        <WorkBullet>
                            <p>
                                Served as an internal <strong>technical consultant</strong> for client-facing projects, collaborating with department
                                managers and team leads to analyze requirements and implement custom solutions.
                            </p>
                        </WorkBullet>
                        <WorkBullet>
                            <p>
                                Acted as a primary <strong>point of contact</strong> when triaging support tickets and feature requests.
                            </p>
                        </WorkBullet>
                    </Workplace>
                    <Workplace position="Developer Intern" company="Industrial Brothers" duration="Summer 2018, Summer 2019">
                        <WorkBullet>
                            <p>
                                Created a <strong>desktop PyQT application</strong> for production staff to view and download media from our production
                                tracking software, Shotgrid. This application leveraged multiprocessing to seamlessly handle dozens of
                                concurrent downloads, and could save users upwards of five minutes every time they needed to
                                assemble media for reviews.
                            </p>
                        </WorkBullet>
                        <WorkBullet>
                            <p>
                                Redesigned the asset "preflight" tool used by artists to verify asset quality before check-in. This
                                included a <strong>PyQT Maya GUI</strong>, as well as a <strong>Python library</strong> utilizing a decorator system to mark and dynamically
                                load validator functions. This new system could in some cases reduce the time needed to validate an asset by 90%.
                            </p>
                        </WorkBullet>
                    </Workplace>
                    <Workplace position="Developer Intern" company="Awesometown Entertainment" duration="Summer 2017">
                        <WorkBullet>
                            <p>
                                Created an <strong>extensible</strong> and modifiable <strong>PyQT</strong> toolshelf plugin for Autodesk Maya, which provided access to a
                                variety of in-house and third party tools, <strong>used daily</strong> by artist staff.
                            </p>
                        </WorkBullet>
                        <WorkBullet>
                            <p>
                                Maintained our <strong>MySQL</strong> database and wrapper library, used for persisting user data, show configuration,
                                and even <strong>QML</strong> mockup data.
                            </p>
                        </WorkBullet>
                        <WorkBullet>
                            <p>
                                Maintained
                                Audited studio code quality using in-house testing software, and added updates to this software to increase ease of use and reliability.
                            </p>
                        </WorkBullet>
                    </Workplace>
                    <Workplace position="Developer Intern" company="Arc Productions" duration="June 2015 - January 2016">
                        <WorkBullet>
                            <p>
                                Created an <strong>extensible</strong> and modifiable PyQT tool shelf plugin for Autodesk Maya, which provided access to a
                                variety of in-house and third party tools, used daily by artist staff.
                            </p>
                        </WorkBullet>
                        <WorkBullet>
                            <p>
                                Updated and maintained in-house MySQL wrapper
                            </p>
                        </WorkBullet>
                        <WorkBullet>
                            <p>
                                Audited studio code quality using in-house testing software, and added updates to this software to increase ease of use and reliability.
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
        gap: var(--spacing-lg);
        padding: var(--spacing-lg) 0;
        height: 25rem;
    `

    const selectorContainerStyle = css`
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
        max-width: 8rem;
        min-width: 8rem;
        border-left: 2px solid var(--gray);
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
        font-weight: bold;
        font-size: var(--font-sm);
        text-align: start;
        padding-bottom: var(--spacing-md);
        color: ${selected ? "var(--primary)" : "var(--dark)"};
    `

    return (
        <li>
            <button className={style} onClick={onClick}>{company}</button>
        </li>
    )
}

function Workplace({ position, company, duration, children }: { position: string, company: string, duration: string, children: React.ReactNode }) {
    const style = css`
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);

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
        <article className={style}>
            <h4>
                <span className="position-text">{position}</span>
                <span className="company-text">{` @ ${company}`}</span>
            </h4>
            <h5 className="duration-text">{duration}</h5>
            {children}
        </article>
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
