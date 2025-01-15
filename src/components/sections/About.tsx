import { css } from "@emotion/css"
import { TechnologyCloud } from "../TechnologyCloud"
import { HandPointing } from "@phosphor-icons/react"
import { Reveal } from "../Reveal"

export function About() {
    const techHeaderStyle = css`
        padding-top: var(--spacing-lg);
        padding-bottom: var(--spacing-md);
        padding-left: 0;

        font-size: var(--font-lg);
        font-weight: bold;
        font-style: italic;

        display: flex;
        align-items: center;
        gap: var(--spacing-md);

        *:first-child {
            color: var(--primary);
        }

        .hand {
            color: var(--primary);
            transform: rotate(90deg);
        }
    `

    return (
        <div>
            <p>
                I've been <strong>working in tech</strong> for the past 5 years at visual effects and animation companies, making desktop applications, websites, plugins - <strong>you name it</strong>.
            </p>
            <br />
            <p>
                <strong>These days</strong>, I'm working at a VFX <strong>startup</strong>, writing web apps, python libraries, and putting out fires.
            </p>
            <br />
            <h4 className={techHeaderStyle}><span>I make stuff with</span><HandPointing className="hand" weight="bold" /></h4>
            <Reveal delay={1.1}>
                <TechnologyCloud />
            </Reveal>
        </div>
    )
}
