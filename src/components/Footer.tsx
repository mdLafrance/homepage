import { css } from "@emotion/css"
import { ReachOut } from "./ReachOut"
import { OpenToWork } from "./OpenToWork"

export function Footer() {
    const style = css`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-lg);

        max-width: 70ch;
    `

    const profileStyle = css`
        border: 3px solid var(--dark);
        border-radius: 20rem;
        overflow: hidden;
        height: 10rem;
        aspect-ratio: 1;

        display: flex;
        flex-direction: column;
        justify-content: center;

        img {
            transform: scale(1.3) translate(-3px, -1px);
        }
    `

    const sourceCodeStyle = css`
        opacity: 0.5;
    `

    return (
        <footer className={style}>
            <span className={profileStyle}>
                <img src="profile.jpg" alt="Profile" width="170px" />
            </span>
            <OpenToWork />
            <ReachOut />
            <span>maxlafrance97@gmail.com</span>
            <span>647-878-8700</span>
            <span></span>
            <a className={sourceCodeStyle}>Source code on my github</a>
        </footer>
    )
}
