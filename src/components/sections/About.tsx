import { css } from "@emotion/css"

export function About() {
    const style = css`

    `

    return (
        <div className={style}>
            <p>
                I've been <strong>working in tech</strong> for the past 5 years at visual effects and animation companies, making desktop applications, websites, plugins - <strong>you name it</strong>.
            </p>
            <br />
            <p>
                When I'm not working, or getting lost in a tech rabbit hole, you can find me playing guitar, drawing, or hacking away on something.
            </p>
        </div>
    )
}
