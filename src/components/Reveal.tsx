import { css } from "@emotion/css"

export function Reveal({ delay, slide, children }: { delay?: number, slide?: boolean, children: React.ReactNode }) {
    const style = css`
        @keyframes revealOpacity {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 100;
            }
        } 

        @keyframes revealSlide {
            0% {
                transform: translateY(5px);
            }

            100% {
                transform: translateY(0);
            }
        } 

        opacity: 0;

        animation: revealOpacity 0.5s ease forwards ${!!slide && `, revealSlide 0.5s ease forwards`};
        ${delay !== undefined && `animation-delay: ${delay}s;`}
    `

    return (
        <div className={style}>
            {children}
        </div>
    )
}
