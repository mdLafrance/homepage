import { css } from "@emotion/css"
import { ReachOut } from "./ReachOut"

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
            transform: scale(1.15) translate(-3px, -1px);
        }
    `

    return (
        <footer className={style}>
            <span className={profileStyle}>
                <img src="profile.jpg" alt="Profile" width="170px" />
            </span>
            <ReachOut />
        </footer>
    )
}
