
import { Inter } from "next/font/google";
import localFont from "next/font/local";

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
        <html lang="en">
            <body className={`${inter.className} ${apercu.className} ${neuemachina.className}`}>
                <Providers>
                    {children}
                </Providers>

                <div className="static-noise"></div>
            </body>
        </html >
    );
}
