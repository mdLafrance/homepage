import { Files, HandWaving, ReadCvLogo } from "@phosphor-icons/react"

export function Resume() {
    return (
        <a className="popout-button" href="documents/resume.pdf" target="_blank">
            <ReadCvLogo weight="bold" />
            Resume
        </a>
    )
}
