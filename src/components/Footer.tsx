import { css } from "@emotion/css"
import { ReachOut } from "./ReachOut"
import { OpenToWork } from "./OpenToWork"
import { Code, EnvelopeSimple, LinkedinLogo } from "@phosphor-icons/react"

export function Footer() {
    const style = css`
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-lg);
        max-width: var(--content-width);

        padding-bottom: var(--spacing-2xl);
    `

    const profileStyle = css`
        border: 3px solid var(--dark);
        border-radius: 20rem;
        overflow: hidden;
        height: 180px;
        aspect-ratio: 1;

        display: flex;
        flex-direction: column;
        justify-content: center;

        img {
            transform: translateX(-32px);
        }
    `

    const meGifStyle = css`
        position: absolute;
        top: -5rem;
        right: 10rem;
        transform: scale(0.7) rotate(10deg);
        opacity: 0.3;
    `

    return (
        <footer className={style}>
            <img src="me.gif" alt="Writing" width="170px" className={meGifStyle} />
            <span className={profileStyle}>
                <img src="profile.jpg" alt="Profile picture" width="250px" />
            </span>
            <OpenToWork />
            <ReachOut />
            <ContactLinks />
        </footer>
    )
}

function ContactLinks() {
    const style = css`
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
        align-items: center;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: var(--spacing-sm);
            font-size: var(--font-md);


            text-decoration: none;
            color: var(--primary);
        }

        .dot {
            display: none;
            width: 5px;
            height: 5px;
            aspect-ratio: 1;
            background-color: var(--primary);
            border-radius: 100%;
            border: 1px solid var(--dark);
        }
    `

    return (
        <address>
            <ul className={style}>
                <li>
                    <a href="mailto:maxlafrance97@gmail.com" target="_blank">
                        <EnvelopeSimple />maxlafrance97@gmail.com
                    </a>
                </li>
                <span className="dot" />
                <li>
                    <a href="https://github.com/mdlafrance" target="_blank">
                        <Code />Github
                    </a>
                </li>
                <span className="dot" />
                <li>
                    <a href="https://linkedin.com/in/max-lafrance" target="_blank">
                        <LinkedinLogo />Linkedin
                    </a>
                </li>
            </ul>
        </address>
    )
}
