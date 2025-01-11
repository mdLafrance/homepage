import useScrolledStore from "@/lib/scrollState"
import { css } from "@emotion/css"
import { OpenToWork } from "./OpenToWork";

export function Header() {
    const { scrolled } = useScrolledStore();

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
            {!scrolled && (
                <>
                    <h1>
                        Max Lafrance<span className='headerAccent'>{"."}</span>
                    </h1>
                    <h2>
                        Software Developer
                    </h2>
                </>
            )}
            {!!scrolled && (
                <h1>
                    <span className="headerAccent">{"<"}</span>
                    {"ML /"}
                    <span className="headerAccent">{">"}</span>
                    <OpenToWork />
                </h1>
            )}
        </header>
    )
}
