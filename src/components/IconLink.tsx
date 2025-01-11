import { css } from "@emotion/css"

export function IconLink({ icon, link, hint }: { icon: React.ReactNode, link: string, hint: string }) {
    const style = css`
        aspect-ratio: 1;
        width: 2.5rem;
        height: 2.5rem;

        border-radius: var(--rounded-md);

        display: flex;
        justify-content: center;
        align-items: center;

        padding: none;
        margin: none;

        &:hover {
            background: var(--primary);
            color: var(--light);
        }
    `

    return (
        <button className={style}>
            {icon}
        </button>
    )
}
