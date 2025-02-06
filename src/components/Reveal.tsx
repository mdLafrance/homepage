import { css } from "@emotion/css"

export function Reveal({ delay, noSlide, children }: { delay?: number, noSlide?: boolean, children: React.ReactNode }) {
    const style = css`
        opacity: 0;

        animation: revealOpacity 0.6s ease forwards ${!noSlide && ", slideY 0.5s ease forwards"};

        ${delay !== undefined && `animation-delay: ${delay}s;`}
    `

    return (
        <div className={style}>
            {children}
        </div>
    )
}
