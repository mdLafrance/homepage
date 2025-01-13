import { css } from "@emotion/css"

export function AtDesk() {
    const style = css`
        filter: brightness(1);
        mix-blend-mode: difference;
    `
    return (
        <img src="Test3.gif" alt="AtDesk" width="170px" className={style} />
    )
}
