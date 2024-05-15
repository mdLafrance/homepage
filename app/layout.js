
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { WavyBackground } from "./(components)/BackgroundWaves"
import BackgroundFill from "./(components)/BackgroundFill"
import Footer from "./(components)/Footer"
import ControlBar from "./(components)/controls/ControlBar"
import Providers from "./providers"
import NewNav from "./(components)/NewNav"

import './globals.css';
import Reveal from "./(components)/Reveal";
import { ContactSection } from "./(components)/contact/Contact";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const apercu = localFont({
    src: [
        {
            path: '../public/fonts/Apercu-Medium.otf',
            weight: '400'
        },
        {
            path: '../public/fonts/Apercu-Bold.otf',
            weight: '700'
        },
    ],
    variable: '--font-apercu'
})

const neuemachina = localFont({
    src: [
        {
            path: '../public/fonts/NeueMachina-Regular.otf',
            weight: '400'
        },
        {
            path: '../public/fonts/NeueMachina-Light.otf',
            weight: '300'

        },
        {
            path: '../public/fonts/NeueMachina-Ultrabold.otf',
            weight: '700'
        },
    ],
    variable: "--font-neuemachina"
})

export const metadata = {
    title: "Max Lafrance",
    description: "Software engineer working in VFX",
    metadataBase: new URL('https://mlafrance.dev'),
    keywords: [
        "software engineer",
        "mathematics background",
        "python",
        "nextjs",
        "aws",
        "programmer",
        "software developer",
        "bash",
        "c++",
        "rust",
        "go",
        "javascript",
        "c#",
        "glsl",
        "docker",
        "linux",
        "git",
        "github actions",
        "gitlab",
        "gitlab ci",
        "react",
        "nextjs",
        "opengl",
        "mongodb",
        "jenkins",
        "visual studio",
        "autodesk maya",
        "nuke",
        "unity",
        "qt creator",
        "substance painter",
        "photoshop",
        "data ingestion",
        "product design",
        "infrastructure systems",
        "backend systems",
        "production tracking software",
        "gitlab ci/cd pipelines",
        "automation",
        "linting",
        "testing",
        "documentation generation",
        "high performance applications",
        "gui applications",
        "shotgrid",
        "dcc applications",
        "studio pipeline applications",
        "mysql database",
        "linear algebra",
        "statistics",
        "multivariate calculus",
        "data structures",
        "algorithms",
        "image processing",
        "graphics programming",
        "web programming",
        "belofx",
        "industrial brothers",
        "awesometown entertainment",
        "arc productions",
        "queen's university",
        "bachelor's of computing and mathematics"
    ]
};


export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            suppressHydrationWarning className={`${inter.className} ${apercu.className} ${neuemachina.className}`}
            style={{ scrollBehavior: 'smooth' }}
        >
            <link rel="icon" href="/images/favicon.ico" sizes="any" />
            <body>
                <Providers>
                    <Reveal duration={4} delay={0.1}>
                        <WavyBackground />
                    </Reveal>
                    {/** Main content section **/}
                    <div id="MainContentArea" className="flex flex-col min-h-[100dvh] dark:bg-black bg-light ">
                        <NewNav />
                        {children}
                    </div>
                    <div className="opacity-[18%] sm:opacity-25 static-noise pointer-events-none"></div>
                </Providers>
            </body>
        </html >
    );
}
