import { Navbar, NavbarItem } from '@/components/Navbar'
import { NoiseOverlay } from '@/components/NoiseOverlay'
import { ReachOut } from '@/components/ReachOut'
import { TopButton } from '@/components/TopButton'
import { css } from '@emotion/css'

export default function Home() {
    const style = css`
        position: relative;
        height: 100%;
        overflow: hidden;

        padding: var(--spacing-lg);

        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
        color: var(--dark);
        background-color: var(--light);

        h1 {
            font-size: var(--font-xl);
        }

        h2 {
            font-size: var(--font-md);
        }
    `

    const headerStyle = css`
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

        .headerDot {
            transform: translate(10px, -20px);
            font-size: var(--font-2xl);
            color: var(--primary);
        }
    `

    const introStyle = css`
        width: 60ch;
        color: var(--dark);
        font-size: var(--font-md);
        text-wrap: balance;
    `

    return (
        <>
            <div className={style}>
                <header className={headerStyle}>
                    <h1>
                        Max Lafrance<span className='headerDot'>{"."}</span>
                    </h1>
                    <h2>
                        Software Developer
                    </h2>
                </header>
                <section>
                    <Navbar>
                        <NavbarItem name={"Home"} active />
                        <NavbarItem name={"Work"} />
                        <NavbarItem name={"Projects"} />
                        <NavbarItem name={"Writing"} />
                        <NavbarItem name={"???"} />
                    </Navbar>
                </section>
                <section className={introStyle}>
                    <p>
                        Hi, I'm <strong className={css`color: var(--primary)`}>Max</strong>, a programmer based in Canada.
                        <br />
                        <br />
                        I've been <b>working in tech</b> for the past <strong>5</strong> years at visual effects and animation companies, making desktop applications, websites, plugins - you name it.
                        <br />
                        <br />
                        When I'm not working, or getting lost in a tech rabbit hole, you can find me playing guitar, drawing, or hacking away on something.
                    </p>
                    <div className={css`background: blue; height: 20rem;`}></div>
                </section>
                <ReachOut />
            </div>
            <TopButton />
            <NoiseOverlay />
        </>
    )
}
