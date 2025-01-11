import useScrolledStore from "@/lib/scrollState";
import { css } from "@emotion/css";
import { HandPointing } from "@phosphor-icons/react";

export function TopButton() {
    const { scrolled } = useScrolledStore();

    const handleClick = () => {
        document.getElementById(`section-about`)?.scrollIntoView()
    }

    const style = css`
        opacity: 0;

        transition: opacity 0.8s ease;

        ${scrolled ? 'opacity: 0.5' : 'opacity: 0'};

        position: fixed;
        bottom: var(--spacing-xl);
        right: var(--spacing-xl);
        aspect-ratio: 1;
        color: var(--dark);
        display: flex;
        justify-content: center;
        align-items: center;

        border: 2px solid var(--dark);
        border-radius: 100%;

        &:hover {
            transition: opacity 0.1s ease;
            color: var(--light);
            opacity: 1.0;
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
