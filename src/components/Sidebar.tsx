import { css } from "@emotion/css"

export function Sidebar({ children }: { children: React.ReactNode }) {
    const style = css`
        width: 25rem;
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
