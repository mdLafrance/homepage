import { css } from "@emotion/css";
import { EnvelopeSimple, GithubLogo, HandWaving, LinkedinLogo, ReadCvLogo } from "@phosphor-icons/react";
import { IconLink } from "../IconLink";
import { Reveal } from "../Reveal";
import { AtDesk } from "../Drawn/AtDesk";

export function Hero() {
    const style = css`
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
        max-width: var(--content-width);

        .hand {
            opacity: 0;
            animation: handWave 0.7s ease forwards;
        }

        .blue {
            color: var(--primary);
            font-weight: bold;
        }

        .profile-section {
            margin-top: 10dvh;

            h2 {
                font-size: var(--font-2xl);
                font-weight: bold;
            }

            p {
                font-size: var(--font-lg);
            }

            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            gap: var(--spacing-2xl);

            .text-section {
                display: flex;
                justify-content: center;
                flex-direction: column;
                gap: var(--spacing-md);
                flex-grow: 0;
            }

            .image-section {
                display: flex;
                flex-direction: column;
                justify-content: end;
                flex-grow: 1;
            }
        }
    `

    return (
        <div className={style} id="section-hero">
            <Reveal>
                <div className="profile-section">
                    <div className="text-section">
                        <h2>
                            Hi, I'm <strong className="blue">Max</strong> <HandWaving className="hand" />
                        </h2>
                        <Reveal delay={0.8}>
                            <p>
                                Software developer, <br /> and general nerd.
                            </p>
                        </Reveal>
                    </div>
                    <div className="image-section">
                        <Reveal delay={0.7}>
                            <AtDesk />
                        </Reveal>
                    </div>
                </div>
            </Reveal>
            <Reveal delay={0.9}>
                <Links />
            </Reveal>
        </div>
    )
}

function Links() {
    const style = css`
        display: flex;
        padding: var(--spacing-md) 0;
        gap: var(--spacing-md);
    `

    return (
        <div className={style}>
            <IconLink
                icon={<EnvelopeSimple size={24} />}
                link="mailto:maxlafrance97@gmail.com"
                hint="email"
            />
            <IconLink
                icon={<LinkedinLogo size={24} />}
                link="https://linkedin.com/in/max-lafrance"
                hint="linkedin"
            />
            <IconLink
                icon={<GithubLogo size={24} />}
                link="https://github.com/mdlafrance"
                hint="github"
            />
            <IconLink
                icon={<ReadCvLogo size={24} />}
                link="https://github.com/mdlafrance"
                hint="resume"
            />
        </div>
    )
}
