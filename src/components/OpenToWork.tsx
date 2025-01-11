import { css } from "@emotion/css"

export function OpenToWork() {
    const style = css`
        display: flex;
        align-items: center;
        gap: var(--spacing-md);

        font-size: var(--font-sm);
        font-weight: bold;

        & *:first-child {
            aspect-ratio: 1;
            background-color: green;
            min-width: 0.5rem;
            min-height: 0.5rem;
            border-radius: 100%;
        }
    `

    return (
        <span className={style}>
            <span className="circle"></span>
            <span> Open to work - Q2 2025</span>
        </span>
    )
}
