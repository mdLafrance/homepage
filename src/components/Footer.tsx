import { css } from "@emotion/css"
import { ReachOut } from "./ReachOut"
import { OpenToWork } from "./OpenToWork"

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
        color: var(--gray);
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
                <img src="profile.jpg" alt="Profile picture" width="170px" />
            </span>
            <OpenToWork />
            <ReachOut />
            <span>maxlafrance97@gmail.com</span>
            <span>647-878-8700</span>
            <a className={sourceCodeStyle}>Source code on my github</a>
        </footer>
    )
}
