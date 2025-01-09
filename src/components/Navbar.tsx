import { css } from "@emotion/css"

export function Navbar({ children }: { children: React.ReactNode }) {
    const style = css`
        ul {
            display: flex;
            flex-direction: column;
            gap: var(--spacing-sm);
        }
    `

    return (
        <ul className={style}>
            {children}
        </ul>
    )
}

export function NavbarItem({ name, active }: { name: string, active?: boolean }) {
    const leftArrowElement = `
        &::before {
            content: ">";
            font-weight: bold;
            position: absolute;
            left: -14px;
            top: 50%;
            transform: translate(0, -50%);
            color: var(--primary);
        }
    `

    const style = css`
        position: relative;

        cursor: pointer;

        font-size: var(--font-md);

        ${!active && "opacity: 0.6;"}

        ${active ? leftArrowElement : null}

        &:hover {
            &::after {
                content: "<";
                position: absolute;
                right: -14px;
                top: 50%;
                transform: translate(0, -50%);
                font-weight: bold;

                ${active && "color: var(--primary);"}
            }
        }
    `
    return (
        <li>
            <span className={style}>
                {name}
            </span>
        </li>
    )
}
