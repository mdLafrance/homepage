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

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(true);
        }, 4000);

        return () => clearTimeout(timeout);
    }, []);

    const style = css`
        position: fixed;
        right: var(--spacing-2xl);
        transform: translate(0, -50%);
        top: 50%;

        transition: opacity 1.5s ease;

        ${visible ? 'opacity: 0.5' : 'opacity: 0'};

        ${hidden && 'display: none;'}
    `

    return (
        <span className={style}>
            <MouseScroll size={34} />
        </span>
    )
}
