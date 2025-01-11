import { css } from "@emotion/css"

export function Sidebar({ children }: { children: React.ReactNode }) {
    const style = css`
        width: calc((100% - 70ch) / 2);
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
        padding: var(--spacing-lg);
    `

    return (
        <aside className={style}>
            {children}
        </aside>
    )
}
