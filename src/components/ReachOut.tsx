import { css } from "@emotion/css"
import { HandWaving } from "@phosphor-icons/react"

export function ReachOut() {
    const style = css`
        width: 6.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-sm);
        border-radius: var(--rounded-md);
        padding: var(--spacing-sm);

        font-size: var(--font-sm);

        border: 1.4px solid var(--dark);

        cursor: pointer;

        font-weight: bold;

        &:hover {
            background: var(--primary);
            color: var(--light);
        }

        &:active {
            transform: translate(0, 1px);
        }
    `

    return (
        <button className={style}>
            <HandWaving weight="bold" />
            Reach out
        </button>
    )
}
