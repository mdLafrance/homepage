import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Header from "./header";
import Footer from "./footer";
import ThemeSwitcher from "./ThemeSwitcher";

import './globals.css';


const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata = {
    title: "Max Lafrance",
    description: "Generated by create next app",
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} `}>
                <Providers >
                    <div className="bg-isabelline dark:bg-space_cadet transition-colors duration-200">
                        <Header />
                        <ThemeSwitcher />
                        {/** Div for central content area **/}
                        <div className="w-screen h-screen px-20 pt-20 overflow-y-scroll flex justify-center">
                            <div className="
                            h-full flex flex-col
                            w-[80rem]
                        ">
                                <div className="flex-1">
                                    {children}
                                </div>

                                <Footer />
                            </div>
                        </div>
                        <div className="static-noise">
                        </div>
                    </div>
                </Providers>
            </body>
        </html >
    );
}
