import useScrolledStore from "@/lib/scrollState";
import { css } from "@emotion/css";
import { MouseScroll } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export function ScrollIndicator() {
    const [hidden, setHidden] = useState(false);
    const [visible, setVisible] = useState(false);
    const { scrolled } = useScrolledStore();

    // If the user ever scrolls, hide the indicator. They know there is scrollable content.
    useEffect(() => {
        if (scrolled) {
            setHidden(true);
        }
    }, [scrolled])

    // Show after 2 seconds
    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(true);
        }, 3000); // 2 seconds delay

        return () => clearTimeout(timeout);
    }, []);

    const style = css`
        position: fixed;
        top: 50%;
        transform: translate(0, -50%);
        right: var(--spacing-xl);

        transition: opacity 1.5s ease;

        ${visible ? 'opacity: 0.6' : 'opacity: 0'};

        ${hidden && 'display: none;'}
    `

    return (
        <span className={style}>
            <MouseScroll size={27} />
        </span>
    )
}
