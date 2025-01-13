import { css } from "@emotion/css"

export function Reveal({ delay, children }: { delay?: number, children: React.ReactNode }) {
    const style = css`
        @keyframes revealOpacity {
            0% {
                opacity: 0;
                filter: blur(3px);
            }

            70% {
                filter: blur(0px);
            }

            100% {
                opacity: 100;
            }
        } 

        @keyframes revealSlide {
            0% {
                transform: translateY(4px);
            }

            100% {
                transform: translateY(0);
            }
        } 

        opacity: 0;

        animation: revealOpacity 0.6s ease forwards, revealSlide 0.5s ease forwards;
        ${delay !== undefined && `animation-delay: ${delay}s;`}
    `

    return (
        <div className={style}>
            {children}
        </div>
    )
}
