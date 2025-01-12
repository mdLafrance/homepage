import { ContentContainer } from '@/components/ContentContainer'
import { CustomCursor } from '@/components/Cursor'
import { Header } from '@/components/Header'
import { Navbar } from '@/components/Navbar'
import { NoiseOverlay } from '@/components/NoiseOverlay'
import { ReachOut } from '@/components/ReachOut'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { About } from '@/components/sections/About'
import { Intro } from '@/components/sections/Intro'
import { Work } from '@/components/sections/Work'
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
                    <Intro />
                    <Reveal delay={1}>
                        <Section name="about">
                            <About />
                        </Section>
                    </Reveal>
                    <Reveal delay={1.2}>
                        <Section name="work">
                            <Work />
                        </Section>
                    </Reveal>
                    <Reveal delay={1.4}>
                        <Section name="projects">
                            <></>
                        </Section>
                    </Reveal>
                </ContentContainer>
            </div >
            <NoiseOverlay />
        </>
    )
}
