import { css } from "@emotion/css"

const technologies = [
    "Python",
    "Typescript",
    "Javascript",
    "React",
    "Bash",
    "Tailwind",
    "EmotionCss",
    "Qt",
    "Vite",
    "Poetry",
    "Pybuilder",
    "Make",
    "HTML",
    "Css",
    "Git",
    "TRPC",
    "Express",
    "Elasticsearch",
    "AWS",
    "GCP",
    "Gitlab CI",
    "Docker",
    "Docker Compose",
    "Nextjs",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Maya",
    "Nuke",
    "RV",
    "Shotgrid",
    "ZBrush",
    "Unity",
    "Substance Painter",
    "Rust",
    "C++",
    "C#",
    "GLSL",
    "OpenGL",
    "ImGUI",
    "Lua",
    "Nvim",
    "Cmake"
]

export function TechnologyCloud() {
    const style = css`
        display: flex;
        flex-wrap: wrap;
        gap: 0.9rem;
        justify-content: start;
        
        padding: 2px;

        span {
            font-size: var(--font-sm);
            font-weight: bold;
            color: var(--primary);
            border: 2px solid var(--primary);
            border-radius: var(--rounded-md);
            padding: var(--spacing-sm) var(--spacing-md);

            transition: transform 0.1s ease, box-shadow 0.1s ease;

            &:hover {
                transform: translate(-2px, -2px);
                color: var(--light);
                background-color: var(--primary);

                box-shadow: 1px 1px 0px 1px var(--dark);
            }
        }
    `

    return (
        <div className={style}>
            {technologies.sort().map((technology) => (
                <span key={technology} >{technology}</span>
            ))}
        </div>
    )
}
