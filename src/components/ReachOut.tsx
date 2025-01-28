import { css } from "@emotion/css"
import { HandWaving } from "@phosphor-icons/react"

export function ReachOut() {
    return (
        <a className="popout-button" href="mailto:maxlafrance97@gmail.com">
            <HandWaving weight="bold" />
            Reach out
        </a>
    )
}
