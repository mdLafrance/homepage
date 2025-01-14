import { css } from "@emotion/css"

const technologies = [
    "Python",
    "Bash",
    "Javascript",
    "Typescript",
    "React",
    "Tailwind",
    "EmotionCss",
    "Qt",
    "Vite",
    "Poetry",
    "Make",
    "css",
    "html",
    "git",
    "Express",
    "Elasticsearch",
    "GCP",
    "Gitlab CI"
]

export function TechnologyCarousel() {
    const style = css`
        color: var(--primary);
    `

    return (
        <strong className={style}>Python</strong>
    )
}
