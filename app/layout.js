
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { WavyBackground } from "./(components)/BackgroundWaves"
import BackgroundFill from "./(components)/BackgroundFill"
import Sidebar from "./(components)/Sidebar"
import Footer from "./(components)/Footer"
import Providers from "./providers"

import './globals.css';

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
    description: "Generated by create next app",
};


export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} ${apercu.className} ${neuemachina.className}`}>
                <Providers>
                    <BackgroundFill />
                    <WavyBackground />
                    <Footer />
                    <div className="h-full p-16 w-full relative overflow-y-auto">
                        <div className={`
                                relative z-10 min-h-full rounded-sm max-w-[85rem] 
                                bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue to-black 
                                grow border-solid border-white/20 shadow-white/[6%] flex
                            `}>
                            <div className="flex grow grow-1">
                                <div className="w-[400px] h-full">
                                    <Sidebar />
                                </div>
                                <div className="w-full ">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="static-noise"></div>
                </Providers>
            </body>
        </html >
    );
}
