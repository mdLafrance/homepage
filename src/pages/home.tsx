import { Navbar, NavbarItem } from '@/components/Navbar'
import { NoiseOverlay } from '@/components/NoiseOverlay'
import { ReachOut } from '@/components/ReachOut'
import { Section } from '@/components/Section'
import { TopButton } from '@/components/TopButton'
import { css } from '@emotion/css'

export default function Home() {
    const style = css`
        position: relative;
        height: 100%;

        box-sizing: border-box;

        display: flex;

        color: var(--dark);
        background-color: var(--light);
    `

    const headerStyle = css`
        padding: var(--spacing-lg);

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

    const contentStyle = css`
        overflow-y: scroll;
    `

    return (
        <>
            <div className={style}>
                <aside>
                    <header className={headerStyle}>
                        <h1>
                            Max Lafrance<span className='headerDot'>{"."}</span>
                        </h1>
                        <h2>
                            Software Developer
                        </h2>
                    </header>
                    <nav className={css`padding: var(--spacing-lg)`}>
                        <Navbar>
                            <NavbarItem name={"About"} active />
                            <NavbarItem name={"Work"} />
                            <NavbarItem name={"Projects"} />
                            <NavbarItem name={"Writing"} />
                            <NavbarItem name={"???"} />
                        </Navbar>
                    </nav>
                </aside>
                <div className={contentStyle}>
                    <Section title="About">
                        <p>
                            Hi, I'm <strong className={css`color: var(--primary)`}>Max</strong>, a programmer based in Canada.
                            <br />
                            <br />
                            I've been <b>working in tech</b> for the past <strong>5</strong> years at visual effects and animation companies, making desktop applications, websites, plugins - you name it.
                            <br />
                            <br />
                            When I'm not working, or getting lost in a tech rabbit hole, you can find me playing guitar, drawing, or hacking away on something.
                        </p>
                        <div className={css`background: blue; height: 70rem;`}></div>
                    </Section>
                    <Section title="Work">
                        <p>
                            Hi, I'm <strong className={css`color: var(--primary)`}>Max</strong>, a programmer based in Canada.
                            <br />
                            <br />
                            I've been <b>working in tech</b> for the past <strong>5</strong> years at visual effects and animation companies, making desktop applications, websites, plugins - you name it.
                            <br />
                            <br />
                            When I'm not working, or getting lost in a tech rabbit hole, you can find me playing guitar, drawing, or hacking away on something.
                        </p>
                        <div className={css`background: blue; height: 70rem;`}></div>
                    </Section>
                </div>
            </div>
            <TopButton />
            <NoiseOverlay />
        </>
    )
}
