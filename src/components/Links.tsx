import { css } from "@emotion/css"
import { IconLink } from "./IconLink"
import { EnvelopeSimple, GithubLogo, LinkedinLogo, ReadCvLogo } from "@phosphor-icons/react"


export function Links() {
    const style = css`
        display: flex;
        padding: var(--spacing-md) 0;
        gap: var(--spacing-md);
        justify-content: center;
    `

    return (
        <div className={style}>
            <IconLink
                icon={<EnvelopeSimple size={24} />}
                link="mailto:maxlafrance97@gmail.com"
                hint="email"
            />
            <IconLink
                icon={<LinkedinLogo size={24} />}
                link="https://linkedin.com/in/max-lafrance"
                hint="linkedin"
            />
            <IconLink
                icon={<GithubLogo size={24} />}
                link="https://github.com/mdlafrance"
                hint="github"
            />
            <IconLink
                icon={<ReadCvLogo size={24} />}
                link="/resume.pdf"
                hint="resume"
            />
        </div>
    )
}
