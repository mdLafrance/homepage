import { ContentContainer } from '@/components/ContentContainer'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Navbar } from '@/components/Navbar'
import { NoiseOverlay } from '@/components/NoiseOverlay'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { About } from '@/components/sections/About'
import { Hero } from '@/components/sections/Hero'
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
                    <Hero />
                    <Reveal delay={1}>
                        <Section name="about">
                            <About />
                        </Section>
                    </Reveal>
                    <Reveal delay={1.1}>
                        <Section name="work">
                            <Work />
                        </Section>
                    </Reveal>
                    <Reveal delay={1.2}>
                        <Section name="projects">
                            <></>
                        </Section>
                    </Reveal>
                    <Reveal delay={1.3}>
                        <Footer />
                    </Reveal>
                </ContentContainer>
            </div >
            <NoiseOverlay />
        </>
    )
}
