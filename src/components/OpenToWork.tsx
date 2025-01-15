import { css } from "@emotion/css"

export function OpenToWork() {
    const style = css`
        display: flex;
        align-items: center;
        gap: var(--spacing-md);

        font-size: var(--font-md);
        font-weight: bold;

        .circle {
            aspect-ratio: 1;
            background-color: green;
            width: 0.7rem;
            border-radius: 100%;
            border: 1.5px solid var(--dark);
            box-sizing: border-box;
            filter: brightness(1.2);
        }
    `

    return (
        <span className={style}>
            <span className="circle"></span>
            <span> Available - Q2 2025</span>
        </span>
    )
}
