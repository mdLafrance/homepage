import { css } from "@emotion/css"
import { TechnologyCloud } from "../TechnologyCloud"

export function About() {
    const techHeaderStyle = css`
        padding: var(--spacing-lg);
        padding-left: 0;

        font-size: var(--font-lg);
        font-weight: bold;

        display: flex;
        gap: var(--spacing-md);

        *:first-child {
            color: var(--primary);
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
            <p>
                When I'm not working, or getting lost in a tech rabbit hole, you can find me playing guitar, drawing, or hacking away on something.
            </p>
            <h4 className={techHeaderStyle}><span>{"##"}</span><span>I make stuff with</span></h4>
            <TechnologyCloud />
        </div>
    )
}
