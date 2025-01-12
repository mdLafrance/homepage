import { css } from "@emotion/css"

export function AtDesk() {
    const style = css`
        mix-blend-mode: difference;
    `
    return (
        <img src="Test.png" alt="AtDesk" width="170px" className={style} />
    )
}
