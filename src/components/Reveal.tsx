import { css } from "@emotion/css"

export function Reveal({ delay, slide, children }: { delay?: number, slide?: boolean, children: React.ReactNode }) {
    const style = css`
        @keyframes revealOpacity {
            0% {
                opacity: 0;
                filter: blur(1.5px);
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
                transform: translateY(5px);
            }

            100% {
                transform: translateY(0);
            }
        } 

        opacity: 0;

        animation: revealOpacity 0.5s ease forwards ${true && `, revealSlide 0.5s ease forwards`};
        ${delay !== undefined && `animation-delay: ${delay}s;`}
    `

    return (
        <div className={style}>
            {children}
        </div>
    )
}
