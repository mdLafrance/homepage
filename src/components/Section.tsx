import { css } from "@emotion/css"

export function Section({ title, children }: { title: string, children: React.ReactNode }) {
    const style = css`
        max-width: 60ch;
        min-height: 100vh;
        color: var(--dark);
        font-size: var(--font-md);
        text-wrap: balance;

        h2 {
            line-height: 1;

            position: sticky;
            top: 0rem;
            min-height: 5.8rem;

            margin-bottom: 1rem;

            display: flex;
            flex-direction:column;
            gap: var(--spacing-sm);
            justify-content: end;

            font-size: var(--font-lg);
            font-weight: bold;

            background: var(--light);
            box-shadow: 0 0 4px 4px var(--light);

            span *:first-child {
                color: var(--primary);
            }
        }
    `

    return (
        <section className={style} id={`section-${title.toLowerCase()}`}>
            <h2>
                <span>
                    <span>{"#"}</span>
                    <span>{title}</span>
                </span>
                <span className={css`min-height: 4px;`} />
            </h2>
            {children}
        </section >
    )
}
