import { css } from "@emotion/css"

export function IconLink({ icon, link, hint }: { icon: React.ReactNode, link: string, hint: string }) {
    const style = css`
        aspect-ratio: 1;

        padding: var(--spacing-sm);

        border-radius: var(--rounded-lg);

        border: 1.7px solid var(--dark);
        border-right: 2.8px solid var(--dark);
        border-bottom: 3px solid var(--dark);

        display: flex;
        justify-content: center;
        align-items: center;

        color: var(--dark);

        &:hover {
            background: var(--primary);
            color: var(--light);
        }

        &:active {
            transform: translateY(1.5px);
        }
    `

    return (
        <a className={style} href={link} target="_blank">
            {icon}
        </a>
    )
}
