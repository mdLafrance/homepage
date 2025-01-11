import { css } from "@emotion/css"

export function NoiseOverlay() {
    const style = css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-image: url("noise.svg");
        background-repeat: repeat;
        background-size: 10dvh;
        background-attachment: local;
        background-blend-mode: multiply;
        mix-blend-mode: multiply;
        opacity: 0.5;

        z-index: 100;

        pointer-events: none;
        `

        return (
            <div className={style} />
        )
}
