import { ContentContainer } from '@/components/ContentContainer'
import { CustomCursor } from '@/components/Cursor'
import { Header } from '@/components/Header'
import { Navbar } from '@/components/Navbar'
import { NoiseOverlay } from '@/components/NoiseOverlay'
import { ReachOut } from '@/components/ReachOut'
import { Section } from '@/components/Section'
import { About } from '@/components/sections/About'
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
                    <Section name="about" noShowTitle>
                        <About />
                    </Section>
                    <Section name="work">
                        <Work />
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
