import { css } from "@emotion/css";
import { ReachOut } from "../ReachOut";
import { EnvelopeSimple, GithubLogo, HandWaving, LinkedinLogo, ReadCvLogo } from "@phosphor-icons/react";
import { IconLink } from "../IconLink";
import { Reveal } from "../Reveal";

export function About() {
    const style = css`
        h2 {
            padding-top: var(--spacing-xl);
            padding-bottom: var(--spacing-lg);
            font-size: var(--font-xl);
            font-weight: bold;
        }

        .hand {
            opacity: 0;
            animation: handWave 0.7s ease forwards;
            animation-delay: 0.5s;
        }

        .blue {
            color: var(--primary);
            font-weight: bold;
        }
    `

    return (
        <div className={style}>
            <Reveal>
                <h2>
                    Hi, I'm <strong className="blue">Max</strong> <HandWaving className="hand" />
                </h2>
            </Reveal>
            <Reveal delay={0.5}>
                <p>
                    A <strong>programmer</strong> based in Canada.
                </p>
                <br />
            </Reveal>
            <Reveal delay={0.6}>
                <p>
                    I've been <strong>working in tech</strong> for the past 5 years at visual effects and animation companies, making desktop applications, websites, plugins - <strong>you name it</strong>.
                </p>
                <br />
                <p>
                    When I'm not working, or getting lost in a tech rabbit hole, you can find me playing guitar, drawing, or hacking away on something.
                </p>
            </Reveal>
            <Reveal delay={0.7}>
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
