import { css } from "@emotion/css";
import { HandPointing } from "@phosphor-icons/react";

export function TopButton() {
    const handleClick = () => {
        document.getElementById(`section-about`)?.scrollIntoView()
    }

    const style = css`
        position: fixed;
        bottom: var(--spacing-lg);
        right: var(--spacing-lg);
        aspect-ratio: 1;
        color: var(--dark);
        display: flex;
        justify-content: center;
        align-items: center;

        border: 2px solid var(--dark);
        border-radius: 100%;

        &:not(:hover) {
            opacity: 0.6;
        }

        &:hover {
            color: var(--light);
            background-color: var(--primary);
        }

        &:active {
            transform: translate(0, 1px);
        }
    `

    return (
        <button className={`${style} fade-in`} onClick={handleClick}>
            <HandPointing size={28} />
        </button>
    )
}
