import { NoiseOverlay } from '@/component/NoiseOverlay'
import { css } from '@emotion/css'

export default function Home() {
    const style = css`
        position: relative;
        height: 100%;
        overflow: hidden;

        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);

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
        padding: var(--spacing-lg);
    `

    const navStyle = css`
        padding: var(--spacing-lg);
    `

    return (
        <>
            <div className={style}>
                <header className={headerStyle}>
                    <span>Hi, my name is</span>
                    <h1>
                        Max Lafrance
                    </h1>
                    <h2>
                        Software Engineer
                    </h2>
                </header>
                <section>
                    <nav className={navStyle}>
                        <ul>
                            <li>
                                Home
                            </li>
                            <li>
                                Experience
                            </li>
                            <li>
                                Projects
                            </li>
                        </ul>
                    </nav>
                </section>
            </div>
            <NoiseOverlay />
        </>
    )
}
