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

        border: 2.5px solid var(--dark);
        border-right: 4px solid var(--dark);
        border-bottom: 4px solid var(--dark);

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
