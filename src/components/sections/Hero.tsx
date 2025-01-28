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

        h1 {
            font-size: var(--font-3xl);
            font-weight: bold;
        }

        h2 {
            font-size: var(--font-2xl);
            font-family: Geist Mono;
        }

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
        <div className={style}>
            <Reveal>
                <div className="profile-section">
                    <div className="text-section">
                        <h1>
                            Hi, I'm <strong className="blue">Max</strong> <HandWaving className="hand" />
                        </h1>
                        <Reveal delay={0.8}>
                            <h2>
                                Software developer, <br /> and general nerd.
                            </h2>
                        </Reveal>
                    </div>
                    <div className="image-section">
                        <Reveal delay={0.7}>
                            <AtDesk />
                        </Reveal>
                    </div>
                </div>
            </Reveal>
        </div>
    )
}

function Links() {
    const style = css`
        display: flex;
        padding: var(--spacing-md) 0;
        gap: var(--spacing-md);
        justify-content: center;
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
