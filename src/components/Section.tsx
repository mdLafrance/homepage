import { css } from "@emotion/css"
import { useEffect, useMemo, useRef } from "react";

export function Section({ name, children, noShowTitle }: { name: string, children: React.ReactNode, noShowTitle?: boolean }) {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([_]) => {
                window.location.hash = name
            },
            {
                root: null,
                threshold: 0.8,
            }
        )
        const header = ref.current;

        if (header) {
            observer.observe(header)
        }
    }, [])

    const style = css`
        display: flex;
        flex-direction: column;

        max-width: 70ch;

        color: var(--dark);
        font-size: var(--font-md);
        padding-bottom: var(--spacing-lg);

        text-wrap: balance;
    `

    const stickyHeaderStyle = css`
        line-height: 1;

        position: sticky;
        top: 0rem;
        min-height: 5.8rem;

        padding-bottom: var(--spacing-md);

        display: flex;
        flex-direction:column;
        gap: var(--spacing-sm);
        justify-content: end;

        font-size: var(--font-xl);
        font-weight: bold;
        text-transform: capitalize;

        background: var(--light);
        box-shadow: 0 0 4px 4px var(--light);

        span *:first-child {
            color: var(--primary);
        }
    `

    return (
        <section className={style} id={`section-${name.toLowerCase()}`} ref={ref} >
            {!noShowTitle && (
                <h2 className={stickyHeaderStyle}>
                    <span>
                        <span>{"# "}</span>
                        <span>{name}</span>
                    </span>
                    <span className={css`min-height: 4px;`} />
                </h2>
            )}
            {children}
        </section >
    )
}

export function SubSection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <section>
            <h3>{title}</h3>
            {children}
        </section>
    )
}
