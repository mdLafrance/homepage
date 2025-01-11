import useScrolledStore from "@/lib/scrollState"
import { css } from "@emotion/css"
import { OpenToWork } from "./OpenToWork";

export function Header() {
    const style = css`
        h1 {
            font-weight: bold;
            font-size: var(--font-xl);
        }

        h2 {
            font-size: var(--font-md);
        }

        h3 {
            padding-bottom: var(--spacing-md);
        }

        .headerAccent {
            color: var(--primary);
        }
    `

    return (
        <header className={style}>
            <h1>
                <span className="headerAccent">{"<"}</span>
                {"ML /"}
                <span className="headerAccent">{">"}</span>
                <OpenToWork />
            </h1>
        </header>
    )
}
