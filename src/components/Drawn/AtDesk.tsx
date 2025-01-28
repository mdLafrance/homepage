import { css } from "@emotion/css"

export function AtDesk() {
    const style = css`
        filter: brightness(1);
        mix-blend-mode: difference;
    `
    return (
        <img src="Desk.gif" alt="AtDesk" width="200px" className={style} />
    )
}
