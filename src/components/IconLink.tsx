import { css } from "@emotion/css"

export function IconLink({ icon, link, hint }: { icon: React.ReactNode, link: string, hint: string }) {
    const style = css`
        aspect-ratio: 1;

        padding: var(--spacing-sm);

        border: 1.5px solid rgba(15, 15, 15, 0.03);
        border-bottom: 2.5px solid rgba(15, 15, 15, 0.10);
        border-radius: var(--rounded-lg);

        display: flex;
        justify-content: center;
        align-items: center;

        background: rgba(15, 15, 15, 0.035);

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
