import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { WavyBackground } from "./(components)/BackgroundWaves"

import Providers from "./providers"
import NewNav from "./(components)/NewNav"

import './globals.css';
import Reveal from "./(components)/Reveal";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

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
    title: "Max Lafrance | Software Engineer",
    description: "Software engineer working in VFX",
    metadataBase: new URL('https://mlafrance.dev'),
    keywords: [
        "lafrance",
        "canada",
        "design",
        "software design",
        "engineer",
        "software",
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
            suppressHydrationWarning className={`${inter.className} ${neuemachina.className}`}
            style={{ scrollBehavior: 'smooth' }}
        >
            <head>
                <meta name="google-site-verification" content="6Fk7fIGaYOZhWicz9qgSqTF9B-wxhdDWrqg_pwIlTZw" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            </head>
            <body>
                <Analytics />
                <SpeedInsights />
                <Providers>
                    <Reveal duration={4} delay={0.1}>
                        <WavyBackground />
                    </Reveal>
                    {/** Main content section **/}
                    <div
                        id="MainContentArea"
                        className={`
                            flex flex-col min-h-[100dvh] dark:bg-black bg-light
                        `}
                    >
                        <NewNav />
                        {children}
                    </div>
                    <div className="opacity-20 sm:opacity-20 static-noise pointer-events-none"></div>
                </Providers>
            </body>
        </html >
    );
}
