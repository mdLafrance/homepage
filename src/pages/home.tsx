import { ContentContainer } from '@/components/ContentContainer'
import { Header } from '@/components/Header'
import { Navbar } from '@/components/Navbar'
import { NoiseOverlay } from '@/components/NoiseOverlay'
import { ReachOut } from '@/components/ReachOut'
import { Section } from '@/components/Section'
import { Sidebar } from '@/components/Sidebar'
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

    return (
        <>
            <div className={style}>
                <Sidebar>
                    <Header />
                    <Navbar />
                </Sidebar>
                <ContentContainer>
                    <Section name="about">
                        <p>
                            Hi, I'm <strong className={css`color: var(--primary)`}>Max</strong>, a <strong>programmer</strong> based in Canada.
                        </p>
                        <br />
                        <p>
                            I've been <strong>working in tech</strong> for the past 5 years at visual effects and animation companies, making desktop applications, websites, plugins - <strong>you name it</strong>.
                        </p>
                        <br />
                        <p>
                            When I'm not working, or getting lost in a tech rabbit hole, you can find me playing guitar, drawing, or hacking away on something.
                        </p>
                        <div className={css`
                            padding: var(--spacing-lg);
                            display: flex;
                        `}>
                            <ReachOut />
                        </div>
                    </Section>
                    <Section name="work">
                        <></>
                    </Section>
                    <Section name="projects">
                        <></>
                    </Section>
                </ContentContainer>
            </div >
            <NoiseOverlay />
        </>
    )
}
