import useScrolledStore from "@/lib/scrollState";
import { css } from "@emotion/css"
import { useEffect, useState } from "react";

export function Sidebar({ children }: { children: React.ReactNode }) {
    const { scrolled } = useScrolledStore();
    const [revealed, setRevealed] = useState(false)

    useEffect(() => {
        // if (scrolled) {
        //     setRevealed(true)
        // }
    }, [scrolled])

    const style = css`
        width: calc((100% - 70ch) / 2);
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
        padding: var(--spacing-lg);
    `

    return (
        <aside className={style}>
            {!!revealed && (
                <>
                    {children}
                </>
            )}
        </aside>
    )
}
