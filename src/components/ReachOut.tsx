import { css } from "@emotion/css"
import { HandWaving } from "@phosphor-icons/react"

export function ReachOut() {
    const style = css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-sm);
        border-radius: var(--rounded-lg);
        padding: var(--spacing-sm) var(--spacing-md);

        font-size: var(--font-lg);

        border: 2px solid var(--dark);

        cursor: pointer;

        font-weight: bold;

        transition: transform 0.05s ease,  box-shadow 0.05s ease;

        &:hover {
            background: var(--primary);
            color: var(--light);
            transform: translate(-3px, -3px);
            box-shadow: 1.5px 1.5px 0 1.5px var(--dark);
        }

        &:active {
            transform: translate(-3px, -1.5px);
        }
    `

    return (
        <button className={style}>
            <HandWaving weight="bold" />
            Reach out
        </button>
    )
}
